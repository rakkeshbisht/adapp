import { Component, OnInit } from '@angular/core';
import { AccountListService } from "../core/services/account-list.service";
import { Observable } from 'rxjs';
import { Router } from "@angular/router";

@Component({
  selector: 'account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  columns: string[];
  accountList : Observable<any[]>;
  modelColumns : any[];

  constructor(
     private router : Router,    
     private accountListService :  AccountListService ) { }

  ngOnInit() {
    this.columns = this.accountListService.getColumns();
    this.accountList = this.accountListService.getAccountList();
    this.modelColumns = this.accountListService.getModelColumns();
  }

  accountClicked(accountNo : any) {
    if(accountNo)
      this.router.navigate(['/home/trade/equity', accountNo]);
  }
}
