import { Colors } from "../../utils/Colors";
import "./Summary.css";

export default function Summary() {
    return (
        <div className="summaryContainer" style={{backgroundColor: Colors.layoutGray}}>
            <h1 className="summaryHeading">Delicious Food, Delivered To You</h1>
            <p className="summaryPara">Choose your favourite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</p>
            <p className="summaryPara">All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
        </div>
    );
}