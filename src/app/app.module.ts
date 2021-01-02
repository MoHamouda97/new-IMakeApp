import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

// ant
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';

// material
import {MatRippleModule} from '@angular/material/core';
import {MatTabsModule} from '@angular/material/tabs';

// carousel
import { CarouselModule } from 'ngx-owl-carousel-o';

// fixed
import { HeaderComponent } from './components/fixed/header/header.component';
import { NavComponent } from './components/fixed/header/nav/nav.component';
import { FooterComponent } from './components/fixed/footer/footer.component';

// public
import { HomeComponent } from './components/public/home/home.component';
import { HowItWorksComponent } from './components/public/home/how-it-works/how-it-works.component';
import { FeaturesComponent } from './components/public/home/features/features.component';
import { OurClientsComponent } from './components/public/home/our-clients/our-clients.component';
import { ContactComponent } from './components/public/home/contact/contact.component';
import { AboutComponent } from './components/public/about/about.component';
import { AboutHeaderComponent } from './components/public/about/about-header/about-header.component';
import { AboutTemplateComponent } from './components/public/about/about-template/about-template.component';
import { AboutDesignsComponent } from './components/public/about/about-designs/about-designs.component';
import { AboutTechComponent } from './components/public/about/about-tech/about-tech.component';
import { AboutFeaturesComponent } from './components/public/about/about-features/about-features.component';
import { PricingComponent } from './components/public/pricing/pricing.component';
import { PricingHeaderComponent } from './components/public/pricing/pricing-header/pricing-header.component';
import { CoursesComponent } from './components/public/courses/courses.component';
import { CoursesHeaderComponent } from './components/public/courses/courses-header/courses-header.component';
import { CourseContentComponent } from './components/public/courses/course-content/course-content.component';

// private


// services

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    // fixed
    HeaderComponent,
    NavComponent,
    FooterComponent,
    // public
    HomeComponent,
    HowItWorksComponent,
    FeaturesComponent,
    OurClientsComponent,
    ContactComponent,
    AboutComponent,
    AboutHeaderComponent,
    AboutTemplateComponent,
    AboutDesignsComponent,
    AboutTechComponent,
    AboutFeaturesComponent,
    PricingComponent,
    PricingHeaderComponent,
    CoursesComponent,
    CoursesHeaderComponent,
    CourseContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'pricing',
        component: PricingComponent
      },
      {
        path: 'courses',
        component: CoursesComponent
      }
    ]),
    // ant
    NgZorroAntdModule,
    // mat
    MatRippleModule,
    MatTabsModule,
    // carousel
    CarouselModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
