import Wallet from "./Wallet";
import Transfer from "./Transfer";
import "./App.scss";
import { useState } from "react";

function App() {
  const [balance, setBalance] = useState(0);
  const [user, setUser] = useState(""); //changed address to user and setAddress to setUser;

  return (
    <div className="app">
      <Wallet
        balance={balance}
        setBalance={setBalance}
        user={user} //changed address to user and setAddress to setUser;
        setUser={setUser}
      />
      <Transfer setBalance={setBalance} user={user} />
    </div>
  );
}

export default App;
