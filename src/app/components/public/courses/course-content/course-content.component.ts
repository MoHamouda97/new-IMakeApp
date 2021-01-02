import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.scss']
})
export class CourseContentComponent implements OnInit {

  courses = [
    {img: './../../../../../assets/images/course-image.png', title: 'كورس التخطيط للحملات التسويقية'},
    {img: './../../../../../assets/images/course-image.png', title: 'كورس التخطيط للحملات التسويقية'},
    {img: './../../../../../assets/images/course-image.png', title: 'كورس التخطيط للحملات التسويقية'},
    {img: './../../../../../assets/images/course-image.png', title: 'كورس التخطيط للحملات التسويقية'},
    {img: './../../../../../assets/images/course-image.png', title: 'كورس التخطيط للحملات التسويقية'},
    {img: './../../../../../assets/images/course-image.png', title: 'كورس التخطيط للحملات التسويقية'},
    {img: './../../../../../assets/images/course-image.png', title: 'كورس التخطيط للحملات التسويقية'},
    {img: './../../../../../assets/images/course-image.png', title: 'كورس التخطيط للحملات التسويقية'},
    {img: './../../../../../assets/images/course-image.png', title: 'كورس التخطيط للحملات التسويقية'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
