import * as React from "react";
import * as ReactDOM from "react-dom";

import { Pokemon } from "./models/pokemon";
import { Hello } from "./components/hello";
import { Card } from "./components/card/card";

(function () {
    let poké = new Pokemon();

    poké.getListData().then(() => {
        ReactDOM.render(
            <div className="grid">
                {
                    poké.list.map((item, index) => {
                        return <Card key={item.name} name={item.name} />
                    })
                }
            </div>,
            document.getElementById("ReactDiv")
        );
    });
})();
