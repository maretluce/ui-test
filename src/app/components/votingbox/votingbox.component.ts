import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-votingbox',
  templateUrl: './votingbox.component.html',
  styleUrls: ['./../../scss/app.component.scss']
})
export class VotingboxComponent implements OnInit, DoCheck {

  public choice: string;
  public votesLike: number;
  public votesDislike: number;
  public votesTotal: number;
  public percentageLike: number;
  public percentageDislike: number;
  public bgpercentageLike: number;
  public bgpercentageDislike: number;

  constructor() {
    this.votesLike = 0;
    this.votesDislike = 0;
    this.votesTotal = 0;
    this.percentageLike= 0;
    this.percentageDislike= 0;
    this.bgpercentageLike= 50;
    this.bgpercentageDislike= 50;
  }

  ngOnInit(): void { }

  ngDoCheck(){ }

  /**/
  addVote(choice) {
    console.log(choice);
    if(choice == 'like') this.votesLike += 1;
    if(choice == 'dislike') this.votesDislike += 1;
    this.votesTotal += 1;

    /*percentage value*/
    this.bgpercentageLike = this.percentageLike = this.votesLike * 100 / this.votesTotal;
    this.bgpercentageDislike = this.percentageDislike = this.votesDislike * 100 / this.votesTotal;

  }

}