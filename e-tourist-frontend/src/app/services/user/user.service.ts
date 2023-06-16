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

  getUserFriends(userId: number): User[] {
    const users: User[] = [
      {
        avatarUrl: "https://imgur.com/9Zeigt0.jpg",
        currentMonthDistance: 20.7,
        description: "Friend 1 desc",
        joinedDate: new Date('2021-01-01'),
        routesCreated: 5,
        totalDistance: 2003,
        userId: 2,
        userName: "Ted Turner"
      },
      {
        avatarUrl: "https://i.imgur.com/RaZj7VX_d.webp?maxwidth=520&shape=thumb&fidelity=high",
        currentMonthDistance: 13,
        description: "Friend 2 desc",
        joinedDate: new Date('2023-01-01'),
        routesCreated: 0,
        totalDistance: 13,
        userId: 3,
        userName: "Lucille Wade"
      },
      {
        avatarUrl: "https://i.imgur.io/PS4WJXz_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
        currentMonthDistance: 120.7,
        description: "Friend 3 desc",
        joinedDate: new Date('2021-09-17'),
        routesCreated: 12,
        totalDistance: 13089,
        userId: 4,
        userName: "Coby Bailey"
      },
      {
        avatarUrl: "https://i.imgur.com/wKHBV9i_d.webp?maxwidth=520&shape=thumb&fidelity=high",
        currentMonthDistance: 5,
        description: "Friend 4 desc",
        joinedDate: new Date('2020-07-13'),
        routesCreated: 1,
        totalDistance: 20,
        userId: 5,
        userName: "Goro Takemura"
      }
    ];

    return users;
  }
}
