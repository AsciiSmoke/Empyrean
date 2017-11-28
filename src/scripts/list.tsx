import * as React from "react";
import * as ReactDOM from "react-dom";

import { Pokemon } from "./models/pokemon";
import { Hello } from "./components/hello";
import { Card } from "./components/card/card";

(function () {
    let poke = new Pokemon();

    poke.getListData().then(() => {
        // TODO: Move card rendering into a separate method and call after promise completes
        ReactDOM.render(
            <div className="grid">
                [{poke.list.length}]
                {
                    poke.list.map((item) => {
                        return <Card name="{{item}}" />
                    })
                }
            </div>,
            document.getElementById("ReactDiv")
        );
    });
})();
