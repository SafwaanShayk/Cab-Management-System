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
  isFinance: boolean = false;

  constructor(
    public accountService: AccountService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.accountService.isFinance$.subscribe((isFinance) => {
      this.isFinance = isFinance; // Update the isFinance variable
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
