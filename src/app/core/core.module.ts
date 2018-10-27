import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { DateCompareService } from './date-compare/date-compare.service';
import { TrelloApiService } from '../core/trello-api/trello-api.service';
import { HttpClientModule } from '@angular/common/http';
import { LoggedInGuard } from '../core/logged-in/logged-in.guard';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    DateCompareService,
    TrelloApiService,
    LoggedInGuard
  ],
  declarations: [MenuComponent]
})
export class CoreModule { }
