import { IoEye, IoEyeOff } from "react-icons/io5";
import { useState } from "react";
const App = () => {
  const [password, setPassword] = useState(true);
  const clickEyeHandler = () => {
    setPassword(!password);
  };
  return (
    <>
      <h1 className="heading">React Password Component</h1>
      <div className="box">
        <label>Enter Password:-</label>
        <div className="wrapper">
          <input
            type={password ? "password" : "text"}
            placeholder="Enter Password"
          />
          <div className="icon">
            {password ? (
              <IoEye className="eye" onClick={clickEyeHandler} />
            ) : (
              <IoEyeOff className="eye" onClick={clickEyeHandler} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
