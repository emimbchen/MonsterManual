import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { ReactComponent as BackIcon } from "../assets/backArrow.svg";
import StatBlock from "../components/StatBlock/StatBlock";
import { STAT_ORDER, API_BASE_URL } from "../utilities/constants";

function Spell() {
  const { name, desc, classes, ...stats } = useLoaderData() || {};

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
    <>
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
    </>
  );
}

export default Spell;

export async function getSpellById({ params }) {
  const response = await fetch(API_BASE_URL + "/api/spells/" + params.id);
  if (!response.ok) {
    throw new Error("Error fetching spell details");
  } else {
    const resData = await response.json();
    return resData;
  }
}
