import { Url } from "url";


/// This class is purely for communicating with the pokeapi and caching the results

export class PokeApi {
    private apiBaseUrl: string = "https://pokeapi.co/api/v2";
    public list: Array<pokemon.Pokemon>;

    constructor() {
        //TODO
    }

    public async getListData() {
        return fetch(this.apiBaseUrl + "/pokemon/?limit=50").then((resp) => {
            return resp.json().then((data) => {
                this.list = data.results;
                console.log(`pokedata received (${this.list.length})`);
            });
        });
    }

    public async getCardData(item: any, url: string) {
        debugger;
        return fetch(this.apiBaseUrl + url).then((resp) => {
            return resp.json().then((data) => {
                console.log(`carddata received ${data.name} (${data.weight})`);
                return data;
            });
        });
    }
}


declare module pokemon {

    export interface Sprites {
        back_female?: any;
        back_shiny_female?: any;
        back_default: string;
        front_female?: any;
        front_shiny_female?: any;
        back_shiny: string;
        front_default: string;
        front_shiny: string;
    }

    export interface Species {
        url: string;
        name: string;
    }

    export interface Version {
        url: string;
        name: string;
    }

    export interface GameIndice {
        version: Version;
        game_index: number;
    }

    export interface Type2 {
        url: string;
        name: string;
    }

    export interface Type {
        slot: number;
        type: Type2;
    }

    export interface Pokemon {
        url: string;
        forms: any[];
        abilities: any[];
        stats: any[];
        name: string;
        weight: number;
        moves: any[];
        sprites: Sprites;
        held_items: any[];
        location_area_encounters: string;
        height: number;
        is_default: boolean;
        species: Species;
        id: number;
        order: number;
        game_indices: GameIndice[];
        base_experience: number;
        types: Type[];
    }
}
