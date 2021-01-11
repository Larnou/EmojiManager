import {Component} from '@angular/core';
import {EmogisService} from '../Emogis.service';

@Component({
    selector: 'app-favourite',
    templateUrl: `./favourite.component.html`,
    styleUrls: ['favourite.component.css']
})

export class FavouriteComponent {

    favourite: Emote[] = EmogisService.favEmote;

     delFromFav(name:string, link:string) {
         EmogisService.addToDelFromFav(new Emote(name, link))
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
