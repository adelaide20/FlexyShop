import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.scss']
})
export class NewTransactionComponent implements OnInit {

  // form control
  transactionForm: FormGroup;

  transactions: any[] = [];

  currentTime = new Date();

  constructor() {
  }

  ngOnInit(): void {
    // New Transaction Form Control
    this.transactionForm = new FormGroup({
      description: new FormControl('', [Validators.required]),
      amount: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required)
    });
  }


  // get description value from form control
  get description() {
    return this.transactionForm.get('description');
  }

  // get amount value from form control
  get amount() {
    return this.transactionForm.get('amount');
  }

  // get transaction type value from form control
  get type() {
    return this.transactionForm.get('type');
  }



  add() {
    if (localStorage.length > 0) {
      // getting data from local storage
      this.transactions = JSON.parse(localStorage.getItem('transactions'));

      // push form data into an array
      this.transactions.push(this.transactionForm.value);

      // adding data to local storage
      localStorage.setItem("transactions", JSON.stringify(this.transactions));

    } else {
      // adding data to local storage
      localStorage.setItem("transactions", JSON.stringify(this.transactions));
    }

    window.location.reload();
  }
}
