import React from 'react';
import {createRoot} from "react-dom/client";
import Header from "./components/Heaeder";
import Main from "./components/Main";

let root = document.getElementById("root");
let reactRoot = createRoot(root);
reactRoot.render(<><Header></Header> <Main></Main></>);