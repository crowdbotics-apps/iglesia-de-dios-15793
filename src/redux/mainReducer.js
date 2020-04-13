import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth28553Reducer from '../features/EmailAuth28553/redux/reducers';
import CalendarView28551Reducer from '../features/CalendarView28551/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth28553: EmailAuth28553Reducer,
CalendarView28551: CalendarView28551Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});