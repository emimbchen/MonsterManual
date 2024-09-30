import { useLoaderData } from "react-router-dom";
import SpellCard from "../components/SpellCard/SpellCard";

function Spells() {
  const spells = useLoaderData();
  return (
    <div>
      <h1>Spells</h1>
      {spells &&
        spells.map((spell, id) => <SpellCard spell={spell} key={id} />)}
    </div>
  );
}

export default Spells;
