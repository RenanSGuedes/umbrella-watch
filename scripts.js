
function handlePointersAndDisplay () {
  setInterval(() => {
    var date = new Date()
    var hourSelector = document.querySelector(".hour").style
    var minuteSelector = document.querySelector(".minute").style
    var secondSelector = document.querySelector(".second").style
    
    var hms = {
      hour: (date.getHours() - 12) * 30 + 180 + (date.getMinutes() / 60) * 30,
      minute: date.getMinutes() * 6 + 180 + (date.getSeconds() / 60) * 6,
      second: date.getSeconds() * 6 + 180
    }
  
    hourSelector.transform = `rotateZ(${hms.hour}deg)`
    minuteSelector.transform = `rotateZ(${hms.minute}deg)`
    secondSelector.transform = `rotateZ(${hms.second}deg)`

    document.querySelector(".minidisplay").innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

    }, 1000)
}

handlePointersAndDisplay()