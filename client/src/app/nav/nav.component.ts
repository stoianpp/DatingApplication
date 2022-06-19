import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(public accountService: AccountService, private router: Router) { }

  ngOnInit(): void { }

  login(): void {
    this.accountService.login(this.model).subscribe(
      response => {
        this.router.navigateByUrl('/members');
      },
      error => {
        error =>console.log(error.error)
      }
    )
  }

  logout(): void {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}
