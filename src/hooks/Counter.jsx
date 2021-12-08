import React, {  useState } from "react";
import useDocumentTitle from "./useDocumentTitle";


function Counter(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useDocumentTitle(`${name} has clicked ${count} times!`);

  return (
    <div style={{ margin: "2rem 0" }}>
      <div>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        Counter: {count}
        <button  style={{ display: 'block' , margin:'0 auto'}} onClick={() => setCount(count + 1)}>Increment</button>
      </div>
       <p> {name} has clicked {count} times!!!</p>
    </div>
  );
}

export default Counter;
