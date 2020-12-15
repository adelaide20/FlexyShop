import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {

  totalBalance: number = 0;

  
  constructor() { }

  ngOnInit(): void {
    // array getting data from local storage
    let transactions: any[] = JSON.parse(localStorage.getItem('transactions'));


    for (let i = 0; i < transactions.length; i++) {
      if (transactions[i].type == "expense") {
      this.totalBalance = this.totalBalance - transactions[i].amount
    }
    else {
      this.totalBalance = this.totalBalance + transactions[i].amount
    }
    }

  }

}
