import { Component } from '@angular/core';
import { EmogisService } from './Emogis.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Emod';

    sName: string = "";
    sLink: string = "";
    show = false;

    search(event: any) {

        const find = event.target.value;
        for (let i = 0; i < EmogisService.allEmote.length; i++) {
            if (find == EmogisService.allEmote[i].name) {
                this.show = true;
                this.sName = EmogisService.allEmote[i].name;
                this.sLink = EmogisService.allEmote[i].link;
            }
        }
        if (event.target.value == "") {
            this.show = false;
            this.sName = "";
            this.sLink = "";
        }
    }

    addToFavs(name: string, link: string) {
        EmogisService.addToFavFromAll(new Emote(name, link))
    }

    delFromAll(name: string, link: string) {
        EmogisService.addToDelFromAll(new Emote(name, link))
    }

    headerName = 'homePage';
    setTitle(title: string) {
        if (title == 'home') {
            this.headerName = 'homePage'
        }
        if (title == 'favo') {
            this.headerName = 'favouritePage'
        }
        if (title == 'dele') {
            this.headerName = 'deletedPage'
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
