class CuriousGirl {

    constructor() {
        this.startBtn = document.getElementById('start-btn');
        this.restartBtn = document.getElementById('restart-btn');
        this.firstLayer = document.getElementById('1stlayer');
        this.secondLayer= document.getElementById('2ndlayer');
        this.buttonYes = document.getElementById('button-yes');
        this.buttonNo = document.getElementById('button-no');
        this.msgYes = document.getElementById('msgyes');
        this.endMsgDiv = document.getElementById('endMsg-div');
        this.buttonsYesNo = document.getElementById('buttons-yes-no-div');
        this.buttonNext = document.getElementById('button-next-div')
        this.whereToDisplayQuestions = document.getElementById('where-to-display-questions');
        this.options = [
            ['red', 'blue', 'green', 'yellow', 'pink', 'orange', 'purple', 'white', 'black'],
            ['dogs', 'cats', 'rabbits', 'dolphins', 'parrots', 'pigs', 'elephants'],
            ['football', 'basketball', 'baseball', 'tennis', 'volleyball', 'chess', 'motorcycling'],
            ['rock', 'pop', 'electronic', 'folk', 'classical music', 'heavy metal'],
            ['drama films', 'action films', 'terror films', 'comedy films', 'historical films', 'biopic films']
        ]
        this.categories = ['color', 'animals', 'sport', 'music', 'films'];
        this.savedInputs = [];
        this.categoryIndex = 0;
        this.optionIndex = 0;
        this.arrayIndex = 0;        
    }

    startGame() {
        this.startBtn.classList.add('hide');
        this.firstLayer.classList.add('hide');
        this.secondLayer.classList.remove('hide');
        this.whereToDisplayQuestions.innerText = `¿Is/Are ${this.options[this.arrayIndex][this.optionIndex]} your favourite ${this.categories[this.categoryIndex]}?`;
        this.buttonsYesNo.classList.remove('hide');
    }

    displayMsgYes(){
        this.savedInputs.push(this.options[this.arrayIndex][this.optionIndex]);
        this.whereToDisplayQuestions.classList.add('hide');
        this.msgYes.classList.remove('hide');
        this.buttonsYesNo.classList.add('hide');
        this.buttonNext.classList.remove('hide');
        this.categoryIndex++;
        this.optionIndex = 0;
    }

    displayNextOption() {
        this.optionIndex++;
        if(this.options[this.arrayIndex].length > this.optionIndex) {
            this.whereToDisplayQuestions.innerText = `¿Is/Are ${this.options[this.arrayIndex][this.optionIndex]} your favourite ${this.categories[this.categoryIndex]}?`;
        } else {
            this.optionIndex = 0;
            this.whereToDisplayQuestions.innerText = `¿Is/Are ${this.options[this.arrayIndex][this.optionIndex]} your favourite ${this.categories[this.categoryIndex]}?`;
        }
    }

    displayNextCategory() {
        if (this.arrayIndex >= this.categories.length -1) {
            this.endMsgDiv.classList.remove('hide');
            this.endMsgDiv.classList.add('endMessage');
            this.endMsgDiv.innerText = `Your favourite color is ${this.savedInputs[0]} and that means you're passionate and full of life. 
            Then your favourite animals are ${this.savedInputs[1]} and that's a sign of a caring and loving person.
            I could say that ${this.savedInputs[2]} being your favourite sports gives you a powerful mindset for challenges and competition.
            The artistic part of yourself is clear as ${this.savedInputs[3]} is your favourite kind of music.
            And last but not least, I can see ${this.savedInputs[4]} are what you like to enjoy in a cold and rainy nigth with the best company.`
            this.buttonNext.classList.add('hide');
            this.msgYes.classList.add('hide');
            this.restartBtn.classList.remove('hide');
        } else {
            this.arrayIndex++;
            this.buttonNext.classList.add('hide');
            this.whereToDisplayQuestions.classList.remove('hide');
            this.msgYes.classList.add('hide');
            this.buttonsYesNo.classList.remove('hide');
            this.startGame();
        }
    }
    
    restartGame() {
        this.restartBtn.classList.add('hide');
        this.savedInputs = [];
        this.categoryIndex = 0;
        this.optionIndex = 0;
        this.arrayIndex = 0;
        this.endMsgDiv.classList.add('hide');
        this.whereToDisplayQuestions.classList.remove('hide');
        this.whereToDisplayQuestions.innerText = `¿Is/Are ${this.options[this.arrayIndex][this.optionIndex]} your favourite ${this.categories[this.categoryIndex]}?`;
        this.buttonsYesNo.classList.remove('hide');    
    }
}

if (document.readyState === "loading") {
    document.addEventListener('DOMcontentLoaded', ready);
    } else {
        ready();
    }

function ready(){
    let cg = new CuriousGirl();
    const startBtn = document.getElementById("start-btn");
    const buttonYes = document.getElementById('button-yes');
    const buttonNo = document.getElementById('button-no');
    const buttonNext = document.getElementById('button-next');
    const restartBtn = document.getElementById('restart-btn');
    
    startBtn.addEventListener('click', () => {
        cg.startGame()
    });

    buttonYes.addEventListener('click', () => {
        cg.displayMsgYes();
   });

   buttonNo.addEventListener('click', () => {
    cg.displayNextOption();
   });

   buttonNext.addEventListener('click', () => {
       cg.displayNextCategory();
   });

   restartBtn.addEventListener('click', () => {
       cg.restartGame();
   });
}