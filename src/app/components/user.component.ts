import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service'
 	 	         
@Component({
	moduleId : module.id,
  selector: 'user',
  templateUrl: `user.components.html`,
			providers : [PostsService]
})
export class userComponent  { 
	fisrtName : string;
	lastName : string;
	address : address;
	cources : string[];
	showCourse: boolean;
	posts : Posts[];
	constructor(private postsService : PostsService){
	
	this.fisrtName = 'Roshan';
	this.lastName = 'kshirsagar';
	this.address = {
		street : 'College Road',
		city : 'Nashik',
		state : 'MH'
	 }
	 this.cources = ["MCA","BCS","HSC","SSC"];
     this.showCourse = false;

     // Calling service here view 
     this.postsService.getPosts().subscribe(posts => {

     	this.posts = posts;
     })
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
    addNewCourse(newCourse){
    	this.cources.push(newCourse);
    }
    deleteCourse(i)
    {
    	this.cources.splice(i,1);
    }

}

interface address {
	street : string;
	city : string;
	state : string;
}

interface Posts{
	id : number;
	title : string;
	body : string;
}