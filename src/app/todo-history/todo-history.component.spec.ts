import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoHistoryComponent } from './todo-history.component';

describe('TodoHistoryComponent', () => {
  let component: TodoHistoryComponent;
  let fixture: ComponentFixture<TodoHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoHistoryComponent]
    });
    fixture = TestBed.createComponent(TodoHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
