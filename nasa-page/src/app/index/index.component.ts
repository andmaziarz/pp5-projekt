import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';


declare function updateTime(): any;

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  formData: FormData = {
    name: '',
    age: 0,
    isStudent: 'no'
  };
  
  welcomeMessage: string = '';
  answered: boolean = false;


  ngOnInit(): void {
    updateTime();
  }

  constructor(){
    document.body.style.backgroundImage = "url('assets/background.jpg')";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";
  }

  ngOnDestroy(){
    document.body.style.backgroundImage = "none";
  }

  welcome(): void {
    // Saving data
    this.saveFormData();

    // Displaying welcome message
    this.displayWelcomeMessage();

    this.answered = true;

  }
  

  saveFormData(): void {
    // Custom logic to save data. In this example, using localStorage.
    localStorage.setItem("formData", JSON.stringify(this.formData));
  }

  displayWelcomeMessage(): void {
    // Creating a welcome message based on age and student status
    if (this.formData.age < 18) {
      this.welcomeMessage = `Hello ${this.formData.name}! You are under 18 years old. But we hope that you will grab some knowladge`;
    } else {
      const studentStatus = this.formData.isStudent === "yes" ? "a student" : "not a student";
      this.welcomeMessage = `Hello ${this.formData.name}! You are ${this.formData.age} years old and ${studentStatus}. Lets test your knowladge`;
    }
    Swal.fire({
      title: 'Welcome!',
      text: this.welcomeMessage,
      customClass: {
        title: "alert",
        container: "alert"
      }
  });
  }
  
}

interface FormData {
  name: string;
  age: number;
  isStudent: string;
}
