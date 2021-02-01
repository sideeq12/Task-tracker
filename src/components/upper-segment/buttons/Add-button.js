import "./button.css"

const Add = ({text}) => {
    function Click() {
        console.log("clicked")
    }
    return (<div type="button" className="Add btn" onClick={Click}>{text}</div>);
}

export default Add;