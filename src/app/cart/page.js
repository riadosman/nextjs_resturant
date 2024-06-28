"use client";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import Link from "next/link";

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([
    { title: "title", count: 1, img: "img/src" },
    { title: "titdle", count: 1, img: "img/src" },
    { title: "titwle", count: 1, img: "img/src" },
    { title: "tigtle", count: 1, img: "img/src" },
    { title: "titale", count: 1, img: "img/src" },
  ]);

  const increment = (proTitle) => {
    setCartProducts((prev) =>
      prev.map((e) => {
        if (e.title === proTitle) {
          return { ...e, count: e.count + 1 };
        }
        return e;
      })
    );
  };

  const decrement = (proTitle) => {
    setCartProducts((prev) =>
      prev.map((e) => {
        if (e.title === proTitle) {
          const newCount = e.count - 1;
          if (newCount >= 0) {
            return { ...e, count: newCount };
          } else if (newCount) {
            return prev.filter((j) => j.title !== e.title);
          }
        }
        return e;
      })
    );
  };

  const handleInputChange = (e, proTitle) => {
    const newCount = parseInt(e.target.value);
    if (!isNaN(newCount) && newCount >= 0) {
      setCartProducts((prev) =>
        prev.map((prod) => {
          if (prod.title === proTitle) {
            return { ...prod, count: newCount };
          }
          return prod;
        })
      );
    }
  };

  return (
    <>
      <hr className="bg-firstColor mt-1 h-2" />
      <h1 className="my-4 text-2xl text-center">Cart</h1>
      <div className="flex items-center flex-col w-1/2 mx-auto ">
        {cartProducts.length === 0 ? (
          <div className="w-full h-screen flex justify-center items-center flex-col">
            Your Cart is Empty
            <Link
              href="/"
              className="text-thirdColor cursor-pointer p-4 border-2 border-secondColor rounded-full my-4"
            >
              SHOW PRODUCTS
            </Link>
          </div>
        ) : (
          cartProducts.map((e, i) => (
            <div
              key={e.title} // Use title as the key
              className="my-4 w-full flex items-center justify-around border-firstColor border-2 p-5 rounded-full"
            >
              <img src={e.img} alt={e.title} />
              <p className="capitalize">{e.title}</p>
              <span>
                <button className="m-2" onClick={() => increment(e.title)}>
                  +
                </button>
                <input
                  type="text"
                  className="w-[20px] inline-block"
                  value={e.count}
                  onChange={(event) => handleInputChange(event, e.title)}
                />
                <button className="m-2" onClick={() => decrement(e.title)}>
                  -
                </button>
              </span>
              <span
                onClick={() =>
                  setCartProducts((prev) =>
                    prev.filter((j) => j.title !== e.title)
                  )
                }
                className="cursor-pointer"
              >
                <MdDelete />
              </span>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Cart;
