import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  constructor(private http: HttpClient) { }

  url = 'https://api.github.com/users/codintag'
  codintag:any = [];
  ngOnInit() {
    setTimeout(() => this.getAll(), 3000);
    
  }

  getAll() {
    this.http.get(this.url).subscribe(datas => this.codintag = datas)
  }


}
