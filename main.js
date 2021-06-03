menu_list_array=["Chicken Tandorri Pizza","Veg Supreme Pizza","Paneer Tikka Pizza", "Delux Veggie Pizza","Veg Extravaganza Pizza"];
fuction getmenu(){
    var htmldata;
    htmldata = "<ol class = 'menulist' >"
    menu_list_array.sort;
    for(var i=0;i<menu_list_array.lenght;i++){
        htmldata = htmldata+'<li>'+menu_list_array[i] + '<li>'
    }
    htmldata = htmldata+ "</ol>"
    document.getElementById("diaplay_menu").innerHTML = htmldata;
}
function add_item(){
    var htmldata;
    var item = document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata = "<section class='cards' >";
    for(var i=0; <menu_list_array.lenght;i++){
        htmldata = htmldata+ "<div class='card'>"  + "<img src='images/pizzaImg.png/'>" + menu_list_array[i] + "</div>";
        
    }
}