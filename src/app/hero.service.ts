import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';

import { MessageService } from './message.service';


@Injectable()

  /* 아래와 같이 사용하면 에러발생
  @Injectable({
  providedIn: 'root',})
  */

export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  // getHeroes() 함수와 비슷하게 비동기로 동작한다. Heroes의 mock 데이터 하나를 Observable로
  // 반환하기 위해 RxJs가 제공하는 of() 함수를 사용
  // getHero()가 실제 Http 요청을 보내도록 수정하더라도 이 함수를 호출하는 HeroDetailComponent는 영향을 받지 않는다.

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add('HeroService: fetched heroid=${id}');
    return of(hero);
  }

}
