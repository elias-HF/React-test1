
import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";

const appDomElement = document.getElementById("app");

const root = ReactDOM.createRoot(appDomElement);


const button = React.createElement("button", { "data-id":1},"Boton 1");
const button2 = React.createElement("button", { "data-id":2},"Boton 2");
const button3 = React.createElement("button", { "data-id":3},"Boton 3");

const app = React.createElement(React.Fragment, { className: "btns" }, [button,button2,button3]);
/* JSX
<React.Fragment>
    <button data-id="1">Boton 1</button>
    <button data-id="2">Boton 2</button>
    <button data-id="3">Boton 3</button>    
</React.Fragment>
*/
root.render(app);