import * as React from "react";
import * as ReactDOM from "react-dom";

import { TestApi } from "./models/testapi";
import { Hello } from "./components/hello";
import { Card } from "./components/card/card";

(function () {
    let api = new TestApi();

    api.getListData().then(() => {
        ReactDOM.render(
            <div className="grid">
                {
                    api.list.map((item, index) => {
                        return <Card key={item.name} item={item} />
                    })
                }
            </div>,
            document.getElementById("ReactDiv")
        );
    });
})();
