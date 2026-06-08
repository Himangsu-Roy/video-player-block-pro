/**
 * Build the Freemius deployment zip.
 *
 * Produces video-player-block.zip containing EVERYTHING Freemius needs:
 *   - vendor/freemius/            (full SDK — required by Freemius's deploy API)
 *   - vendor/freemius-lite/       (lite SDK — kept for the free build)
 *   - includes/, build/, languages/, public/
 *   - plugin.php, readme.txt
 *
 * Freemius reads the @fs_premium_only annotation in plugin.php and produces
 * the stripped wp.org-free zip itself.
 *
 * Excludes: node_modules, src, dev configs, dotfiles, the output zip itself,
 * fs-config.json (secrets), scripts/ (this script).
 */

const AdmZip = require('adm-zip');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const PLUGIN_SLUG = 'video-player-block';
const OUT_PATH = path.join(ROOT, `${PLUGIN_SLUG}.zip`);

// Top-level entries that MUST ship.
const INCLUDE_DIRS = ['build', 'includes', 'languages', 'public', 'vendor'];
const INCLUDE_FILES = ['plugin.php', 'readme.txt', 'uninstall.php'];

// Subpaths within those dirs that are dev-only and should never ship.
const SKIP_PATTERNS = [
  /(^|\/)node_modules(\/|$)/,
  /(^|\/)\.git(\/|$)/,
  /(^|\/)\.DS_Store$/,
  /(^|\/)Thumbs\.db$/,
  /\.map$/, // sourcemaps
];

const shouldSkip = (rel) => SKIP_PATTERNS.some((re) => re.test(rel));

const zip = new AdmZip();

function addPath(absPath, zipRelDir) {
  const stat = fs.statSync(absPath);
  if (stat.isDirectory()) {
    for (const entry of fs.readdirSync(absPath)) {
      addPath(path.join(absPath, entry), path.join(zipRelDir, entry));
    }
  } else if (stat.isFile()) {
    const inZip = path.join(PLUGIN_SLUG, zipRelDir);
    if (shouldSkip(inZip)) return;
    zip.addLocalFile(absPath, path.dirname(inZip), path.basename(inZip));
  }
}

let totalFiles = 0;

for (const dir of INCLUDE_DIRS) {
  const abs = path.join(ROOT, dir);
  if (!fs.existsSync(abs)) {
    console.warn(`  ⚠ ${dir}/ not found, skipping`);
    continue;
  }
  const before = zip.getEntries().length;
  addPath(abs, dir);
  const added = zip.getEntries().length - before;
  totalFiles += added;
  console.log(`  + ${dir.padEnd(12)} ${added} files`);
}

for (const file of INCLUDE_FILES) {
  const abs = path.join(ROOT, file);
  if (!fs.existsSync(abs)) {
    if (file === 'uninstall.php') continue; // optional
    console.warn(`  ⚠ ${file} not found, skipping`);
    continue;
  }
  zip.addLocalFile(abs, PLUGIN_SLUG);
  totalFiles += 1;
  console.log(`  + ${file}`);
}

if (fs.existsSync(OUT_PATH)) fs.unlinkSync(OUT_PATH);
zip.writeZip(OUT_PATH);

const sizeMB = (fs.statSync(OUT_PATH).size / (1024 * 1024)).toFixed(2);
console.log(`\nDone. ${PLUGIN_SLUG}.zip is ready (${totalFiles} files, ${sizeMB} MB). 🎉`);
