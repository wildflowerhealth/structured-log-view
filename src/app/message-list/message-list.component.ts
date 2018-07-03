import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
    selector: 'slv-message-list',
    templateUrl: './message-list.component.html',
    styleUrls: ['./message-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageListComponent {
    @Input() messages: {}[];
}
