/**
 * Schema markup utilities for SEO
 * Generates JSON-LD structured data for Google and AI assistants
 */

const BASE_URL = 'https://roadsaudio.com';

/**
 * Generate Article schema for blog posts
 * @param {Object} options - Article metadata
 * @param {string} options.headline - Article title
 * @param {string} options.slug - URL slug (e.g., '/blogs/post-name')
 * @param {string} options.description - Article description
 * @param {string} options.image - Image URL (relative or absolute)
 * @param {string} options.datePublished - ISO date string (YYYY-MM-DD)
 * @param {string} [options.dateModified] - ISO date string (defaults to datePublished)
 * @param {string} [options.authorName='Dave'] - Author name
 * @returns {Object} JSON-LD Article schema
 */
export function generateArticleSchema({
  headline,
  slug,
  description,
  image,
  datePublished,
  dateModified,
  authorName = 'Dave',
}) {
  const absoluteImage = image.startsWith('http') ? image : `${BASE_URL}${image}`;
  const absoluteUrl = `${BASE_URL}${slug}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    author: {
      '@type': 'Person',
      name: authorName,
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Roads Audio',
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/images/RoadsLogoRound.png`,
      },
    },
    datePublished,
    dateModified: dateModified || datePublished,
    image: absoluteImage,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': absoluteUrl,
    },
  };
}

/**
 * Generate FAQPage schema for FAQ sections
 * @param {Array} faqItems - Array of FAQ objects
 * @param {string} faqItems[].question - Question text
 * @param {string} faqItems[].answer - Answer text (plain text or HTML will be stringified)
 * @returns {Object} JSON-LD FAQPage schema
 */
export function generateFAQSchema(faqItems) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: typeof item.answer === 'string' ? item.answer : String(item.answer),
      },
    })),
  };
}

/**
 * Generate HowTo schema for tutorial posts
 * @param {Object} options - HowTo metadata
 * @param {string} options.name - Tutorial title
 * @param {string} options.description - Tutorial description
 * @param {Array} options.steps - Array of step objects
 * @param {string} options.steps[].name - Step title
 * @param {string} options.steps[].text - Step description
 * @param {string} [options.image] - Optional tutorial image URL
 * @returns {Object} JSON-LD HowTo schema
 */
export function generateHowToSchema({ name, description, steps, image }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };

  if (image) {
    schema.image = image.startsWith('http') ? image : `${BASE_URL}${image}`;
  }

  return schema;
}

/**
 * Renders JSON-LD script tag for Next.js Head component
 * @param {Object} schema - Schema object from any generate function
 * @returns {Object} Script props for Next.js Head/Script component
 */
export function renderSchemaScript(schema) {
  return {
    type: 'application/ld+json',
    dangerouslySetInnerHTML: {
      __html: JSON.stringify(schema, null, 2),
    },
  };
}
