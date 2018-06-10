import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
    selector: 'slv-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageComponent implements OnInit {
    @Input() message: {};

    get rawText(): string {
        return JSON.stringify(this.message);
    }

    constructor() { }

    ngOnInit() {
    }
}
