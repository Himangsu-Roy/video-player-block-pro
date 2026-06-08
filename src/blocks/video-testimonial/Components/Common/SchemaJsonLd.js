/**
 * Emits a schema.org/Review JSON-LD blob for the testimonial.
 * Strips HTML from the quote and gracefully omits fields that aren't
 * filled in so we never publish an invalid graph.
 */
const stripHtml = (s) => (s || "").replace(/<[^>]*>/g, "").trim();

const SchemaJsonLd = ({ attributes }) => {
  const {
    quote,
    authorName,
    authorTitle,
    rating,
    videoUrl,
    posterUrl,
    reviewItemName,
  } = attributes;

  if (!quote || !authorName) return null;

  const reviewBody = stripHtml(quote);
  const safeRating = Math.max(0, Math.min(5, Number(rating) || 0));

  const data = {
    "@context": "https://schema.org",
    "@type": "Review",
    reviewBody,
    author: { "@type": "Person", name: authorName },
  };
  if (authorTitle) data.author.jobTitle = authorTitle;
  if (safeRating > 0) {
    data.reviewRating = {
      "@type": "Rating",
      ratingValue: safeRating,
      bestRating: 5,
      worstRating: 0,
    };
  }
  if (reviewItemName) {
    data.itemReviewed = { "@type": "Thing", name: reviewItemName };
  }
  if (videoUrl) {
    data.video = {
      "@type": "VideoObject",
      name: reviewItemName || `${authorName} testimonial`,
      description: reviewBody.slice(0, 200),
      contentUrl: videoUrl,
      thumbnailUrl: posterUrl || undefined,
      uploadDate: new Date().toISOString().slice(0, 10),
    };
  }

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default SchemaJsonLd;
