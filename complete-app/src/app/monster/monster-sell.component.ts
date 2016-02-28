
import {Component, OnInit} from "angular2/core";

import {Router} from "angular2/router";
import {RouteParams} from "angular2/router";
import {RouterLink} from "angular2/router";

import {MonsterService} from "./monster-service";
import {UIMessageService} from "../util/uimessage-service";
import {UIMessage} from "../util/uimessage.component";


@Component({
    selector: 'monster-sell',
    directives: [UIMessage, RouterLink ],
    templateUrl: 'app/monster/monster-sell.html'
})

export class MonsterSell implements OnInit{

    id: number;

    monster: any;

    constructor(routeParams: RouteParams, private router: Router, private messageService: UIMessageService, private monsterService: MonsterService) {

        var sid = routeParams.get('id');
        if(sid) {
            this.id = parseInt(sid,10);
        }

    }

    ngOnInit() {

        if(this.id) {

            this.fetchMonster();

        } else {  // create new monster
            // test data
            this.monster = { name: "Jaws", type: "Fish", birthday: "1975/07/21", price: 6000000, img: "https://upload.wikimedia.org/wikipedia/en/e/eb/JAWS_Movie_poster.jpg", description: "Jaws is a 1975 American film directed by Steven Spielberg and based on Peter Benchley's 1974 novel of the same name. The prototypical summer blockbuster, its release is regarded as a watershed moment in motion picture history. In the story, a giant man-eating great white shark attacks beachgoers on Amity Island, a fictional New England summer resort town, prompting the local police chief to hunt it with the help of a marine biologist and a professional shark hunter." };
            // this.monster = { };
        }
    }

    fetchMonster() {

        this.monsterService.get(this.id)
            .subscribe(data => this.monster = data);

    }


    sellMonster() {

        this.monsterService.save(this.monster)
            .subscribe(() => {

                this.messageService.message('Your monster is now up for sale!', '/');
                this.router.navigate(['Monsters']);

            },(error) => {
                this.messageService.errorMessage(error);
            });


    }

    cancelClicked() {

        this.router.navigate(['Monsters']);

    }

    cancelSale() {

        if(!confirm("Are you sure you want to cancel this sale?"))
            return;

        this.monsterService.delete(this.monster)
            .subscribe(() => {
                this.messageService.message("Your sale is now canceled", '/monsters');
                this.router.navigate(['Monsters']);
            });

    }


}