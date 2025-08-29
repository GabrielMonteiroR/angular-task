import { Component, computed, input, Input, signal } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Input({required: true}) avatar!: string;
  @Input({required:true}) name!: string;

  s
//   avatar = input<string>();
// name = input.required<string>();

// imagePath = computed(() => {
//   return '/' + this.avatar;
// })

   get imagePath() {
     return '/' + this.avatar;
   }

  onSelectUser() {

  };
  }

