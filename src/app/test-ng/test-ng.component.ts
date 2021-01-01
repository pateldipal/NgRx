import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {MyPersonalActions} from '../+state/mainapp.action';
import {AdminAppState} from '../+state/mainapp.reducer';
import {fromAdminContent} from '../+state/mainapp.selectors';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-test-ng',
  templateUrl: './test-ng.component.html',
  styleUrls: ['./test-ng.component.css']
})
export class TestNgComponent implements OnInit {
  postData: any;
  getName$: Observable<any> | undefined;
  constructor(private http: HttpClient, private store: Store<AdminAppState>) { }

  ngOnInit(): void {
  }

  getData() {
    this.store.dispatch(MyPersonalActions.loadContent());
  }

  getSavedData() {
    this.getName$ = this.store.select(fromAdminContent.getName);
  }

}
