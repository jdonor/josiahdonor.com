import type { PageServerLoad } from "./$types";
import { PCO_ID, PCO_SECRET } from "$env/static/private";

const plansURL = "https://api.planningcenteronline.com/services/v2/service_types/1379412/plans?filter=future";

export const load: PageServerLoad = async ({ fetch }) => {
  const response = await fetch(plansURL, {
    headers: {
      "Authorization": `Basic ${btoa(`${PCO_ID}:${PCO_SECRET}`)}`,
      "Content-Type": "application/json"
    }
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  
  return { data };
};