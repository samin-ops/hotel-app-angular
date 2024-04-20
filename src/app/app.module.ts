import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localefr from '@angular/common/locales/fr';

import { AppComponent } from './app.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { ReplaceComma } from './shared/pipes/replace-comma-pipe';
import { StarRatingComponent } from './shared/components/star-rating/star-rating.component';

registerLocaleData(localefr, 'fr'); // pour la langue de la monnaie.

@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    ReplaceComma,
    StarRatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
