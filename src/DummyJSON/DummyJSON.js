import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Style from './DummyJSON.module.css';

function DummyJSON() {
    const [JsonData, setJsonData] = useState([]);
    const [SearchValue, setSearchValue] = useState("");
    const [dataType, setDataType] = useState('');
    const [Url, setUrl] = useState('');
    const [showData, setshowData] = useState(false);
    const [StoreError, setStoreError] = useState('');
    const [Status, setStatus] = useState('');
    const FetchData = async (ApiUrl) => {
       await axios.get(ApiUrl)
            .then((res) => {
                if (dataType === 'Products') {
                    setJsonData(res.data.products);
                } else if (dataType === 'Carts') {
                    setJsonData(res.data.carts);
                } else if (dataType === 'Users') {
                    setJsonData(res.data.users);
                } else if (dataType === 'Posts') {
                    setJsonData(res.data.posts);
                } else if (dataType === 'comments') {
                    setJsonData(res.data.comments);
                } else if (dataType === 'todos') {
                    setJsonData(res.data.todos);
                } else if (dataType === 'quotes') {
                    setJsonData(res.data.quotes);
                }
            })
            .catch((error) => {
                setStoreError(error.message);
            });
          };
    const HandelProduct = () => {
        setUrl('https://dummyjson.com/products');
        setDataType('Products');
    };

    const HandelCarts = () => {
        setUrl('https://dummyjson.com/carts');
        setDataType('Carts');
    };

    const HandelUser = () => {
        setUrl('https://dummyjson.com/users');
        setDataType('Users');
    };

    const HandelPosts = () => {
        setUrl('https://dummyjson.com/posts');
        setDataType('Posts');
    };

    const HandelComment = () => {
        setUrl('https://dummyjson.com/comments');
        setDataType('comments');
    };

    const HandelTodos = () => {
        setUrl('https://dummyjson.com/todos');
        setDataType('todos');
    };

    const HandelQuotes = () => {
        setUrl('https://dummyjson.com/quotes');
        setDataType('quotes');
    };

    useEffect(() => {
        FetchData(Url);
    }, [dataType]);
    const IsImage = (url) => {
        // console.log(url)
        return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url)
    }
    const handleArray = (data) => {
        return data.map((item, index) => {
            // console.log(typeof item)
            if (typeof item === 'string') {
                if (IsImage(item)) {
                    return (<img key={index} style={{ margin: '10px', objectFit: 'cover', width: '150px', height: '100px' }} src={item} alt="Image here" />)
                } else {
                    <span key={index}>{item}<br /></span>
                }
            }
            else if (typeof item === 'number') {
                return (
                    <span key={index}>{item}<br /></span>
                )
            } else if (typeof item === 'object') {
                // return Object.keys(item).map((key) => (
                //     <span key={key}>
                //       {console.log(item[key])}
                //     {key}: {item[key]}<br/>
                //   </span>
                // ));
                handleObject(item)
            }
        });
    };
    const handleObject = (data) => {
        return Object.keys(data).map((key, index) => {
            const value = data[key];
            let renderedValue;

            if (typeof value === 'object') {
                if (Array.isArray(value)) {
                    renderedValue = handleArray(value);
                } else {
                    renderedValue = handleObject(value);
                }
            } else if (typeof value === 'boolean') {
                renderedValue = handleBoolean(value);
            } else {
                renderedValue = handleOther(value);
            }

            return (
                <div key={index}>
                    <span>{key}: </span>
                    <div>{renderedValue}</div>
                </div>
            );
        });
    };

    const handleBoolean = (data) => {
        return <span>{data.toString()}</span>;
    };

    const handleOther = (data) => {
        if (IsImage(data)) {
            return <img style={{ width: '150px', height: '100px', objectFit: 'cover' }} src={data} alt="Image here" />;
        } else {
            return <span>{data}</span>;
        }
    };
    const handelonKeyPress = (e) => {
        if (e.key === 'Enter') {
            handelCliack();
        }
    }
    const handelCliack = () => {
        const AllfilterData = JsonData.filter((data) => {
            // console.log(data)
            const values = Object.values(data).join('');
            return values.toLowerCase().includes(SearchValue.toLowerCase())
        });
        if (AllfilterData.length === 0) {
            setshowData(true);
            setJsonData([]);
        } else {
            setshowData(false);
            setJsonData(AllfilterData)
        }
    }
    return (
        <>
            <div className="container-fluid">
                <div className="row bg-primary" style={{ height: '55px', alignItems: 'center' }}>
                    <div className="col header" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ fontSize: '38px', color: 'white', fontFamily: 'fantasy' }}  >dummyJSON</div>
                        <div className={Style.inputField}>
                            <input type="search" placeholder="Search product"
                                onChange={(e) => setSearchValue(e.target.value)} onKeyPress={handelonKeyPress}/>
                            <button onClick={handelCliack}> search</button>
                            <button onClick={() => window.location.reload()}>Reload</button>
                        </div>
                        <div className={Style.headerAtag}>
                            <a href="https://dummyjson.com/" target="_blank">Home</a>
                            <a target="_blank" href="https://dummyjson.com/docs">Docs</a>
                            <a target="_blank" href="https://github.com/Ovi/DummyJSON">Github</a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className={`col-1 ${Style.buttonStyle}`}>
                        <button onClick={HandelProduct} type="button" className="btn btn-secondary">
                            Products
                        </button>
                        <button onClick={HandelCarts} type="button" className="btn btn-secondary">
                            Carts
                        </button>
                        <button onClick={HandelUser} type="button" className="btn btn-secondary">
                            User
                        </button>
                        <button onClick={HandelPosts} type="button" className="btn btn-secondary">
                            Post
                        </button>
                        <button onClick={HandelComment} type="button" className="btn btn-secondary">
                            Comments
                        </button>
                        <button onClick={HandelTodos} type="button" className="btn btn-secondary">
                            Todos
                        </button>
                        <button onClick={HandelQuotes} type="button" className="btn btn-secondary">
                            Quotes
                        </button>
                    </div>
                    <div className={`col-11 ${Style.containt}`}>
                        <p className={Style.Error}>{StoreError}</p>
                        {JsonData.length === 0 ? (
                            <>{showData ? (
                                <p>No Result Found</p>
                            ) : (
                                <>
                                    <div style={{ display: 'flex', justifyContent: 'center', fontSize: '50px', fontWeight: 'bold' }}>DummyJSON</div>
                                    <p style={{ fontWeight: '800', fontSize: '30px' }}>
                                        Get dummy/fake JSON data to use as a placeholder in development or in prototype testing.
                                    </p>
                                    <p>
                                        DummyJSON can be used with any type of frontend project that needs products, carts, users, todos, or any dummy data in JSON format.
                                        You can use examples below to check how DummyJSON works.
                                        Feel free to enjoy it in your awesome projects<br />
                                        With FakeProductsAPI, what you get is different types of REST Endpoints filled with JSON data which you can use in developing the frontend with your favorite framework and library without worrying about writing a backend.
                                    </p>
                                </>
                            )}

                            </>
                        ) : (
                            <div className={Style.Demo}>
                                <table className={Style.table}>
                                    <thead className={Style.thead}>
                                        <tr className={Style.tableRow}>
                                            {Object.keys(JsonData[0]).map((HeaderValue, index) => (
                                                <th className={Style.tableHead} key={index}>
                                                    {HeaderValue}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            JsonData.map((Data, index) => (
                                                <tr className={Style.tableRow} key={index}>
                                                    {Object.keys(Data).map((tdValue, index) => {
                                                        const value = Data[tdValue];
                                                        let renderedValue;

                                                        if (typeof value === 'object') {
                                                            if (Array.isArray(value)) {
                                                                renderedValue = handleArray(value);
                                                            } else {
                                                                renderedValue = handleObject(value);
                                                            }
                                                        } else if (typeof value === 'boolean') {
                                                            renderedValue = handleBoolean(value);

                                                        } else {
                                                            renderedValue = handleOther(value);
                                                        }

                                                        return (

                                                            <td className={Style.tableData} key={index}>
                                                                {renderedValue}
                                                            </td>
                                                        );
                                                    })}
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default DummyJSON;
