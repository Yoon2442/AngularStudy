import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel은 이 패키지가 제공한다.

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

  /* hero.service.ts 파일에 아래와 같이 추가하면 에러가 발생해서 이 파일에 import하고 provider에 HeroService를 등록한다.
  @Injectable({
  providedIn: 'root',})
  */
import { HeroService } from './hero.service'; // 2022-01-26 수정

import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { MessageService } from './message.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [HeroService, MessageService], // 2022-01-26 수정
  bootstrap: [AppComponent]
})
export class AppModule { }
