import { Outlet, useNavigation } from "react-router-dom";

function RootLayout() {
  const navigation = useNavigation();

  return (
    <>
      <header role="banner"></header>
      <main role="main">
        {navigation.state === "loading" && <p>Loading...</p>}
        <Outlet />
      </main>
      <footer role="contentinfo"></footer>
    </>
  );
}

export default RootLayout;
