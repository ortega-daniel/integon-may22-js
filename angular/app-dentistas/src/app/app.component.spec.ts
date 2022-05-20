import { TestBed, async } from '@angular/core/testing';
import { ComponentOne } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentOne],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ComponentOne);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'app-dentistas'`, () => {
    const fixture = TestBed.createComponent(ComponentOne);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('app-dentistas');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ComponentOne);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain(
      'app-dentistas app is running!'
    );
  });
});
