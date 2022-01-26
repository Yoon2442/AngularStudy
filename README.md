# Angular-Tour-Of-Heroes 예제 스터디

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.6.

## Memo

### 1. 히어로 에디터
### 2. 목록 표시하기

'Not using the local TSLint version found for '../~.component.ts'. To enable code execution from the current workspace you must enable workspace library execution.' 에러 발생</br>
https://stackoverflow.com/questions/65228384/tslint-extension-throwing-errors-in-my-angular-application-running-in-visual-stu</br>참고하여 해결
### 3. 기능 컴포넌트 만들기
### 4. 서비스 추가하기

#### 2022-01-25 오류
![image](https://user-images.githubusercontent.com/80866883/150944288-ddf23577-4704-41a9-8cee-20ee9bab717a.png)

#### 2022-01-26 오류</br>
![image](https://user-images.githubusercontent.com/80866883/151084808-63967f7a-dd4b-4319-a660-d77e5d9014e3.png)</br>
ng generate service 명령어 실행 시 오류</br>
Error: Cannot read property 'split' of undefined</br>
Cannot read property 'split' of undefined
-> 해결 ng generate service [이름] 이 와야한다.

#### 2022-01-26 오류</br>
![image](https://user-images.githubusercontent.com/80866883/151089337-23f0c964-cca1-4d79-9402-4e3cc8fdad79.png)</br>
AppComponent.html:2 ERROR Error: StaticInjectorError(AppModule)[HeroesComponent -> HeroService]: </br>
  StaticInjectorError(Platform: core)[HeroesComponent -> HeroService]: </br>
    NullInjectorError: No provider for HeroService!</br>
    
참고한 문서 https://angular.kr/tutorial/toh-pt4#%EB%A9%94%EC%8B%9C%EC%A7%80-%ED%91%9C%EC%8B%9C%ED%95%98%EA%B8%B0 에는 hero.service.ts 파일의 @Injectable 데코레이터에 아래와 같이 추가하라고 되어있었다.</br>
@Injectable({</br>
  providedIn: 'root',</br>
})</br>
그런데 0개의 인수가 필요한데 1개를 가져왔습니다.ts(2554) 라는 오류가 발생했다.

그래서 app.module.ts 파일에</br>
import { HeroService } from './hero.service'; </br>
providers: [HeroService], </br>
을 추가했다.


### 5. 네비게이션 추가하기
### 6. 서버에서 데이터 받아오기


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
