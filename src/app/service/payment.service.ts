import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {UserDto} from '../dto/user-dto';

@Injectable({
  providedIn: 'root'
})

export class ReportService {
  constructor(public httpClient: HttpClient) {
  }

  public createUser(user: UserDto) {
    const url = 'url/newUser';

    return this.httpClient.get<any>(url)
      .pipe(catchError(this.errorHandler));
  }

  // Error Handler
  public errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
