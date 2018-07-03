import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; // Angular CLI environemnt
import { AppComponent } from './app.component';
import { reducers } from './state';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageComponent } from './message/message.component';
import { MessageObjectComponent } from './message-object/message-object.component';
import { SettingsComponent } from './settings/settings.component';
import { MessageArrayComponent } from './message-array/message-array.component';

@NgModule({
    declarations: [
        AppComponent,
        MessageListComponent,
        MessageComponent,
        MessageObjectComponent,
        SettingsComponent,
        MessageArrayComponent,
    ],
    imports: [
        BrowserModule,
        StoreModule.forRoot(reducers, {
            initialState: {
                messages: [
                    { id: 1, foo: 'abc' },
                    { id: 2, foo: '123' },
                    { id: 3, foo: 'xyz', bar: [ 1, 'two', null ] },
                ],
                selected: [],
                hidden: [],
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
