import { Outlet } from "react-router-dom";
import PageLayout from "../components/PageLayout/PageLayout";

function RootLayout() {
  return (
    <PageLayout>
      <Outlet />
    </PageLayout>
  );
}

export default RootLayout;
