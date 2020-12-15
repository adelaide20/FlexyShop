import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  transactions: any = [];


  constructor() { }

  ngOnInit(): void {
    //  getting data from local storage
    this.transactions = JSON.parse(localStorage.getItem('transactions'));

  }


  todayDate: Date = new Date();


  delete(desctiption) {
    for(let i = 0; i < this.transactions.length; i++) {
      if(this.transactions[i] == desctiption) {
          this.transactions.splice(i, 1);
      }
    }

       // Set New Todos
       localStorage.setItem('transactions', JSON.stringify(this.transactions));
    }
  
  

  remove(i:number){
    this.transactions = JSON.parse(localStorage.getItem('transactions'));

    if(this.transactions.splice(i, 1)){
      localStorage.removeItem(this.transactions[i])
      console.log("deleted");
    }
    else{
      console.log("error");
      
    }
    
  }
}
