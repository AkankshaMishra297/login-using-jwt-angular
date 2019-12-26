import { Component, OnInit } from '@angular/core';
import{Router}  from '@angular/router';
import { AdminHomeService } from '../admin-home.service';
import { userDetails } from '../userDetails';
import { Roles } from '../Roles';

@Component({
  selector: 'app-admin-home-user-update',
  templateUrl: './admin-home-user-update.component.html',
  styleUrls: ['./admin-home-user-update.component.css']
})
export class AdminHomeUserUpdateComponent implements OnInit {
  user:userDetails;
  roles:Roles;
  
  constructor(private service:AdminHomeService,private _rotuer:Router) { }

  ngOnInit() {
    this.user=this.service.getter();
    let resp=this.service.getRoles();
    resp.subscribe((data)=>this.roles=data);
    

  }

  processForm(){
    //let resp=this.roomService.editRoom(this.room);
    let resp=this.service.doRegistration(this.user);


    resp.subscribe((data)=>this.user=data);  
    this._rotuer.navigate(['/viewUser']);

   
  }

}
