import { Component} from '@angular/core';
import {EmogisService} from '../Emogis.service';

@Component({
    selector: 'app-deleted',
    templateUrl: `./deleted.component.html`,
    styleUrls: ['deleted.component.css']
})
export class DeletedComponent {

    deleted: Emote[] = EmogisService.delEmote;

    recover(name:string, link:string) {
        EmogisService.recoverFromDelToAll(new Emote(name, link))
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
