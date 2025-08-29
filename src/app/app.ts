import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { User } from "./components/user/user";
import { DUMMY_USERS } from './atachments/dummy-users';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent,User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
    users = DUMMY_USERS;
}
