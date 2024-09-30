import { Link } from "react-router-dom";

function SpellCard({spell, ...props}) {
    const {index, level, name} = spell
  return (
    <div data-component="card" {...props}>
        <Link to={`spells/${index}`}><h2>{name}</h2></Link>
    </div>
  );
}

export default SpellCard;