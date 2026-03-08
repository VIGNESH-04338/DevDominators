// import React from "react";

// function Register() {
//   return (
//     <>
//       <style>{`
//         .register-page{
//           min-height:90vh;
//           background:#e5e5e5;
//           display:flex;
//           justify-content:center;
//           align-items:center;
//         }

//         .register-card{
//           background:white;
//           padding:40px;
//           width:350px;
//           border-radius:10px;
//           box-shadow:0 8px 20px rgba(0,0,0,0.15);
//           text-align:center;
//         }

//         .register-title{
//           margin-bottom:25px;
//           color:#0f6b3c;
//         }

//         .register-input{
//           width:100%;
//           padding:12px;
//           margin-bottom:15px;
//           border:1px solid #ccc;
//           border-radius:5px;
//           font-size:14px;
//         }

//         .register-btn{
//           width:100%;
//           padding:12px;
//           background:#ff4d1c;
//           border:none;
//           color:white;
//           font-weight:bold;
//           border-radius:5px;
//           cursor:pointer;
//           transition:0.3s;
//         }

//         .register-btn:hover{
//           background:#e63e12;
//         }

//         .register-text{
//           margin-top:15px;
//           font-size:14px;
//         }

//         .register-link{
//           color:#ff4d1c;
//           cursor:pointer;
//           font-weight:600;
//         }
//       `}</style>

//       <div className="register-page">
//         <div className="register-card">
//           <h2 className="register-title">Register</h2>

//           <form>
//             <input type="text" placeholder="Username" className="register-input" />
//             <input type="email" placeholder="Email" className="register-input" />
//             <input type="password" placeholder="Password" className="register-input" />

//             <button type="submit" className="register-btn">
//               Register
//             </button>
//           </form>

//           <p className="register-text">
//             Already have an account? <span className="register-link">Login</span>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Register;


// import React from "react";
// import { useNavigate } from "react-router-dom";


// function Register() {
//   const navigate = useNavigate();
  
//   const handleLogin = () => {
  
//   alert("Registered Successful! Redirecting to Dashboard...");
  
//   navigate("/dashboard");
  
//   };
//   return (
//     <>
//       <style>{`
//         .register-page{
//           min-height:90vh;
//           background:#e5e5e5;
//           display:flex;
//           justify-content:center;
//           align-items:center;
//         }

//         .register-card{
//           background:white;
//           padding:40px;
//           width:400px;
//           border-radius:10px;
//           box-shadow:0 8px 20px rgba(0,0,0,0.15);
//           text-align:center;
//         }
        


//         .register-title{
//           margin-bottom:25px;
//           color:#0f6b3c;
//           font-size: 28px
//         }

//         .register-input{
//           width:100%;
//           padding:12px;
//           margin-bottom:20px;
//           border:1px solid #ccc;
//           border-radius:5px;
//           font-size:14px;
//         }

//         .register-btn{
//           width:100%;
//           padding:12px;
//           background:#ff4d1c;
//           border:none;
//           color:white;
//           font-weight:bold;
//           border-radius:5px;
//           cursor:pointer;
//           transition:0.3s;
//         }

//         .register-btn:hover{
//           background:#e63e12;
//         }

//         .register-text{
//           margin-top:15px;
//           font-size:14px;
//         }

//         .register-link{
//           color:#ff4d1c;
//           cursor:pointer;
//           font-weight:600;
//         }

//         .register-name{
//           display : flex;
//           gap: 5px
//         }
//       `}</style>

//       <div className="register-page">
//         <div className="register-card">
//           <h2 className="register-title" >Online Registration</h2>
//           <div className="register-name">
//             <input
//               type="text"
//               placeholder=" First name"
//               className="register-input"
//             />
//             <input
//               type="text"
//               placeholder="Last name"
//               className="register-input"
//             />
//           </div>
//           <input
//               type="email"
//               placeholder="Email"
//               className="register-input"
//             />
//           <input
//             type="password"
//             placeholder="Password"
//             className="register-input"
//           />
//           <input
//             type="password"
//             placeholder="Confirm Password"
//             className="register-input"
//           />

//           <button className="register-btn">
//             Register
//           </button>

//           <p className="register-text">
//             Already have an account? <span className="register-link">Login</span>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Register;

import React from "react";
import { useNavigate } from "react-router-dom";

function Register() {
const navigate = useNavigate();

const handleRegister = () => {
alert("Registered Successfully! Redirecting to Dashboard...");
navigate("/dashboard");
};

return (
<> <style>{`
.register-page{
min-height:90vh;
background:#e5e5e5;
display:flex;
justify-content:center;
align-items:center;
}

    .register-card{
      background:white;
      padding:40px;
      width:400px;
      border-radius:10px;
      box-shadow:0 8px 20px rgba(0,0,0,0.15);
      text-align:center;
    }

    .register-title{
      margin-bottom:25px;
      color:#0f6b3c;
      font-size:28px;
    }

    .register-input{
      width:100%;
      padding:12px;
      margin-bottom:20px;
      border:1px solid #ccc;
      border-radius:5px;
      font-size:14px;
    }

    .register-btn{
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

    .register-btn:hover{
      background:#e63e12;
    }

    .register-text{
      margin-top:15px;
      font-size:14px;
    }

    .register-link{
      color:#ff4d1c;
      cursor:pointer;
      font-weight:600;
    }

    .register-name{
      display:flex;
      gap:10px;
    }
  `}</style>

  <div className="register-page">
    <div className="register-card">
      <h2 className="register-title">Online Registration</h2>

      <div className="register-name">
        <input
          type="text"
          placeholder="First name"
          className="register-input"
        />
        <input
          type="text"
          placeholder="Last name"
          className="register-input"
        />
      </div>

      <input
        type="email"
        placeholder="Email"
        className="register-input"
      />

      <input
        type="password"
        placeholder="Password"
        className="register-input"
      />

      <input
        type="password"
        placeholder="Confirm Password"
        className="register-input"
      />

      <button className="register-btn" onClick={handleRegister}>
        Register
      </button>

      <p className="register-text">
        Already have an account?{" "}
        <span
          className="register-link"
          onClick={() => navigate("/login")}
        >
          Login
        </span>
      </p>
    </div>
  </div>
</>


);
}

export default Register;
