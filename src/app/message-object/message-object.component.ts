import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, displayableTypes } from '../state';
import { ActionType } from '../action-type.enum';

@Component({
    selector: 'slv-message-object',
    templateUrl: './message-object.component.html',
    styleUrls: ['./message-object.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageObjectComponent {
    @Input() obj: any;
    @Input() ancestry = '';
    @Input() hidden: string[];

    get messageProps() {
        return Object.entries(this.obj)
            .map(entry => ({ name: entry[0], val: entry[1], type: typeof entry[1] }))
            .filter(prop => displayableTypes.indexOf(prop.type) >= 0 && this.hidden.indexOf(this.propertyAncestry(prop.name)) < 0)
            .map(prop => {
                if (prop.val == null) {
                    (prop as any).type = 'null';
                } else if (Array.isArray(prop.val)) {
                    (prop as any).type = 'array';
                }
                return prop;
            });
    }

    constructor(private store: Store<State>) { }

    propertyAncestry(property: string) {
        if (this.ancestry.length > 0) {
            return `${this.ancestry}.${property}`;
        }
        return property;
    }

    selectProperty(property: string) {
        this.store.dispatch({ type: ActionType.SELECT_PROPERTY, payload: this.propertyAncestry(property)});
    }
}
