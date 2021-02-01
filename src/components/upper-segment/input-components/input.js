import "./input.css"
import useState from "react"

const Text = ({text}) => {
    const [Text, setText] = useState("")
    return ( <div className="cover">
        <label for="text">{text}</label> <br/>
        <input type="text" className="form-control" name="text" placeholder={Text} onChange={(e)=>setText(e.target.value)}></input>   
        </div> );
}
 
export default Text;