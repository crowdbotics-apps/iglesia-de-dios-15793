import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth28553Saga from '../features/EmailAuth28553/redux/sagas';
import CalendarView28551Saga from '../features/CalendarView28551/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth28553Saga,
CalendarView28551Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}