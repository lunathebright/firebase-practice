import { useEffect, useState } from "react";
import Routers from "./Router";
import { authService } from "../firebase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <>
      {init ? <Routers isLoggedIn={isLoggedIn} /> : "init..."}
      <footer>&copy; this is footer</footer>
    </>
  );
}

export default App;
