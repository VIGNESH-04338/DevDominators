import React from "react";

function Event() {
  return (
    <>
      <style>{`
        .dashboard{
          background-color:#f4f6f9;
          min-height:100vh;
          padding:40px;
          text-align: center;
        }

        .dashboard h1{
          color:#333;
        }

        .dash-cards{
          display:flex;
          gap:20px;
          flex-wrap:wrap;
        }

        .dash-card{
          background:rgb(79, 106, 160);
          padding:20px;
          border-radius:10px;
          box-shadow:0 4px 10px rgba(0,0,0,0.1);
          margin:20px;
          color:white;
          width:200px;
          text-align:center;
        }
      `}</style>

      <div className="dashboard">
        <h1>Events Dashboard</h1>

        <div className="dash-cards">

          <div className="dash-card">
            <h3>Total Events</h3>
            <p>15</p>
          </div>

          <div className="dash-card">
            <h3>Participants</h3>
            <p>320</p>
          </div>

          <div className="dash-card">
            <h3>Registrations</h3>
            <p>450</p>
          </div>

        </div>
      </div>
    </>
  );
}

export default Event;


// import React from "react";

// function Event() {
//   return (
//     <>
//         <div className="dash-dashboard">

//         <h1>Events Dashboard</h1>

//         <div className="dash-cards">

//             <div className="dash-card">
//             <h3>Total Events</h3>
//             <p>15</p>
//             </div>

//             <div className="dash-card">
//             <h3>Participants</h3>
//             <p>320</p>
//             </div>

//             <div className="dash-card">
//             <h3>Registrations</h3>
//             <p>450</p>
//             </div>

        

//         </div>

//         </div>
//     </>
//   );
// }

// export default Event;