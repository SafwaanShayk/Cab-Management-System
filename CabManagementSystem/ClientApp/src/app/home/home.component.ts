import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  managers: string[] = [];
  managersId: string[] = [];
  addName: any;
  addId: any;
  hideInput: boolean = false;

  constructor(public accountService: AccountService) {}

  ngOnInit(): void {}

  add(event: Event) {
    event.preventDefault();
    if (this.addName && this.addId) {
      this.managers.push(this.addName);
      this.managersId.push(this.addId);
    }

    this.addName = '';
    this.addId = '';
  }
  showInput() {
    this.hideInput = true;
  }
}
