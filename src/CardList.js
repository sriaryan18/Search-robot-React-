import React from "react";
// import { robots } from "./robots";
import Card from "./Card";
const CardList=({robots}) => {
   const cardComponent=robots.map((Element,i)=>
   {
      // if(true){
      //    throw new Error("NOOOOO!")
      // }
    return <Card key={i}
    id={i} 
    name={Element.name} 
    email={Element.email}/>
   });
   return(
    <div>
    {cardComponent};
    </div>
   )
   }
   export default CardList