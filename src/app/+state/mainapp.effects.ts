import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {MyPersonalActions} from './mainapp.action';
import {map, mergeMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AdminContentEffect {
    constructor(private actions$: Actions, private http: HttpClient) {
    }

  loaddummyData$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(MyPersonalActions.loadContent),
      mergeMap(value => {
        return this.http.get('https://jsonplaceholder.typicode.com/posts');
      }),
      map((posts: any) => MyPersonalActions.loadContentSuccess({ posts }))
    )
  );
}
