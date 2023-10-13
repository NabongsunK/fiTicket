# LocalT 프로젝트

## 프로젝트 소개

지역별 축제 한눈에!
우리의 서비스는 전국 각지의 다채로운 축제 정보를 한눈에 제공합니다. 각 축제의 볼거리부터 먹거리까지, 다양한 테마를 기반으로 사용자에게 색다른 경험을 선사합니다.

QR 체크인으로 편리한 입장!
현장에서의 번거로운 결제 과정은 이제 그만! 우리의 서비스를 통해 미리 결제하고 QR 코드만으로 쉽게 축제에 참여할 수 있습니다. 이제 더 이상 현장에서의 대기시간 없이, 축제를 더욱 즐기실 수 있습니다.

## 팀원 소개

-강성수(팀장)
추가기능 개발, 팀 일정 설계

-박지호(팀원)
DB 설계및 생성, review 기능 체계화

-박민수(팀원)
서버 생성, findpw 기능 체계화

-한종악(팀원)
홈페이지 설계및 생성, 추가기능 개발

-황승민(팀원)
외부 API 서버 설계, login 기능 체계화

## 개발 일정

1주차
홈페이지 초기 디자인 스케치 수립
사용자 인증을 위한 회원가입 및 로그인 페이지 디자인 및 개발
사용자 인증 관련 API 엔드포인트 구현

2주차
홈페이지 데이터베이스 설계 및 설정
사용자 데이터와 축제 정보를 저장하기 위한 데이터베이스 스키마 설계
서버 환경 설정 및 메인 서버 초기 세팅
외부 데이터와의 연동을 위한 API 통합 작업 시작

3주차
데이터베이스와 메인 서버를 연동
외부 API와의 연결을 통해 축제 정보를 가져오는 로직 구현
사용자 데이터와 축제 정보를 조합하여 홈페이지에 표시
PortOne API를 이용한 결제 기능구현
redux를 이용한 장바구니/관심기능 구현

4주차
축제 정보 및 사용자 데이터의 최종 통합
홈페이지의 완성 및 마무리 작업
사용자 편의를 위한 map UI/UX 수정

5주차
사용자 편의성을 높이기 위해 디자인 및 기능 개선
프로세스 최적화및 버그 수정
웹브라우저 쿠키를 이용한 로그인 추가 기능 구현
네이버 api를 이용한 추가 기능 구현

6주차
최종 발표를 위한 발표 자료 및 스크립트,PPT 작성
aws 배포및 버그 수정
발표 리허설

## 개발 환경

개발 환경
FrontEnd: React React-router-dom React-redux Axios bootstrap crypto-js styled-components

BackEnd: Node.js Express cors csv-parser mysql2 python

데이터베이스: MySQL
버전및 이슈 관리 : Git

커뮤니케이션
git(이슈란 이미지 첨부),Discord,Zoom

ESLint 컨벤션
정적 문법 검사 및 코딩 스타일 점검
문법 오류나 코딩 스타일을 일관성 있게 유지.

Prettier 컨벤션
코드 포맷 코드 스타일 통일을 위해 사용.

Git 커밋 메세지 컨벤션
Udacity 스타일: type: Subject, 본문 및 꼬리말 선택적으로 사용.
Gitmoji: 커밋 메세지 type을 이모지로 표현.

OPEN API
KAKAO Maps API
NAVER Simple & Easy Notification Service
NAVER nShortURL
PortOne API
공공데이터 포탈 OPEN API (한국관광공사)

주요 라이브러리:
react-router-dom: SPA에서 새로고침 없는 페이지 이동을 관리 해주는 라이브러리
react-redux: react에서 전역상태관리를 위한 라이브러리 props를 사용하지 않고, 어디에서나 state와, 액션관리가 가능해짐
axios: node.js와 브라우저를 위한 promise기반 http 클라이언트 보다 직관적으로, 서버 호출 가능
bootstrap: 각종 레이아웃, 버튼, 입력창 등의 디자인과 기능을 css와 javascript로 만들어 놓은것
crypto-js: javascript에서 해시함수를 통한 암호화를 할수 있도록 해주는 node.js 패키지

express node.js를 사용하여 쉽게 서버를 구성할수 있게 만든 클래스와 라이브러리의 집합체
cors 브라우저에서 cross-origin HTTP요청을 안전하게 할 수 있게 해주는 라이브러리
csv-parser node.js에서 csv파일을 읽어주는 라이브러리
mysql2 node.js에서 mysql을 promise 를 이용하여 async/await 로 쉽게 읽을수 있게 해주는 라이브러리

## 컨벤션

### 코드 컨벤션

- 가독성이 좋고 유지보수가 쉬운 코드를 작성하기 위한 코딩 스타일 규약
- 개발자간 서로 다른 코딩 스타일 예시

```
if(a==100) return true;

if(a == 100) {
  return true;
}

const App = function(){
  return (
    <h1>Hello</h1>
  );
};

const App = () => <h1>Hello</h1>;
```

#### 다양한 코드 컨벤션 가이드

- [Airbnb JavsScript Style Guide](https://github.com/airbnb/javascript)
- [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)
- [JavaScript Standard Style](https://standardjs.com/readme-kokr.html)
- [Idiomatic JavaScript Style Guide](https://github.com/rwaldron/idiomatic.js/tree/master/translations/ko_KR)
- [Google Style Guide](https://google.github.io/styleguide/jsguide.html)

#### ESLint 컨벤션

##### ESLint

- 정적 문법 검사 및 코딩 스타일 등을 점검해서 런타임 오류나 코드의 가독성을 높이기 위해 사용하는 도구
- 규칙 예시
  - const로 선언한 변수에 값을 재할당하면 경고
  - 변수를 선언하지 않고 사용하면 경고
  - 선언후 사용안되는 변수가 있으면 경고
  - 들여쓰기를 스페이스 2개, 4개 또는 탭으로 할지 여부를 지정해서 규칙을 지키지 않으면 경고
- 사전에 정의한 규칙을 지키지 않는다면 경고나 에러를 띄워서 문법 오류나 코딩 스타일을 유지할 수 있게 도와줌
- create-react-app으로 생성한 프로젝트에는 기본으로 내장되어 있고 npm start로 서버 구동시 동작
  - 터미널에서 ESLint 경고/에러 확인 가능

##### React 프로젝트의 ESLint 설정

- 설정 파일 작성 방법: https://eslint.org/docs/latest/use/configure/configuration-files
- 프로젝트 루트에서 다음 명령 실행후 프로젝트 환경 질문에 답변하면 .eslintrc.js 파일 생성됨

```
npm init @eslint/config
또는
npx eslint --init

* How would you like to use ESLint?
  - To check syntax and find problems
* What type of modules does your project use?
  - JavaScript modules (import/export)
* Which framework does your project use?
  - React
* Does your project use TypeScript?
  - No
* Where does your code run?
  - browser
* What format do you want your config file to be in?
  - JavaScript
* eslint-plugin-react@latest eslint@latest. Would you like to install them now?
  - Yes
* Which package manager do you want to use?
  - npm
```

- .eslintrc.js

```
module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended", // eslint
    "plugin:react/recommended"  // eslint-plugin-react
  ],
  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs}"
      ],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react" // eslint-plugin-react
  ],
  "rules": {
  }
}
```

- env: 자바스크립트가 실행되는 환경 지정
  - browser를 지정할 경우 document, alert() 등을 window 객체의 속성으로 인식해서 경고/에러 표시하지 않음
  - commonjs를 지정할 경우 module 등을 nodejs의 모듈 객체로 인식해서 경고/에러 표시하지 않음
- plugins: 규칙, 환경, 구성 등을 정의한 서드 파티 플러그인 등록
  - 플러그인 이름의 접두사 "eslint-plugin-" 생략 가능
- extends: eslint-config-airbnb 같은 Shareable Config 모듈을 지정하면 rules, plugins 등 규칙 세트와 스타일을 상속받을 수 있음
  - Shareable Config 모듈 이름의 접두사 "eslint-config-" 생략 가능
- rules: 사용자 정의 규칙 지정
  - plugins, extends에서 정의된 규칙보다 우선함
  - 'off' 또는 0
  - 'warn' 또는 1
  - 'error' 또는 2

##### 커스텀 규칙 설정

- 필요에 따라 .eslintrc.js 파일의 rules에 커스텀 룰 추가
- 작성 방법: https://eslint.org/docs/latest/rules

```
module.exports = {
  ......
  "rules": {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": 0
  }
}
```

##### ESLint 실행

- 현재 폴더내의 모든 파일 검사

```
npx eslint .
```

- 지정한 폴더내의 모든 파일 검사

```
npx eslint ./src
```

- 지정한 파일 검사

```
npx eslint ./src/App.js
```

##### VSCode ESLint 플러그인 설치

- VSCode 편집창에서 바로 ESLint 경고/에러 확인 가능
- VSCode > Extensions > ESLint 검색, 설치
  - VSCode에서 오픈한 작업폴더에 설치된 eslint 모듈이나 글로벌로 설치된 eslint 모듈을 사용하므로 eslint 모듈이 설치되어 있어야 함(create-react-app으로 프로젝트 생성시 기본으로 설치됨)
  ```
  npm i eslint
  npm i -g eslint
  ```

#### Prettier 컨벤션

##### Prettier

- 자바스크립트 Code Formatting 도구(코드 정렬, 정리 등 코드 스타일 통일에 사용)

##### 프로젝트에 Prettier 설정

- Prettier 설치

```
npm i prettier
```

- 설정 파일 작성 방법: https://prettier.io/docs/en/configuration.html
- 설정 옵션: https://prettier.io/docs/en/options
- 프로젝트 루트에 .prettierrc.js 파일 작성
- .prettierrc.js 예시

```
module.exports = {
  // 문자열에 single quote 사용(기본값 true)
  singleQuote: true,
  // 코드 마지막에 세미콜론 추가(기본값 true)
  semi: true,
  // 들여쓰기를 탭으로 지정할지 여부(기본값 false)
  useTabs: false,
  // 들여쓰기 너비 2칸(기본값 2)
  tabWidth: 2,
  // 여러 줄의 쉼표로 구분된 구문 구조에서 후행 쉼표를 추가(none: 설정 안함, es5: 객체,배열에 설정, all(기본값): 함수 정의나 호출 등 가능한 모든 곳에 설정)
  trailingComma: 'all',
  // 한줄에 80 글자가 넘어가면 줄바꿈(기본값 80)
  printWidth: 80,
  // 화살표 함수의 매개변수가 하나만 지정될 때 괄호 생략(always: 항상 괄호 명시, avoid: 가능하면 생략)
  arrowParens: 'avoid',
  // windows에 뜨는 'Delete cr' 에러 해결
  endOfLine: "auto"
};
```

##### Prettier 실행

- 현재 폴더내의 모든 파일을 포맷에 맞춰서 변환

```
npx prettier --write .
```

- 지정한 폴더내의 모든 파일을 포맷에 맞춰서 변환

```
npx prettier --write ./src
```

- 지정한 파일을 포맷에 맞춰서 변환

```
npx prettier --write ./src/App.js
```

##### ESLint와 충돌

- ESLint는 코드 품질 규칙뿐만 아니라 스타일 규칙도 포함됨
- 코드 품질 문제는 ESLint를 사용하고 스타일 규칙은 Prettier를 사용
- eslint-config-prettier: 불필요하거나 Prettier와 충돌할 수 있는 모든 규칙을 비활성화시키는 Shareable Config 모듈
- eslint-config-prettier 설치

```
npm i -D eslint-config-prettier
```

- 다른 구성을 재정의하기 위해 .eslintrc 파일 extends의 마지막에 추가

```
{
  "extends": [
    ......
    "prettier"
  ]
}
```

##### VSCode에 Prettier Extention 추가

- Extentions > Prettier - Code formatter 설치
- File > Preferences > Settings > Workspace
  - "Editor: Format On Save" 체크 (파일 저장시 자동으로 포맷팅)
  - "Editor: Default Formatter"에 "Prettier - Code formatter" 선택 (기본 JavaScript formatter 대신 Prettier를 formatter로 지정)

### Git 커밋 메세지 컨벤션

- 커밋 메세지의 일관성을 위해 작성

#### Udacity Git Commit Message Style Guide

- 메세지 구조

```
type: Subject

body

footer
```

- type의 유형
  - feat: 새로운 기능
  - fix: 버그 수정
  - docs: 문서 변경 사항(readme.md, json 파일 등)
  - style: 코드 포맷 변경, 세미콜론 수정 등. 기능 변경 없음
  - refactor: 코드 리팩토링
  - test: 테스트 코드. 기능 변경 없음
  - chore: 빌드 작업 수정, 패키지 매니저 수정 등. 기능 변경 없음
- subject(제목) 규칙
  - 영문자 기준 50자 이내, 대문자로 시작, 마침표로 끝나지 않음
  - 과거 시제를 사용하지 않고 간결하게 기술. "수정했음", "수정함" 대신 "수정"
- body(본문) 규칙
  - 일반적으로 제목만 있으면 되지만 추가 설명이 필요할때 선택적으로 기입
  - 어떻게 변경되었는지가(어떻게는 코드를 보면 되므로) 아니라 무엇을, 왜 변경하는지를 설명
- footer(꼬리말)

  - 이슈 ID 등의 부가 정보 제공시 선택적으로 기입

- 사용 예시

```
refactor: 사용자 인증을 세션에서 토큰 방식으로 변경

추후 이중화 등의 확장을 용이하게 하기 위해 변경

Resolves: #123
See also: #456, #789
```

#### Gitmoji

- Git + Emoji
- Git 커밋 메세지의 type을 텍스트 대신 Emoji로 지정해서 한눈에 어떤 작업을 했는지 식별

##### VSCode에 Gitmoji Extention 추가

- Extentions > Gitmoji 설치
- File > Preferences > Settings > Workspace
  - "Gitmoji: Add Custom Emoji" > Edit in settings.json 클릭 후 Git 커밋 메세지 컨벤션에 맞춰서 커스텀 이모지 추가
  - 예시
  ```
  {
    "gitmoji.addCustomEmoji": [
      {
        "emoji": "✨",
        "code": ":feat:",
        "description": "새로운 기능 추가"
      },
      {
        "emoji": "👔",
        "code": ":logic:",
        "description": "비즈니스 로직 수정"
      },
      {
        "emoji": "🚧",
        "code": ":cont:",
        "description": "진행중인 작업"
      },
      {
        "emoji": "♻️",
        "code": ":refactor:",
        "description": "코드 리팩토링"
      },
      {
        "emoji": "🔥",
        "code": ":remove:",
        "description": "파일 삭제"
      },
      {
        "emoji": "🚚",
        "code": ":rename:",
        "description": "파일명 수정/이동"
      },
      {
        "emoji": "⚰️",
        "code": ":cleanup:",
        "description": "코드 정리"
      },
      {
        "emoji": "💄",
        "code": ":style:",
        "description": "UI/Style 추가/수정"
      },
      {
        "emoji": "🐛",
        "code": ":fix:",
        "description": "버그 수정"
      },
      {
        "emoji": "📝",
        "code": ":docs:",
        "description": "문서 추가/수정"
      },
      {
        "emoji": "➕",
        "code": ":adddep:",
        "description": "의존성 추가"
      },
      {
        "emoji": "➖",
        "code": ":remdep:",
        "description": "의존성 삭제"
      },
      {
        "emoji": "🔧",
        "code": ":conf:",
        "description": "설정파일 추가/수정"
      }
    ],
    "gitmoji.onlyUseCustomEmoji": true,
  }
  ```
- Gitmoji 사용
  - VSCode > Source Control 커밋 메세지 입력시 Choose Gitmoji 아이콘 선택해서 사용
