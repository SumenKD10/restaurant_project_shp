import { FaShoppingCart } from 'react-icons/fa';
import { Colors } from '../../utils/Colors';
import './Header.css';
import { useContext } from 'react';
import { CartContext } from '../../store/cart-context';

const Header = ({ cartViewButtonFunc }) => {
    const cartCtx = useContext(CartContext);
    console.log("CartGot ",cartCtx)
    const noOfCartItems = cartCtx.items.length;

    return (
        <div>
            <div className='headerComp' style={{ backgroundColor: Colors.layoutRed }}>
                <div className='brand'>
                    ReactMeals
                </div>
                <button className='cartDiv' style={{ backgroundColor: Colors.layoutDarkRed }} onClick={() => cartViewButtonFunc()}>
                    <FaShoppingCart size={20} color="#900" />
                    <div className='headerText'>
                        Your cart
                    </div>
                    <div className='numOfItems' style={{ backgroundColor: Colors.layoutRed }}>{noOfCartItems}</div>
                </button>
            </div>
            <img src="https://github.com/academind/react-complete-guide-code/blob/11-practice-food-order-app/extra-files/meals.jpg?raw=true" alt='No Image Available' className='backImage' />
        </div>
    );
}

export default Header;