name_pizza = []

function submit() {

    var pizza_1 = document.getElementById("name_of_the_pizza").innerHTML.value;

    name_pizza.push(pizza_1);


    document.getElementById("name_pizza").innerHTML = name_pizza;
}