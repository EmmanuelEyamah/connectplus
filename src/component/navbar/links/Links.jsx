"use client";
import { useState } from "react";
import styles from "./links.module.css"
import Navlink from "../navLink/Navlink";

const Links = () => {

    const link = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Our Services",
            path: "/OurServices"
        },
        {
            title: "Case Studies",
            path: "/CaseStudies"
        },
        
    ];



    return(
        <div className={styles.link}>
            {link.map(link=>
                <Navlink item={link} key={link.title} />
            )}   
            <button className={styles.letchat}> Let's Chat</button>
        </div>
    )
}

export default Links