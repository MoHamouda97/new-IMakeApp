import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss']
})
export class HowItWorksComponent implements OnInit {

  customOptions: OwlOptions = {
    rtl: false,
    margin:10,
    autoplay:true,
    autoplayHoverPause:true,
    dots:false,
    loop: true,
    nav: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
  }; 
  
  slides = [
    {img: './../../../../../assets/images/howto1.png', text: 'النص غير واضح ........'},
    {img: './../../../../../assets/images/howto2.png', text: 'قم باضافة بيانات منتجاتك و صورها و تحديد بوابات الدفع و الاقسام الخاصه بنشاطك'},
    {img: './../../../../../assets/images/howto3.png', text: 'ستحصل على تطبيقك بالاعدادات الخاصة بك التي اعدتها بالفعل في غضون ساعات و مشاهدته على المتجر'},
    {img: './../../../../../assets/images/howto4.png', text: 'ابدا حملتك الاعلانية في جميع منصات التسويق الالكتروني و الشبكات الاجتماعية مع الحصول على الدعم المجاني منا للتسويق و الدعايا'},
    {img: './../../../../../assets/images/howto5.png', text: 'استقبال المزيد من الطلبات الالكترونية التي تزيد من اربحاك و ايراداتك'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
