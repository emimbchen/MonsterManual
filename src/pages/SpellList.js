import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SpellCard from "../components/SpellCard/SpellCard";
import { SPELL_LEVEL_COLORS, API_BASE_URL } from "../utilities/constants";

function Spells() {
  const spells = useLoaderData() || [];
  const selectMenu = Object.keys(SPELL_LEVEL_COLORS);
  const [selectedLevel, setSelectedLevel] = useState("all");

  const filteredItems = spells.filter(
    (item) => selectedLevel === "all" || selectedLevel === item.level.toString()
  );

  return (
    <>
      <div className="flex flex-wrap justify-between items-center mb-5">
        <h1>Spells ({filteredItems.length})</h1>
        <select
          data-testid="level-select"
          aria-label="Filter by level"
          className="p-2 bg-gray-100 border border-gray-300 text-gray-700 rounded-sm shadow-sm cursor-pointer"
          onChange={(e) => setSelectedLevel(e.target.value)}
          value={selectedLevel}
        >
          <option value="all">All Levels</option>
          {selectMenu.map((item) => (
            <option value={item} key={item}>
              Level {item}
            </option>
          ))}
        </select>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4 items-stretch">
        {filteredItems.length > 0 ? (
          filteredItems.map((spell, id) => (
            <li key={id}>
              <SpellCard spell={spell} className="h-full" />
            </li>
          ))
        ) : (
          <p>No Spells found</p>
        )}
      </ul>
    </>
  );
}

export default Spells;

export async function getAllSpells() {
  const response = await fetch(`${API_BASE_URL}/api/spells`);
  if (!response.ok) {
    throw new Error("Could not fetch spells");
  } else {
    const resData = await response.json();
    return resData.results;
  }
}
