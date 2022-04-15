let userName = prompt('Kullanıcı Adını Giriniz');
userName = userName.charAt(0).toUpperCase() + userName.slice(1);
// console.log(userName)
let user = document.querySelector('#myName');

if (userName.length > 0) {
  user.innerHTML = `${userName}`;
} else {
  alert('Kullanıcı Adı Giriniz!');
}
function showTime() {
  //Days
  let date = new Date();
  let days = [
    'Pazar',
    'Pazartesi',
    'Sali',
    'Çarşamba',
    'Perşembe',
    'Cuma',
    'Cumartesi',
  ];

  let dayName = date.getDay();

  // Clock

  let hours = zero(date.getHours());
  let minutes = zero(date.getMinutes());
  let seconds = zero(date.getSeconds());
  function zero(startNumber) {
    if (startNumber < 10) {
      return '0' + startNumber;
    } else {
      return startNumber;
    }
  }

  document.getElementById(
    'myClock'
  ).innerHTML = `${hours}:${minutes}:${seconds} ${days[dayName]}`;
}
setInterval(showTime, 1000);
