import React from "react";
// import { robots } from "./robots";
import Card from "./Card";
const CardList=({robots}) => {
   const cardComponent=robots.map((Element,i)=>
   {
    return <Card key={i}
    id={i} 
    name={robots[i].Name} 
    email={robots[i].Email}/>
   });
   return(
    <div>
    {cardComponent};
    </div>
   )
   }
   export default CardList