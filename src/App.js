import "./App.css"
import {useState} from "react"
import AnimalShow from "./AnimalShow"
const animals=["bird","cat","cow","dog","gator","horse"]
const randomAnimal = ()=>{
    
    return animals[Math.floor(Math.random()*animals.length)]
    
}

const App=()=>{
    const [animal,setAnimal] = useState([])
    const handleClick=()=>{
        setAnimal([...animal,randomAnimal()])
        console.log("animal "+animal);
    }
    const showAnimal = animal.map((animal,index)=>{
        console.log(index);
        return <AnimalShow type={animal} key={index}/>
    })
return (
    <div className="App" >
        <button className="btn btn-light btn-lg button" alt="animal" onClick={handleClick} > Add Animal </button>
        <div className="animalGrid">{showAnimal}</div>
    </div>
)



}

export default App