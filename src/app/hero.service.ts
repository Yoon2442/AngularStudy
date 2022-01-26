import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
// tslint:disable-next-line: import-blacklist
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

}
