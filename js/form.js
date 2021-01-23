class Form {
    constructor(){
        this.title = createElement('h2');
        this.greeting = createElement('h2');
        this.button1 = createButton('STORY');
        this.button2 = createButton('RULES');
        this.button3 = createButton('ABOUT');
       this.button4= createButton('START');
    }

    display() {
        this.title.html("Welcome to our game, Sofi and the bear.Press start to begin.Below are the connectives to the respective pages to refer before playing your game");
        this.title.position(displayWidth, 0 );
        this.button1.position(displayWidth/2, displayHeight/2);
        this.button2.position(displayWidth - 20, displayHeight/2 + 30);
        this.button3.position(displayWidth/2 + 30, displayHeight/2);
        this.button4.position(displayWidth/2 + 20, displayHeight/2 - 20);
        this.greeting.html("Hello" + this.title);
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
 
    }

}