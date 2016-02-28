import {Component, OnInit } from 'angular2/core';

import { UIMessageService } from './uimessage-service';

@Component({
    selector: 'ui-message',
    template: `
		<div *ngIf="message" class='alert alert-info'>
			{{message}}
		</div>
		<div *ngIf="errorMessage" class='alert alert-danger'>
			{{errorMessage}}
		</div>
	`
})

export class UIMessage implements OnInit {

    message: string;
    errorMessage: string;

    constructor(private messageService: UIMessageService) {	}

    ngOnInit() {

        this.messageService.subscribe(() => {
            this.updateMessages();
        });

        this.updateMessages();
    }


    updateMessages() {

        this.message = this.messageService.message();
        this.errorMessage = this.messageService.errorMessage();
    }
}



