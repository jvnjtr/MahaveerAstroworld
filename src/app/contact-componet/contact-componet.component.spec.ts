import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponetComponent } from './contact-componet.component';

describe('ContactComponetComponent', () => {
  let component: ContactComponetComponent;
  let fixture: ComponentFixture<ContactComponetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactComponetComponent]
    });
    fixture = TestBed.createComponent(ContactComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
