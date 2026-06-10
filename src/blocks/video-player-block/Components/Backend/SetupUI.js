import { useDispatch, useSelect } from "@wordpress/data";
import { createBlock } from "@wordpress/blocks";
import { useState } from "@wordpress/element";
import {
    reactVideoPlayerIcon,
    videoComparisonIcon,
    videoGalleryIcon,
    videoLightboxIcon,
    videoPlayerIcon,
    videoPlaylistIcon,
    videoReelsIcon,
    videoTestimonialIcon,
    videoTranscriptIcon,
    videojsPlayerIcon,
    vidstackPlayerIcon
} from "../../../../Components/Common/utils/icons";

const SetupUI = ({ clientId, setAttributes, currentPostType }) => {
  const { replaceBlock, updateSettings } = useDispatch("core/block-editor");
  const [selectedLayout, setSelectedLayout] = useState(null);
  const [showAllBlocks, setShowAllBlocks] = useState(true);

  const availableBlockTypes = useSelect((select) => {
    const blocks = select("core/blocks");
    if (!blocks || !blocks.getBlockTypes) return [];
    return blocks.getBlockTypes().map((block) => block.name);
  }, []);

  const allLayouts = [
    {
      name: "vpb/video",
      title: "Video Player Block",
      description: "Display your videos in a professional way.",
      icon: videoPlayerIcon,
      isFree: true,
      isPro: false,
    },
    {
      name: "vpb/react-video-player",
      title: "React Video Player",
      description: "A professional, feature-rich video player built with React.",
      icon: reactVideoPlayerIcon,
      isPro: true,
    },
    {
      name: "vpb/videojs-player",
      title: "VideoJS Video Player",
      description: "A professional, feature-rich video player built with VideoJS.",
      icon: videojsPlayerIcon,
      isPro: true,
    },
    {
      name: "vpb/vidstack-video-player",
      title: "Vidstack Video Player",
      description: "A professional, feature-rich video player built with Vidstack.",
      icon: vidstackPlayerIcon,
      isPro: true,
    },
    {
      name: "vpb/video-gallery",
      title: "Video Gallery",
      description: "Showcase a collection of videos in grid, masonry, carousel, or bento layouts.",
      icon: videoGalleryIcon,
      isPro: true,
    },
    {
      name: "vpb/video-lightbox",
      title: "Video Lightbox",
      description: "Click-to-play trigger that opens any video in a responsive modal lightbox.",
      icon: videoLightboxIcon,
      isPro: true,
    },
    {
      name: "vpb/video-comparison",
      title: "Video Comparison",
      description: "Draggable before/after slider with frame-synced dual-video playback.",
      icon: videoComparisonIcon,
      isPro: true,
    },
    {
      name: "vpb/video-testimonial",
      title: "Video Testimonial Card",
      description: "Customer photo, quote, star rating, and inline video — one drop-in social-proof card.",
      icon: videoTestimonialIcon,
      isPro: true,
    },
    {
      name: "vpb/video-playlist",
      title: "Video Playlist",
      description: "Side-by-side player and clickable queue with chapters, auto-advance, and resume-where-you-left-off.",
      icon: videoPlaylistIcon,
      isPro: true,
    },
    {
      name: "vpb/video-reels",
      title: "Video Reels",
      description: "Vertical, swipe-driven short-form video feed (TikTok / Reels / Shorts style) with autoplay-on-visible.",
      icon: videoReelsIcon,
      isPro: true,
    },
    {
      name: "vpb/video-transcript",
      title: "Video Transcript",
      description: "Synchronized, clickable transcript alongside any video — viewers jump to any moment, search engines index spoken content.",
      icon: videoTranscriptIcon,
      isPro: true,
    }
  ];

  const layouts = ["video-player-block", "free", "pro"].includes(
    currentPostType,
  )
    ? allLayouts
    : availableBlockTypes.length > 0
    ? allLayouts.filter((layout) => availableBlockTypes.includes(layout.name))
    : allLayouts.filter((layout) => layout.isFree);

  const onSelectLayout = (layout) => {
    setSelectedLayout(layout);
    setShowAllBlocks(false);

    // Temporarily unlock the template on the client side to allow replacement
    updateSettings({ templateLock: false });

    if (layout.name === "vpb/video") {
      setAttributes({ isSetup: true });
    } else {
      if (!availableBlockTypes.includes(layout.name)) {
        alert("This layout is only available in the Pro version.");
        return;
      }
      try {
        const newBlock = createBlock(layout.name);
        replaceBlock(clientId, newBlock);
      } catch (error) {
        console.error("Failed to create block:", error);
      }
    }

    // Force template lock for all cases after selection
    setTimeout(() => {
      updateSettings({ templateLock: "all" });
    }, 100);
  };

  const handleAddNewGallery = () => {
    setShowAllBlocks(true);
    setSelectedLayout(null);
  };

  const displayedLayouts = showAllBlocks
    ? layouts
    : selectedLayout
    ? [selectedLayout]
    : layouts;

  const isPremium = Boolean(vpbPipecheck || currentPostType === "pro") ?? false;

  return (
    <div className="vgb-setup-ui">
      <div className="vgb-setup-header">
        <h2>Choose how you want to display your video</h2>
      </div>
      <div className="vgb-setup-grid">
        {displayedLayouts.map(
          (layout, index) =>
            availableBlockTypes.includes(layout.name) && (
              <div
                key={index}
                className="vgb-setup-item"
                onClick={() => onSelectLayout(layout)}>
                <div className="vgb-setup-icon">{layout?.icon}</div>
                <div className="vgb-setup-content">
                  <h3>{layout?.title}</h3>
                  <p>{layout?.description}</p>
                </div>
                {/* {layout?.isPro && <span className="vgb-new-tag">Pro</span>} */}
                {/* {!availableBlockTypes.includes(layout.name) && !layout.isFree && (
              <span className="vgb-pro-tag">Pro</span>
            )} */}
                {!isPremium && layout.isPro && (
                  <span className="vgb-pro-tag">Pro</span>
                )}
              </div>
            ),
        )}
      </div>

      {!showAllBlocks && selectedLayout && (
        <div className="vgb-setup-footer">
          <button
            onClick={handleAddNewGallery}
            className="vgb-add-new-gallery-btn">
            + Add New Video Player
          </button>
        </div>
      )}
    </div>
  );
};

export default SetupUI;
