import { Component } from '@angular/core';
import {EmogisService} from '../Emogis.service';

@Component({
    selector: 'app-home',
    templateUrl: `./home.component.html`,
    styleUrls: ['home.component.css']
})

export class HomeComponent {


    items: Emote[] = EmogisService.getAllEmote();

    addToFavs(name: string, link: string) {
        EmogisService.addToFavFromAll(new Emote(name, link))
    }

    delFromAll(name: string, link: string) {
        EmogisService.addToDelFromAll(new Emote(name, link))
    }

    checkFromFavs(name: string, link: string) {
        return EmogisService.checkFromFav(new Emote(name, link))
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

