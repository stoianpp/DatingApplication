import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from '../account.service';
import { User } from '../models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public accountService: AccountService) { }

  ngOnInit(): void { }

  login(): void {
    console.log(this.model);
    this.accountService.login(this.model).subscribe(
      response => {
        console.log(response);
        this.model.username = '';
        this.model.password = '';
      },
      error => {
        error =>console.log(error.error)
      }
    )
  }

  logout(): void {
    this.accountService.logout();
  }
}
