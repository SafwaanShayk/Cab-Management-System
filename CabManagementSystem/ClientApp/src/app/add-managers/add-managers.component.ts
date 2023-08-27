import { Component, OnInit, TemplateRef } from '@angular/core';
import { Manager } from '../_models/manager';
import { ManagersService } from '../_services/managers.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-add-managers',
  templateUrl: './add-managers.component.html',
  styleUrls: ['./add-managers.component.css'],
})
export class AddManagersComponent implements OnInit {
  modalRef?: BsModalRef;

  addManagerRequest: Manager = {
    Id: '',
    FullName: '',
    Age: 0,
    Date: '',
    Gender: '',
  };
  constructor(
    private managersService: ManagersService,
    private modalService: BsModalService
  ) {}

  addManager() {
    this.managersService.addManager(this.addManagerRequest).subscribe({
      next: (manager) => {
        console.log(manager);
      },
      error: (response) => {
        console.log(response);
      },
    });
    //console.log(this.addManagerRequest);
  }
  ngOnInit(): void {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
