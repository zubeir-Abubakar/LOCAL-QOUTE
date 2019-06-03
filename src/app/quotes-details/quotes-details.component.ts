import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Quotes} from '../quotes'
@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {

  votes: number;

  @Input() quotes:Quotes;
    @Output() isComplete= new EventEmitter<boolean>();
    quoteDelete(complete:boolean){
      this.isComplete.emit(complete);
    }
  constructor() {
    this.votes = 0;
   }

   likeVote(): bool ean{
    this.votes +=1;
    return false;
  }

  dislikeVote(): boolean{
   this.votes -=1;
   return false;
 }
 
  ngOnInit() {
  }

}