import { Url } from "url";

export class Pokemon {
    apiBaseUrl: string = "https://pokeapi.co/api/v2";

    constructor() {
        //TODO
        this.getListData();
    }

    private getListData() {
        fetch(this.apiBaseUrl + "/pokemon/?limit=100").then((resp) => {
            return resp.json().then((data) => {
                let list = data.results;
                console.table(list);
            });
        });
    }
}
