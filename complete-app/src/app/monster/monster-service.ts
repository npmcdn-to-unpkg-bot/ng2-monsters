import { RestService } from '../util/rest-service';

import { Http } from 'angular2/http';
import {Injectable} from "angular2/core";

@Injectable()
export class MonsterService extends RestService {

      constructor(http: Http) {
          super('/api/monster',http);
      }




}