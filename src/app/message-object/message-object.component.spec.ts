import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageObjectComponent } from './message-object.component';

describe('MessageObjectComponent', () => {
  let component: MessageObjectComponent;
  let fixture: ComponentFixture<MessageObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
