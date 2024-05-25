"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNuiEvent = exports.fetchNui = exports.isEnvBrowser = void 0;
const isEnvBrowser_1 = require("@/utils/isEnvBrowser");
Object.defineProperty(exports, "isEnvBrowser", { enumerable: true, get: function () { return isEnvBrowser_1.isEnvBrowser; } });
const fetchNui_1 = require("@/api/fetchNui");
Object.defineProperty(exports, "fetchNui", { enumerable: true, get: function () { return fetchNui_1.fetchNui; } });
const useNuiEvent_1 = require("@/hooks/useNuiEvent");
Object.defineProperty(exports, "useNuiEvent", { enumerable: true, get: function () { return useNuiEvent_1.useNuiEvent; } });
