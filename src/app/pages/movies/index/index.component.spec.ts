import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  ActionsSubject,
  StateObservable,
  Store,
  StoreModule,
} from '@ngrx/store';
import { IndexComponent } from './index.component';

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndexComponent],
      imports: [StoreModule.forRoot({})],
      providers: [Store, StateObservable, ActionsSubject],
    }).compileComponents();

    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
