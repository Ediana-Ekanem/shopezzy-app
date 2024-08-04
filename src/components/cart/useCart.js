import { useRecoilState } from "recoil";
import { cartState } from "../../atoms/cartState"; // Adjust the path as needed
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const useCart = () => {
  const [cart, setCart] = useRecoilState(cartState);

  const addToCart = (item) => {
    setCart((oldCart) => {
      const itemIndex = oldCart.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (itemIndex > -1) {
        // If item already exists, update its quantity
        const updatedCart = oldCart.map((cartItem, index) =>
          index === itemIndex
            ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 }
            : cartItem
        );
        toast.info("Item quantity updated!");
        return updatedCart;
      } else {
        // If item is new, add it to the cart
        toast.success("Item added to cart!");
        return [...oldCart, { ...item, quantity: 1 }];
      }
    });
  };

  const incrementQuantity = (itemId) => {
    setCart((oldCart) =>
      oldCart.map((item) =>
        item.id === itemId
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      )
    );
  };

  const decrementQuantity = (itemId) => {
    setCart((oldCart) =>
      oldCart.map((item) =>
        item.id === itemId
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  const removeFromCart = (itemId) => {
    setCart((oldCart) => oldCart.filter((item) => item.id !== itemId));
    toast.error("Item removed from cart!");
  };

  return {
    cart,
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
  };
};
