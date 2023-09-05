import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Billing } from 'src/app/_models/billing';
import { BillingService } from 'src/app/_services/billing.service';

@Component({
  selector: 'app-edit-billing',
  templateUrl: './edit-billing.component.html',
  styleUrls: ['./edit-billing.component.css'],
})
export class EditBillingComponent implements OnInit {
  billingDetails: Billing = {
    id: '',
    mileage: 0,
    fuel: 0,
    date: '',
  };

  constructor(
    private route: ActivatedRoute,
    private billingService: BillingService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.billingService.getBillingId(id).subscribe({
            next: (response) => {
              this.billingDetails = response;
            },
          });
        }
      },
    });
  }

  updateBilling() {
    this.billingService
      .updateBilling(this.billingDetails.id, this.billingDetails)
      .subscribe({
        next: (response) => {
          this.router.navigate(['']);
        },
      });
  }

  deleteBilling(id: string) {
    this.billingService.deleteBilling(id).subscribe({
      next: (response) => {
        this.router.navigate(['']);
      },
    });
  }
}
