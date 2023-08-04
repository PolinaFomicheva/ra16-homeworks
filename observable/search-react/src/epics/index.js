import { ofType } from "redux-observable";
import { ajax } from "rxjs/ajax";
import {
  map,
  tap,
  retry,
  debounceTime,
  switchMap,
  catchError,
  mergeMap,
} from "rxjs/operators";
import {
  resetSkills,
  searchSkillsSuccess,
  searchSkillsRequest,
  searchSkillsFailure,
} from "../slice/skilsSlice";
import { of } from "rxjs";

export const changeSearchEpic = (action$) =>
  action$.pipe(
    ofType("skils/changeSearchField"),
    tap((o) => console.log(o)),
    map((o) => o.payload.trim()),
    debounceTime(100),
    mergeMap((o) => {
      if (o === "") {
        return of(resetSkills());
      } else {
        return of(searchSkillsRequest(o));
      }
    })
  );

export const searchSkillsEpic = (action$) =>
  action$.pipe(
    ofType("skils/searchSkillsRequest"),
    map((o) => o.payload),
    map((o) => new URLSearchParams({ q: o })),
    tap((o) => console.log(o)),
    switchMap((o) =>
      ajax.getJSON(`http://localhost:7070/api/search?${o}`).pipe(
        retry(3),
        map((o) => searchSkillsSuccess(o)),
        catchError((e) => of(searchSkillsFailure(e)))
      )
    )
  );

// interval(1000)
//   .pipe(
//     mergeMap((v) => iif(() => !!(v % 2), of(v)))
//     // output: 1,3,5...
//   )
//   .subscribe(console.log);
