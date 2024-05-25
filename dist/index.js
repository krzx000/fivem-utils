"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testowa = exports.isEnvBrowser = void 0;
/**
 * Checks if the current environment is a browser.
 * @returns {boolean} Returns true if the environment is a browser, false otherwise.
 */
const isEnvBrowser = () => !window.invokeNative;
exports.isEnvBrowser = isEnvBrowser;
const testowa = () => console.log("dupa");
exports.testowa = testowa;
