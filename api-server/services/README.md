explore.service.js : /explore 의 TicketList에 필요한 컴포넌트 구현
  getExploreTicketList() => {
    festival_api.addr1
    festival_api.addr2
    festival_api.first_image
    festival_api.first_image2 
    festival_api.map_x 
    festival_api.map_y 
    festival_api.tel
    festival_api.title
    festival_api.home_page
    ...
  }


/api/auth/getauthnum post(login_id, phone_number) => res={id, curr_time, expiration_time, count, auth,ok}

use.service.js : /login, /auth 에필요한 컴포넌트 구현
  getAuth({login_id, phone_number}) => {id,curr_time,expiration_time,count,authentication_number} 



LoginModel.findSameLoginIdNum({login_id, phone_number}) => users에서 login_id와 phone_number가겹치는 갯수를 return 