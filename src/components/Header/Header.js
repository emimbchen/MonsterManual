import { NavLink } from "react-router-dom";
import { ReactComponent as CardIcon } from "../../assets/cards.svg";

function Header({ ...props }) {
  return (
    <header role="banner" className="shadow" {...props}>
      <div className="container py-4 flex items-center justify-center">
        <NavLink to={`/`} end>
          <CardIcon className="h-12" alt="Spell Card Logo" />
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
