import "./post.scss";

const { __ } = wp.i18n;

window.copyBPlAdminShortcode = (id) => {
  const input = document.querySelector(`#bPlAdminShortcode-${id} input`);
  const tooltip = document.querySelector(`#bPlAdminShortcode-${id} .tooltip`);

  if (!input || !tooltip) return;

  const setTooltip = (text) => {
    tooltip.innerHTML = text;
  };

  const reset = () => {
    setTimeout(() => {
      setTooltip(__("Copy To Clipboard", "video-player-block"));
    }, 1500);
  };

  const onSuccess = () => {
    setTooltip(__("Copied Successfully!", "video-player-block"));
    reset();
  };

  const onFailure = () => {
    setTooltip(__("Copy failed — please copy manually.", "video-player-block"));
    reset();
  };

  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(input.value).then(onSuccess, onFailure);
    return;
  }

  // Fallback for older browsers without the Clipboard API.
  input.select();
  input.setSelectionRange(0, input.value.length);
  try {
    const ok = document.execCommand("copy");
    ok ? onSuccess() : onFailure();
  } catch (e) {
    onFailure();
  }
};
