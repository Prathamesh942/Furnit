import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Features/cartSlice";
import { useNavigate } from "react-router-dom";


const Products = ({products}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className=" w-[100%] flex flex-wrap py-20 justify-between gap-10 gap-y-10 max-md:py-0">
      {products.map((item) => {
        return (
          <div className=" flex flex-col w-[25%] relative gap-2 max-md:w-[32%]">
            <img
              src={item.productImg}
              alt=""
              className=" w-[100%] aspect-[5/6] object-cover rounded-md"
              onClick={()=>{
                navigate(`/product/${item.sku}`)
              }}
            />
            <div className=" flex justify-between max-md:flex-col">
              <span className=" font-semibold">{item.name}</span>
              <span>{item.price}$</span>
            </div>
            <span className=" absolute ">{item.tag}</span>
            <button
              className=" bg-zinc-700 text-white rounded-lg p-1"
              onClick={() => {
                dispatch(addToCart(item));
              }}
            >
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
