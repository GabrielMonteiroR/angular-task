import { Component, computed, EventEmitter, input, Input, Output, output, signal } from '@angular/core';

interface User {
      id: string;
    avatar: string;
    name: string
}

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})

export class UserComponent {
  @Input({required: true}) user!: User;
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required:true}) name!: string;
  @Output() select = new EventEmitter<string>();

  // select = output<string>();

//   avatar = input<string>();
// name = input.required<string>();

// imagePath = computed(() => {
//   return '/' + this.avatar;
// })

   get imagePath() {
     return '/' + this.user.avatar;
   }

  onSelectUser() {
    this.select.emit(this.user.id);
  };
  }

