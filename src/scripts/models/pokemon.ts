import { Url } from "url";

export class Pokemon {
    private apiBaseUrl: string = "https://pokeapi.co/api/v2";
    public list: Array<any>;

    constructor() {
        //TODO
        this.getListData();
    }

    public async getListData() {
        return fetch(this.apiBaseUrl + "/pokemon/?limit=100").then((resp) => {
            return resp.json().then((data) => {
                this.list = data.results;
                console.log("pokedata received ", this.list.length);
            });
        });
    }
}
