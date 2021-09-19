import { useState } from "react";
import Routers from "./Router";
import { authService } from "../firebase";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <>
      <Routers isLoggedIn={isLoggedIn} />
      <footer>&copy; this is footer</footer>
    </>
  );
}

export default App;
