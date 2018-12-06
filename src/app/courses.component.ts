import { Component, TestabilityRegistry } from '@angular/core';
import { CoursesService } from './course/courses.service';

@Component({
    selector: 'courses',
    template: `<h2>{{ getTitle() | summary:14}}</h2>
                <ul>
                    <li *ngFor="let course of courses">
                        {{ course }}
                    </li>
                </ul>
                
                <table>
                    <tr>
                        <td [attr.colspan]="colSpan><td>
                    <tr>
                </table>
                <div (click)="onDivClicked()">
                        <button class="btn btn-primary" [class.active]="isActive"
                        [style.backgroundColor]="isActive?'blue':'red'"
                        (click)="onSave($event)">Save</button>
                </div>
                <div>        
                        <input 
                        #message
                        [class.active]="isActive"
                        [style.backgroundColor]="isActive?'green':'red'"
                        (keyup.enter)="onSaveEnter(message.value)"
                        />
                </div>
                        <div>        
                        <input 
                        #message
                        [class.active]="isActive"
                        [style.backgroundColor]="isActive?'green':'red'"
                        [(ngModel)]="email" (keyup.enter)="onKeyUp()"
                        (click)="inputFocused()"
                        />
                </div>
                <div>
                <span class="glyphicon glyphicon-star"></span>
                </div>

                <div>
                    <input [(ngModel)]="mirror"/>
                    {{ mirror | mirrortitle}}
                </div>


                `

                
})
export class CoursesComponent {
    title = "List of Courses ..............................................................";
    isActive = true;
    courses;

    email = 'me@example.com';
    
    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }

    onSave($event){
        $event.stopPropagation();
        this.isActive=!this.isActive;
        console.log("ButtonClicked", $event);
    }

    onDivClicked(){
        console.log("DivClicked");
    }

    onSaveEnter(message){
        console.log("Enter done: ",message);
        this.isActive=!this.isActive;
    }

    onKeyUp(){
        console.log(this.email);
    }

    inputFocused(){
        this.email = '';
        console.log("Input Focused")
    }
    getTitle() {
        return this.title;
    }
}