import { Component, Input, OnInit } from '@angular/core';
import { Ipost } from '../../model/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  
@Input() postInfo! : Ipost

  constructor() { }

  ngOnInit(): void {
    console.log(this.postInfo)
  }

}
