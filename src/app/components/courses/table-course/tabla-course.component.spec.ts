import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { BrowserModule } from '@angular/platform-browser';
import { of } from 'rxjs';
import { MaterialModule } from 'src/app/module/material.module';
import { CourseService } from 'src/app/service/course.service';

import { TableCourseComponent } from './table-course.component';

describe('TableCourseComponent', () => {
  let component: TableCourseComponent;
  let fixture: ComponentFixture<TableCourseComponent>;
  let courseService: CourseService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableCourseComponent],
      imports: [
        BrowserModule,
        HttpClientModule,
        MatDialogModule
      ],
      providers: [
        CourseService,
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCourseComponent);
    component = fixture.componentInstance;
    courseService = TestBed.inject(CourseService);

    spyOn(courseService, 'getCourses').and.returnValue(
      of([{
        id: 1,
        course: 'TestingApp',
        teachers: [{ id: 1, name: "Facundo", surname: "Sanchez", email: "facu@gmail.com", photo: null }],
        students: [],
      }])
    )
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should get', () => {
    expect(component).toBeTruthy();
  });

  it('delete user', () => {
    const deleteSpy = spyOn(courseService, 'deleteCourse').and.returnValue(
      of({
        id: 1,
        course: 'TestingApp',
        teachers: [{ id: 1, name: "Facundo", surname: "Sanchez", email: "facu@gmail.com", photo: null }],
        students: [],
      })
    )

    component.deleteCourse(1);
    expect(deleteSpy).toHaveBeenCalled();
  })

  it('update course', () => {
    const course = {
      id: 1,
      course: 'TestingApp',
      teachers: [{ id: 1, name: "Facundo", surname: "Sanchez", email: "facu@gmail.com", photo: null }],
      students: [],
    }

    const updateSpy = spyOn(courseService, 'updateCourse').and.returnValue(
      of({
        id: 1,
        course: 'Programacion',
        teachers: [{ id: 1, name: "Facundo", surname: "Sanchez", email: "facu@gmail.com", photo: null }],
        students: [],
      })
    )
    component.editCourse(course)
    expect(updateSpy).toHaveBeenCalled();
  })

});
