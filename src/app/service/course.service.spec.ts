import { CourseService } from "./course.service"
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from "@angular/core/testing";
describe('CourseService', ()=>{
    let service:CourseService;
    let mockResponseLit=[
        {
            id: 1,
            course: 'TestingApp',
            teachers: [{ id: 1, name: "Facundo", surname: "Sanchez", email: "facu@gmail.com", photo: null }],
            students: [],
          }
    ]
    let httpController: HttpTestingController;
    let url='https://62aa24153b3143855442d06e.mockapi.io/courses';

    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        })
        service= TestBed.inject(CourseService);
        httpController= TestBed.inject(HttpTestingController)
    })

    it('should be created', ()=>{
        expect(service).toBeTruthy();
    })
})