import React, { useCallback } from "react";
import { useRecoilValue } from "recoil";
import { cartState } from "../../atoms/cartState";
import { useCart } from "../cart/useCart";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Container from "../container/Container";
import { IoArrowBackOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";

const Cart = () => {
  const cart = useRecoilValue(cartState);
  const { incrementQuantity, decrementQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  const calculateTotal = useCallback(() => {
    return cart.reduce(
      (total, item) => total + item.currentAmt * item.quantity,
      0
    );
  }, [cart]);

  const handleCheckout = useCallback(() => {
    navigate("/checkout", { state: { cart } });
  }, [navigate, cart]);

  const goBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <div>
      <ToastContainer />
      <div className="flex my-10 bg-blue-400 rounded-t-md px-10 py-5 items-center">
        <button
          className="text-white text-xl mr-4"
          onClick={goBack}
          aria-label="Go back"
        >
          <IoArrowBackOutline />
        </button>
        <h3 className="text-2xl text-white font-semibold">Cart</h3>
      </div>
      <Container>
        {cart.length === 0 ? (
          <div className="flex flex-col items-center my-3">
            <div>
              <BsCart4 size={40} md:size={60} className="text-blue-400" />
            </div>
            <div className="mt-5 text-center">
              <h3 className="text-lg font-bold">Your cart is empty.</h3>
              <p className="text-lg">
                You have not added any item to your cart.
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col">
            <ul className="mb-6">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between mb-4 p-4 bg-white shadow rounded-lg"
                >
                  <div className="flex items-center">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-20 h-20 object-cover mr-4 rounded"
                    />
                    <div>
                      <h4 className="md:text-lg font-semibold">{item.title}</h4>
                      <p className="text-sm text-gray-600">
                        #{item.currentAmt} x {item.quantity}
                      </p>
                      <div className="flex items-center mt-2">
                        <div className="flex items-center me-5">
                          {[...Array(5)].map((_, index) => (
                            <FaStar
                              key={index}
                              className={`w-4 h-4 ${
                                index < item.rating
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <button
                          className="px-2 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                          onClick={(e) => {
                            e.stopPropagation();
                            decrementQuantity(item.id);
                          }}
                          aria-label={`Decrease quantity of ${item.title}`}
                        >
                          -
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button
                          className="px-2 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                          onClick={(e) => {
                            e.stopPropagation();
                            incrementQuantity(item.id);
                          }}
                          aria-label={`Increase quantity of ${item.title}`}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center mb-5 md:mb-0">
                    <p className="md:text-lg font-semibold">
                      #{item.currentAmt * item.quantity}
                    </p>
                    <button
                      className="md:ml-4 px-2 py-1 text-red-500 md:text-2xl font-semibold"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFromCart(item.id);
                      }}
                      aria-label={`Remove ${item.title} from cart`}
                    >
                      X
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center p-4 bg-white shadow rounded-lg mb-4">
              <h4 className="text-xl font-bold">Total:</h4>
              <p className="text-lg md:text-2xl font-semibold">
                #{calculateTotal()}
              </p>
            </div>
            <div className="flex justify-center">
              <button
                className="py-2 px-10 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 mb-5"
                onClick={handleCheckout}
                aria-label="Proceed to checkout"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Cart;
