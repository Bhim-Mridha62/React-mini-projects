import React, { useState } from "react";
import Cartlist from "./Cartlist";
import "./Header.css";
import Productlist from "./Productlist";
function Header() {
  const [product, setProduct] = useState([
    {
      url:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRyeUWTrgVe6huI5hl8XuTjmnzl2FO4np3QynrONjlu6rD5zOddACDO_nQ4TtS-qLWu6JnVrYCogcCqdJpoSO6Lp2LVOtSd5wEtjprlbYJVQGBZbcVB1siE&usqp=CAE",
      name: "Men Running Shoes",
      catagory: "KALENJI",
      price: "1799",
    },
    {
      url:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR-oFy44H3snlW8pATRvU1j9Zm2dTXhQH_QrXsBKSCATo_fw6jQRR5EL-zNiFTeWQ7G5YyI0MJzqowVPitS3fLAQUQlmoGPcLkz1-60kNnaiAhmdi18XFd17NhG-m5Pr8Hlqw&usqp=CAc",
      name: "Formal Shirt",
      catagory: "Office",
      price: "2500",
    },
    {
      url:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTee11Bf3gaHKfdweQMHlz_JMvLTHri2xNNcrXkNpbYgnXg3zFbtFBZJetMRrc346l98s1gpo8C0pdRyEnJo56-tbENKxqfujN2jSNJGVCygffuEj2nYKrAW8N__BfxMrQuIP4&usqp=CAc",
      name: "Sony a7",
      catagory: "Dslr",
      price: "311203",
    },
    {
      url:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSruReFKJdRyd5CMYjgmxkEmMRLIJF52pabf4oJB5LgzcPMMdZjy_3VQ0kQ7IDzYZGwWc_WVpGN158VzRSxIrFv-eKTwKU_T6serpnIPglT0i7qRbWa3GZEutP3JkWBXUhXUug&usqp=CAc",
      name: "Home Camera",
      catagory: "Camera",
      price: "2358",
    },
    {
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCSHSS-ATxrKlmPN1FGdrHdvMatfLJSkYt2A&usqp=CAU",
      name: "LCD/LED tv",
      catagory: "Tv",
      price: "29050",
    },
    {
      url:
        "https://2.bp.blogspot.com/_3MtisSmHW-s/TUs9UonOJTI/AAAAAAAABpg/X-MG5Coh7rk/s1600/3782.jpg",
      name: "Sopha",
      catagory: "Home",
      price: "20000",
    },
    {
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqmHEu_ZkxmqGPa0sY1rACxbeBIDeD6S37nw&usqp=CAU",
      name: "Audio speaker",
      catagory: "Speaker",
      price: "59999",
    },
    {
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5N05v91ufMDzE6si6YANKtpQ1TKU0BKAZCA&usqp=CAU",
      name: "Y15c",
      catagory: "Mobile",
      price: "54999",
    },
    {
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOrI6XWzDOUnjP3lcu4BR74sNhIzxWOLceew&usqp=CAU",
      name: "Samsung S56",
      catagory: "Mobile",
      price: "125000",
    },
    {
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkYmRj_j73B43mQ096Zg6IHxopDi4s_60g1Q&usqp=CAU",
      name: "Cotton Pant",
      catagory: "Pant",
      price: "19999",
    },
    {
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcKxPci0_Qmz_XO50rqOcgA8x5Gp-p9QEGkg&usqp=CAU",
      name: "Wedding Suits",
      catagory: "Bleser",
      price: "5999",
    },
  ]);
  const [cart, setCart] = useState([]);
  const [showcart, setShowcart] = useState(false);
  const addTocart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }]);
  };
  const handelShow = (value) => {
    setShowcart(value);
  };
  return (
    <>
      <div className="header" style={{ padding: "10px", position: "sticky" }}>
        <div onClick={() => handelShow(false)} style={{ color: "#D5B4B4" }}>
          <b>Shopcart</b>
        </div>
        <div className="shopicon" onClick={() => handelShow(true)}>
          <img
            src="https://img.icons8.com/?size=512&id=BBhHIwJINbBl&format=png"
            alt="cart"
          />
          <sup>{cart.length}</sup>
        </div>
      </div>
      {showcart ? (
        <Cartlist cart={cart} />
      ) : (
        <Productlist product={product} addTocart={addTocart} />
      )}
    </>
  );
}

export default Header;
