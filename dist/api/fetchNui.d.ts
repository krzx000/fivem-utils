/**
 * Fetches data from the NUI using the specified event name and optional data payload.
 * @param eventName - The name of the NUI event to fetch data from.
 * @param data - Optional data payload to send along with the request.
 * @returns A promise that resolves to the fetched data.
 * @throws An error if the fetch operation fails.
 */
export declare const fetchNui: <T>(eventName: string, data?: unknown) => Promise<T>;
