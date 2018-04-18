import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private apiGetParentsUrl = 'http://localhost:3010/daycarefun/admin';
  parentsInfo: any = {}; // to store the data

  constructor(private http: Http) {
    console.log('These are the parents enrolled in our daycare');
    
  }

  getData() {
    return this.http.get(this.apiGetParentsUrl)
      .map((res: Response) => res.json());
  }

  getParentsInfo() {
    this.getData().subscribe(parentsInfo => {
      console.log(parentsInfo);
      this.parentsInfo = parentsInfo;
    });
  }
  
}
