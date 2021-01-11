import {Component, OnInit} from '@angular/core';




function getJSON(url: string): string {
    let resp ;
    let xmlHttp ;

    resp  = '' ;
    xmlHttp = new XMLHttpRequest();

    if (xmlHttp != null)
    {
        xmlHttp.open( 'GET', url, false );
        xmlHttp.send( null );
        resp = xmlHttp.responseText;
    }
    return resp ;
}

var js = getJSON('https://api.github.com/emojis');
var splitted = js.split(',');



export class EmogisService {

    static allEmote: Emote[] = [];
    static favEmote: Emote[] = [];
    static delEmote: Emote[] = [];



    static getAllEmote(): Emote[] {

        for(let i = 0;  i < splitted.length; i++) {

            let newStr = splitted[i].replace("{","").replace("}","");
            let name = newStr.split("\"")[1];
            let link = newStr.split(": \"")[1];

            let element = new Emote(name, link);
            EmogisService.allEmote.push(element)
        }
        return EmogisService.allEmote;
    }

    static getFavEmote(): Emote[] {
        return EmogisService.favEmote;
    }


    static getDelEmote(): Emote[] {
        return EmogisService.delEmote;
    }

    static addToFavFromAll(element: Emote) {
        let exist = false;
        for (let i = 0; i < this.favEmote.length; i++) {
            if (this.favEmote[i].name == element.name) {
                exist = true;
                break;
            }
        }
        if (!exist) {
            this.favEmote.push(element);

        }
    }

    static addToDelFromAll(element: Emote) {
        for (let i = 0; i < this.allEmote.length; i++) {
            if (this.allEmote[i].name == element.name) {
                let deleted = this.allEmote[i];
                this.allEmote.splice(i, 1)
                if(deleted != undefined) {
                    this.delEmote.push(deleted);
                }
                break;
            }
        }
    }


    static addToDelFromFav(element: Emote) {
        for (let i = 0; i < this.favEmote.length; i++) {
            if (this.favEmote[i].name == element.name) {
                this.favEmote.splice(i, 1)
                break;
            }
        }
    }

    static recoverFromDelToAll(element:Emote) {
        for(let i = 0; i < this.delEmote.length; i++){
            if (this.delEmote[i].name == element.name) {
                let deleted = this.delEmote[i];
                this.delEmote.splice(i, 1)

                if(deleted != undefined) {
                    this.allEmote.splice(0, 0, deleted)
                }
                break;
            }
        }
    }



}

class Emote {

    name: string;
    link: string;

    constructor(name: string, link: string) {
        this.name = name;
        this.link = link;
    }

}
