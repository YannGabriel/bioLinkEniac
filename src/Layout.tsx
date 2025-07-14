
import "./App.css";
import { UserHeader } from "./molecula/headerUser/headerUser";
import { SpotifyCard } from "./molecula/spotifyMusic/spotifyMusic";
import { ButtonSection } from "./organismo/buttonsSection";

function Layout() {
  
  return (
    <main
      className="mainContent p-normal bg-beigeBackground w-screen h-screen flex flex-col justify-center items-center"
    >
      <UserHeader />
      <ButtonSection/>
      <SpotifyCard/>
    </main>
  );
}

export default Layout;
