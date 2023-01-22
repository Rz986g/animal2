import "./AnimalShow.css"
import {useState} from "react"
import bird from "./svg/bird.png";
import cat from "./svg/cat.png";
import cow from "./svg/cow.png";
import dog from "./svg/dog.png";
import gator from "./svg/gator.png";
import horse from "./svg/horse.png";
import heart from "./svg/heart.png";

const image={
bird:bird,
cat:cat,
cow:cow,
dog:dog,
gator:gator,
horse:horse,
}

const AnimalShow=({type})=>{
    const [click,setSize]=useState(0);
    const handleClick=()=>{
        setSize(click+1*10)
    }

    return(
        <div className="animal" onClick={handleClick}>
            <img alt="animal"  style={{width:200}} src={image[type]}/>
            <img className="heart" alt="heart" style={{width:click}} src={heart}/>
        </div>
    )
}

export default AnimalShow