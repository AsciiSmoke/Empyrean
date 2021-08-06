import * as React from "react";
import { TestApi } from "../../models/testapi";

export class Card extends React.Component<any, {}> {
    render() {
        console.log("I am", this.props.item.name);
        return <img className="card" src={this.props.item.imageUrl} />;
    }
}
