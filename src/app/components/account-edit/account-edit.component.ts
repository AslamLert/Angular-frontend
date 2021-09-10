import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Account } from 'src/app/account';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.css']
})
export class AccountEditComponent implements OnInit {
  id: any;
  data: any;
  account = new Account();

  constructor(private route: ActivatedRoute, private dataServices: DataService,private router: Router) { }

  ngOnInit(): void {
      //console.log(this.route.snapshot.params.id);
      this.id = this.route.snapshot.params.id;
      this.getData();
    }

    getData() {
      this.dataServices.getAccountById(this.id).subscribe(res => {
        //console.log(res);
        this.data = res;
        this.account = this.data;
      })
    }

    updateAccount() {
      this.dataServices.updateAccount(this.id, this.account).subscribe(res => {
        this.router.navigateByUrl('');
      })
    }

  }
