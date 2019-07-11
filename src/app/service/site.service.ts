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

import {Injectable} from '@angular/core';
import {MenuItemDto} from '../shared/menu-item-dto.model';
import {HttpClient} from '@angular/common/http';
import {Technology} from '../site-footer/technology.model';
import {TechnologyStack} from '../site-footer/technologyStack.model';
import {SiteInformation} from '../shared/site-information.model';
import {SiteAuthor} from '../shared/site-author.model';

@Injectable({providedIn: 'root'})
export class SiteService {


  constructor(private http: HttpClient) {}

  fetchSiteInformation() {
    return new SiteInformation();
  }

  fetchSiteTopMenu() {
    return this.http.get<MenuItemDto[]>('http://localhost:8080/ogbrown-courses/pages/page/home/menu/sitetop');
  }

  fetchSiteFooterMenu() {
    return this.http.get<MenuItemDto[]>('http://localhost:8080/ogbrown-courses/pages/page/home/menu/sitefooter');
  }

  fetchSiteCreditInfo() {
    return new SiteAuthor();
  }
  getClientStack() {
    const clientDevStackTechs: Technology[] = [
      new Technology('IntelliJ IDEA Ultimate', '2019.1', 'https://www.jetbrains.com/idea/')
      , new Technology('Angular', '8', 'https://angular.io/')
      , new Technology('Git', '2', 'https://github.com/')
      , new Technology('Bootstrap', '3', 'https://getbootstrap.com/docs/3.3/')
      , new Technology( 'Font Awesome', '4', 'https://fontawesome.com/v4.7.0/')
      , new Technology('JQuery', '3', 'https://jquery.com/')
      , new Technology( 'HTML', '5', 'https://www.w3schools.com/html/html5_intro.asp')
      , new Technology( 'CSS', '3', 'https://www.w3schools.com/css/default.asp')
      , new Technology( 'Apache HTTPD', '2.4', 'https://httpd.apache.org/')
    ];
    return clientDevStackTechs;
  }
  getServerStack() {
    const serverDevStack: Technology[] = [
      new Technology('IntelliJ IDEA Ultimate', '2019.1', 'https://www.jetbrains.com/idea/')
      , new Technology('Spring Boot', '2.1.3', 'https://spring.io')
      , new Technology('Spring Framework', '5', 'https://spring.io')
      , new Technology('Spring Data JPA', '5', 'https://spring.io')
      , new Technology('Spring Web MVC', '5', 'https://spring.io')
      , new Technology('Spring Context', '5', 'https://spring.io')
      , new Technology('Git', '2', 'https://github.com/')
      , new Technology('Maven', '3', 'https://maven.apache.org/')
      , new Technology('Log4j', '2', 'https://logging.apache.org/log4j/2.x/manual/index.html')
      , new Technology('JUnit', '4.12', 'https://junit.org/junit4/')
      , new Technology('Mockito', '2', 'https://site.mockito.org/')
      , new Technology('Hibernate ORM', '6', 'https://hibernate.org/')
      , new Technology('MySQL', '8', 'https://www.mysql.com/')
      , new Technology('EHCache', '3', 'https://www.ehcache.org/')
      , new Technology('Jackson', '2.9', 'https://github.com/FasterXML/jackson')
      , new Technology('Apache Tomcat', '9', 'http://tomcat.apache.org/')
      , new Technology('Java', '8', 'https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html')
    ];
    return serverDevStack;
  }
  getClientTechnologyStackInfo() {
    return new TechnologyStack('Client Development Stack', 'Angular 8 Web Application', 'Apache HTTP Server', 'client');
  }
  getServerTechnologyStackInfo() {
    return  new TechnologyStack('Server Development Stack', 'Java/Spring RESTful Web Service', 'Apache Tomcat Server', 'server');
  }
}
