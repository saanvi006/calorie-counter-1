class Form{
    constructor(){

    }

    display(){
        var title = createElement("h2")
        title.style('font-size', '24px', 'color', 'white')
        title.html("Calorie Counter");
        title.position(100, 0);
        

        var input = createInput("enter food item");
        input.style('background-color', "pink")
        var button = createButton('enter');
        button.style('background-color', "lavender")
        input.position(100, 160);
        button.position(100,210);


        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();

            var greeting = createElement ('h3')
            greeting.style("color" , "white")
            greeting.html("The food that you have chosen is " + name)
            greeting.position(130,160)
        })
    }
}