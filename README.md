api-server -------------- api 서버
├─ .env ------------------ aws를 위한 환경변수 선언
├─ .eslintrc.js ---------- 코딩컨벤션에 위배되는 코드를 자동 검출하는 설정
├─ .gitignore ------------ git에 올리지 않을 dir 설정
├─ .prettier.js ---------- 저장해놓은 코딩 컨벤션을 유지해주는 설정
├─ app.js
├─ bin
│ ├─ www
│ └─ www-https
├─ config
│ └─ index.js
├─ docs ------------------ 서버에 필요한 문서
├─ models ---------------- 서버구성에 필요한 model
├─ package.json
├─ routes ---------------- 서버구성에 필요한 router
└─ services -------------- 서버구성에 필요한 service

app-server --------------- client 서버
├─ .env
├─ .eslintrc.js
├─ .gitignore
├─ .prettier.js
├─ package.json
├─ public
│ ├─ assets -------------- font, image등 정적 요소
│ │ ├─ css
│ │ └─ images
│ ├─ cart
│ │ └─ css
│ └─ index.html
└─ src
├─ App.css
├─ App.js
├─ App.test.js
├─ components
│ ├─ common --------------- 공통 컴퍼넌트
│ └─ layout --------------- 메인 레이아웃
│ ├─ Footer.js
│ ├─ Header.js
│ ├─ index.js
│ └─ Loading.js
├─ data ------------------- 클라이언트에 필요한 데이터
├─ index.css
├─ index.js
├─ logo.svg
├─ pages ------------------ 메인페이지를 구성하는 페이지 컴포넌트들
│ ├─ deals
│ ├─ explore
│ ├─ findpw
│ ├─ geuljae
│ ├─ home
│ ├─ login
│ ├─ notFound
│ ├─ signup
│ ├─ staff
│ ├─ teams
│ └─ writeReview
└─ store ------------------- redux에 필요한 slice, state, action을 모아둠
