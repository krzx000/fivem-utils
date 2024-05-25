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
export declare const useNuiEvent: <T = any>(action: string, handler: (data: T) => void) => void;
export default useNuiEvent;
//# sourceMappingURL=useNuiEvent.d.ts.map