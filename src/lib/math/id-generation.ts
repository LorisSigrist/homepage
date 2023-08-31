
/**
 * Randomly generate an ID that can be used for HTML elements.
 * 
 * Useful for pairing labels with inputs.
 */
export function ID() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}