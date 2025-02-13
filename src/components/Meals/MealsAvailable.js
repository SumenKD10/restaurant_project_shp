import { useContext } from "react";
import availableMeals from "../../assets/data/mealsDummyData.json";
import { CartContext } from "../../store/cart-context";
import { Colors } from "../../utils/Colors";
import "./MealsAvailable.css";

const EachItem = ({ itemDetails, index }) => {
    const cartCtx = useContext(CartContext);
    let quantityThereOrNot = cartCtx.items.has(itemDetails.id);
    console.log("There? ", quantityThereOrNot);

    const clickHandler = () => {
        cartCtx.addItem(itemDetails, 1);
    }

    function decreaseByOne(e) {
        e.preventDefault();
        let quantityGot = cartCtx.items.get(itemDetails.id).quantity;
        if (quantityGot !== 0) {
            cartCtx.addItem(itemDetails, quantityGot - 1);
        }
    }

    function increaseByOne(e) {
        e.preventDefault();
        let quantityGot = cartCtx.items.get(itemDetails.id).quantity;
        cartCtx.addItem(itemDetails, quantityGot + 1);

    }

    return (
        <div className="menuItems" key={index}>
            <div>
                <h6 className="menuItemNames">{itemDetails.name}</h6>
                <p className="menuItemDescriptions">{itemDetails.description}</p>
                <h5 className="menuItemPrices">${itemDetails.price}</h5>
            </div>
            <div style={{ fontSize: 12, fontWeight: 'bold', display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'row', gap: 4, width: 100, alignItems: 'center' }}>
                    {quantityThereOrNot ?
                        <div style={{ display: 'flex', flexDirection: 'row', borderRadius: 20, height: 40, width: 100, paddingTop: 10, paddingBottom: 10, backgroundColor: 'white', color: 'white', alignItems: 'center', justifyContent: 'space-around' }}>
                            <button onClick={decreaseByOne} style={{ backgroundColor: Colors.layoutDarkRed, color: 'white', borderWidth: 0, height: 40, width: 40 }}>
                                -
                            </button>
                            <p style={{ width: 40, height: 40, textAlign: 'center', paddingTop: 2, backgroundColor: Colors.layoutRed, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{cartCtx.items.get(itemDetails.id).quantity}</p>
                            <button onClick={increaseByOne} style={{ backgroundColor: Colors.layoutDarkRed, color: 'white', borderWidth: 0, height: 40, width: 40 }}>
                                +
                            </button>
                        </div> :
                        <button className="addButton" style={{ borderRadius: 20, height: 40, width: 100, paddingTop: 10, paddingBottom: 10, backgroundColor: Colors.layoutRed, color: 'white' }} onClick={() => clickHandler(itemDetails, index)}>Add</button>
                    }
                </div>
            </div>
        </div>
    );
}


export default function MealsAvailable() {

    return (
        <div className="menuContainer">
            {availableMeals.length &&
                availableMeals.map((eachItem, index) =>
                    <EachItem itemDetails={eachItem} key={index} />
                )
            }
        </div>
    )
}