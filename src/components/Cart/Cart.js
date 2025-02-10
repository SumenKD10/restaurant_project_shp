import "./Cart.css";
import Modal from "../UI/Modal";
import { Colors } from "../../utils/Colors";
import { useContext } from "react";
import { CartContext } from "../../store/cart-context";

export default function Cart({ showCart, onClose }) {
    // const cartItems = [
    //     {
    //         "id": "m1",
    //         "name": "Sushi",
    //         "price": 22.99,
    //         "quantity": 1
    //     },
    //     {
    //         "id": "m2",
    //         "name": "Schnitzel",
    //         "price": 16.5,
    //         "quantity": 2
    //     }
    // ];

    const cartCtx = useContext(CartContext);

    const allCartItems = cartCtx.items;

    let sum = 0;
    allCartItems.map((eachItem) => sum += eachItem.price * eachItem.quantity);
    const totalAmount = sum.toFixed(2);

    return (
        <Modal visibility={showCart}>
            {allCartItems.map((eachItem) =>
                <div className="eachCartItem">
                    <div style={{ flex: 1, textAlign: "center" }}>
                        {eachItem.name}
                    </div>
                    <div style={{ flex: 1, textAlign: "center" }}>
                        {eachItem.price}
                    </div>
                    <div style={{ flex: 1, textAlign: "center" }}>
                        {eachItem.quantity}
                    </div>
                    <div style={{ flex: 1, textAlign: "center" }}>
                        {eachItem.price * eachItem.quantity}
                    </div>
                </div>
            )}
            <div style={{ textAlign: 'right' }}>
                Total Amount = {totalAmount}
            </div>
            <div style={{ justifyContent: 'flex-end', display: 'flex', gap: '10px', marginTop: "0px" }}>
                <button className="closeButton" style={{ backgroundColor: 'black', color: 'white' }} onClick={onClose}>Close</button>
                <button className="orderButton" style={{ backgroundColor: Colors.layoutDarkRed, color: 'white' }}>Order</button>
            </div>
        </Modal>
    );
}