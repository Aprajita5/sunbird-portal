import { Component } from '@angular/core';
import { RssfeedService } from './../../services';
/**
 * Shows news feed
 */
@Component({
  selector: 'app-home-feed-card',
  templateUrl: './home-feed-card.component.html',
  styleUrls: ['./home-feed-card.component.css']
})
export class HomeFeedCardComponent {
  rssFeedQuestions:any;
  constructor(public rssfeedService: RssfeedService) { }

  ngOnInit() {
    this.getQuestionsRssFeed();
  }

  getQuestionsRssFeed(){
    this.rssfeedService.getQuestionsFeed().subscribe(
      (data) => {
          console.log('rss feed', data.result)
          this.rssFeedQuestions = data.result
       });
  }

}
