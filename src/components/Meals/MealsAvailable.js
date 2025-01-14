import availableMeals from "../../assets/data/mealsDummyData.json";
import "./MealsAvailable.css";

export default function MealsAvailable() {
    return (
        <div className="menuContainer">
            {availableMeals.length &&
                availableMeals.map((eachItem) =>
                    <div className="menuItems">
                        <h6 className="menuItemNames">{eachItem.name}</h6>
                        <p className="menuItemDescriptions">{eachItem.description}</p>
                        <h5 className="menuItemPrices">${eachItem.price}</h5>
                    </div>)
            }
        </div>
    )
}