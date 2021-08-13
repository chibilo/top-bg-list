import React, { useState } from "react";
import "./styles.css";
import { Hosts } from "./Consts";
import GameList from "./components/GameList";
import CustomDropDown from "./components/CustomDropDown";

export default function App() {
  const [source, setSource] = useState("BGG");
  const [limit, setLimit] = useState(10);

  return (
    <div className="App">
      <h1>
        Топ{" "}
        <CustomDropDown
          value={limit}
          items={[10, 25, 50, 100]}
          onChange={(val) => setLimit(val)}
        />{" "}
        Настольных Игр по версии{" "}
        <CustomDropDown
          value={Hosts[source].title}
          items={Object.entries(Hosts).map((host) => ({
            value: host[0],
            text: host[1].title
          }))}
          onChange={(source) => setSource(source)}
        />
      </h1>
      <GameList host={source} limit={limit} />
    </div>
  );
}
