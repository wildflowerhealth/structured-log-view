import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../state';
import { ActionType } from '../action-type.enum';

@Component({
  selector: 'slv-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent {
    @Input() messageCount: number;
    @Input() selectedProps: string[];
    @Input() hiddenProps: string[];

    get settingsObj() {
        const obj: any = { count: this.messageCount };
        this.selectedProps.forEach(prop => obj[prop] = ['hide', 'filter', 'cancel']);
        return obj;
    }

    constructor(private store: Store<State>) { }

    hideProp (prop: string) {
        this.store.dispatch({ type: ActionType.HIDE_PROPERTY, payload: prop });
        this.cancelProp(prop);
    }

    cancelProp (prop: string) {
        this.store.dispatch({ type: ActionType.DESELECT_PROPERTY, payload: prop });
    }

    unhideProp(prop: string) {
        this.store.dispatch({ type: ActionType.UNHIDE_PROPERTY, payload: prop });
    }
}
