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
  difficultyLabel: string = 'Very hard'; 
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
  disableSelect(event: Event, correctAnswer: string){
    const selectElement = event.target as HTMLSelectElement;
    selectElement.disabled = true;
    this.answered++;
  
    if(selectElement.value === correctAnswer){
      this.score++;
      selectElement.style.backgroundColor = "#4CAF50"
    }
    else{
      selectElement.style.backgroundColor = "#FF5252";
    }
    if(this.answered == 6){
      const scoreEle = document.getElementById("score");
      if(scoreEle){
        scoreEle.textContent = "Your final score is: " + this.score + "/6";
      }
    }
  }
  resetQuiz(){
    this.score = 0;
    this.answered = 0;

    const selects = document.querySelectorAll("select");
    selects.forEach((select: HTMLSelectElement) => {
      select.style.backgroundColor = '';
      select.disabled = false;
    });

    const scoreElement = document.getElementById("score");
    if(scoreElement){
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
    if (value == 1) {
      return 'Very easy';
    } else if (value == 2) {
      return 'Easy';
    } else if (value == 3) {
      return 'Medium';
    } else if (value == 4) {
      return 'Hard';
    } else {
      return 'Very hard';
    }
  }
}
