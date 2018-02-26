import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ApiTaleoService} from '../../services/api-TaleoService';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/operator/toPromise';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {toPromise} from 'rxjs/operator/toPromise';

@Component({
  selector: 'app-wide-view',
  templateUrl: './wide-view.component.html',
  styleUrls: ['./wide-view.component.css']
})
export class WideViewComponent implements OnInit {
  id: number;
  allPosts: object = {};
  postObj: object = {};
  deleteButton: string = "http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons-256/black-inlay-crystal-clear-bubble-icons-business/077427-black-inlay-crystal-clear-bubble-icon-business-trashcan3.png";
  shareButton: string = "https://cdn.onlinewebfonts.com/svg/img_360768.png";
  private headers = new Headers({'Content-Type': 'application/json'});
  //Headers({'Content-Type': 'application/json'})

  constructor(private http: HttpClient,
              private api_taleoService: ApiTaleoService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  updatePost() {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.api_taleoService.getAllPosts()
      .subscribe(data => {
        this.allPosts = data;
        for (var i = 0; i < this.allPosts.length; i++) {
          if (parseInt(this.allPosts[i].id) === this.id) {
            this.postObj = this.allPosts[i];
            console.log(this.postObj);
            break;
          }
        }
      })
  }

  getAllPost() {
    this.api_taleoService.getAllPosts()
      .subscribe(data => {
        this.allPosts = data;
      })
  }

  deletePost(id) {
    if (confirm("Are you sure?")) {
      const url = '${"https://jsonplaceholder.typicode.com/posts/"}/${id}';
      return this.http.delete(url, {headers: this.headers}).toPromise()
        .then(() => {
          this.getAllPost();
        });
    }
  }
}
