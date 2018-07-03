import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../state';
import { Observable } from 'rxjs';

@Component({
    selector: 'slv-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageComponent implements OnInit {
    @Input() message: any;
    hiddenProps: Observable<string[]>;
    readonly messageClass: string[];

    constructor(private store: Store<State>) {
        this.hiddenProps = this.store.select(state => state.hidden);
        this.messageClass = [ 'logMessage' ];
    }

    ngOnInit() {
        const level = this.message['level'] as number;
        if (level >= 60) {
            this.messageClass.push('levelFatal');
        } else if (level >= 50) {
            this.messageClass.push('levelError');
        } else if (level >= 40) {
            this.messageClass.push('levelWarn');
        } else if (level >= 30) {
            this.messageClass.push('levelInfo');
        } else if (level >= 20) {
            this.messageClass.push('levelDebug');
        } else if (level >= 10) {
            this.messageClass.push('levelTrace');
        }
    }
}
