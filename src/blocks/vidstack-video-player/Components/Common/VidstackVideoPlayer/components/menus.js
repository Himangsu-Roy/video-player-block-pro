import buttonStyles from "../styles/button.module.css";
import styles from "../styles/menu.module.css";
import tooltipStyles from "../styles/tooltip.module.css";

import {
  Menu,
  Tooltip,
  useCaptionOptions,
  useAudioOptions,
  usePlaybackRateOptions,
} from "@vidstack/react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ClosedCaptionsIcon,
  SettingsIcon,
  MusicIcon,
  AccessibilityIcon,
  OdometerIcon,
} from "@vidstack/react/icons";

const FONT_FAMILIES = [
  "Proportional Sans-Serif",
  "Monospaced Sans-Serif",
  "Proportional Serif",
  "Monospaced Serif",
  "Casual",
  "Cursive",
  "Small Capitals",
];

const FONT_FAMILY_MAP = {
  "Proportional Sans-Serif": "Arial, sans-serif",
  "Monospaced Sans-Serif": "'Courier New', monospace",
  "Proportional Serif": "Georgia, serif",
  "Monospaced Serif": "'Courier New', serif",
  "Casual": "Comic Sans MS, cursive",
  "Cursive": "cursive",
  "Small Capitals": "small-caps",
};

function hexToRgba(hex, opacity) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return `rgba(0,0,0,${opacity / 100})`;
  return `rgba(${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)},${opacity / 100})`;
}

export function Settings({
  placement,
  tooltipPlacement,
  playerOptions = {},
  captionStyles = {},
  setAttributes,
  playbackRates,
}) {
  return (
    <Menu.Root className="menu">
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Menu.Button
            className={`${styles.menuButton} vds-button vds-menu-button ${buttonStyles.button}`}>
            <SettingsIcon className={styles.rotateIcon} />
          </Menu.Button>
        </Tooltip.Trigger>
        <Tooltip.Content
          className={tooltipStyles.tooltip}
          placement={tooltipPlacement}
          portal={false}>
          Settings
        </Tooltip.Content>
      </Tooltip.Root>
      <Menu.Content className={`${styles.menu} vds-menu-content`} placement={placement} portal={false}>
        <SpeedSubmenu playbackRates={playbackRates} />
        <AccessibilitySubmenu
          playerOptions={playerOptions}
          captionStyles={captionStyles}
          setAttributes={setAttributes}
        />
        <AudioSubmenu />
        <CaptionSubmenu />
      </Menu.Content>
    </Menu.Root>
  );
}

function AccessibilitySubmenu({ playerOptions, captionStyles, setAttributes }) {
  const updatePlayerOptions = (key, value) => {
    if (setAttributes) {
      setAttributes({ playerOptions: { ...playerOptions, [key]: value } });
    }
  };

  return (
    <Menu.Root>
      <SubmenuButton label="Accessibility" icon={AccessibilityIcon} />
      <Menu.Content className={`${styles.submenu} vds-menu-content`} portal={false}>
        <div
          className={styles.menuItem}
          onClick={() =>
            updatePlayerOptions(
              "announcements",
              !(playerOptions.announcements ?? true)
            )
          }>
          <span>Announcements</span>
          <label className={styles.switch} onClick={(e) => e.stopPropagation()}>
            <input
              type="checkbox"
              checked={playerOptions.announcements ?? true}
              onChange={(e) =>
                updatePlayerOptions("announcements", e.target.checked)
              }
            />
            <span className={styles.switchTrack}></span>
          </label>
        </div>
        <div
          className={styles.menuItem}
          onClick={() =>
            updatePlayerOptions(
              "keyboardAnimations",
              !(playerOptions.keyboardAnimations ?? true)
            )
          }>
          <span>Keyboard Animations</span>
          <label className={styles.switch} onClick={(e) => e.stopPropagation()}>
            <input
              type="checkbox"
              checked={playerOptions.keyboardAnimations ?? true}
              onChange={(e) =>
                updatePlayerOptions("keyboardAnimations", e.target.checked)
              }
            />
            <span className={styles.switchTrack}></span>
          </label>
        </div>
        <CaptionStylesSubmenu
          captionStyles={captionStyles}
          setAttributes={setAttributes}
        />
      </Menu.Content>
    </Menu.Root>
  );
}

function CaptionStylesSubmenu({ captionStyles, setAttributes }) {
  const cs = {
    fontFamily: "Proportional Sans-Serif",
    fontSize: 100,
    textColor: "#ffffff",
    textOpacity: 100,
    textBgColor: "#000000",
    textBgOpacity: 80,
    displayBgColor: "#000000",
    displayBgOpacity: 0,
    ...captionStyles,
  };

  const updateStyles = (updates) => {
    if (setAttributes) {
      setAttributes({ captionStyles: { ...cs, ...updates } });
    }
  };

  const previewStyle = {
    fontFamily: FONT_FAMILY_MAP[cs.fontFamily] || "sans-serif",
    fontSize: `${cs.fontSize}%`,
    color: hexToRgba(cs.textColor, cs.textOpacity),
    backgroundColor: hexToRgba(cs.textBgColor, cs.textBgOpacity),
    padding: "2px 6px",
    borderRadius: "3px",
  };

  return (
    <Menu.Root>
      <SubmenuButton
        label="Caption Styles"
        icon={ClosedCaptionsIcon}
        hint=""
      />
      <Menu.Content className={`${styles.submenu} vds-menu-content`} portal={false}>

        {/* Preview */}
        <div className={styles.captionPreview}
          style={{ backgroundColor: hexToRgba(cs.displayBgColor, cs.displayBgOpacity) }}>
          <span style={previewStyle}>Caption Preview</span>
        </div>

        {/* FONT */}
        <div className={styles.sectionTitle}>Font</div>
        <div className={styles.styleBox}>
          <FamilySubmenu
            value={cs.fontFamily}
            onChange={(val) => updateStyles({ fontFamily: val })}
          />
          <div className={styles.styleRow}>
            <span className={styles.styleLabel}>Size</span>
            <span className={styles.styleValue}>{cs.fontSize}%</span>
          </div>
          <div className={styles.sliderRow}>
            <span className={styles.sliderIconSmall}>A</span>
            <input
              type="range"
              min="50"
              max="200"
              step="5"
              value={cs.fontSize}
              onChange={(e) =>
                updateStyles({ fontSize: parseInt(e.target.value) })
              }
              className={styles.menuSlider}
              style={{ "--slider-pct": `${((cs.fontSize - 50) / 150) * 100}%` }}
            />
            <span className={styles.sliderIconLarge}>A</span>
          </div>
        </div>

        {/* TEXT */}
        <div className={styles.sectionTitle}>Text</div>
        <div className={styles.styleBox}>
          <div className={styles.styleRow}>
            <span className={styles.styleLabel}>Color</span>
            <div className={styles.colorWrap}>
              <input
                type="color"
                value={cs.textColor}
                onChange={(e) => updateStyles({ textColor: e.target.value })}
                className={styles.colorPicker}
              />
              <span className={styles.colorHex}>{cs.textColor.toUpperCase()}</span>
            </div>
          </div>
          <div className={styles.styleRow}>
            <span className={styles.styleLabel}>Opacity</span>
            <span className={styles.styleValue}>{cs.textOpacity}%</span>
          </div>
          <div className={styles.sliderRow}>
            <input
              type="range"
              min="0"
              max="100"
              step="5"
              value={cs.textOpacity}
              onChange={(e) =>
                updateStyles({ textOpacity: parseInt(e.target.value) })
              }
              className={styles.menuSlider}
              style={{ "--slider-pct": `${cs.textOpacity}%` }}
            />
          </div>
        </div>

        {/* TEXT BACKGROUND */}
        <div className={styles.sectionTitle}>Text Background</div>
        <div className={styles.styleBox}>
          <div className={styles.styleRow}>
            <span className={styles.styleLabel}>Color</span>
            <div className={styles.colorWrap}>
              <input
                type="color"
                value={cs.textBgColor}
                onChange={(e) => updateStyles({ textBgColor: e.target.value })}
                className={styles.colorPicker}
              />
              <span className={styles.colorHex}>{cs.textBgColor.toUpperCase()}</span>
            </div>
          </div>
          <div className={styles.styleRow}>
            <span className={styles.styleLabel}>Opacity</span>
            <span className={styles.styleValue}>{cs.textBgOpacity}%</span>
          </div>
          <div className={styles.sliderRow}>
            <input
              type="range"
              min="0"
              max="100"
              step="5"
              value={cs.textBgOpacity}
              onChange={(e) =>
                updateStyles({ textBgOpacity: parseInt(e.target.value) })
              }
              className={styles.menuSlider}
              style={{ "--slider-pct": `${cs.textBgOpacity}%` }}
            />
          </div>
        </div>

        {/* DISPLAY BACKGROUND */}
        <div className={styles.sectionTitle}>Display Background</div>
        <div className={styles.styleBox}>
          <div className={styles.styleRow}>
            <span className={styles.styleLabel}>Color</span>
            <div className={styles.colorWrap}>
              <input
                type="color"
                value={cs.displayBgColor}
                onChange={(e) => updateStyles({ displayBgColor: e.target.value })}
                className={styles.colorPicker}
              />
              <span className={styles.colorHex}>{cs.displayBgColor.toUpperCase()}</span>
            </div>
          </div>
          <div className={styles.styleRow}>
            <span className={styles.styleLabel}>Opacity</span>
            <span className={styles.styleValue}>{cs.displayBgOpacity}%</span>
          </div>
          <div className={styles.sliderRow}>
            <input
              type="range"
              min="0"
              max="100"
              step="5"
              value={cs.displayBgOpacity}
              onChange={(e) =>
                updateStyles({ displayBgOpacity: parseInt(e.target.value) })
              }
              className={styles.menuSlider}
              style={{ "--slider-pct": `${cs.displayBgOpacity}%` }}
            />
          </div>
        </div>

        {/* Reset */}
        <button
          className={styles.resetButton}
          onClick={() =>
            updateStyles({
              fontFamily: "Proportional Sans-Serif",
              fontSize: 100,
              textColor: "#ffffff",
              textOpacity: 100,
              textBgColor: "#000000",
              textBgOpacity: 80,
              displayBgColor: "#000000",
              displayBgOpacity: 0,
            })
          }
        >
          Reset to Default
        </button>
      </Menu.Content>
    </Menu.Root>
  );
}

function FamilySubmenu({ value, onChange }) {
  const currentFamily = value || "Proportional Sans-Serif";
  return (
    <Menu.Root>
      <Menu.Button className={styles.familyRow}>
        <span className={styles.styleLabel}>Family</span>
        <span className={styles.familyValue}>
          {currentFamily}
          <ChevronRightIcon className={styles.miniIcon} />
        </span>
      </Menu.Button>
      <Menu.Content className={`${styles.submenu} vds-menu-content`} portal={false}>
        <Menu.RadioGroup className={styles.radioGroup} value={currentFamily}>
          {FONT_FAMILIES.map((f) => (
            <Menu.Radio
              className={styles.radio}
              value={f}
              key={f}
              onSelect={() => onChange(f)}
            >
              <div className={styles.radioCheck} />
              <span>{f}</span>
            </Menu.Radio>
          ))}
        </Menu.RadioGroup>
      </Menu.Content>
    </Menu.Root>
  );
}

function CaptionSubmenu() {
  const options = useCaptionOptions(),
    hint = options.selectedTrack?.label ?? "Off";
  return (
    <Menu.Root>
      <SubmenuButton
        label="Captions"
        hint={hint}
        disabled={options.disabled}
        icon={ClosedCaptionsIcon}
      />
      <Menu.Content className={`${styles.submenu} vds-menu-content`} portal={false}>
        <Menu.RadioGroup
          className={styles.radioGroup}
          value={options.selectedValue}>
          {options.map(({ label, value, select }) => (
            <Menu.Radio
              className={styles.radio}
              value={value}
              onSelect={select}
              key={value}>
              <div className={styles.radioCheck} />
              <span>{label}</span>
            </Menu.Radio>
          ))}
        </Menu.RadioGroup>
      </Menu.Content>
    </Menu.Root>
  );
}

function AudioSubmenu() {
  const options = useAudioOptions(),
    hint = options.selectedTrack?.label ?? "Default";
  return (
    <Menu.Root>
      <SubmenuButton
        label="Audio"
        hint={hint}
        disabled={options.disabled}
        icon={MusicIcon}
      />
      <Menu.Content className={`${styles.submenu} vds-menu-content`} portal={false}>
        <Menu.RadioGroup
          className={styles.radioGroup}
          value={options.selectedValue}>
          {options.map(({ label, value, select }) => (
            <Menu.Radio
              className={styles.radio}
              value={value}
              onSelect={select}
              key={value}>
              <div className={styles.radioCheck} />
              <span>{label}</span>
            </Menu.Radio>
          ))}
        </Menu.RadioGroup>
      </Menu.Content>
    </Menu.Root>
  );
}

function SpeedSubmenu({ playbackRates }) {
  const options = usePlaybackRateOptions({
    rates: playbackRates,
  }),
    hint = options.selectedValue === "1" ? "Normal" : options.selectedValue;
  return (
    <Menu.Root>
      <SubmenuButton
        label="Playback"
        hint={hint}
        disabled={options.disabled}
        icon={OdometerIcon}
      />
      <Menu.Content className={`${styles.submenu} vds-menu-content`} portal={false}>
        <Menu.RadioGroup
          className={styles.radioGroup}
          value={options.selectedValue}>
          {options.map(({ label, value, select }) => (
            <Menu.Radio
              className={styles.radio}
              value={value}
              onSelect={select}
              key={value}>
              <div className={styles.radioCheck} />
              <span>{label}</span>
            </Menu.Radio>
          ))}
        </Menu.RadioGroup>
      </Menu.Content>
    </Menu.Root>
  );
}

function SubmenuButton({ label, hint, icon: Icon, disabled }) {
  return (
    <Menu.Button className={`${styles.submenuButton} vds-submenu-button`} role="menuitem" disabled={disabled}>
      <ChevronLeftIcon className={styles.submenuCloseIcon} />
      <Icon className={styles.submenuIcon} />
      <span className={styles.submenuLabel}>{label}</span>
      <span className={styles.submenuHint}>{hint}</span>
      <ChevronRightIcon className={styles.submenuOpenIcon} />
    </Menu.Button>
  );
}
