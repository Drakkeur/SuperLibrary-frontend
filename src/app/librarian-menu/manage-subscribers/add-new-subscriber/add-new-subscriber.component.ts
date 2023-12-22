import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { forkJoin } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../services/user.model';


@Component({
  selector: 'app-new-subscriber',
  templateUrl: './add-new-subscriber.component.html',
  styleUrls: ['./add-new-subscriber.component.scss']
})
export class AddNewSubscriberComponent {

      userForm: FormGroup;
      constructor(private fb: FormBuilder, private userService: UserService) {
        this.userForm = this.fb.group({
          typeUser: [1, Validators.required],
          login: ['', Validators.required],
          password: ['', Validators.required],
          name: ['', Validators.required],
          firstname: ['', Validators.required],
          address: [''],
          email: ['', [Validators.required, Validators.email]],
          phoneNumber: ['', Validators.pattern('^0[1-9]([-. ]?[0-9]{2}){4}$')],
          comment: ['']
        });
      }

      createUser(): void {
        if (this.userForm.valid) {
          const userData: User = this.userForm.value;
          this.userService.postNewUser(userData).subscribe(
            (response) => {
              console.log('Abonné créé avec succès : ', response);
            }
          );
        }
    }


}