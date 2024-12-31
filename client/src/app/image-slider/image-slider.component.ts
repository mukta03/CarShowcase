import { Component} from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.css'
})
export class ImageSliderComponent{
  imageObject: Array<object> = [{
    image: 'assets/img/slider/fiat600e.webp',
    thumbImage: 'assets/img/slider/fiat600e.webp',
    title:'Fiat 600e'
}, {
    image: 'assets/img/slider/red.jpg',
    thumbImage: 'assets/img/slider/red.jpg',
    title: 'Sports Car'  //Optional: You can use this key if you want to show title
},
{
  image: 'assets/img/slider/Jazz.jpg',
  thumbImage: 'assets/img/slider/Jazz.jpg',
  title: 'Honda Jazz',  //Optional: You can use this key if you want to show title
}
];
}
