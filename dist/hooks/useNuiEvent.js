"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNuiEvent = void 0;
const react_1 = require("react");
const noop = () => { };
/**
 *
 * A hook that manage events listeners for receiving data from the client scripts
 * @param action The specific `action` that should be listened for.
 * @param handler The callback function that will handle data relayed by this hook
 *
 * @example
 * useNuiEvent<{visibility: true, wasVisible: 'something'}>('setVisible', (data) => {
 *   // whatever logic you want
 * })
 *
 **/
const useNuiEvent = (action, handler) => {
    const savedHandler = (0, react_1.useRef)(noop);
    // When handler value changes set mutable ref to handler val
    (0, react_1.useEffect)(() => {
        savedHandler.current = handler;
    }, [handler]);
    (0, react_1.useEffect)(() => {
        const eventListener = (event) => {
            const { action: eventAction, data } = event.data;
            if (savedHandler.current) {
                if (eventAction === action) {
                    savedHandler.current(data);
                }
            }
        };
        window.addEventListener("message", eventListener);
        // Remove Event Listener on component cleanup
        return () => window.removeEventListener("message", eventListener);
    }, [action]);
};
exports.useNuiEvent = useNuiEvent;
exports.default = exports.useNuiEvent;
