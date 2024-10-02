const BASE_URL = "https://www.dnd5eapi.co";

export async function getAllSpells({ request }) {
  const url = new URL(request.url);
  const level = url.searchParams.get("level");
  const query = level ? `?level=${encodeURIComponent(level)}` : "";
  const response = await fetch(`${BASE_URL}/api/spells${query}`);
  if (!response.ok) {
    throw new Error("Could not fetch spells");
  } else {
    const resData = await response.json();
    return resData.results;
  }
}

export async function getSpellById({ params }) {
  const response = await fetch(BASE_URL + "/api/spells/" + params.id);

  if (!response.ok) {
    throw new Error("Error fetching spell details");
  } else {
    const resData = await response.json();
    return resData;
  }
}
