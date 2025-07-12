import "./App.css";
import { UserHeader } from "./molecula/headerUser/headerUser";

function Layout() {
  return (
    <main className="mainContent p-normal bg-beigeBackground w-screen h-screen">
      <UserHeader />
    </main>
  );
}

export default Layout;
