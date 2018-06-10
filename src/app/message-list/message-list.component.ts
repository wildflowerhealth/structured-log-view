import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../state';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'slv-message-list',
    templateUrl: './message-list.component.html',
    styleUrls: ['./message-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.Default,
})
export class MessageListComponent implements OnInit {
    readonly messages: Observable<{}[]>;

    get messageCount(): Observable<number> {
        return this.messages.pipe(map(msgs => msgs.length));
    }

    constructor(private store: Store<State>) {
        this.messages = this.store.pipe(
            select(state => state.messages),
            map(msgs => msgs.slice().reverse()),
        );
    }

    ngOnInit(): void {
    }
}
