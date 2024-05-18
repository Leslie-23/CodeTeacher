import React, { useEffect, useState } from "react";

const APIroute = () => {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    fetch("https://programming-quotesapi.vercel.app/api/random")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data); // Debugging log
        setQuote(data);
      })
      .catch((error) => console.error("Error fetching the quote:", error));
  }, []);

  const containerStyle = {
    backgroundColor: "black",
    color: "white",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    maxWidth: "600px",
    margin: "20px auto",
  };

  const quoteStyle = {
    fontSize: "1.5em",
    marginBottom: "10px",
  };

  const authorStyle = {
    fontSize: "1.2em",
    fontStyle: "italic",
  };

  return (
    <div style={containerStyle}>
      {quote.en && <div style={quoteStyle}>"{quote.en}"</div>}
      {quote.author && <div style={authorStyle}>- {quote.author}</div>}
      {quote.author && <div style={authorStyle}>- {quote.author}</div>}
    </div>
  );
};

export default APIroute;

// import React, { useEffect, useState } from "react";

// const APIroute = () => {
//   const [quote, setQuote] = useState({});

//   useEffect(() => {
//     fetch("https://programming-quotesapi.vercel.app/api/random")
//       .then((response) => response.json())
//       .then((data) => setQuote(data))
//       .catch((error) => console.error("Error fetching the quote:", error));
//   }, []);

//   const containerStyle = {
//     backgroundColor: "black",
//     color: "white",
//     padding: "20px",
//     borderRadius: "10px",
//     textAlign: "center",
//     //maxWidth: "600px",
//     margin: "20px auto",
//   };

//   const quoteStyle = {
//     fontSize: "1.5em",
//     marginBottom: "10px",
//   };

//   const authorStyle = {
//     fontSize: "1.2em",
//     fontStyle: "italic",
//   };

//   return (
//     <div style={containerStyle}>
//       {quote && quote.en && <div style={{ quoteStyle }}>"{quote.en}"</div>}
//       {quote && quote.author && (
//         <div style={{ authorStyle }}>- {quote.author}</div>
//       )}
//     </div>
//   );
// };

// export default APIroute;

// import React, { useEffect, useState } from "react";

// const APIroute = () => {
//   const [quote, setQuote] = useState("");

//   useEffect(async () => {
//     fetch("https://programming-quotesapi.vercel.app/api/random")
//       .then((response) => response.json())
//       .then((data) => {
//         setQuote(data);
//       })
//       .catch((error) => console.error("Error fetching the quote:", error));
//   }, []);

//   const containerStyle = {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "auto",
//     backgroundColor: "black",
//     color: "white",
//     padding: "20px",
//     textAlign: "center",
//     fontFamily: "Arial, sans-serif",
//   };

//   const quoteStyle = {
//     fontSize: "1.5em",
//     marginBottom: "20px",
//   };

//   const authorStyle = {
//     fontSize: "1.2em",
//     fontStyle: "italic",
//   };

//   return (
//     <div style={containerStyle}>
//       <div style={quoteStyle}>{quote.en}</div>
//       <div style={authorStyle}>- {quote.author}</div>
//     </div>
//   );
// };

// export default APIroute;
