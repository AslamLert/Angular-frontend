import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/account';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  accounts:any;
  account = new Account;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getAccountData();
  }

  getAccountData(){
    //console.log('Hello Custome');
    this.dataService.getData().subscribe(res => {
      //console.log(res);
      this.accounts = res;
    });
  }

  insertData(){
    //console.log('Hello');
    //console.log(this.account);
    this.dataService.insertData(this.account).subscribe(res => {
      //console.log(res);
      this.getAccountData();
    });
  }

  deleteData(id:any){
    //console.log(id);
    this.dataService.deleteData(id).subscribe(res => {
      this.getAccountData();
    })
  }

}
