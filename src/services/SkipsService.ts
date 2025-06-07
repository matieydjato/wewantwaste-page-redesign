import { skipsInstance as axios } from "./axios";
import type { Skip } from "../types/Skip";

export async function getSkipsByLocation(
  postcode: string,
  area: string
): Promise<Skip[]> {
  try {
    const response = await axios.get<Skip[]>(
      `/by-location/?postcode=${postcode}&area=${area}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching skips:", error);
    throw error;
  }
}
