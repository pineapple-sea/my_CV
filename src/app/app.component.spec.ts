import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TestScheduler } from 'rxjs/testing';
import { ComponentServiceService } from './component-service.service';
import { ChildComponentComponent } from './child/child-component/child-component.component';

describe('AppComponent', () => {
  let fixture;
  let app: AppComponent;
  let componentServiceServiceMock: jasmine.SpyObj<ComponentServiceService>;

  beforeEach(() => {
    componentServiceServiceMock = jasmine.createSpyObj(
      'ComponentServiceService',
      ['testServiceMethod']
    );

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, ChildComponentComponent],
      providers: [
        {
          provide: ComponentServiceService,
          useValue: componentServiceServiceMock,
        },
      ],
    });
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular16'`, () => {
    expect(app.title).toEqual({ name: 'angular16' });
  });

  describe('testServiseMethod', () => {
    it('should testServiseMethod', () => {
      const scheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
      scheduler.run((helpers) => {
        componentServiceServiceMock.testServiceMethod.and.returnValue(
          scheduler.createHotObservable('-abc', {a: 1, b: 2, c: 3})
        );

        helpers.expectObservable(app['testServiseMethod']()).toBe('--bc', {b: 4, c: 6});
      });
    });
  });
});
