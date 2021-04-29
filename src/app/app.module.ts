import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {StoreModule} from '@ngrx/store';
import {simpleReducer} from './reducer/simple-reducer';
import {postReducer} from './reducer/post.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      message: simpleReducer,
      post: postReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
