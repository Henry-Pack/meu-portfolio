import { motion } from "framer-motion";

function TimeLineItem ({ano, titulo, descricao, img, imgSize}){

    return (
        <motion.div
            className="timeLineItem"
        >

            <motion.h3 
                className="ano"
            >
                {ano}
            </motion.h3>

            <motion.h2 
                className="titulo"
            >
                {titulo}
            </motion.h2>

            <motion.p
                className="descricao"
            >
                {descricao}
            </motion.p>

            <motion.img src={img} style={{width: imgSize}}/>

        </motion.div>
    );
}

export default TimeLineItem;