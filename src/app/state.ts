import { Action } from '@ngrx/store';
import { ActionType } from './action-type.enum';

export const displayableTypes = ['string', 'number', 'boolean', 'object'];
export type MessageValueTypes = 'string' | 'number' | 'boolean' | 'object' | 'null' | 'array';

const MAX_MESSAGES = 500;

export interface IAction extends Action {
    type: ActionType;
    payload?: any;
}

export class State {
    messages: {}[];
    selected: string[];
    hidden: string[];
}

export const reducers = {
    messages: (messages: {}[], action: IAction) => {
        switch (action.type) {
            case ActionType.APPEND_MESSAGE:
                const msgs = messages.slice(0, MAX_MESSAGES);
                msgs.unshift(action.payload);
                return msgs;
            case ActionType.CLEAR_MESSAGES:
                return [];
            default:
                return messages;
        }
    },
    selected: (selected: string[], action: IAction) => {
        switch (action.type) {
            case ActionType.SELECT_PROPERTY:
                return [ ...selected, action.payload ];
            case ActionType.DESELECT_PROPERTY:
                return selected.filter(x => x !== action.payload);
            default:
                return selected;
        }
    },
    hidden: (hidden: string[], action: IAction) => {
        switch (action.type) {
            case ActionType.HIDE_PROPERTY:
                return [ ...hidden, action.payload ];
            case ActionType.UNHIDE_PROPERTY:
                return hidden.filter(x => x !== action.payload);
            default:
                return hidden;
        }
    },
};
