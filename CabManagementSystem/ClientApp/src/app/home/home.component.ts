import { Component, OnInit, TemplateRef } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ManagersService } from '../_services/managers.service';
import { Manager } from '../_models/manager';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  managers: Manager[] = [];

  constructor() {}

  ngOnInit(): void {
    // this.managersService.getManagers().subscribe({
    //   next: (manager) => {
    //     this.manager = manager;
    //   },
    //   error: (response) => {
    //     console.log(response);
    //   },
    // });
  }
}
