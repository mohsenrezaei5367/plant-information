import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  it('should add two numbers correctly', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance;

    console.log("app: ", app);
    expect(app).toBeTruthy();; // Assuming x + b should be 4 in your case
  });


});
