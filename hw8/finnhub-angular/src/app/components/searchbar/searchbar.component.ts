import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { SearchService } from '../../services/search.service';
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent implements OnInit {
  ticker: string;
  defaultOptions;
  options;
  isLoading: boolean;

  constructor(
    private AutoCompleteService: SearchService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.searchThis();
  }

  searchThis(): void {
    if (!this.ticker) {
      this.onClear();
      return console.log('the ticker is empty right now');
    }
    this.options = [];
    this.isLoading = true;
    this.AutoCompleteService.getAutoCompleteData(this.ticker)
      .pipe(debounceTime(500))
      .subscribe((response) => {
        this.options = response;
        this.isLoading = false;
      });
  }

  setTicker() {
    console.log('executed');
    this.ticker = this.ticker.split(' ')[0];
  }
  onSubmit(): void {
    console.log('submitted!');
  }

  onClear() {
    this.options = [];
    this.isLoading = false;
  }
}
