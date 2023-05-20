/**
 * Truncates a string to a given length and adds an ellipsis
 *
 * @param text string
 * @param maxLength number
 * @param lastChars number
 * @returns string
 */
export function truncateText(
  text: string,
  maxLength: number,
  lastChars?: number,
) {
  if (text.length <= maxLength) return text;
  const truncated = text.substring(0, maxLength);

  if (lastChars)
    return truncated + "..." + text.substring(text.length - lastChars);
  return truncated + "...";
}

/**
 * Get initials from a full name
 *
 * @param fullName string
 * @returns
 */
export function getInitials(fullName: string): string {
  const names = fullName.split(" ");
  const firstInitial = names[0][0];

  if (names.length === 2) {
    const lastInitial = names[1][0];
    return firstInitial.toUpperCase() + lastInitial.toUpperCase();
  }

  return firstInitial.toUpperCase();
}

/**
 * Formats a currency amount based on the country.
 * @param {number} amount - The currency amount to format.
 * @param {string} currencyCode - The ISO 4217 currency code.
 * @param {string} locale - The BCP 47 language tag representing the locale.
 * @returns {string} The formatted currency string.
 */
export function formatCurrency(
  amount: number,
  currencyCode = "USD",
  locale = "en-US",
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currencyCode,
  }).format(amount);
}

/**
 * Formats a currency amount as a decimal number based on the locale.
 * @param {number} amount - The currency amount to format.
 * @param {string} locale - The BCP 47 language tag representing the locale.
 * @returns {string} The formatted decimal string.
 */
export function formatNumber(amount: number, locale = "en-US"): string {
  return new Intl.NumberFormat(locale, {
    style: "decimal",
  }).format(amount);
}

/**
 * Capitalizes the first word in a string after converting the entire string to lowercase.
 *
 * @param {string} str - The string to capitalize.
 * @returns {string} The capitalized string.
 */
export function capitalizeFirstWord(str: string): string {
  return str.toLowerCase().replace(/^\w/, (char) => char.toUpperCase());
}
