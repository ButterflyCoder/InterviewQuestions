import React from "react";
import "./styles.css";

export const left = () => <h1>left</h1>;
export const right = () => <h1>right</h1>;

const TwoColumnLayout = (props) => {
  return <div>TwoColumnLayout</div>;
};

export default function App() {
  return (
    <div className="App">
      <TwoColumnLayout left={left} right={right}></TwoColumnLayout>
    </div>
  );
}
