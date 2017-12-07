import * as React from "react";
import { TestApi } from "../../models/testapi";

export class Card extends React.Component<any, {}> {
    render() {
        console.log("I am", this.props.item.name);
        return <div className="card"><img src={this.props.item.imageUrl} /></div>;
    }
}
