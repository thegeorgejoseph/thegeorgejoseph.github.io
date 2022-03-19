import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SearchComponent } from './components/search/search.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { SearchdetailsComponent } from './components/searchdetails/searchdetails.component';

import { DataServiceService } from './services/data-service.service';
import { DescriptLeftComponent } from './components/descript-left/descript-left.component';
import { DescriptMiddleComponent } from './components/descript-middle/descript-middle.component';
import { DescriptRightComponent } from './components/descript-right/descript-right.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    WatchlistComponent,
    PortfolioComponent,
    SearchComponent,
    SearchbarComponent,
    SearchdetailsComponent,
    DescriptLeftComponent,
    DescriptMiddleComponent,
    DescriptRightComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatInputModule,
    MatProgressSpinnerModule,
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
