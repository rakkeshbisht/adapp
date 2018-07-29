import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { accountsListData } from '../../mock-data';

@Injectable({
  providedIn: 'root'
})
export class AccountListService {

  constructor() { }

  getAccountList() : Observable<any>{
    return of(accountsListData);
  }

  getColumns(): string[]{
    return ["Account No", "Account Name", "Client", "Account Class", "Objective", "Rep ID"]
  }; 

  getModelColumns(): string[]{
    return ["lplAcct", "acctName", "clntGrp", "acctClass", "invstObj", "repID"]
  }; 

}
