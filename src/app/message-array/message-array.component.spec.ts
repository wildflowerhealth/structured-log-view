import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageArrayComponent } from './message-array.component';

describe('MessageArrayComponent', () => {
  let component: MessageArrayComponent;
  let fixture: ComponentFixture<MessageArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
