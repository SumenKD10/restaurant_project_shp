import availableMeals from "../../assets/data/mealsDummyData.json";
import { Colors } from "../../utils/Colors";
import "./MealsAvailable.css";

export default function MealsAvailable() {
    return (
        <div className="menuContainer">
            {availableMeals.length &&
                availableMeals.map((eachItem) =>
                    <div className="menuItems">
                        <div>
                            <h6 className="menuItemNames">{eachItem.name}</h6>
                            <p className="menuItemDescriptions">{eachItem.description}</p>
                            <h5 className="menuItemPrices">${eachItem.price}</h5>
                        </div>
                        <div style={{ fontSize: 12, fontWeight: 'bold', display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
                            <div style={{display: 'flex',flexDirection: 'row', gap: 4, width: 100, alignItems: 'center'}}>
                                <p>Amount</p>
                                <input type="number" className="textField" style={{width: 40, height: 20}} defaultValue={1} min={1}/>
                            </div>
                            <button className="addButton" style={{borderRadius: 20, padding: 10, paddingRight: 15, backgroundColor: Colors.layoutRed, color: 'white'}}>+ Add</button>
                        </div>
                    </div>)
            }
        </div>
    )
}