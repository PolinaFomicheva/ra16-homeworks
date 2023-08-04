import { ofType } from "redux-observable";
import { ajax } from "rxjs/ajax";
import { map, switchMap, catchError, mergeMap } from "rxjs/operators";
import { serviceSuccess, serviceDetails, serviceFailure } from "../slice/index";
import { of } from "rxjs";

export const serviceRequestEpic = (action$) =>
  action$.pipe(
    ofType("service/serviceRequest"),
    map((o) => o.payload),
    switchMap((o) =>
      ajax.getJSON(` http://localhost:7070/api/services${o}`).pipe(
        mergeMap((o) => {
          if (Array.isArray(o)) {
            return of(serviceSuccess(o));
          } else {
            return of(serviceDetails(o));
          }
        }),
        catchError((e) => of(serviceFailure(e)))
      )
    )
  );