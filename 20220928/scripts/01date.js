let today = new Date();
document.write(today); //모든 시간과 날짜정보가 나온다.

let month, day, yoil;
month = today.getMonth();
day = today.getDate();
yoil = today.getDay();

let a = ['(일)', '(월)', '(화)', '(수)', '(목)', '(금)', '(토)'];

document.getElementById("date").innerHTML = month + 1 + '.' + day + '.' + a[yoil];

document.getElementById("food").innerHTML = '오늘' + a[yoil] + ' 의 추천요리는<br>' +'<img src="./images02/food' + (yoil + 1) + '.jpg">';