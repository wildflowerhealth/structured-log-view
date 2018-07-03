import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { Store } from '@ngrx/store';
import { State } from './state';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'slv-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {
    readonly messages: Observable<{}[]>;
    readonly messageCount: Observable<number>;
    readonly selectedProps: Observable<string[]>;
    readonly hiddenProps: Observable<string[]>;

    constructor(private ws: WebsocketService, private store: Store<State>) {
        this.messages = this.store.select(state => state.messages);
        this.messageCount = this.messages.pipe(map(msgs => msgs.length));
        this.selectedProps = this.store.select(state => state.selected);
        this.hiddenProps = this.store.select(state => state.hidden);
    }

    ngOnInit(): void {
        this.ws.connect();
        this.ws.send({ app: 'init' });
    }

    ngOnDestroy(): void {
        this.ws.send({ app: 'destroy' });
        this.ws.disconnect();
    }
}
