import React from 'react';
import {createRoot} from "react-dom/client";
import App from "./src/components/App";

let root = document.getElementById("root")!;
let reactRoot = createRoot(root);
reactRoot.render(<><App/></>);