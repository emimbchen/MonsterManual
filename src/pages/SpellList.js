import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SpellCard from "../components/SpellCard/SpellCard";
import { SPELL_LEVEL_COLORS } from "../utilities/constants";

function Spells() {
  const spells = useLoaderData();
  const selectMenu = Object.keys(SPELL_LEVEL_COLORS);
  const [selectedLevel, setSelectedLevel] = useState("all");

  const filteredItems = spells.filter(
    (item) => selectedLevel === "all" || selectedLevel === item.level.toString()
  );

  return (
    <>
      <div className="flex justify-between items-center mb-5">
        <h1>Spells ({filteredItems.length})</h1>
        <select
          className="p-2 bg-gray-100 border border-gray-300 text-gray-700 rounded-sm shadow-sm"
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
        {filteredItems &&
          filteredItems.map((spell, id) => (
            <li key={id}>
              <SpellCard spell={spell} className="h-full" />
            </li>
          ))}
      </ul>
    </>
  );
}

export default Spells;
