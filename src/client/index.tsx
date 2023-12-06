import React from "react"
import {createRoot} from "react-dom/client"
import App from "./packs/mon_hello/App"

const rootE1 = document.querySelector("#root")
if(!rootE1) throw new Error("Cannot find root element with that id");
const root = createRoot(rootE1);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);