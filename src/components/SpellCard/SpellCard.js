import { Link } from "react-router-dom";
import { SPELL_LEVEL_COLORS } from "../../utilities/constants";

function SpellCard({ spell, className = null, ...props }) {
  const { index, level, name } = spell || {};
  return (
    <div
      className={`p-3 border-l-2 drop-shadow shadow shadow-slate-50 ${className}`}
      style={{ borderLeftColor: SPELL_LEVEL_COLORS[level] }}
      {...props}
    >
      <div className="flex flex-col justify-between">
        {name && (
          <h2 className="mb-2 font-bold underline">
            <Link to={`spells/${index}`}>{name}</Link>
          </h2>
        )}

        {level && <p>Level {level}</p>}
      </div>
    </div>
  );
}

export default SpellCard;
