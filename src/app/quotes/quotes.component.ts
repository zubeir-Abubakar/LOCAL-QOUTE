import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes'
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes =[]

  deleteQuotes(isComplete,index){
       if (isComplete){
           let toDelete=confirm(`Are you sure you wannna to delete ${this.quotes[index].name}`)

           if(toDelete){
               this.quotes.splice(index,1)
           }
       }
   }

   addNewQuotes(quote){
        let quoteLength = this.quotes.length;
        quote.id=quoteLength+1;
        quote.postDate = new Date(quote.postDate)
        this.quotes.push(quote)

    }

  toogleDetails(index){
        this.quotes[index].showDescription = !this.quotes[index].showDe scription;
    }

  constructor() { }

  ngOnInit() {
  }

}