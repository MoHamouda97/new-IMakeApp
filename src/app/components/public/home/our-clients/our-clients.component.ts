import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-our-clients',
  templateUrl: './our-clients.component.html',
  styleUrls: ['./our-clients.component.scss']
})
export class OurClientsComponent implements OnInit {
  customOptions: OwlOptions = {
    rtl:false,
    center: true,
    margin:10,
    autoplay:true,
    autoplayHoverPause:true,
    dots:true,
    loop: true,
    nav: true,
    navText: ['<img src="./../../../../../assets/images/arrawss.png" />', '<img src="./../../../../../assets/images/arrawss.png" />'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  }; 

  slides = [
    {img: './../../../../../assets/images/ajwad.png', title: 'تطبيق الاجواد عراقي', text: 'تطبيق عراقي لبيع منتجات التجميل و الادوات الطبية الخاصة بالمرأة يحقق مبيعات كبيرة من خلال التطبيق'},
    {img: './../../../../../assets/images/ajwad.png', title: 'تطبيق الاجواد عراقي', text: 'تطبيق عراقي لبيع منتجات التجميل و الادوات الطبية الخاصة بالمرأة يحقق مبيعات كبيرة من خلال التطبيق'},
    {img: './../../../../../assets/images/ajwad.png', title: 'تطبيق الاجواد عراقي', text: 'تطبيق عراقي لبيع منتجات التجميل و الادوات الطبية الخاصة بالمرأة يحقق مبيعات كبيرة من خلال التطبيق'},
    {img: './../../../../../assets/images/ajwad.png', title: 'تطبيق الاجواد عراقي', text: 'تطبيق عراقي لبيع منتجات التجميل و الادوات الطبية الخاصة بالمرأة يحقق مبيعات كبيرة من خلال التطبيق'},
    {img: './../../../../../assets/images/ajwad.png', title: 'تطبيق الاجواد عراقي', text: 'تطبيق عراقي لبيع منتجات التجميل و الادوات الطبية الخاصة بالمرأة يحقق مبيعات كبيرة من خلال التطبيق'}, 
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
