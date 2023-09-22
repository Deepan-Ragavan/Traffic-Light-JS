let stopDiv = document.querySelector('.stop')
let readyDiv = document.querySelector('.ready')
let goDiv = document.querySelector('.go')
let container = document.querySelector('.container')

container.onclick = () => {
    stopDiv.style.background = 'rgb(27, 27, 39)'
    readyDiv.style.background = 'rgb(27, 27, 39)'
    goDiv.style.background = 'rgb(27, 27, 39)'
}

let stop = () => {
    stopDiv.style.background = 'red'
    readyDiv.style.background = 'rgb(27, 27, 39)'
    goDiv.style.background = 'rgb(27, 27, 39)'
}

let ready = () => {
    stopDiv.style.background = 'rgb(27, 27, 39)'
    readyDiv.style.background = 'yellow'
    goDiv.style.background = 'rgb(27, 27, 39)'
}

let go = () => {
    stopDiv.style.background = 'rgb(27, 27, 39)'
    readyDiv.style.background = 'rgb(27, 27, 39)'
    goDiv.style.background = 'green'
}