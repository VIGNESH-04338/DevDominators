// import React from "react";

// function Dashboard() {

//   const registeredEvents = [
//     { id: 1, event: "Hackathon", date: "12 Aug 2026", status: "Approved" },
//     { id: 2, event: "Web Design", date: "18 Aug 2026", status: "Pending" },
//     { id: 3, event: "AI Workshop", date: "22 Aug 2026", status: "Approved" }
//   ];

  // return (
  //   <div style={{ padding: "30px", fontFamily: "Arial", background: "#f5f7fb", minHeight: "100vh" }}>
      
  //     {/* Header */}
  //     <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
  //       <h1>User Dashboard 🎉</h1>
  //       <button style={logoutBtn}>Logout</button>
  //     </div>

  //     <p>Welcome! You have successfully logged in.</p>

  //     {/* Dashboard Cards */}
  //     <div style={cardContainer}>

  //       <div style={card}>
  //         <h2>{registeredEvents.length}</h2>
  //         <p>Registered Events</p>
  //       </div>

  //       <div style={card}>
  //         <h2>5</h2>
  //         <p>Available Events</p>
  //       </div>

  //       <div style={card}>
  //         <h2>2</h2>
  //         <p>Approved Events</p>
  //       </div>

  //     </div>

  //     {/* Event Table */}
  //     <div style={tableBox}>
  //       <h2>My Event Registrations</h2>

  //       <table style={table}>
  //         <thead>
  //           <tr style={{ background: "#2c3e50", color: "white" }}>
  //             <th style={cell}>ID</th>
  //             <th style={cell}>Event Name</th>
  //             <th style={cell}>Date</th>
  //             <th style={cell}>Status</th>
  //           </tr>
  //         </thead>

  //         <tbody>
  //           {registeredEvents.map((event) => (
  //             <tr key={event.id}>
  //               <td style={cell}>{event.id}</td>
  //               <td style={cell}>{event.event}</td>
  //               <td style={cell}>{event.date}</td>
  //               <td
  //                 style={{
  //                   ...cell,
  //                   color: event.status === "Approved" ? "green" : "orange",
  //                   fontWeight: "bold"
  //                 }}
  //               >
  //                 {event.status}
  //               </td>
  //             </tr>
  //           ))}
  //         </tbody>

  //       </table>
  //     </div>

  //   </div>
//   );
// }

// const cardContainer = {
//   display: "grid",
//   gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
//   gap: "20px",
//   marginTop: "30px",
// };

// const card = {
//   background: "white",
//   padding: "20px",
//   borderRadius: "10px",
//   boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//   textAlign: "center",
// };

// const tableBox = {
//   marginTop: "40px",
//   background: "white",
//   padding: "20px",
//   borderRadius: "10px",
//   boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
// };

// const table = {
//   width: "100%",
//   borderCollapse: "collapse",
//   marginTop: "20px",
// };

// const cell = {
//   padding: "10px",
//   borderBottom: "1px solid #ddd",
//   textAlign: "left",
// };

// const logoutBtn = {
//   padding: "10px 20px",
//   border: "none",
//   background: "#e74c3c",
//   color: "white",
//   borderRadius: "5px",
//   cursor: "pointer",
// };

// export default Dashboard;


import React, { useState } from "react";

function Dashboard() {

  const [open, setOpen] = useState(false);

  const registeredEvents = [
    { id: 1, event: "Hackathon", date: "12 Aug 2026", status: "Approved" },
    { id: 2, event: "Web Design", date: "18 Aug 2026", status: "Pending" },
    { id: 3, event: "AI Workshop", date: "22 Aug 2026", status: "Approved" }
  ];

  return (
    <div style={{ padding: "30px", fontFamily: "Arial", background: "#f5f7fb", minHeight: "100vh" }}>

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>User Dashboard 🎉</h1>

        {/* Profile Dropdown */}
        <div style={{ position: "relative" }}>

          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt="profile"
            onClick={() => setOpen(!open)}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              cursor: "pointer",
              border: "gray"
            }}
          />

          {open && (
            <div style={{
              position: "absolute",
              right: "0",
              top: "50px",
              background: "white",
              width: "150px",
              borderRadius: "8px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
            }}>

              <p style={menuItem}>Settings</p>
              <p style={menuItem}>Help</p>
              <p style={{ ...menuItem, color: "red" }}>Logout</p>

            </div>
          )}

        </div>
      </div>

      <p>Welcome! You have successfully logged in.</p>

      {/* Dashboard Cards */}
      <div style={cardContainer}>

        <div style={card}>
          <h2>{registeredEvents.length}</h2>
          <p>Registered Events</p>
        </div>

        <div style={card}>
          <h2>5</h2>
          <p>Available Events</p>
        </div>

        <div style={card}>
          <h2>2</h2>
          <p>Approved Events</p>
        </div>

      </div>

      {/* Event Table */}
      <div style={tableBox}>
        <h2>My Event Registrations</h2>

        <table style={table}>
          <thead>
            <tr style={{ background: "#2c3e50", color: "white" }}>
              <th style={cell}>ID</th>
              <th style={cell}>Event Name</th>
              <th style={cell}>Date</th>
              <th style={cell}>Status</th>
            </tr>
          </thead>

          <tbody>
            {registeredEvents.map((event) => (
              <tr key={event.id}>
                <td style={cell}>{event.id}</td>
                <td style={cell}>{event.event}</td>
                <td style={cell}>{event.date}</td>
                <td
                  style={{
                    ...cell,
                    color: event.status === "Approved" ? "green" : "orange",
                    fontWeight: "bold"
                  }}
                >
                  {event.status}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
}

/* Styles */

const cardContainer = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
  gap: "20px",
  marginTop: "30px"
};

const card = {
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  textAlign: "center"
};

const tableBox = {
  marginTop: "40px",
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
};

const table = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "20px"
};

const cell = {
  padding: "10px",
  borderBottom: "1px solid #ddd",
  textAlign: "left"
};

const menuItem = {
  padding: "12px",
  borderBottom: "1px solid #eee",
  cursor: "pointer"
};

export default Dashboard;