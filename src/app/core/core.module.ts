import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TrelloApiService } from '../core/trello-api/trello-api.service';
import { FormatHelperService } from './format-helper/format-helper.service';

import { LoggedInGuard } from '../core/logged-in/logged-in.guard';
import { LoggedOutGuard } from '../core/logged-out/logged-out.guard';

import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    FormatHelperService,
    TrelloApiService,
    LoggedInGuard,
    LoggedOutGuard
  ],
  declarations: [MenuComponent]
})
export class CoreModule { }
