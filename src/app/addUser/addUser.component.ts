import { Component } from '@angular/core';
 	 	         
@Component({
	moduleId : module.id,
  selector: 'addUser',
  templateUrl: `addUser.component.html`
})

export class addUserComponent  { 
	fisrtName : string;
	lastName : string;
	address : address;

	constructor(){
	
	this.fisrtName = 'Roshan';
	this.lastName = 'kshirsagar';
	this.address = {
		street : 'College Road',
		city : 'Nashik',
		state : 'MH'
	    }
     }
  }

interface address {
	street : string;
	city : string;
	state : string;
}
