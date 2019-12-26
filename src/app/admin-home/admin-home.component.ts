import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminHomeService } from '../admin-home.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  users:any;
  errorMsg:any;

  constructor(private service:AdminHomeService,private _router:Router) { }
  ngOnInit() {
    
    let resp=this.service.getUsers();
    resp.subscribe((data)=>this.users=data,
    error=>this.errorMsg=error
    );

  }



  public editUser(userss){
    this.service.setter(userss);
    this._router.navigate(['/editUser']);
  }

  
}
