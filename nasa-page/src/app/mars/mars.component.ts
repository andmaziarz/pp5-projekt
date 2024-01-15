import { Component } from '@angular/core';

@Component({
  selector: 'app-mars',
  standalone: true,
  imports: [],
  templateUrl: './mars.component.html',
  styleUrl: './mars.component.scss'
})
export class MarsComponent {
  score: number = 0;
  answered: number = 0;
  difficultyValue: number = 5;
  difficultyLabel: string = 'Medium';

  constructor(){
    document.body.style.backgroundImage = "url('assets/mars.jpg')";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";
  }
  ngOnDestroy(){
    document.body.style.backgroundImage = "none";
  }
  disableSelect(event: Event, correctAnswer: string) {
    const radioElement = event.target as HTMLInputElement;
    const formElement = radioElement.closest('form')
    if (!formElement) {
      return; // Exit if form element is not found
    }
    radioElement.disabled = true;
    this.answered++;

    if (radioElement.parentElement) {
      if (radioElement.value === correctAnswer) {
        this.score++;
        formElement.style.color = "#4CAF50";
      } else {
        formElement.style.color = "#FF5252";
      }
    }


    if (this.answered === 6) {
      const scoreEle = document.getElementById("score");
      if (scoreEle) {
        scoreEle.textContent = "Your final score is: " + this.score + "/6";
      }
    }
  }

  resetQuiz() {
    this.score = 0;
    this.answered = 0;

    const radios = document.querySelectorAll("input[type='radio']");
    radios.forEach((radio: Element) => {
      const radioElement = radio as HTMLInputElement;
      const parentElement = radioElement.parentElement;
      
      if (parentElement) {
        parentElement.style.backgroundColor = '';
        radioElement.disabled = false;
      }
    });

    const scoreElement = document.getElementById("score");
    if (scoreElement) {
      scoreElement.textContent = "Your score is: ";
    }
  }

  onDifficultyChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.difficultyValue = parseInt(inputElement.value, 10);
    this.updateDifficultyLabel();
  }

  updateDifficultyLabel() {
    this.difficultyLabel = this.getDifficultyLabel(this.difficultyValue);
  }

  getDifficultyLabel(value: number): string {
    if (value <= 3) {
      return 'Easy';
    } else if (value <= 7) {
      return 'Medium';
    } else {
      return 'Hard';
    }
  }

}
