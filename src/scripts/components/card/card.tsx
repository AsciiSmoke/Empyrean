import * as React from "react";

export interface PokeProps { name: string; }

export class Card extends React.Component<PokeProps, {}> {
    render() {
        return <div className="card">{this.props.name}</div>;
    }
}
