import React from 'react';
import {createRoot} from "react-dom/client";
import App from "./src/components/App";

console.log(import.meta.env.VITE_OPEN_AI);

let root = document.getElementById("root")!;
let reactRoot = createRoot(root);
reactRoot.render(<><App/></>);