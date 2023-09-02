import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Billing } from 'src/app/_models/billing';
import { BillingService } from 'src/app/_services/billing.service';

@Component({
  selector: 'app-vehicle-billing',
  templateUrl: './vehicle-billing.component.html',
  styleUrls: ['./vehicle-billing.component.css'],
})
export class VehicleBillingComponent implements OnInit {
  addBillingRequest: Billing = {
    id: '',
    mileage: 0,
    fuel: 0,
    date: '',
  };
  constructor(private billingService: BillingService, private router: Router) {}

  ngOnInit(): void {}

  addBilling() {
    this.billingService.addBilling(this.addBillingRequest).subscribe({
      next: (billing) => {
        //this.addBillingRequest = response;
        this.router.navigate(['']);
      },
      error: (response) => {
        console.log(response);
      },
    });
  }
}
