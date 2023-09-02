import { Component, OnInit, TemplateRef } from '@angular/core';
import { ManagersService } from '../_services/managers.service';
import { Manager } from '../_models/manager';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  modalRef?: BsModalRef;
  isAdmin: boolean = false;

  managers: Manager[] = [];

  constructor(
    private managersService: ManagersService,
    private modalService: BsModalService,
    public accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.accountService.isAdmin$.subscribe((isAdmin) => {
      this.isAdmin = isAdmin;
    });
    this.refreshManagers();
  }

  refreshManagers() {
    this.managersService.getManagers().subscribe({
      next: (managers) => {
        this.managers = managers;
      },
      error: (response) => {
        console.log(response);
      },
    });
  }
  onManagerAdded() {
    this.refreshManagers();
  }
  onManagerUpdated() {
    this.refreshManagers();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
