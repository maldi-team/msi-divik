/*
 * preparations.module.ts
 * Module with preparations-related stuff (routing, imports declarations, etc.).
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PreparationRoutingModule } from './preparation-routing.module';
import { PlotlyModule } from '../plotly/plotly.module';

import { PreparationComponent } from './preparation/preparation.component';
import { HeatmapComponent } from '../heatmaps/heatmap/heatmap.component';
import { SpectrumComponent } from '../spectra/spectrum/spectrum.component';
import { DivikComponent } from '../divik-results/divik/divik.component';
import { GrowlModule, TabViewModule} from 'primeng/primeng';
import { BlockUIModule } from 'ng-block-ui';
import {
  MatSliderModule, MatInputModule, MatButtonModule, MatTabsModule, MatExpansionModule,
  MatSelectModule
} from '@angular/material';

@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    FormsModule,
    PreparationRoutingModule,
    PlotlyModule,
    MatSliderModule,
    MatSelectModule,
    GrowlModule,
    TabViewModule,
    BlockUIModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatExpansionModule
  ],
  declarations: [
    PreparationComponent,
    HeatmapComponent,
    SpectrumComponent,
    DivikComponent
]
})
export class PreparationsModule {}
