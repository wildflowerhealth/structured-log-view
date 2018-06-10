import { Action } from '@ngrx/store';
import { ActionType } from './action-type.enum';

export interface IAction extends Action {
    type: ActionType;
    payload?: any;
}

export class State {
    messages: {}[];
}

export const reducers = {
    messages: (state: {}[], action: IAction) => {
        switch (action.type as ActionType) {
            case ActionType.APPEND:
                return [ ...state, action.payload ];
            case ActionType.CLEAR:
                return [];
            default:
                console.log(`Unhandled action type: ${action.type}`, action);
                return state;
        }
    },
};
