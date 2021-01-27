import React from 'react'
import Button from "./Button"

const Header = ({title})=>{
    const click = ()=>{
        console.log("click")
    }
    return(
        <header style={style}>
            <h2>{title}</h2>
            <Button  color="#ef4f4f" text="Close" onClick={click}/>
        </header>
    )
}

const style ={
    color: "white",
    backgroundColor : "#0C4259",
    padding : "10px",
    textAlign : "center",
    display : "flex",
    flexDirection : "row",
    justifyContent: "space-between",
    alignItems : "center"
}
Header.defaultProps ={
    title : "Task Tracker"
}
export default Header;