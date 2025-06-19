import { useState } from "react";

function App() {
  const [name, setName] = useState(""); // 1 hook
  const [showName, setShowName] = useState(false);

  console.log(name);

  const handleOnChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handleSubmit = () => {
    setShowName(true);
  };

  return (
    <div>
      <input
        name="name"
        placeholder="Enter Your Name"
        onChange={handleOnChange}
      />
      <button onClick={handleSubmit}>Submit</button>

      {showName && <h1>{name}</h1>}
    </div>
  );
}

export default App;