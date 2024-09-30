import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

function Spell() {
  const {
    name,
    desc,
    range,
    components,
    ritual,
    duration,
    concentration,
    casting_time,
    level,
  } = useLoaderData();

  return (
    <div>
      <h1>{name}</h1>
      <p>{desc}</p>
      <Link to="..">Back to Spells</Link>
    </div>
  );
}

export default Spell;