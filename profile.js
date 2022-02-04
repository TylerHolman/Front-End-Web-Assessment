const color = document.querySelector(`#color`)
const place = document.querySelector(`#place`)
const ritual = document.querySelector(`#ritual`)


const bnt4 = document.querySelector(`#btn4`)

const colorBtn = (event) => {
    event.preventDefault()
   alert(`PURPLE`)
}

const placeBtn = (event) => {
    event.preventDefault()
    alert(`Geneva, Switzerland`)
    
}

const ritualBtn = (event) => {
    event.preventDefault()
    alert(`MORNING STRETCH`)
}


color.addEventListener(`click`, colorBtn)
place.addEventListener(`click`, placeBtn)
ritual.addEventListener(`click`, ritualBtn)

bnt4.addEventListener(`click`, colorBtn)