import "./Cart.css";
import Modal from "../UI/Modal";
import { Colors } from "../../utils/Colors";
import { useContext } from "react";
import { CartContext } from "../../store/cart-context";

const EachItem = ({ itemDetails, index }) => {
    const cartCtx = useContext(CartContext);
    let quantityThereOrNot = cartCtx.items.has(itemDetails[1].id);
    console.log("There? ", quantityThereOrNot);

    function decreaseByOne(e) {
        e.preventDefault();
        let quantityGot = cartCtx.items.get(itemDetails[1].id).quantity;
        if (quantityGot !== 0) {
            cartCtx.addItem(itemDetails[1], quantityGot - 1);
        }
    }

    function increaseByOne(e) {
        e.preventDefault();
        let quantityGot = cartCtx.items.get(itemDetails[1].id).quantity;
        cartCtx.addItem(itemDetails[1], quantityGot + 1);

    }

    function deleteButtonHandler() {
        cartCtx.removeItem(itemDetails[1].id);
    }

    return (
        <div className="menuItems" key={index}>
            <div>
                <h6 className="menuItemNames">{itemDetails[1].name}</h6>
                <h5 className="menuItemPrices">${itemDetails[1].price}</h5>
            </div>
            <div style={{ fontSize: 12, fontWeight: 'bold', display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'row', gap: 4, width: 100, alignItems: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', borderRadius: 20, height: 40, width: 100, paddingTop: 10, paddingBottom: 10, backgroundColor: 'white', color: 'white', alignItems: 'center', justifyContent: 'space-around' }}>
                        <button onClick={decreaseByOne} style={{ backgroundColor: Colors.layoutDarkRed, color: 'white', borderWidth: 0, height: 40, width: 40 }}>
                            -
                        </button>
                        <p style={{ width: 40, height: 40, textAlign: 'center', paddingTop: 2, backgroundColor: Colors.layoutRed, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{cartCtx.items.get(itemDetails[1].id).quantity}</p>
                        <button onClick={increaseByOne} style={{ backgroundColor: Colors.layoutDarkRed, color: 'white', borderWidth: 0, height: 40, width: 40 }}>
                            +
                        </button>
                    </div>
                </div>
                <button onClick={deleteButtonHandler} style={{ padding: 5 }}>
                    <img src="https://static-00.iconduck.com/assets.00/delete-icon-1864x2048-bp2i0gor.png" style={{ width: 20, height: 20 }} />
                </button>
            </div>
        </div>
    );
}

export default function Cart({ showCart, onClose }) {
    const cartCtx = useContext(CartContext);
    const allCartItems = Array.from(cartCtx.items);

    let sum = 0;
    allCartItems.map((eachItem) => sum += eachItem[1].price * eachItem[1].quantity);
    const totalAmount = sum.toFixed(2);

    return (
        <Modal visibility={showCart}>
            {!allCartItems.length ?
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 200 }}>No Items in the Cart!!</div> :
                allCartItems.map((eachItem, index) =>
                    <EachItem itemDetails={eachItem} key={index} />
                )
            }
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p>Total Amount</p>
                <p>{totalAmount}</p>
            </div>
            <div style={{ justifyContent: 'flex-end', display: 'flex', gap: '10px', marginTop: "0px" }}>
                <button className="closeButton" style={{ backgroundColor: 'white', color: Colors.layoutDarkRed, borderWidth: 1, borderColor: Colors.layoutDarkRed, width: 100 }} onClick={onClose}>Close</button>
                {allCartItems.length !== 0 &&
                    <button className="orderButton" style={{ backgroundColor: Colors.layoutRed, color: 'white', borderWidth: 1, borderColor: Colors.layoutRed, width: 100 }}>Order</button>
                }
            </div>
        </Modal>
    );
}