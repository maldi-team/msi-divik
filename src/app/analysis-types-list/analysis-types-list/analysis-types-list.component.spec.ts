import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatExpansionModule, MatButtonModule, MatListModule, MatCardModule} from "@angular/material";

import { AnalysisTypesListComponent } from './analysis-types-list.component';
import {AnalysisNamesListComponent} from "../analysis-names-list/analysis-names-list.component";
import {HttpClientModule} from "@angular/common/http";
import {routing} from "../../app.routing";
import {PreparationListComponent} from "../../preparations/preparation-list/preparation-list.component";
import {MainPageComponent} from "../../main-page/main-page.component";
import {AnalysisViewComponent} from "../../analysis-view/analysis-view/analysis-view.component";
import {PageNotFoundComponent} from "../../page-not-found/page-not-found.component";
import {NewAnalysisViewComponent} from "../../new-analysis-view/new-analysis-view/new-analysis-view.component";
import {UploadComponent} from "../../upload/upload.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {GenericFormModule} from "../../generic-form/generic-form.module";
import {AnalysisTypesListService} from "../analysis-types-list.service";
import {Observable} from "rxjs/Observable";

describe('AnalysisTypesListComponent', () => {
  let component: AnalysisTypesListComponent;
  let fixture: ComponentFixture<AnalysisTypesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AnalysisTypesListComponent,
        AnalysisNamesListComponent,
        PreparationListComponent,
        MainPageComponent,
        UploadComponent,
        AnalysisViewComponent,
        NewAnalysisViewComponent,
        PageNotFoundComponent
      ],
      imports: [
        MatListModule,
        MatExpansionModule,
        MatButtonModule,
        HttpClientModule,
        routing,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        GenericFormModule
      ],
      providers: [
        {
          provide: AnalysisTypesListService,
          useValue: {getAlgorithms: (algorithmsUrl: string) => Observable.of(
              {
                analysis: ['divik']
              }
            )},
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisTypesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});