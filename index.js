class Rectangle{
    constructor(length, height){
        this.length = length;
        this.height = height;
    }

    calculateArea(){
    return this.length * this.height;
    }
}

let randomRectangle = new Rectangle(10,40);
document.getElementById('result').innerHTML = randomRectangle;