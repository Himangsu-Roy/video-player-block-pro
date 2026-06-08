import { resolvePoster } from "../../utils/functions";

const Schema = ({ attributes }) => {
  const { reels = [], feedName = "Video Reels" } = attributes;
  if (!reels.length) return null;

  const itemListEl = reels.map((reel, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    item: {
      "@type": "VideoObject",
      name: reel.title || `Reel ${idx + 1}`,
      description: reel.caption || reel.title || "",
      thumbnailUrl: resolvePoster(reel) || undefined,
      contentUrl: reel.url || undefined,
      uploadDate: reel.uploadDate || undefined,
    },
  }));

  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: feedName,
    numberOfItems: reels.length,
    itemListElement: itemListEl,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default Schema;
