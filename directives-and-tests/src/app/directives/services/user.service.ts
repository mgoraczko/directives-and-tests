import { Injectable } from '@angular/core';
import { UserType } from '../enums/user-type.enum';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})

export class UserService {
  
  public user$ = new BehaviorSubject<User | null>(null);
  
  public setUserType(type: UserType): void {
    const user: User = { type: type};
    this.user$.next(user);
  }
  
}