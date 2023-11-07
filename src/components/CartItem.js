import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import Qty from "../components/Qty";
import { CartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);
  return (
    <div className="flex gap-x-8">
      <Link to={`products/${item.id}`} className="w-[70px] h-[70px]">
        <img
          src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
          alt=""
        />
      </Link>
      <div className="flex-1">
        <div className="flex gap-x-4 mb-3">
          <Link to={`products/${item.id}`}>{item.attributes.title}</Link>
          <div
            className="cursor-pointer text-[24px] hover:text-accent transition-all"
            onClick={() => removeFromCart(item.id)}
          >
            <IoClose />
          </div>
        </div>
        <div className="flex items-center gap-x-12">
          <div className="flex gap-x-4 mb-2">
            <Qty item={item} />
            <div className="text-accent text-xl">
              {item.attributes.price * item.amount}
            </div>
          </div>
        </div>
        <div>
          <span className="text-accent">
            $ {item.attributes.price} per piece
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
