import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/hello";

(function(){
    ReactDOM.render(
        <Hello compiler="TypeScript" framework="React" />,
        document.getElementById("ReactDiv")
    );
})()
