import "./input.css"

const Text = ({text}) => {
    return ( <div className="cover">
        <label for="text">{text}</label> <br/>
        <input type="text" className="form-control" name="text"></input>   
        </div> );
}
 
export default Text;