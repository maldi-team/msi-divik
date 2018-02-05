/*
 * upload.service.ts
 * Service providing upload.
 *
   Copyright 2018 Sebastian Pustelnik

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';

import {Service} from '../../app.service';

@Injectable()
export class UploadService extends Service {

  constructor(private http: Http) {
    super();
  }

  uploadData(datasetLink: string, datasetName): Observable<boolean> {
    return this.http
      .post(`${this.getBaseUrl()}/download/`, {headers: this.getHeaders(), url: datasetLink, datasetName: datasetName})
      .map(r => {
        if (r.status === 200) {
          return true;
        }
      })
      .catch(() => {
        return Observable.throw(false);
      });
  }


  private getHeaders() {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}
