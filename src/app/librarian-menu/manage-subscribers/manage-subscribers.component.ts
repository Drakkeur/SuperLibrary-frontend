import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { forkJoin } from 'rxjs';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-manage-subscribers',
  templateUrl: './manage-subscribers.component.html',
  styleUrls: ['./manage-subscribers.component.scss']
})
export class ManageSubscribersComponent {

  userList: any[] = [];
  inputValue: number = 0;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.userList = users;
    });
  }

  searchUserById(id : number) {
    this.userService.getUserById(id).subscribe(user => {
      this.userList = [user];
      });
  }

    // GetUsers(): Observable<any> {
    //   return this.http.get('http://localhost:4030/api-superlibrary/user/all');
    // }

    // GetDisplayedUsers(){
    //   this.GetUsers.subscribe((data: any) => {
    //     userList = data.result;
    //   })
    // }
}
