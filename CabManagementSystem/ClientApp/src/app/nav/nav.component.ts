import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};
  isAdmin: boolean = false;

  constructor(
    public accountService: AccountService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.accountService.isAdmin$.subscribe((isAdmin) => {
      isAdmin;
    });
  }

  login() {
    this.accountService.login(this.model).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
        this.toastr.error(error.error);
      }
    );
  }

  logout() {
    this.accountService.logout();
  }
}
