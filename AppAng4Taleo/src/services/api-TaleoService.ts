import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ApiTaleoService{

  baseURL = "https://jsonplaceholder.typicode.com/posts";
  theSelectedPost: {userId:number, id:number, title:string, body:string};
  constructor(private http: HttpClient){

  }

  getAllPosts(){
    return this.http.get(this.baseURL);
  }


}
