"use client ";
import React from 'react'
 import "./style.css";
import Card from '../components/ui/card';
import icon from "../components/svg/cardArrow";
import CardArrow from '../components/svg/cardArrow';
import ArrowIcon from '../components/svg/arrowIcon';
import LinkIcon from '../components/svg/linkIcon';
import CardWhite from '../components/ui/cardWhite';
import CardHillIcon from '../components/svg/cardHillicon';




const Cards = () => {
  return (
    <div className="flex h-[1500px] w-[960px] flex-col justify-center items-center mx-auto">
    <div className="mt-[130px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 m-0">

    {/* first four starts */}


    <Card 
    title="Website Development" 
    content="From robust backend systems to intuitive user interfaces..."
    icon={<CardArrow/>}
    link="#"
    linkIcon={<LinkIcon/>}
  />
  
  <CardWhite 
    title="Software Architecture" 
    content="We provide continuous support and updates to keep pace with evolving market trends and user expectation."
    icon={<CardHillIcon/>}
    link="#"
    linkIcon={<LinkIcon/>}
  />
  

  
    
  <CardWhite 
    title="Software Architecture" 
    content="We provide continuous support and updates to keep pace with evolving market trends and user expectation."
    icon={<CardHillIcon/>}
    link="#"
    linkIcon={<LinkIcon/>}
  />
  
 
</div>
  </div>
   {/* first four ends */}
  </div>
  )
}

export default Cards
