import "Cart.css";

export default function Cart() {
    const cartItems = [
        {
            "id": "m1",
            "name": "Sushi",
            "price": 22.99,
            "quantity": 1
        },
        {
            "id": "m2",
            "name": "Schnitzel",
            "price": 16.5,
            "quantity": 2
        }
    ];
    const totalAmount = cartItems.map((eachItem) => (eachItem.price * eachItem.quantity))

    return (
        <div>
            {cartItems.map((eachItem) => {
                <div>
                    {eachItem.name} - {eachItem.price} - {eachItem.quantity} - {eachItem.price * eachItem.quantity}
                </div>
            })}
            <div>
                Total Amount = {totalAmount}
            </div>
            <div>
                <button>Close</button>
                <button>Order</button>
            </div>
        </div>
    )
}