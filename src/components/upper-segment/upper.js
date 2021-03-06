import React from 'react'
import Jumbotron from "./Jumbotron/jumbotron"
import Text from "./input-components/input";
import Reminder from "./reminder/reminder"
import Add from "./buttons/Add-button"
import "./upper.css"

const UpperSection = () => {
    return ( <form className="upper">
       <Jumbotron />
        <Text text="Task"/>
        <Text  text="Day & Time"/>
        <Reminder />
        <Add text="Add Task" />
    </form> );
}
 
export default UpperSection;