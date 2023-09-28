import { Component, OnInit } from '@angular/core';
import { GitService  } from 'src/app/services/git.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  public repos: any[] = [];
  public dataGit: any = {};
  public p: number = 1;  // paginacion primer page

  constructor( private gitSv: GitService ){}

  public getRepos(){
    this.gitSv.getsRepos().subscribe(  res => {
      this.repos = res;
    });
  }

  public getDataGit(){
    this.gitSv.gets().subscribe(  res => {
      this.dataGit = res;
    });
  }

  ngOnInit(): void {
    this.getDataGit();
    this.getRepos();
  }

}
