import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";


@Component({
  selector:'app-star-rating',
  templateUrl:'./star-rating.component.html',
  styleUrls:['./star-rating.component.css']
})

export class StarRatingComponent implements OnChanges{


  public starWidth: number=0;

  @Output() // pour le transfer enfant - parent
  public starRatingCliclicked : EventEmitter<string>= new EventEmitter<string>();

  @Input() // pour le transfer parent - enfant
  public rating : number = 2;

  ngOnChanges(){
    this.starWidth = this.rating * 125/5  // la largeur en css= 125 et nous avons 5 etoile maxi.
  }

   public sendRating():void{
    this.starRatingCliclicked.emit(`La note est de :${this.rating}`)

   }
}
