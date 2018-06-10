import { Component, OnInit, OnDestroy } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Component({
    selector: 'slv-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    constructor(private ws: WebsocketService) { }

    ngOnInit(): void {
        this.ws.connect();
        this.ws.send({ app: 'init' });
    }

    ngOnDestroy(): void {
        this.ws.send({ app: 'destroy' });
        this.ws.disconnect();
    }
}
