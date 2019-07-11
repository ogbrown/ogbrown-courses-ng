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

import { Component, OnInit } from '@angular/core';
import {PageService} from '../service/page.service';
import {SiteService} from '../service/site.service';
import {Meta, Title} from '@angular/platform-browser';
import {SiteInformation} from '../shared/site-information.model';
import {PageContent} from '../shared/page-content.model';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.css']
})
export class PageContentComponent implements OnInit {
  siteInfo: SiteInformation;
  homePageInfo: PageContent;

  constructor(private pageService: PageService, private siteService: SiteService, private meta: Meta, private titleService: Title) {
    this.meta.addTags([
      {name: 'description', content: 'Demo of an Angular 8 Web Application using HTTP Services'},
      {name: 'author', content: 'Oswald G. Brown, III'},
      {name: 'keywords', content: 'Angular, Meta Service'}
    ]);
    this.titleService.setTitle('DEMO O.G. Brown Courses Angular App');
  }
  ngOnInit() {
    this.siteInfo = this.siteService.fetchSiteInformation();
    this.pageService.fetchHomePageInfo().subscribe(page => {
      this.homePageInfo = page;
      console.log(this.homePageInfo);
    });
    this.meta.addTags([
      {name: 'description', content: 'Demo of an Angular 8 Web Application using HTTP Services'},
      {name: 'author', content: 'Oswald G. Brown, III'},
      {name: 'keywords', content: 'Angular, Meta Service'}
    ]);
    this.setTitle(this.siteInfo.siteTitle);
    this.setAuthor(this.siteService.fetchSiteCreditInfo().authorName);
  }

  public setTitle( newTitle: string) {
    console.log(newTitle);
    this.titleService.setTitle( newTitle );
  }

  public setAuthor( author: string ) {
    this.meta.updateTag({name: 'author', content: author});
  }

}
