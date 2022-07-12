let carousel = document.querySelector(".slider_carousel")
let evenLine = document.querySelector('.slider_even')
let oddLine = document.querySelector('.slider_odd')
// carousel.scrollTo(1100, 0)

let slides = document.querySelectorAll('.slide')
let texts = document.querySelectorAll('.text')
let years = document.querySelectorAll('.year')
let images = document.querySelectorAll('.slide-img')
let vLines = document.querySelectorAll('.slider_vertical-line')

  for (let i = 0; i < slides.length; i++ ) {
  slides[i].addEventListener('click', () => {
    for (let j = 0; j < slides.length; j++){
      slides[j].style.width = "120px"
      slides[j].style.height = "120px"
      slides[j].style.display = 'flex'
      slides[j].style.color = "#000"
      slides[j].style.background = "#f2f2f2"
      slides[j].style.flexDirection = 'colomn'
      slides[j].style.justtifyContent = 'center'
      slides[j].style.alignItems = 'center'
      slides[j].style.fontFamily = 'Commissioner'
      slides[j].style.padding = '0'
      slides[j].style.position = 'relative'
      slides[j].style.top = '0'
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
    if (i > 4) {
      slides[i].style.top = '-190px'
    } else {
      slides[i].style.bottom = '0'
    }
    slides[i].style.overflowY = "scroll"
    oddLine.style.width = 'auto'
    oddLine.style.height = '180px'
    oddLine.style.position = 'absolute'
    oddLine.style.top = 'top'
    oddLine.style.paddingLeft = '330px'
    oddLine.style.display = 'flex'
    oddLine.style.gap = '500px'
    evenLine.style.width = 'auto'
    evenLine.style.height = '180px'
    evenLine.style.position = 'absolute'
    evenLine.style.bottom = '0'
    evenLine.style.display = 'flex'
    evenLine.style.gap = '500px'
  })

  slides[i].addEventListener('click', () => {
    for (let j = 0; j < vLines.length; j++) {
      vLines[j].style.display = 'inline'
      vLines[j].style.position = 'relative'
      vLines[j].style.width = '1px'
      vLines[j].style.height = '60px'
      vLines[j].style.marginLeft = '59.5px'
      vLines[j].style.background = '#000'
      if (j > 4) {
        vLines[j].style.top = '0'
      } else {
        vLines[j].style.bottom = '0'
      }
    }
    vLines[i].style.display = 'none'
  })

  slides[i].addEventListener('click', () => {
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
  slides[i].addEventListener('click', () => {
    for (let j = 0; j < years.length; j++) {
      years[j].style.fontSize = '18px'
    }
    years[i].style.fontSize = '56px'
  })
  slides[i].addEventListener('click', () => {
    for (let j = 0; j < images.length; j++) {
      images[j].style.display = 'none'
    }
    images[i].style.display = 'inline'
    images[i].style.width = '100%'
    images[i].style.height = 'auto'
  })
  }

  console.log(slides)
