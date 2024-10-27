import { Component } from '@angular/core';
import { CurrencyService } from 'src/app/service/currency.service';


@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent {

  constructor(private currencyService: CurrencyService) { }

  baseCurrency!: string;
  targetCurrency!: string;
  amount!: number;
  convertedAmount!: number;

  convertCurrency() {
    this.currencyService.getExchangeRate(this.baseCurrency, this.targetCurrency)
      .subscribe(data => {
        const rate = data.rates[this.targetCurrency];
        this.convertedAmount = this.amount * rate;
      });
  }

}