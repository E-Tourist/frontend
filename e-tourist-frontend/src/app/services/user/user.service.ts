import { Injectable } from '@angular/core';
import {User} from "../../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUserById(userId: number): User {
    const user: User = {
      avatarUrl: "https://i.stack.imgur.com/TV9im.jpg?s=256&g=1",
      currentMonthDistance: 13.5,
      description: "This is a random description that is mocked because someone did not start touching backend two weeks before the IPZ deadline",
      joinedDate: new Date('2022-01-01'),
      routesCreated: 10,
      totalDistance: 129,
      userId: userId,
      userName: "Jan Kowalski"
    }

    return user;
  }
}
