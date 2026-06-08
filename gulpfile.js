/**
 * Freemius deployment.
 *
 * Run:
 *   npm run build && npm run plugin-zip
 *   npm run deploy
 *
 * Credentials live in `fs-config.json` (gitignored — NEVER commit secret_key).
 * Copy `fs-config.example.json` to `fs-config.json` and fill in the values from
 * https://dashboard.freemius.com/#/profile/ — fields: developer_id, public_key, secret_key.
 *
 * The plugin_id (20181) is fixed for this product and bundled in this file.
 */

const fs = require('fs');
const path = require('path');
const gulp = require('gulp');

// node-notifier v5.x (bundled inside gulp-freemius-deploy) ships an
// arm64-incompatible macOS notification helper that crashes with EBADARCH
// (Unknown system error -86) on Apple Silicon. The crash happens AFTER the
// Freemius API responds but BEFORE the result is console.log'd — silently
// hiding success/error messages. Stub the notifier so the actual response
// reaches the console.
try {
  const notifierPath = require.resolve('node-notifier', {
    paths: [path.dirname(require.resolve('gulp-freemius-deploy'))],
  });
  const notifier = require(notifierPath);
  const noop = () => {};
  notifier.notify = noop;
  if (notifier.NotificationCenter) notifier.NotificationCenter.prototype.notify = noop;
  if (notifier.WindowsToaster) notifier.WindowsToaster.prototype.notify = noop;
  if (notifier.WindowsBalloon) notifier.WindowsBalloon.prototype.notify = noop;
  if (notifier.Growl) notifier.Growl.prototype.notify = noop;
  if (notifier.NotifySend) notifier.NotifySend.prototype.notify = noop;
} catch (e) {
  // If the stub fails, fall through — the actual error will surface itself.
}

const CONFIG_PATH = path.join(__dirname, 'fs-config.json');

if (!fs.existsSync(CONFIG_PATH)) {
  console.error(
    '\n✗ fs-config.json not found.\n\n' +
      '  Create it by copying fs-config.example.json and filling in your\n' +
      '  Freemius developer_id, public_key, and secret_key from\n' +
      '  https://dashboard.freemius.com/#/profile/\n',
  );
  process.exit(1);
}

const fsConfig = require('./fs-config.json');

// Print a masked summary so misconfigured fields are obvious without leaking secrets.
const mask = (v) => {
  if (typeof v !== 'string') return JSON.stringify(v);
  if (v.length <= 8) return `[len=${v.length}] ${v}`;
  return `[len=${v.length}] ${v.slice(0, 4)}…${v.slice(-2)}`;
};
console.log('Freemius config loaded:');
console.log('  developer_id =', fsConfig.developer_id, typeof fsConfig.developer_id === 'number' ? '' : '  ⚠ should be a number, not a string');
console.log('  plugin_id    =', 20181);
console.log('  public_key   =', mask(fsConfig.public_key), fsConfig.public_key?.startsWith('pk_') ? '' : '  ⚠ should start with pk_');
console.log('  secret_key   =', mask(fsConfig.secret_key), fsConfig.secret_key?.startsWith('sk_') ? '' : '  ⚠ should start with sk_');

require('gulp-freemius-deploy')(gulp, {
  developer_id: fsConfig.developer_id,
  plugin_id: 20181,
  public_key: fsConfig.public_key,
  secret_key: fsConfig.secret_key,
  zip_name: 'video-player-block.zip',
  zip_path: './',
  add_contributor: false,
});

gulp.task('default', gulp.series('freemius-deploy'));
