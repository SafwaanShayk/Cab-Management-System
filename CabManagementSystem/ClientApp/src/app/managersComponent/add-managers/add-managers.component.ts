import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { ManagersService } from '../../_services/managers.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Manager } from 'src/app/_models/manager';

@Component({
  selector: 'app-add-managers',
  templateUrl: './add-managers.component.html',
  styleUrls: ['./add-managers.component.css'],
})
export class AddManagersComponent implements OnInit {
  @Output() managerAdded: EventEmitter<void> = new EventEmitter<void>();
  modalRef?: BsModalRef;

  addManagerRequest: Manager = {
    id: '',
    fullName: '',
    age: 0,
    date: '',
    gender: '',
  };
  constructor(
    private managersService: ManagersService,
    private modalService: BsModalService
  ) {}

  addManager() {
    // console.log('request', this.addManagerRequest);
    this.managersService.addManager(this.addManagerRequest).subscribe({
      next: (manager) => {
        this.addManagerRequest = manager;
        this.managerAdded.emit();
      },
      error: (response) => {
        console.log(response);
      },
    });
  }
  ngOnInit(): void {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
