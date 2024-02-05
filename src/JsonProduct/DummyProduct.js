import React, { useState, useEffect } from 'react';
import { TbArrowBigRight } from "react-icons/tb";
import axios from 'axios';
import "./JsonProduct.css";
function DummyProduct() {
  const [Jdata, setJdata] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [Search, setSearch] = useState("");
  const productsPerPage = 10;
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    const apiurl = 'https://dummyjson.com/products';
    axios.get(apiurl)
      .then((res) => {
        console.log(res.data.products);
        setJdata(res.data.products);
      })
      .catch(() => {
        console.log('Error fetching products');
      });
  };
  const handelonKeyPress = (e) => {
    if (e.key === 'Enter') {
      handelCliack();
    }
  }
  const HandelInput = (e) => {
    setSearch(e.target.value);

  }
  const handelCliack = () => {
    const SearchingProduct = Jdata.filter((item) =>
      item.title.toLowerCase().includes(Search.toLowerCase()) ||
      item.brand.toLowerCase().includes(Search.toLowerCase()) ||
      item.category.toLowerCase().includes(Search.toLowerCase())
    )
    setJdata(SearchingProduct);

  }
  // indexOfLastProduct   10=1*10
  const indexOfLastProduct = currentPage * productsPerPage;
  //indexOfFirstProduct 0= 10-10
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  // currentProducts have between 0 to 10 using sclice methord(0 10)
  // const currentProducts = SearchingProduct.slice(indexOfFirstProduct, indexOfLastProduct);
  const currentProducts = Jdata.slice(indexOfFirstProduct, indexOfLastProduct)

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    const totalPages = Math.ceil(Jdata.length / productsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <h1 className="heading">PRODUCTS</h1>
      <h2 style={{ display: "contents" }}>Number of Result:{currentProducts.length}</h2>
      <h2>Search products<TbArrowBigRight /><input type="search" value={Search}
        placeholder="Search products"
        onChange={HandelInput} onKeyPress={handelonKeyPress} />
        <button onClick={handelCliack} className="Search">Search</button></h2>
      <table className="table">
        <thead>
          <tr style={{ backgroundColor: 'white', color: 'black' }}>
            <th className="Fdata">ID</th>
            <th>BRAND</th>
            <th>TITLE</th>
            <th>DESCRIPTION</th>
            <th>PRICE</th>
            <th>DISCOUNT</th>
            <th>RATING</th>
            <th>STOCK</th>
            <th>CATEGORY</th>
            <th>THUMBNAIL</th>
            <th>IMAGES</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.brand}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>$ {item.price}</td>
              <td>{item.discountPercentage} %</td>
              <td>{item.rating}</td>
              <td>{item.stock}</td>
              <td>{item.category}</td>
              <td style={{ padding: '0px' }}><img style={{
                width: '150px',
                height: '150px',
                // objectFit: 'cover',
              }} src={item.thumbnail} alt="Thumbnail" /></td>
              <td>
                {item.images.map((image, idx) => (
                  <a style={{ color: 'white' }} href={image} key={idx}>
                    view<br />
                    
                  </a>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={goToPreviousPage}>Previous</button>
        <span style={{ fontSize: '30px' }}>{currentPage} of {Math.ceil(Jdata.length / 10)}</span>
        <button onClick={goToNextPage}>Next</button>
      </div>
    </div>
  );
}
export default DummyProduct;




// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// function JsonProduct() {
//   const [Jdata, setJdata] = useState([]);
//   const [StoreError, setStoreError] = useState([]);
//   useEffect(() => {
//     fetchProducts();
//   },[Jdata])

//   const fetchProducts = () => {
//     const apiurl = 'https://dummyjson.com/products';
//     axios.get(apiurl)
//       .then((res) => {
//         console.log(res.data.products);
//         setJdata(res.data.products);

//         const Table = document.createElement("table")
//         // console.log(Table)
//         const HeaderRow = document.createElement("tr")

//         const HeaderDat = Object.keys(Jdata[0])
//         // console.log(HeaderDat)
//         HeaderDat.forEach((HeaderValue) => {
//           // console.log(HeaderValue)
//           const Header = document.createElement("th")
//           Header.textContent = HeaderValue
//           // console.log(HeaderValue)
//           HeaderRow.appendChild(Header)
//           // console.log(HeaderRow)
//         })
//         Table.appendChild(HeaderRow)
//         Jdata.forEach((data) => {
//           const Row = document.createElement("tr")
//           //  console.log(Row)
//           HeaderDat.forEach((tdValue) => {
//             const Td = document.createElement("td")
//             Td.textContent = data[tdValue];
//             Row.appendChild(Td)
//           });
//           Table.appendChild(Row)
//         })
//         document.body.appendChild(Table)
//         // console.log(Table)
//       })
//       // .catch((error) => {
//       //   setStoreError(error);
//       // })
//   }
//   return <>
//    <p>{StoreError.message}</p>
//   </>
// }
// export default JsonProduct;