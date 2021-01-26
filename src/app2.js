import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./app.scss";
import Button from "./components/button/button";
import CardModel from "./components/card-model/card-model";

const App = () => {
  return (
    <div>
      {/* <CardModel /> */}
      <Button />
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
