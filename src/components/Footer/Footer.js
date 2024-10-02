import { ReactComponent as LinkedInIcon } from "../../assets/linkedin.svg";
import { ReactComponent as GithubIcon } from "../../assets/github.svg";

function Footer({ ...props }) {
  return (
    <footer role="contentinfo" className="bg-primary p-6" {...props}>
      <div className="flex justify-center gap-4 py-5">
        <a href="https://github.com/emimbchen">
          <LinkedInIcon className="h-9 w-auto" />
          <span className="sr-only">Emi's Linkedin</span>
        </a>
        <a href="https://www.linkedin.com/in/emi-mb-chen/">
          <GithubIcon className="h-9 w-auto" />
          <span className="sr-only">Emi's Github</span>
        </a>
      </div>
      <ul className="text-white">
        <li>
          Favicon from:
          <a
            href="https://thenounproject.com/browse/icons/term/card/"
            target="_blank"
            title="Card Icons"
            className="underline ms-2"
          >
            Noun Project
          </a>
        </li>
        <li>
          January of hwatu icon by 1516 from:
          <a
            href="https://thenounproject.com/browse/icons/term/january-of-hwatu/"
            target="_blank"
            title="January of hwatu Icons"
            className="underline ms-2"
          >
            Noun Project
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
