# Angular-Tour-Of-Heroes 예제 스터디

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.6.

## Memo

### 1. 히어로 에디터
### 2. 목록 표시하기
* 에러 발생
```
'Not using the local TSLint version found for '../~.component.ts'. 
To enable code execution from the current workspace you must enable workspace library execution.'
```
* [Stackoverflow](https://stackoverflow.com/questions/65228384/tslint-extension-throwing-errors-in-my-angular-application-running-in-visual-stu) 참고하여 해결
### 3. 기능 컴포넌트 만들기
### 4. 서비스 추가하기

> #### 2022-01-25 오류
> ![image](https://user-images.githubusercontent.com/80866883/150944288-ddf23577-4704-41a9-8cee-20ee9bab717a.png)

> #### 2022-01-26 오류</br>
> ![image](https://user-images.githubusercontent.com/80866883/151084808-63967f7a-dd4b-4319-a660-d77e5d9014e3.png)</br>   `ng generate service` 명령어 실행 시 오류   
> ```
> Error: Cannot read property 'split' of undefined
> Cannot read property 'split' of undefined
> ```
> 해결 ->  `ng generate service [이름]` 이 와야한다.

> #### 2022-01-26 오류</br>
> ![image](https://user-images.githubusercontent.com/80866883/151089337-23f0c964-cca1-4d79-9402-4e3cc8fdad79.png)</br>   
> ```
> AppComponent.html:2 ERROR Error: StaticInjectorError(AppModule)[HeroesComponent -> HeroService]:
>   StaticInjectorError(Platform: core)[HeroesComponent -> HeroService]:
>     NullInjectorError: No provider for HeroService!
> ```    
> 참고한 [문서](https://angular.kr/tutorial/toh-pt4#%EB%A9%94%EC%8B%9C%EC%A7%80-%ED%91%9C%EC%8B%9C%ED%95%98%EA%B8%B0)에는 hero.service.ts 파일의 @Injectable 데코레이터에 아래와 같이 추가하라고 되어있었다.</br>
> ```typescript
> @Injectable({
>   providedIn: 'root',
> })
> ```
> `0개의 인수가 필요한데 1개를 가져왔습니다.ts(2554)` 라는 오류가 발생했다.
> 그래서 app.module.ts 파일에</br>
> `import { HeroService } from './hero.service';` 와 `providers: [HeroService],` 를 각각 추가했다.

> #### 2022-01-26 [옵저버블 구독](https://angular.kr/tutorial/toh-pt4#heroescomponent-%EC%97%90%EC%84%9C-%EC%98%B5%EC%A0%80%EB%B2%84%EB%B8%94-%EA%B5%AC%EB%8F%85%ED%95%98%EA%B8%B0)

> #### 2022-01-26 오류[(메시지 표시하기)](https://angular.kr/tutorial/toh-pt4#%EB%A9%94%EC%8B%9C%EC%A7%80-%ED%91%9C%EC%8B%9C%ED%95%98%EA%B8%B0)
> `ng generate component messages` 명령 실행 시 messages 폴더 생성 및 폴더 하위 파일 생성됨   
> app.component.html 파일의 아래와 같은 에러 발생</br>
> ```
> <app-messages></app-messages>
> 'app-messages' is not a known element:
> 1. If 'app-messages' is an Angular component, then verify that it is part of this module.</br>
> 2. If 'app-messages' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to > suppress this message.ng
> ```
> 위 경우 app.module.ts 에 </br>
> **`import { MessagesComponent } from './messages/messages.component';` 추가 </br>**
> ```typescript
> @NgModule({
>   declarations: [
>     AppComponent,
>     HeroDetailComponent,
>     HeroesComponent,
>     MessagesComponent //추가
>   ],
> ```
> `providedIn : 'root',` 코드를 넣어서 발생한 오류는 app.module.ts 파일의 provide에 messageservice를 추가했다.

### 5. 네비게이션 추가하기
> #### 2022-01-26 오류(app.module.ts 파일 배열 추가 오류 #1)</br>
> ![image](https://user-images.githubusercontent.com/80866883/151104343-8b184620-b51f-4745-a5c5-9c2747749b2f.png)</br>
> import 배열 중간에 라우팅 모듈이 추가되는 오류 발생

> #### 2022-01-26 오류(app.module.ts 파일 배열 추가 오류 #2)</br>
> ![image](https://user-images.githubusercontent.com/80866883/151116708-2839fc57-a417-48ce-b73a-59e6c22c87a9.png)</br>
> ![image](https://user-images.githubusercontent.com/80866883/151116788-205af32e-ce1f-43b1-bc8d-0cd4df1351ce.png)</br>
> `ng generate component dashboard` 명령어 실행 시 app.module.ts 파일에 `import` 부분과 `declaration` 부분에 자동으로 추가되는데 구문 오류 발생하도록 추가됨.</br>   
> **놓친 부분**</br>
> ![image](https://user-images.githubusercontent.com/80866883/151117574-5544d80d-9412-4cae-92dd-45f3fb830a90.png)</br>
> `declaration: [` 앞에 , 가 들어가도 편집기 내에서 에러 발생 없이 컴파일 됨. 그래서 브라우저 실행 시 오류가 발생해도 몰랐다.

#### 정리
* 화면에 표시하는 컴포넌트를 전환하기 위해 Angular 라우터 추가.
* AppComponent에 <a> 링크와 <router-outlet>을 추가하여 네비게이션 동작을 실행
* 라우터 설정은 AppRoutingModule에 정의
* 간단한 라우팅 규칙부터 리다이렉트 라우팅 규칙, 라우팅 변수가 있는 라우팅 규칙을 정의
* 앵커 엘리먼트에 routerLink 디렉티브를 적용
* 히어로 목록/상세정보 화면은 결합도가 높았지만 라우터를 활용해서 결합도를 낮추도록 리팩토링
* 히어로 목록 화면에서 사용자가 선택한 히어로의 정보를 히어로 상세정보 화면으로 전달하기 위해 라우터 링크 배열을 활용
* 여러 컴포넌트에 사용하는 로직을 중복해서 구현하지 않고 HeroService로 옮겨서 재사용할 수 있도록 변경

### 6. 서버에서 데이터 받아오기
  > #### 2022-01-27 오류 #1
  > ```
  > ERROR in node_modules/@angular/core/core.d.ts(264,63): error TS1005: '>' expected.
> node_modules/@angular/core/core.d.ts(264,90): error TS1005: '(' expected.   
> node_modules/@angular/core/core.d.ts(264,109): error TS1005: '(' expected.  
> node_modules/@angular/core/core.d.ts(264,115): error TS1109: Expression expected.
> node_modules/@angular/core/core.d.ts(264,119): error TS1109: Expression expected.
> node_modules/@angular/core/core.d.ts(12721,86): error TS1110: Type expected.node_modules/@angular/core/core.d.ts(12721,92): error TS1005: '=' expected. 
> node_modules/@angular/core/core.d.ts(12721,94): error TS1005: ')' expected. 
> node_modules/@angular/core/core.d.ts(12721,95): error TS1128: Declaration or statement expected.
> node_modules/@angular/core/core.d.ts(12721,96): error TS1128: Declaration or statement expected.
>   ```
> VScode 탐색기에서 `node_moduels`를 모두 제거하고 `npm install` 명령을 실행 한 뒤 정상적으로 컴파일 됐다.   [[참고]](https://stackoverflow.com/questions/54434333/error-ts1005-expected-typescript-angular-6-for-first-build-error-rxjs-insi)
  
  > #### 2022-01-27 오류 #2
  > Angular 튜토리얼 중 서비스 추가하기의 `@Injectable()` 데코레이터에서 발생한 오류 때문에 진행 못했던 이유가 Angular의 버전 문제였다.
  > ```typescript
  > @Injectable({
  > providedIn: 'root',
> })
  > ```
  > 위 코드는 Angular 6의 새로운 기능이므로 내 환경에서 정상 작동하지 않았다. 나는 Angular cli 버전이 1.6.6 이었다.
  > 그래서 NodeJS부터 삭제 후 다시 설치했다. Python과 VisualStudio의 추가기능? 들도 선택사항에 체크해서 함께 설치했다. [참고 사이트](https://www.a-mean-blog.com/ko/blog/Angular/_/Angular-%EC%84%A4%EC%B9%98-%EB%B0%8F-Angular-CLI%EB%A1%9C-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%8B%A4%ED%96%89-%EB%B0%A9%EB%B2%95)
  > Angular CLI가 전역으로 설치돼서 기존 프로젝트(로컬)에 적용을 못해서 [참고 사이트](https://stackoverflow.com/questions/44525746/global-angular-cli-version-greater-than-local-version/48696897)를 확인하여 해결했다.
  > 

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
