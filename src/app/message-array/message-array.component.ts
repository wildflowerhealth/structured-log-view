import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { displayableTypes } from '../state';

@Component({
    selector: 'slv-message-array',
    templateUrl: './message-array.component.html',
    styleUrls: ['./message-array.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageArrayComponent {
    @Input() arr: any[];
    @Input() ancestry = '';
    @Input() hidden: string[];

    get arrayItems() {
        return this.arr.map(item => ({ val: item, type: typeof item }))
            .filter(prop => displayableTypes.indexOf(prop.type) >= 0)
            .map(prop => {
                if (prop.val == null) {
                    (prop as any).type = 'null';
                } else if (Array.isArray(prop.val)) {
                    (prop as any).type = 'array';
                }
                return prop;
            });
    }

    itemAncestry(idx: number) {
        if (this.ancestry.length > 0) {
            return `${this.ancestry}.${idx}`;
        }
        return `${idx}`;
    }
}
