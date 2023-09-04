// import React, { useEffect, useState } from "react";
// import { auth, provider } from "../Firebase";
// import { Home } from "./Home";
// import { signInWithPopup } from "@firebase/auth";
// import { useNavigate } from "react-router-dom";

// function Signin() {
//   const navigate = useNavigate();

//   const signInWithGoogle = () => {
//     auth
//       .signInWithPopup(provider)
//       .then((res) => {
//         if (res) {
//           navigate("/home");
//         }
//       })
//       .catch((err) => alert(err.message));
//   };

//   return (
//     <div>
//       <button onClick={signInWithGoogle} className="login__googleBtn">
//         <span>Sign in with Google</span>
//       </button>
//     </div>
//   );
// }

// export default Signin;
