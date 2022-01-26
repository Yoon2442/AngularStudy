import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';


@Injectable()

  /* 아래와 같이 사용하면 에러발생
  @Injectable({
  providedIn: 'root',})
  */

export class HeroService {

  getHeroes(): Hero[] {
    return HEROES;
  }

  constructor() { }

}
