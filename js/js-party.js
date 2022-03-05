/*$('.sideBar i').click(()=>{
  let boxItem = $('.colorBox') ;
  let boxSize = boxItem.innerWidth();

  if($('.sideBar').css('left') == '0px')
  {
      $('.sideBar').animate({left:-boxSize},1000)
}
  else{$('.sideBar').animate({left:0},1000)}

}
 
)*/
// make sideBar hide by default
$('.site-content').hide()
let mainTitlePosition = $('.main-title').position().left
let sideBarSize = $('.site-content').innerWidth()
let newPosition

console.log('#1:' + mainTitlePosition)
// handle open toggle btn
$('.slider').click(() => {
  $('.slider').hide(100)

  $('.site-content').animate({ left: 0 }, 1000)
  $('.site-content').css('display', 'flex')
  console.log('#2:' + (mainTitlePosition + sideBarSize))
  $('.main-title').animate({ left: mainTitlePosition + 100 }, 1000)
})
// handle close btn
$('.closeSB').click(() => {
  console.log('#3:' + mainTitlePosition)
  $('.main-title').animate({ left: mainTitlePosition }, 1000)
  $('.site-content').animate({ left: -sideBarSize }, 1000)
  $('.slider').show(500)
  $('.site-content').css('display', 'none')
})

//
$('.singer').click(function () {
  $(this).next().slideToggle(300)
  $('.detailsContainer p').not($(this).next()).slideUp(300)
})
//
const date = new Date(2022, 00, 30, 11, 28, 00)
const now = new Date()
totalSeconds = parseInt((date.getTime() - now.getTime()) / 1000)
let seconds = 60
console.log(date)
console.log(now)
console.log('S=' + seconds)
const daysEl = $('#days')
const hoursEl = $('#hours')
const minutesEl = $('#minutes')
const secondsEl = $('#seconds')

let days ; 
let hours ;
let minutes ;



function getDay(sec) {
  days = Math.floor(totalSeconds / (3600 * 24));
hours = Math.floor(totalSeconds %(3600*24)/3600 );
minutes = Math.floor(totalSeconds %3600/60)
seconds  =Math.floor(totalSeconds % 60)
daysEl.text('0-' + days + ' D')
hoursEl.text('0-' + hours + ' H')
minutesEl.text('0-' + minutes + ' M')
secondsEl.text('0-' + seconds + ' S')
  }
getDay(totalSeconds)




const changeTimeWithLimit = setInterval(() => {
  if (seconds == 0 && totalSeconds > 60) {
    totalSeconds -= 60
  }
  seconds--
  secondsEl.text('0-' + seconds + ' S')
  console.log(
    ' S: ' + seconds + ' D: ' + days + ' H: ' + hours + ' m: ' + minutes,
  )
  if (seconds === 0 && minutes > 0) {
    seconds = 60
    minutes -= 1
    console.log(minutes)
    secondsEl.text('0-' + seconds + ' S')
    minutesEl.text('0-' + minutes + ' M')
  }
  if (seconds === 0 && minutes === 0 && hours > 0) {
    seconds = 60
    minutes = 59
    hours -= 1
    secondsEl.text('0-' + seconds + ' S')
    minutesEl.text('0-' + minutes + ' M')
    hoursEl.text('0-' + hours + ' H')
    console.log(hours)
  }
  if (seconds === 0 && minutes === 0 && hours === 0 && days > 0) {
    seconds = 60
    minutes = 60
    hours = 24
    days -= 1
    daysEl.text('0-' + days + ' D')
    secondsEl.text('0-' + seconds + ' S')
    minutesEl.text('0-' + minutes + ' M')
    hoursEl.text('0-' + hours + ' H')
    console.log(days)
  }
  if (seconds === 0 && minutes === 0 && hours === 0 && days === 0) {
    daysEl.text('0-' + days + ' D')
    hoursEl.text('0-' + hours + ' H')
    minutesEl.text('0-' + minutes + ' M')
    secondsEl.text('0-' + seconds + ' S')
    clearInterval(changeTimeWithLimit)
  }
}, 1000);
$('#message').keyup(function(){
   $("#char-length").text( (100 - $(this).val().length));
  })

 
