(function (global)  {
    'use strict';
  
    var slider = {
        init: function (id) {
            this.elem = document.getElementById(id);
            this.elem.classList.add('slider');
            this.current = 0;
            this.slides = [];            
        },
             
        add: function (imagePath, text) {
            var image = document.createElement('img');
            image.setAttribute('src', imagePath);
            image.setAttribute('alt', text);
            image.classList.add('sliderImage');
            this.elem.appendChild(image); 
            this.slides.push(image);
            //создать img с тегом src 
            //добавить стили для картинки
            //var image = // создание элемента <img>
            //добавление элементу атрибута src со значением = "img/"
            //добавление элементу атрибута alt со значением text 
            //добавление стиля - прописываем в css
            // мы создали <img src="img/pic.jpg' alt="Picture">
            //для того, чтобы слайды переключались, нужен массив
            //this.elem.appendChild(image);  
            //this.slides.push(image);
        },
         
        runSlideShow: function () {
            this.nextSlide();
            setInterval(this.nextSlide.bind(this), 2500);
            //setInterval( nextSlide, 1500); //полторы секуны, это в милисекундах 
            //сделать функцию nextSlide 
        },
         
        nextSlide: function () {
            if (this.current || this.current === 0) {
                this.slides[this.current].classList.remove('active');
                this.current += 1;
            }
            this.current = this.current < this.slides.length ? this.current : 0;
            this.slides[this.current].classList.add('active');
        }
    };
 
    slider.init('slider');
     
    slider.add('img/img1.jpg', 'Barry');
    slider.add('img/img2.jpg', 'Mountain');
    slider.add('img/img3.jpg', 'Sea');
 
    slider.runSlideShow();


document.getElementsByClassName('arrow-next').onclick = function () {
   allert('jjj');
}



  
 }(window));