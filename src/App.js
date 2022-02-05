// import React, { useState } from "react";
// import data from "./data";
// function App() {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState([]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // console.log("hello");
//     console.log(typeof count);
//     let amount = parseInt(count);
//     if (count <= 0) {
//       amount = 0;
//     }
//     if (count > 8) {
//       amount = 8;
//     }
//     setText(data.slice(0, amount));
//   };

//   return (
//     <section className="section-center">
//       <h3> tired of boring lorem ipsum, max 8 paragraphs </h3>
//       <form className="lorem-form" onSubmit={handleSubmit}>
//         <label htmlFor="amount">paragraphs</label>
//         <input
//           type="number"
//           name="amount"
//           id="amount"
//           value={count}
//           onChange={(event) => {
//             setCount(event.target.value);
//           }}
//         />
//         <button type="submit" className="btn">
//           generate
//         </button>
//       </form>
//       <article className="lorem-text">
//         {text.map((item, index) => {
//           return <p key={index}>{item}</p>;
//         })}
//       </article>
//     </section>
//   );
// }

// export default App;

import React, { useState } from "react";
import data from "./data";

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(typeof count);
    let amount = parseInt(count);
    console.log(typeof amount);

    if (count <= 0) {
      amount = 0;
      alert("please enter positive number");
    }
    if (count > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  };
  return (
    <section className="section-center">
      <h2>tired of boring lorem ipsum</h2>
      <form className="lorem-form">
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(event) => {
            setCount(event.target.value);
          }}
        />
        <button type="submit" className="btn" onClick={handleSubmit}>
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
};

export default App;
