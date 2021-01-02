import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  features = [
    {img: './../../../../../assets/images/feature1.png', text: 'صفحة خاصة لكل منتج لاظهار تفاصيله'},
    {img: './../../../../../assets/images/feature2.png', text: 'يمكنك اضافة عدد لا نهائي من الاقسام و الاقسام الفرعية لمنتجاتك'},
    {img: './../../../../../assets/images/feature3.png', text: 'التطبيق يحتوي على لغات متعددة لتتمكن من الوصول لاكبر عدد من العملاء'},
    {img: './../../../../../assets/images/feature4.png', text: 'نقوم ببرمجة تطبيقاتنا باستخدام اللغات الاساسية لبرمجة التطبيق'},
    {img: './../../../../../assets/images/feature5.png', text: 'نظام متكامل للحسابات والتقارير لتتمكن من تدارك الاخطاء و تحليل السوق و المبيعات بشكل سلس'},
    {img: './../../../../../assets/images/feature6.png', text: 'امكانية تحديد مكان العميل في التطبيق على الخريطة مباشرة لسهولة الوصول اليه'},
    {img: './../../../../../assets/images/feature7.png', text: 'توفير خيارات متعددة للدفع في متجرك لتوفير راحة كبيرة لعملائك'},
    {img: './../../../../../assets/images/howto1.png', text: 'الحصول على احدث الاضافات و التطويرات مجانا بمجرد انضمامك الينا'}    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
