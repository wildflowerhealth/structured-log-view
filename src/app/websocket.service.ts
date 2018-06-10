import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Store } from '@ngrx/store';
import { State } from './state';
import { ActionType } from './action-type.enum';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class WebsocketService {
    private socket: SocketIOClient.Socket;

    constructor(
        private store: Store<State>,
    ) { }

    connect(): void {
        if (this.socket == null) {
            console.log(`Creating a socket to: ${environment.serviceUrl}`);
            this.socket = io(environment.serviceUrl);
            this.socket.on('error', (err: Error) => {
                console.error('Socket error', err);
            });
            this.socket.on(ActionType.APPEND, (msg: {}) => this.store.dispatch({
                type: ActionType.APPEND,
                payload: msg,
            }));
        }
        if (this.socket.disconnected) {
            this.socket.connect();
        }
    }

    disconnect(): void {
        if (this.socket != null && !this.socket.disconnected) {
            this.socket.disconnect();
        }
    }

    send(message: {}) {
        this.socket.send(message);
    }
}
