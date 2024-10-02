import Wizard from "../assets/lostWizard.png";
import PageLayout from "../components/PageLayout/PageLayout";
function ErrorPage() {
  return (
    <PageLayout>
      <div className="text-center">
        <img src={Wizard} alt="Confused Wizard" className="max-w-52 mx-auto" />
        <h1 className="block">Error</h1>
        <p>Uh oh, we've run into a problem.</p>
      </div>
    </PageLayout>
  );
}

export default ErrorPage;
