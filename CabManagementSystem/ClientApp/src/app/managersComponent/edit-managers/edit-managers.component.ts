import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Manager } from 'src/app/_models/manager';
import { ManagersService } from 'src/app/_services/managers.service';

@Component({
  selector: 'app-edit-managers',
  templateUrl: './edit-managers.component.html',
  styleUrls: ['./edit-managers.component.css'],
})
export class EditManagersComponent implements OnInit {
  @Output() managerUpdated: EventEmitter<void> = new EventEmitter<void>();
  @Input()
  managerDetails!: Manager;

  // managerDetails: Manager = {
  //   id: '',
  //   fullName: '',
  //   age: 0,
  //   date: '',
  //   gender: '',
  // };
  modalRef?: BsModalRef;
  constructor(
    private modalService: BsModalService,
    private route: ActivatedRoute,
    private managerService: ManagersService
  ) {}

  ngOnInit(): void {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.managerService.getManager(id).subscribe({
            next: (response) => {
              this.managerDetails = response;
              this.managerUpdated.emit();
            },
          });
        }
      },
    });
  }
  updateManager() {
    this.managerService
      .updateManager(this.managerDetails.id, this.managerDetails)
      .subscribe({
        next: (response) => {
          this.managerUpdated.emit();
        },
      });
  }

  deleteManager(id: string) {
    this.managerService.deleteManager(id).subscribe({
      next: (response) => {
        this.managerUpdated.emit();
      },
    });
  }
}
