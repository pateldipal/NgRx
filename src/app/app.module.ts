import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestNgComponent } from './test-ng/test-ng.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {featureKey, reducer} from './+state/mainapp.reducer';
import {EffectsModule} from '@ngrx/effects';
import {AdminContentEffect} from './+state/mainapp.effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    TestNgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(featureKey, reducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot(),
    EffectsModule.forFeature([AdminContentEffect])
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
