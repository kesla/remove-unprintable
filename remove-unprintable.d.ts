/**
 * Removes unprintable characters from a string.
 * Preserves tabs (char code 9) and newlines (char code 10).
 * Removes control characters (char codes < 32) and the BOM character (65279).
 * @param str The input string to process
 * @returns A string with unprintable characters removed
 */
declare function removeUnprintable(str: string): string;

export = removeUnprintable;
