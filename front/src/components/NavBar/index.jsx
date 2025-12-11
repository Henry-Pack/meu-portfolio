import { motion } from "framer-motion";
import "./Navbar.css";

function Navbar() {

    const navVariant = {
  hidden: { opacity: 0, y: -10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.15
    }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: -5 },
  show: { opacity: 1, y: 0 }
};


  return (
    <nav
        className="nav"
        
    >
        
        
        <div className="logo">
            <motion.h1
                className="logo-top"
                initial={{opacity: 0, x: -30}}
                animate={{opacity: 1, x: 0}}
                transition={{ duration: 0.8}}
            >
                HENRY
            </motion.h1>

            <motion.h1
                className="logo-bottom"
                initial={{opacity: 0, x: +30}}
                animate={{opacity: 1, x: 0}}
                transition={{ duration: 0.8}}
            >
                PACK
            </motion.h1>
        </div>


        <motion.ul className="list" variants={navVariant} initial="hidden" animate="show">
            <motion.li variants={itemVariant}><button> Oláaaaaa </button></motion.li>
            <motion.li variants={itemVariant}><button> tchauaaa </button></motion.li>
        </motion.ul>



    </nav>
  )
}

export default Navbar;