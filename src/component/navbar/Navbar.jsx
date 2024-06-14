import styles from "./Navbar.module.css"
import Links from "./links/Links";
import Image from "next/image";
import logo from "@/component/Logo.png"

const Navbar = () =>{
    return (
        <div className={styles.container}> 
            <div><Image src={logo} alt="Logo" className={styles.logo}/></div>
            <div> <Links/> 
          
             </div>
        </div>
    )
}
export default Navbar