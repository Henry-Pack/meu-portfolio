import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TimeLineItem from "./TimeLineItem";
import api from "../../services/api.js"


export default function TimeLine() {
    
    const [items, setItems] = useState([]);

    useEffect( () =>{
        async function fetchTimeLine() {
            try{
                const response = await api.get("/timeline");
                setItems(response.data);
            }catch(error){
                console.error("Erro ao carregar TimeLine:", error);
            }
        }

        fetchTimeLine();
    }, []);


    return(
        <div className="timeline-container">
            {items.map((item, index) => (
                <TimeLineItem 
                    key={index}
                    ano={item.ano}
                    titulo={item.titulo}
                    descricao={item.descricao}
                    img={item.img}
                />
            ))}
        </div>
    )
}