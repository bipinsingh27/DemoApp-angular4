import { Component } from '@angular/core';	 	         
@Component({
	moduleId : module.id,
  selector: 'course',
  templateUrl: `course.component.html`,
			
})
export class courseComponent  { 
	cources : string[];
	showCourse: boolean;

	
	constructor(){
	
     this.cources = ["MCA","BCS","HSC","SSC"];
     this.showCourse = false;
    }
    // for showing and hidding course
    toggleCourse(){
    	if(this.showCourse == true)
    	{
    		this.showCourse = false;
    	}
    	else{
    		this.showCourse = true;
    	}
    }

// adding new course
    addNewCourse(newCourse : any){
    	this.cources.push(newCourse);
    }
    deleteCourse(i:any)
    {
    	this.cources.splice(i,1);
    }

}
