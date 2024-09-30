const BASE_URL = "https://www.dnd5eapi.co";

export async function getAllSpells() {
  const response = await fetch(BASE_URL + "/api/spells");
  if (!response.ok) {
    throw new Error({ message: "Could not fetch spells" });
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

export async function getAllSchools() {
  const response = await fetch(BASE_URL + "/api/magic-schools");
  if (!response.ok) {
    throw new Error("Error fetching spell details");
  } else {
    const resData = await response.json();
    return resData.results;
  }
}
