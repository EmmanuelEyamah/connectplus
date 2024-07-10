"use client"

import Hero from "./Hero"
import ClientFeedback from "./ClientFeedback"
import Subtitle from "./Subtitle"
import Title from "./Title"
import Uiux from "./Uiux"
import Packages from "@/app/components/ui/Packages"
import NextProject from "./NextProject"



const Ui =()=>{
    return(
        <div>
            <Hero />
            <ClientFeedback />
            <Subtitle />
            <Title />
            <Uiux />
            <Packages />
            <NextProject />
        </div>
    )
}
export default Ui;