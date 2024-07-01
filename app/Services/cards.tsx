"use client ";
import React from 'react'
 import "./style.css";
import Card from '../components/ui/card';
import icon from "../components/svg/cardArrow";
import CardArrow from '../components/svg/cardArrow';
import ArrowIcon from '../components/svg/arrowIcon';
import LinkIcon from '../components/svg/linkIcon';
import CardWhite from '../components/ui/cardWhite';

const Cards = () => {
  return (
<div className="flex h-[100vh] w-[960px] flex-col justify-center items-center gap-[16px]" style={{padding: "20px 64px"}}>
    {/* first four starts */}
    <div className="flex FirstFour">

    <Card 
    title="Website Development" 
    content="From robust backend systems to intuitive user interfaces..."
    icon={<CardArrow/>}
    link="#"
    linkIcon={<LinkIcon/>}
  />
    <CardWhite 
    title="Website Development" 
    content="From robust backend systems to intuitive user interfaces..."
    icon={<CardArrow/>}
    link="#"
    linkIcon={<LinkIcon/>}
  />
 
  </div>
   {/* first four ends */}
  </div>
  )
}

export default Cards
