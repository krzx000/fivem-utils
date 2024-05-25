/**
 * Checks if the current environment is a browser.
 * @returns {boolean} Returns true if the environment is a browser, false otherwise.
 */
export const isEnvBrowser = (): boolean => !(window as any).invokeNative;
