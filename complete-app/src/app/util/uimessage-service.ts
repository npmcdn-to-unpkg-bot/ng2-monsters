import { Injectable } from 'angular2/core';
import { Location } from 'angular2/router';

@Injectable()
export class UIMessageService {

    msgStore: any = {};
    subscribers = [];

    constructor(private location: Location) {

    }

    message(msg, path) {
        return this.addOrGetMessage('message', msg, path);
    }

    errorMessage(msg, path) {
        return this.addOrGetMessage('errorMessage', msg, path);
    }

    addOrGetMessage(key, msg, path) {

        if (msg) {   // set a message in the store
            this.msgStore = {};
            this.msgStore[key] = { text: msg, path: (path || this.location.path()) };
            this.subscribers.forEach(fn => fn());
            return;
        }

        // retrieve a message and clear the store if the message path matches current path
        var msgForKey = this.msgStore[key];
        if (msgForKey) {
            if (this.location.path() === msgForKey.path) {
                this.msgStore[key] = null;
            }
            return msgForKey.text;
        }

        return null;
    }

    subscribe(fn) {
        this.subscribers = [fn];
    }


}
