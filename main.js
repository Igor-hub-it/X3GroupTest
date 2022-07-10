let carousel = document.querySelector(".slider_carousel")
carousel.scrollTo(1100, 0) 

let slides = document.querySelectorAll('.slide')
let texts = document.querySelectorAll('.text')
let years = document.querySelectorAll('.year')
let images = document.querySelectorAll('.slide-img')


  for (let i = 0; i < slides.length; i++ ) {
  slides[i].addEventListener('click', () => {
    for (let j = 0; j < slides.length; j++){
      slides[j].style.width = "120px"
      slides[j].style.height = "120px"
      slides[j].style.color = "#000"
      slides[j].style.background = "#f2f2f2"
    }
    slides[i].style.width = "300px"
    slides[i].style.height = "300px"
    slides[i].style.color = "white"
    slides[i].style.background = "#51BAE5"
    slides[i].style.padding = "60px 40px"
    slides[i].style.display = "flex"
    slides[i].style.flexDirection = "column"
    slides[i].style.alignItems = "start"
    slides[i].style.gap = "15px"
    slides[i].style.position = "absolute"
    if (slides[i] = slide[0])
    switch (a) {
      case 3:
        alert( 'Маловато' );
        break;
      case 4:
        alert( 'В точку!' );
        break;
      case 5:
        alert( 'Перебор' );
        break;
      default:
        alert( "Нет таких значений" );
    }
    // slides[i].style.left = "1760px"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    slides[i].style.top = "0"
    slides[i].style.overflowY = "scroll"
  })

  texts[i].addEventListener('click', () => {
    for (let j = 0; j < texts.length; j++) {
      texts[j].style.display = 'none'
    }
    texts[i].style.display = 'inline'
    texts[i].style.fontFamily = '"Commissioner"'
    texts[i].style.fontSize = '18px'
    texts[i].style.fontWeight = ''
    texts[i].style.lineHeight = ''
    texts[i].style.textAlign = 'left'
  })
  years[i].addEventListener('click', () => {
    for (let j = 0; j < years.length; j++) {
      // years[j].style.display = 'none'
    }
  })
  images[i].addEventListener('click', () => {
    for (let j = 0; j < images.length; j++) {
      images[j].style.display = 'none'
    }
  })
  }

function vision (slide) {
}
console.log(slides)
