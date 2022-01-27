import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})


export class HeroDetailComponent implements OnInit {

  // 오류 난 부분 @Input 구문을 export 밖에 놨음
  // @Input() hero?: Hero;

  // 2022-01-27 @Input() hero?: Hero;을 아래로 수정
  hero: Hero | undefined;

  constructor(
    private route: ActivatedRoute, // HeroDetailComponent 인스턴스 생성 및 라우팅 규칙 정보
    private heroService: HeroService, // 컴포넌트에 사용할 히어로 데이터 가져오기
    private location: Location // 브라우저 제어를 위해 사용
  ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    // 컴포넌트가 생성된 직후에 존재하는 라우팅 규칙에 대한 정보 담긴 객체
    // 이 객체가 제공하는 paramMap을 사용하면 URL에 존재하는 라우팅 변수 참조 가능
    // 서버로부터 받아올 히어로의 id에 해당하는 값을 URL에 있는 id키로 참조
    // 라우팅 변수는 문자열 타입이므로 Number 함수를 사용하여 숫자로 변환한다.
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back(); // 브라우저의 히스토리 스택을 사용한 location 서비스 활용하여 뒤로가기
  }

}
