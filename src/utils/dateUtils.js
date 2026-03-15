/**
 * Formats a date string (YYYY-MM-DD) to a localized date string
 * @param {string} dateString - Date in YYYY-MM-DD format
 * @returns {string} Formatted date string (e.g., "March 18, 2026")
 */
export function formatDate(dateString) {
  return new Date(dateString.replace(/-/g, '/')).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
