import { useEffect, useState } from "react";
import Routers from "./Router";
import { authService } from "../firebase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <>
      {init ? <Routers userObj={userObj} isLoggedIn={isLoggedIn} /> : "init..."}
      <footer>&copy; this is footer</footer>
    </>
  );
}

export default App;
