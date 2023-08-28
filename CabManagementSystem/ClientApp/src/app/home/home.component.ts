import { Component, OnInit, TemplateRef } from '@angular/core';
import { ManagersService } from '../_services/managers.service';
import { Manager } from '../_models/manager';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EditManagerComponent } from '../managersComponent/edit-manager/edit-manager.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  modalRef?: BsModalRef;

  managers: Manager[] = [];

  constructor(
    private managersService: ManagersService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
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
    // Call refreshManagers() to update the list
    this.refreshManagers();
  }

  editManager(manager: Manager) {
    const initialState = {
      manager: { manager }, // Clone the manager object to avoid modifying the original
    };
    this.modalRef = this.modalService.show(EditManagerComponent, {
      // initialState,
    });
  }
}
