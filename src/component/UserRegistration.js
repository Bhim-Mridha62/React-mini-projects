import React,{useState} from "react";
import "./UserRegistrationCSS.css";
function UserRegistration() {
  // const [firstname, setfirstname] = useState("");
  // const [lastname, setlastname] = useState("");
  // const [phon, setphon] = useState("");
  // const [email, setEmail] = useState("");
  // const [state, setstate] = useState("");
  // const [password, setpassword] = useState("");
  // const [conformpassword, setconformpassword] = useState("");
  // const [outputvalue, setoutputvalue] = useState("");
  // const [isValid, setIsValid] = useState(false);
  const [state, setstate] =useState({
    firstname: "",
    lastname: "",
    phon: "",
    state: "",
    email: "",
    isValid: "",
    password: "",
  });
  const handleInput = (e) => {
    const value = e.target.value;
    setstate({
      ...state,
      [e.target.name]: value,
    });
  };
  // const handlefirstname = (e) => {
  //   console.log("e", e.target.value);
  //   setfirstname(e.target.value);
  // };
  // const handlelastname = (e) => {
  //   setlastname(e.target.value);
  // };
  // const handlephon = (e) => {
  //   setphon(e.target.value);
  // };
  // const handleemail = (e) => {
  //   const regex = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Z]{2,4}$/i;
  //   const isValidEmail = regex.test(e.target.value);
  //   setEmail(e.target.value);
  //   setIsValid(isValidEmail);
  // };
  // const handlestate = (e) => {
  //   setstate(e.target.value);
  // };
  // const handlepassword = (e) => {
  //   setpassword(e.target.value);
  // };
  // const handleconformpassword = (e) => {
  //   setconformpassword(e.target.value);
  // };
  // const handlesubmit = (e) => {
  //   e.preventDefault();
  //   if (password == conformpassword) {
  //     var remove = document.getElementById("passwordView");
  //     var create = document.createElement("p");
  //     create.innerText = password;
  //     document.getElementById("passwordView").appendChild(create);
  //     var test = remove.hasChildNodes();
  //   }
  //   if (test) {
  //     // remove.removeChild(remove.children[0]);
  //     // console.log(remove);
  //     console.log("hello");
  //   }
  //   setoutputvalue(firstname);
  // };
  return (
    <>
      <div className="MyForm">
        {/* <form onSubmit={handlesubmit}> */}
        <form>
          <div className="registration">registration From</div>
          <div className="firstname">
            <label>
              First Name:
              <input
                type="text"
                placeholder="Enter your First Name"
                name="firstname"
                value={state.firstname}
                // onChange={handlefirstname}
                onChange={handleInput}
                required
              />
            </label>
          </div>
          <div className="lastname">
            <label For="lastname">
              Last Name:
              <input
                type="text"
                value={state.lastname}
                name="lastname"
                // onChange={handlelastname}
                onChange={handleInput}
                placeholder="Enter your Last Name"
                id="lastname"
                required
              />
            </label>
          </div>
          <div className="phon">
            <label For="phon">
              Phon Number:
              <input
                type="number"
                value={state.phon}
                name="phon"
                // onChange={handlephon}
                onChange={handleInput}
                id="phon"
                required
              />
            </label>
          </div>
          <div>
            <label For="email">
              Enter Email:
              <input
                type="email"
                id="email"
                value={state.email}
                name="email"
                // onChange={handleemail}
                onChange={handleInput}
                required
              />
            </label>
            {/* {isValid ? (
              <p></p>
            ) : (
              <p style={{ color: "red" }}>Enter a valid Email</p>
            )} */}
          </div>
          <div className="enterstate">
            <label For="enterstate">
              Select state:
              <input
                list="state"
                id="enterstate"
                value={state.state}
                name="state"
                // onChange={handlestate}
                onChange={handleInput}
              />
            </label>
            <label>
              <datalist id="state">
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Andaman and Nicobar Islands">
                  Andaman and Nicobar Islands
                </option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </datalist>
            </label>
          </div>
          <div className="password">
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                value={state.password}
                // onChange={handlepassword}
                onChange={handleInput}
                id="password"
                required
              />
            </label>
          </div>
          <div className="conformpassword">
            <label htmlFor="conformpassword">
              Conform Password:
              <input
                type="password"
                name="conformpassword"
                value={state.conformpassword}
                // onChange={handleconformpassword}
                onChange={handleInput}
                id="conformpassword"
                required
              />
            </label>
          </div>
          <button className="submit">Submit</button>
        </form>
        <div className="display">
          <h1>Input value are</h1>
          <h3>First Name:{state.firstname}</h3>
          <h3>Last Name:{state.lastname}</h3>
          <h3>Phon Number:{state.phon}</h3>
          <h3>Email:{state.email}</h3>
          {/* <h3>State:{{ state }}</h3> */}
          <h3>password: {state.password}</h3>
        </div>
      </div>
    </>
  );
}
export default UserRegistration;
