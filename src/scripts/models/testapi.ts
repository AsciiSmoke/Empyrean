import { Url } from "url";


/// This class is purely for communicating with the pokeapi and caching the results

export class TestApi {
    private apiBaseUrl: string = "https://api.magicthegathering.io/v1/";
    public list: Array<any>;

    constructor() {
        //TODO
    }

    public async getListData() {
        return fetch(this.apiBaseUrl + "cards").then((resp) => {
            return resp.json().then((data) => {
                this.list = data.cards;
                console.log(`data received (${this.list.length})`);
            });
        });
    }

    public async getCardData(item: any, url: string) {
        debugger;
        return fetch(this.apiBaseUrl + url).then((resp) => {
            return resp.json().then((data) => {
                console.log(`card data received ${data.name} (${data.weight})`);
                return data;
            });
        });
    }
}

