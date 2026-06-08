import { resolvePoster } from "../../utils/functions";

const Schema = ({ attributes }) => {
  const { items = [], playlistName = "Featured Playlist" } = attributes;
  if (!items.length) return null;

  const itemListEl = items.map((item, idx) => {
    const src = item?.source || {};
    return {
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "VideoObject",
        name: item.title || `Video ${idx + 1}`,
        description: item.description || item.title || "",
        thumbnailUrl: resolvePoster(item) || undefined,
        contentUrl: src.url || undefined,
      },
    };
  });

  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: playlistName,
    numberOfItems: items.length,
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
