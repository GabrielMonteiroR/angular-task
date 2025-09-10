import { Component, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from "./components/user/user";
import { DUMMY_USERS } from './atachments/dummy-users';
import { Task } from './components/task/task';
import { Tasks } from "./components/tasks/tasks";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users = DUMMY_USERS;
  selectedUserId = '';

  get selectedUser() {
    return this.users.find((user) =>  user.id === this.selectedUserId)!;
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}