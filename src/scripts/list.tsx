import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/hello";
import { Card } from "./components/card/card";

(function(){
    ReactDOM.render(
        <div>
            <Hello compiler="TypeScript" framework="React" />
            <Card />
        </div>,
        document.getElementById("ReactDiv")
    );
})()