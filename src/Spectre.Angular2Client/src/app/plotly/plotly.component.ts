/*
 * plotly.component.ts
 * Component wrapping Plotly library.
 *
   Copyright 2017 Grzegorz Mrukwa

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

import { ChangeDetectorRef, Component, OnInit, Input } from '@angular/core';

declare var Plotly: any;

@Component({
  selector: 'app-plotly',
  templateUrl: './plotly.component.html',
  styleUrls: ['./plotly.component.css']
})
export class PlotlyComponent implements OnInit {

  @Input() data: any;
  @Input() layout: any;
  @Input() options: any;
  @Input() displayRawData: boolean;
  randomId: string;

  constructor(
      private cdRef: ChangeDetectorRef
  ) {
    this.randomId = Guid.newGuid();
    // this.randomId = '0';
  }

  ngOnInit() {
    console.log('ngOnInit plotly-' + this.randomId);
  }

  ngAfterViewInit() {
      Plotly.newPlot('plotly-' + this.randomId, this.data, this.layout, this.options);
      this.cdRef.detectChanges();
  }

}

class Guid {
    static newGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}
