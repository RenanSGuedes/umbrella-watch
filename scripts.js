
function handlePointersAndDisplay () {
  setInterval(() => {
    var date = new Date()
    var hourSelector = document.querySelector(".hour").style
    var minuteSelector = document.querySelector(".minute").style
    var secondSelector = document.querySelector(".second").style
    
    var hms = {
      hourAsDeg: (date.getHours()) * 30 + 180 + (date.getMinutes() / 60) * 30,
      hourAsNumber: date.getHours(),
      minuteAsDeg: date.getMinutes() * 6 + 180 + (date.getSeconds() / 60) * 6,
      minuteasNumber: date.getMinutes(),
      secondAsDeg: date.getSeconds() * 6 + 180,
      secondAsNumber: date.getSeconds()
    }

    var displaySelector = document.querySelector(".minidisplay")

    if (hms.secondAsNumber.toString().length < 2) {
      displaySelector.innerHTML = `${hms.hourAsNumber}:${hms.minuteasNumber}:0${hms.secondAsNumber.toString()}`
    } else if (hms.minuteasNumber.toString().length < 2) {
      displaySelector.innerHTML = `${hms.hourAsNumber}:0${hms.minuteasNumber.toString()}:${hms.secondAsNumber}`
    } else if (hms.hourAsNumber.toString().length < 2) {
      displaySelector.innerHTML = `0${hms.hourAsNumber.toString()}:${hms.minuteasNumber}:${hms.secondAsNumber}`
    } else displaySelector.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

    hourSelector.transform = `rotateZ(${hms.hourAsDeg}deg)`
    minuteSelector.transform = `rotateZ(${hms.minuteAsDeg}deg)`
    secondSelector.transform = `rotateZ(${hms.secondAsDeg}deg)`

    }, 1000)
}

handlePointersAndDisplay()
