import React from 'react';

interface CardProps {
  title: string;
  content: string;
  icon?: React.ReactNode;
  link?: string;
  linkIcon?: React.ReactNode;
}
import "../svg/linkIcon";
import "../../Services/style.css";

const Card: React.FC<CardProps> = ({ title, content, icon, link, linkIcon }) => {
  return (

    <div className="Servicecard">
        <div className="ServiceInner">
      {icon && <div className="Serviceicon">{icon}</div>}
        <h5 className="text-[#FBFAFA]">
          {title}
        </h5>
      </div>
      <p className="">
        {content}
      </p>
      {link && (
         <div className="flex justify-end items-center">
         <a href={link} className=" hover:underline flex items-center">
           <span className="flex items-center">
          Learn More
             {linkIcon && <span className="ml-2">{linkIcon}</span>}
           </span>
         </a>
       </div>
      )}
    </div>
  );
};

export default Card;
