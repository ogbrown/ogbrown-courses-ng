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

import {CourseSession} from './course-session.model';

export class PageContent {

  public id: string;
  public title: string;
  public urlSlug: string;
  public folderUrlSlug: string;
  public metaDescription: string;
  public contentHeader: string;
  public metaKeywordsCsv: string;
  public content: string;
  public published: boolean;
  public protectedPage: boolean;
  public pageOrd: number;
  public parentPages: PageContent[];
  public childPages: PageContent[];
  public prevPageLinkOverride: string;
  public previousPage: PageContent;
  public nextPageLinkOverride: string;
  public nextPage: PageContent;
  public courseSessions: CourseSession[];
  public notes: string;

  constructor() {}
}
