import { isEnvBrowser } from "../utils/isEnvBrowser";
/**
 * Fetches data from the NUI using the specified event name and optional data payload.
 * @param eventName - The name of the NUI event to fetch data from.
 * @param data - Optional data payload to send along with the request.
 * @returns A promise that resolves to the fetched data.
 * @throws An error if the fetch operation fails.
 */
export const fetchNui = async <T>(eventName: string, data?: unknown): Promise<T> => {
  if (isEnvBrowser()) return undefined as any;
  const resourceName = (window as any).GetParentResourceName ? (window as any).GetParentResourceName() : null;
  if (!resourceName) throw new Error("Failed to fetch NUI callback! (Resource name not found)");

  try {
    const resp = await fetch(`https://${resourceName}/${eventName}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(data),
    });

    const respFormatted = await resp.json();

    return respFormatted;
  } catch (error) {
    throw Error(`Failed to fetch NUI callback ${eventName}! (${error})`);
  }
};
