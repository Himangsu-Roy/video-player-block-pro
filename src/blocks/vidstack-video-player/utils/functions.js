import { produce } from "immer";

// Detect / parse YouTube & Vimeo URLs. Used for the editor preview, which must
// embed those providers through a top-window portal (the Studio editor canvas
// is a sandboxed iframe that blocks third-party embeds).
export const isYouTubeOrVimeo = (url = "") =>
  /(?:youtube\.com|youtu\.be|youtube-nocookie\.com|vimeo\.com)/i.test(url);

export const getYouTubeId = (url = "") => {
  const m = url.match(
    /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:shorts\/|embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/i,
  );
  return m ? m[1] : "";
};

export const getVimeoId = (url = "") => {
  const m = url.match(/vimeo\.com\/(?:video\/)?(\d+)/i);
  return m ? m[1] : "";
};

export const buildEditorEmbedUrl = (url = "") => {
  // Muted autoplay so the editor preview visibly plays even though the overlay
  // is click-through (clicks pass through to select the block, so the viewer
  // can't press play manually).
  const yt = getYouTubeId(url);
  if (yt)
    return `https://www.youtube.com/embed/${yt}?rel=0&modestbranding=1&autoplay=1&mute=1&playsinline=1`;
  const vm = getVimeoId(url);
  if (vm) return `https://player.vimeo.com/video/${vm}?autoplay=1&muted=1`;
  return "";
};

export const updateData = (attr, value, ...props) => {
  if (props.length === 0) {
    return value;
  }
  const [currentProp, ...remainingProps] = props;
  if (remainingProps.length === 0) {
    return produce(attr, draft => {
      draft[currentProp] = value;
    });
  }
  return produce(attr, draft => {
    if (!Object.prototype.hasOwnProperty.call(draft, currentProp)) {
      draft[currentProp] = {};
    }
    draft[currentProp] = updateData(draft[currentProp], value, ...remainingProps);
  });
};