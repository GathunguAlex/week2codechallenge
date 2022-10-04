import React from "react";
import BotCard from "./BotCard";

function BotCollection({bots,addBot,deleteBot}) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
     {/*...and here..*/}
     {bots.map((bot)=>(<BotCard bot={bot} handleBot={addBot}handleDeleteBot={deleteBot}/>))}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
