

let percent = document.querySelectorAll('.analytics__proccess-percent')
let tube = document.querySelectorAll('.analytics__proccess-tube')
let tubeBg = document.querySelectorAll('.analytics__proccess-tubeBg')

function active(){

    for(let i = 0; i < percent.length; i++){
        let percentColor = percent[i].getAttribute('data-color')
        percent[i].style.color = percentColor
        
        for(let j = 0; j < tubeBg.length; j++){


            for(let k = 0; k < tubeBg.length; k++){

                function start(percent2 = 0){
                    // let percent2 = 0
                    let percentPc = percent[i].getAttribute('data-percent')
    
                    percent[i].innerHTML = percent2 + '%'
                    percent[i].style.width = percent2 + '%'
    
                    percent2++
    
                    if(percent2 <= percentPc){
                        setTimeout(() => {
                            start(percent2)
                        }, 20); 
                    }
                }

                function countLine(line = 0){
                    let tubeBgBg = tubeBg[k].getAttribute('data-bg')
                    let percentPc = tubeBg[k].getAttribute('data-percent')
        
                        tubeBg[k].style.background = tubeBgBg
    
                        tubeBg[k].style.width = `${line}%`

                        line++

                        if(line <= percentPc){
                            setTimeout(() => {
                                countLine(line)
                            }, 20);
                        }


                }

                countLine()
            }
            // console.log(percentPc)
 
        }
        start()
    }

}

// active()---------------------------------------<>    


// cards section


// mosueover hover

let card = document.querySelectorAll('.cards__content-card')


for(let c = 0; c < card.length; c++){
    card[c].addEventListener('mouseover', function () {        
        hover(this)
    })
}

function hover(el) {

    let parent = el.closest('.cards__content-card')
    let cardMini = parent.querySelector('.cards__content-miniCard')
    let blur = parent.querySelector('.cards__content-cardBlur')
    let cardParagraph = parent.querySelector('.miniCard__paragraph')
    let cardTxt = parent.querySelector('.miniCard__txt')
    let cardIcon = parent.querySelector('.miniCard__icon')


    blur.style.display = 'none'
    cardParagraph.style.color = 'white'
    cardTxt.style.color = 'white'
    cardIcon.style.color = '#3988FF'
    cardMini.style.background = 'linear-gradient(180deg, #D93059 0%, #D95B7A 100%)'
}

// mouseout hover

for(let c = 0; c < card.length; c++){
    card[c].addEventListener('mouseout', function () {        
        hoverout(this)
    })
}

function hoverout(el) {

    let parent = el.closest('.cards__content-card')
    let cardMini = parent.querySelector('.cards__content-miniCard')
    let blur = parent.querySelector('.cards__content-cardBlur')
    let cardParagraph = parent.querySelector('.miniCard__paragraph')
    let cardTxt = parent.querySelector('.miniCard__txt')
    let cardIcon = parent.querySelector('.miniCard__icon')


    blur.style.display = 'inline'
    cardParagraph.style.color = '#050C26'
    cardTxt.style.color = '#575859'
    cardIcon.style.color = '#050C26'
    cardMini.style.background = '#f1f1f1'
}


// plans start


let yearly = document.querySelector('.plans__duration-yearly')
let monthly = document.querySelector('.plans__duration-monthly')
let boxMonth = document.querySelectorAll('.plan__box-monthly')
let boxYear = document.querySelectorAll('.plan__box-yearly')





monthly.addEventListener('click', function () {
    yearly.classList.remove('plan__active')
    monthly.classList.add('plan__active')

    for(let i = 0; i < boxMonth.length; i++){
        for(let k = 0; k < boxYear.length; k++){
            boxMonth[i].style.display = 'inline'
            boxYear[k].style.display = 'none'
        }
    }
})

yearly.addEventListener('click', function () {
    monthly.classList.remove('plan__active')
    yearly.classList.add('plan__active')

    for(let i = 0; i < boxMonth.length; i++){
        for(let k = 0; k < boxYear.length; k++){
            boxMonth[i].style.display = 'none'
            boxYear[k].style.display = 'inline'
        }
    }

})


// slider start

let sliderBtn = document.querySelectorAll('.clients__button-dot')

for(let i = 0; i < sliderBtn.length; i++){
    sliderBtn[i].addEventListener('click', () => {
        
        for(let k = 0; k < sliderBtn.length; k++){
            sliderBtn[i].classList.remove('active')
            sliderBtn[k].classList.remove('active')
        }

        sliderBtn[i].classList.add('active')
    })
}



let seeMore = document.querySelector('.see__more')

if(seeMore.innerHTML === 'See More'){
    
};


seeMore.addEventListener('click', () => {
    let height = document.querySelector('.cards__content-under')
    let downIcon = document.querySelector('.down__icon')
    let upIcon = document.querySelector('.up__icon')

    if(seeMore.innerHTML === 'Show More'){
        seeMore.addEventListener('click', ()=> {

            height.style.height = 'auto'
            seeMore.innerHTML = 'Show Less'
            downIcon.style.display = 'none'   
            upIcon.style.display = 'inline'
        })
    }else if(seeMore.innerHTML === 'Show Less'){
        seeMore.addEventListener('click', () => {
            height.style.height = '1000px'
            seeMore.innerHTML = 'Show More'
            downIcon.style.display = 'inline'   
            upIcon.style.display = 'none'
        })
    } 
})



let burger = document.querySelector('.burger')
let burgerBack = document.querySelector('.chechhhh')
let headerBurger = document.querySelector('.header__burger')

burger.addEventListener('click', ()=>{
    // console.log('as');

    if(burgerBack.innerHTML === 'Contact'){
        burger.addEventListener('click', () => {
            headerBurger.style.position = 'unset'
            headerBurger.style.transform = `translateY(${0}px)`
        })
    }

    if(headerBurger.style.position === 'unset'){
        burger.addEventListener('click', () => {

            headerBurger.style.position = 'absolute'
            headerBurger.style.transform = `translateY(${-200}px)`
        })
    }
    
    
})


















let playBtn = document.querySelector('.play__button')
let videoMode = document.querySelector('.video')
let closeVideo = document.querySelector('.video__close')

playBtn.addEventListener('click', () => {
    closeVideo.classList.add('active')
    videoMode.classList.add('active')

})

closeVideo.addEventListener('click', () => {
    videoMode.classList.remove('active')
    closeVideo.classList.remove('active')
})


window.addEventListener('scroll', function go() {
    const elem = document.elementFromPoint(0, 1237);
     active();
      window.removeEventListener('scroll', go)
    })







