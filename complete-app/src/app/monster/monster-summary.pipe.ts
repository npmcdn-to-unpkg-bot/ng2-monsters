
import {PipeTransform} from "angular2/core";
import {Pipe} from "angular2/core";

@Pipe({name: 'monsterSummary'})
export class MonsterSummary implements PipeTransform {

    transform(detail: string) {

        if(!detail) {
            return '';
        }

        if(detail.length <= 150) {
            return detail;
        }

        return detail.substring(0,150);
    }

}