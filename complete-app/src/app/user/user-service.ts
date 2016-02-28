import {Injectable} from "angular2/core";


@Injectable()
export class UserService {

    user: any = { id: 1, name: "Jimmy" };

    currentUser() {
        return this.user;
    }


}