import React, {useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
 const [bots, setBots] = useState([]);
 const [botArmy, setBotArmy] = useState([]);

  return (
    <div>
      <YourBotArmy />
      <BotCollection />
    </div>
  )
}

export default BotsPage;
