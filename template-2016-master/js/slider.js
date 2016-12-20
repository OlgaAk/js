(function () {
    'use strict';


    var h4 = document.createElement('h4'); 
    h4.textContent = "something";
	var p = document.createElement('p');

    var li1 = document.createElement('li');
    li1.classList.add('slide-1');
    li1.classList.add('active');

    li1.appendChild(h4); 
    li1.appendChild(p); 
	
    var li2 = document.createElement('li');  
    li2.classList.add('slide-2');
   
    li2.appendChild(h4); 
    li2.appendChild(p); 

    var li3 = document.createElement('li');
    li3.classList.add('slide-3');
   
    li3.appendChild(h4); 
    li3.appendChild(p);     

    var text =  document.createTextNode('')

    var ul = document.createElement('ul');
     
    ul.appendChild(li1); 
    ul.appendChild(li2);  
    ul.appendChild(li3); 

    var span1 = document.createElement('span');
     span1.classList.add('fa');
     span1.classList.add('fa-angle-left');
     span1.classList.add('arrow-prev');

     var span2 = document.createElement('span');
        span2.classList.add('fa');
     span2.classList.add('fa-angle-right');
     span2.classList.add('arrow-next');


   

    var elem = document.getElementById('slider'); 
    var elem2 = document.getElementById('wrap-slider');
											
		elem.appendChild(ul); 
        elem2.appendChild(span1); 
        elem2.appendChild(span2); 




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


span2.onclick = function () {
    
   slider.nextSlide();
}


}());