import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {

const navigate = useNavigate();

const handleLogin = () => {

alert("Login Successful! Redirecting to Dashboard...");

navigate("/dashboard");

};

return (
<> 
  <style>{`
      .login-page{
      min-height:90vh;
      background:#e5e5e5;
      display:flex;
      justify-content:center;
      align-items:center;
      }

    .login-card{
      background:white;
      padding:40px;
      width:350px;
      border-radius:10px;
      box-shadow:0 8px 20px rgba(0,0,0,0.15);
      text-align:center;
    }

    .login-title{
      margin-bottom:25px;
      color:#0f6b3c;
    }

    .login-input{
      width:100%;
      padding:12px;
      margin-bottom:15px;
      border:1px solid #ccc;
      border-radius:5px;
      font-size:14px;
    }

    .login-btn{
      width:100%;
      padding:12px;
      background:#ff4d1c;
      border:none;
      color:white;
      font-weight:bold;
      border-radius:5px;
      cursor:pointer;
      transition:0.3s;
    }

    .login-btn:hover{
      background:#e63e12;
    }

    .login-text{
      margin-top:15px;
      font-size:14px;
    }

    .login-link{
      color:#ff4d1c;
      cursor:pointer;
      font-weight:600;
    }
  `}</style>

  <div className="login-page">
    <div className="login-card">
      <h2 className="login-title">Login</h2>

      <input
        type="text"
        placeholder="Username"
        className="login-input"
      />

      <input
        type="password"
        placeholder="Password"
        className="login-input"
      />

      <button className="login-btn" onClick={handleLogin}>
        Login
      </button>

      <p className="login-text">
        Don't have an account? <span className="login-link">Register</span>
      </p>
    </div>
  </div>
</>

);
}

export default Login;


// import React from "react";
// import { useNavigate } from "react-router-dom";

// function Login() {

// const navigate = useNavigate();

// const handleLogin = () => {
// navigate("/dashboard");
// };

// return (
// <> 
// <style>{`
//     .login-page{
//     min-height:90vh;
//     background:#e5e5e5;
//     display:flex;
//     justify-content:center;
//     align-items:center;
//     }


//     .login-card{
//       background:white;
//       padding:40px;
//       width:350px;
//       border-radius:10px;
//       box-shadow:0 8px 20px rgba(0,0,0,0.15);
//       text-align:center;
//     }

//     .login-title{
//       margin-bottom:25px;
//       color:#0f6b3c;
//     }

//     .login-input{
//       width:100%;
//       padding:12px;
//       margin-bottom:15px;
//       border:1px solid #ccc;
//       border-radius:5px;
//       font-size:14px;
//     }

//     .login-btn{
//       width:100%;
//       padding:12px;
//       background:#ff4d1c;
//       border:none;
//       color:white;
//       font-weight:bold;
//       border-radius:5px;
//       cursor:pointer;
//       transition:0.3s;
//     }

//     .login-btn:hover{
//       background:#e63e12;
//     }

//     .login-text{
//       margin-top:15px;
//       font-size:14px;
//     }

//     .login-link{
//       color:#ff4d1c;
//       cursor:pointer;
//       font-weight:600;
//     }
//   `}</style>

//   <div className="login-page">
//     <div className="login-card">
//       <h2 className="login-title">Login</h2>

//       <input
//         type="text"
//         placeholder="Username"
//         className="login-input"
//       />

//       <input
//         type="password"
//         placeholder="Password"
//         className="login-input"
//       />

//       <button className="login-btn" onClick={() => navigate("/dashboard")}>
//         Login
//       </button>

//       <p className="login-text">
//         Don't have an account? <span className="login-link">Register</span>
//       </p>
//     </div>
//   </div>
// </>

// );
// }

// export default Login;



// // import React from "react";

// // function Login() {
// //   return (
// //     <>
// //       <style>{`
// //         .login-page{
// //           min-height:90vh;
// //           background:#e5e5e5;
// //           display:flex;
// //           justify-content:center;
// //           align-items:center;
// //         }

// //         .login-card{
// //           background:white;
// //           padding:40px;
// //           width:350px;
// //           border-radius:10px;
// //           box-shadow:0 8px 20px rgba(0,0,0,0.15);
// //           text-align:center;
// //         }

// //         .login-title{
// //           margin-bottom:25px;
// //           color:#0f6b3c;
// //         }

// //         .login-input{
// //           width:100%;
// //           padding:12px;
// //           margin-bottom:15px;
// //           border:1px solid #ccc;
// //           border-radius:5px;
// //           font-size:14px;
// //         }

// //         .login-btn{
// //           width:100%;
// //           padding:12px;
// //           background:#ff4d1c;
// //           border:none;
// //           color:white;
// //           font-weight:bold;
// //           border-radius:5px;
// //           cursor:pointer;
// //           transition:0.3s;
// //         }

// //         .login-btn:hover{
// //           background:#e63e12;
// //         }

// //         .login-text{
// //           margin-top:15px;
// //           font-size:14px;
// //         }

// //         .login-link{
// //           color:#ff4d1c;
// //           cursor:pointer;
// //           font-weight:600;
// //         }
// //       `}</style>

// //       <div className="login-page">
// //         <div className="login-card">
// //           <h2 className="login-title">Login</h2>

// //           <input
// //             type="text"
// //             placeholder="Username"
// //             className="login-input"
// //           />

// //           <input
// //             type="password"
// //             placeholder="Password"
// //             className="login-input"
// //           />

// //           <button className="login-btn">
// //             Login
// //           </button>

// //           <p className="login-text">
// //             Don't have an account? <span className="login-link">Register</span>
// //           </p>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // export default Login;


// // import React from "react";

// // function Login() {
// //   return (
// //     <div style={{ textAlign: "center", marginTop: "100px" }}>
// //       <h1>Login Page</h1>

// //       <input type="text" placeholder="Username" /><br /><br />
// //       <input type="password" placeholder="Password" /><br /><br />

// //       <button>Login</button>
// //     </div>
// //   );
// // }

// // export default Login;