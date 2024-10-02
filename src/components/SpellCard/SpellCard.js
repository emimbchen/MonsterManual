import { Link } from "react-router-dom";
import { SPELL_LEVEL_COLORS } from "../../utilities/constants";

function SpellCard({ spell, className, ...props }) {
  const { index, level, name } = spell;
  return (
    <div
      data-component="card"
      className={`drop-shadow shadow shadow-slate-50 ${className}`}
      {...props}
    >
      <div
        className="flex flex-col justify-between p-3 border-l-2 h-full"
        style={{ borderLeftColor: SPELL_LEVEL_COLORS[level] }}
      >
        <h2 className="mb-2 font-bold underline">
          <Link to={`spells/${index}`}>{name}</Link>
        </h2>
        <p>Level {level}</p>
      </div>
    </div>
  );
}

export default SpellCard;
