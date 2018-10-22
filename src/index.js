import React from "react";
import ReactDOM from "react-dom";


function Hi(props) {
  return <div>Hello {props.name}!</div>;
}
function HiFullName(props) {
  return (
    <div>
      Hi {props.FirstName} {props.LastName}!
    </div>
  );
}
//ReactDOM.render(<Hi name="Dave" />, document.querySelector("#root"));
ReactDOM.render(
  <HiFullName FirstName="Dave" LastName="xyz" />,
  document.querySelector("#root")
);
