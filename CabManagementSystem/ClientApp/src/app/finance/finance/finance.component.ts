import { Component, OnInit, TemplateRef } from '@angular/core';
import { Billing } from 'src/app/_models/billing';
import { AccountService } from 'src/app/_services/account.service';
import { BillingService } from 'src/app/_services/billing.service';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css'],
})
export class FinanceComponent implements OnInit {
  isFinance: boolean = false;
  billings: Billing[] = [];

  constructor(
    public accountService: AccountService,
    public billingService: BillingService
  ) {}

  ngOnInit(): void {
    this.accountService.isFinance$.subscribe((isFinance) => {
      this.isFinance = isFinance; // Update the isFinance variable
    });
    this.billingService.getBilling().subscribe({
      next: (billings) => {
        this.billings = billings;
      },
      error: (response) => {
        console.log(response);
      },
    });
  }
}
