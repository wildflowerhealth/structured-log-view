import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; // Angular CLI environemnt
import { AppComponent } from './app.component';
import { reducers } from './state';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageComponent } from './message/message.component';

@NgModule({
    declarations: [
        AppComponent,
        MessageListComponent,
        MessageComponent,
    ],
    imports: [
        BrowserModule,
        StoreModule.forRoot(reducers, {
            initialState: {
                messages: [
                    { id: 1, foo: 'abc' },
                    { id: 2, foo: '123' },
                    { id: 3, foo: 'xyz' },
                ],
            },
        }),
        // Instrumentation must be imported after importing StoreModule (config is optional)
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: environment.production, // Restrict extension to log-only mode
        }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
