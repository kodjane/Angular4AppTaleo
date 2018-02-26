import { Component, OnInit } from '@angular/core';
import {ApiTaleoService} from '../../services/api-TaleoService';

@Component({
  selector: 'app-api-taleo',
  templateUrl: './api-taleo.component.html',
  styleUrls: ['./api-taleo.component.css']
})
export class ApiTaleoComponent implements OnInit {

  allPosts: any;
  targetButton:string = "https://media.glassdoor.com/sqll/1955525/taleo-consulting-squarelogo-1517468206495.png";
  constructor(private api_taleoService: ApiTaleoService){

  }

  ngOnInit() {
  }

  getAllPost(){
    this.api_taleoService.getAllPosts()
      .subscribe(data=>{
        this.allPosts = data;
      })
  }

 /* getPost(id){
    this.element.find = this.api_taleoService.getPostById(id);
  }*/

}
