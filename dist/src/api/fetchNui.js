"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchNui = void 0;
const isEnvBrowser_1 = require("@/utils/isEnvBrowser");
/**
 * Fetches data from the NUI using the specified event name and optional data payload.
 * @param eventName - The name of the NUI event to fetch data from.
 * @param data - Optional data payload to send along with the request.
 * @returns A promise that resolves to the fetched data.
 * @throws An error if the fetch operation fails.
 */
const fetchNui = (eventName, data) => __awaiter(void 0, void 0, void 0, function* () {
    if ((0, isEnvBrowser_1.isEnvBrowser)())
        return undefined; // HACK FOR BORING ERRORS IN DEV
    const resourceName = window.GetParentResourceName ? window.GetParentResourceName() : null;
    if (!resourceName)
        throw new Error("Failed to fetch NUI callback! (Resource name not found)");
    try {
        const resp = yield fetch(`https://${resourceName}/${eventName}`, {
            method: "post",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(data),
        });
        const respFormatted = yield resp.json();
        return respFormatted;
    }
    catch (error) {
        throw Error(`Failed to fetch NUI callback ${eventName}! (${error})`);
    }
});
exports.fetchNui = fetchNui;
