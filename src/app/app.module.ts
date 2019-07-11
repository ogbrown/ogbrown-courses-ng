/*
 * Copyright (c) 2017 - 2019 Oswald G. Brown, III
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoClassDateComponent } from './noclassdate/noclassdate.component';
import { SiteMastHeadComponent } from './site-mast-head/site-mast-head.component';
import { SiteFooterComponent } from './site-footer/site-footer.component';
import { DefaultListComponent } from './page-content/home/default-list/default-list.component';
import { TechnologyStackComponent } from './site-footer/technology-stack/technology-stack.component';
import { SiteCreditComponent } from './site-footer/site-credit/site-credit.component';
import { SiteFooterMenuComponent } from './site-footer/site-footer-menu/site-footer-menu.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PageContentComponent } from './page-content/page-content.component';
import { PageHeaderComponent } from './page-content/page-header/page-header.component';
import { SiteNavComponent } from './site-mast-head/site-nav/site-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { CoursesNavComponent } from './site-mast-head/site-nav/courses-nav/courses-nav.component';
import { HomeComponent } from './page-content/home/home.component';

@NgModule({
  declarations: [
    AppComponent
    , NoClassDateComponent, SiteMastHeadComponent, SiteFooterComponent, DefaultListComponent, TechnologyStackComponent, SiteCreditComponent, SiteFooterMenuComponent, PageContentComponent, PageHeaderComponent, SiteNavComponent, CoursesNavComponent, HomeComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
