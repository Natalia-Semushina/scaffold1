import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pass',
  // <--templateUrl: './pass.component.html'-->
//   template: `<div>
//                 <mat-form-field appearance="outline" floatLabel="always">
//                     <input matInput [type] = "checked ? 'password' : text" [(ngModel)]="password" id="myInput" placeholder="password">
//                 </mat-form-field>
//                 <mat-checkbox [(ngModel)]="checked" (change)="changePassword()" labelPosition="before" color="primary"> Hide password </mat-checkbox>
//
//
// <!--                <p>{{password}}</p>-->
// <!--                <p>{{checked}}</p>-->
//             </div>'
//   <!--styleUrls: ['./pass.component.scss']-->
  template: `
            <mat-form-field appearance="legacy" floatLabel="always"  >
                <input matInput  [type]="isHide ? 'password' : 'text'" >
            </mat-form-field>
<!--            <mat-checkbox [checked]="true" (change)="passInput.type = $event.checked ? 'password' : 'text'">-->
            <mat-checkbox [(ngModel)]="isHide" >
                  Hide password
            </mat-checkbox>
            <br>
            <span *ngIf="password">Пароль: {{ password }}</span>
            `
})
export class PassComponent implements OnInit {
  password = '';
  checked = true;
  isHide = true;

  constructor(){
  }
  // changePassword() : void {
  //   x.text = {{checked}};
  //   if (x === "false") {
  //       password.type = "text";
  //   } else {
  //       password.type = "password";
  //   }
  // }

  ngOnInit() {

  }

}
