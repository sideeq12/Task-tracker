import "./button.css"

const Add = ({text}) => {
    function Click() {
        console.log("clicked")
    }
    return (<input type="submit" className="Add btn" onClick={Click} value={text}/>);
}

export default Add;