// import React, { useState } from "react";

// const EmailVerifier = () => {
//   const [email, setEmail] = useState("");
//   const [isValid, setIsValid] = useState(false);

//   const handleEmailChange = (e) => {
//     const regex = /^[A-Za-z0-9]+@[A-Za-z]+\.[A-Z]{2,4}$/i;
//     const isValidEmail = regex.test(e.target.value);
//     setEmail(e.target.value);
//     setIsValid(isValidEmail);
//   };

//   return (
//     <div>
//       <label>
//         Email:
//         <input type="text" value={email} onChange={handleEmailChange} />
//       </label>
//       {isValid ? <p></p> : <p>Email is invalid</p>}
//     </div>
//   );
// };

// export default EmailVerifier;
import React, { useState } from "react";

const EmailVerifier = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleEmailChange = (e) => {
    const regex = /^\S+@\S+\.\S+$/;
    const isValidEmail = regex.test(e.target.value);
    setEmail(e.target.value);
    setIsValid(isValidEmail);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      alert("Email is valid");
    } else {
      alert("Email is invalid");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="text" value={email} onChange={handleEmailChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EmailVerifier;
