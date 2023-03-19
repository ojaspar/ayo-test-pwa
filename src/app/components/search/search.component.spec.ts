import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  ActionsSubject,
  StateObservable,
  Store,
  StoreModule,
} from '@ngrx/store';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchComponent, StoreModule.forRoot({})],
      providers: [Store, StateObservable, ActionsSubject],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
