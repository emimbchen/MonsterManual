import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { ReactComponent as BackIcon } from "../assets/backArrow.svg";
import StatBlock from "../components/StatBlock/StatBlock";
import { STAT_ORDER } from "../utilities/constants";

function Spell() {
  const { name, desc, classes, ...stats } = useLoaderData();

  const AllStats = STAT_ORDER.map((statKey, index) => {
    return (
      stats[statKey] !== undefined && (
        <StatBlock
          value={stats[statKey]}
          label={statKey.replace("_", " ")}
          key={index}
        />
      )
    );
  });

  return (
    <div>
      <Link to=".." className="inline-flex gap-2 underline font-bold">
        <BackIcon className="w-4" /> Back to Spells
      </Link>
      <div className="py-3">
        <h1>{name}</h1>
        {AllStats && (
          <div className="flex flex-wrap gap-5 justify-between py-4 my-4 border-y-2 border-primary">
            {AllStats}
          </div>
        )}
        <p>{desc || "No spell information available"}</p>
        {classes && (
          <p className="mt-4">
            <span className="font-bold">Available for: </span>
            {classes.map((classItem) => classItem.name).join(", ")}
          </p>
        )}
      </div>
    </div>
  );
}

export default Spell;
