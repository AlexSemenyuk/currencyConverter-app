import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './components/headers/headers.component';
import { CurrentCurrencyComponent } from './components/current-currency/current-currency.component';
import { ConverterComponent } from './components/converter/converter.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './components/form/form.component';
import { CurrenciesTableComponent } from './components/currencies-table/currencies-table.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    CurrentCurrencyComponent,
    ConverterComponent,
    FormComponent,
    CurrenciesTableComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
