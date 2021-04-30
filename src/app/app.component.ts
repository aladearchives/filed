import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {UserDto} from './dto/user-dto';
import * as PostActions from './actions/post.actions';

interface AppState {
  user: UserDto;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: Observable<UserDto>;
  public userDto: UserDto = new UserDto();

  constructor(private store: Store<AppState>) {
    this.user = this.store.select('user');
  }

  createUser() {
    this.store.dispatch(new PostActions.CreateUser(this.userDto));
  }

  resetUser() {
    this.store.dispatch(new PostActions.Reset());
  }


}
