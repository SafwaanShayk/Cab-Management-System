import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Manager } from 'src/app/_models/manager';
import { ManagersService } from 'src/app/_services/managers.service';

@Component({
  selector: 'app-edit-manager',
  templateUrl: './edit-manager.component.html',
  styleUrls: ['./edit-manager.component.css'],
})
export class EditManagerComponent implements OnInit {
  modalRef?: BsModalRef;

  @Input()
  manager!: Manager;

  constructor(private managersService: ManagersService) {}

  ngOnInit(): void {}

  updateManager() {
    // Call your service to update the manager data
    this.managersService.updateManager(this.manager).subscribe(
      (updatedManager) => {
        // Update the manager in the Home component's list
        // this.onManagerUpdated.emit(updatedManager);
        // this.modalRef.hide();
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
