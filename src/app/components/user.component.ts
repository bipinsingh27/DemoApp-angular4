import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service'
 	 	         
@Component({
	moduleId : module.id,
  selector: 'user',
  templateUrl: `user.components.html`,
  styleUrl:['user.component.css']
			providers : [PostsService]
})
export class userComponent  { 
	
	posts : Posts[];
	constructor(private postsService : PostsService){ 
     this.postsService.getPosts().subscribe(posts => {
     	this.posts = posts;
     })
    }
  }

interface Posts{
	id : number;
	title : string;
	body : string;
}