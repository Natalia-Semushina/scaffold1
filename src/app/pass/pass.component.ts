import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pass',
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

  ngOnInit() {

  }

}
