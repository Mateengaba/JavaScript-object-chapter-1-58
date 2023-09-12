//Assignment # 43-48

//Quostion#1

function showAlert() {
    var myText = "Hello Student";
    alert (myText);
  }


//Quostion#2



function altrImg() {
var carImg = "Thanks for purchsing phone for us"
alert (carImg);

}


//Quostion#3




function buttonDelete(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row)

}



//Quostion#4

function handlimg(flag){
    var img = document.getElementById("carImg")
    console.log("img", img.src)
    img.src = "./assets/car2.jfif"



    if (flag === "in") {
        img.src = "./assets/car2.jfif"
        img.style.borderRadius = "50%"
       img.style.transition = "all 0.6s ease"

    } else {
        img.src = "./assets/download.jfif"
        img.style.borderRadius = "0"
        img.style.transition = "all 0.6s ease"

    }

}



//Quostion#5

// get elements from the DOM

var decreaseBtn = document.getElementById("decrease-btn")
var counterEl = document.getElementById("counter")
var increaseBtn = document.getElementById("increase-btn")



// initialize counter value

var counterValue = 0;

// add event listeners to buttons
decreaseBtn.addEventListener('click', () => {
    counterValue--;
    counterEl.innerText = counterValue;
});

increaseBtn.addEventListener('click', () => {
    counterValue++;
    counterEl.innerText = counterValue;
});


// Assignment # 49-52

// Quostion#1




function handleSubmit(){
    var firstName = document.getElementById("firstName")
    var LasttName = document.getElementById("lastName")
    var email = document.getElementById("email")
    var password = document.getElementById("password")

console.log(firstName.value, LasttName.value, email.value, password.value )

if(!firstName.value || !LasttName.value || !email.value || !password.value){
    alert("required fields are missing")
return
}

alert("FORM SUBMIT")
}


// Quostion#2

var loremText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit autem accusamus illo veritatis, error accusantium dolore recusandae a, provident temporibus eius veniam sapiente!"

function seeMore(parameter1) {
    var para2 = document.getElementById("para2")
    var seeBtn = parameter1
    if (seeBtn.innerHTML == "see more") {
        seeBtn.innerHTML = "see less"
        para2.innerHTML = loremText

    } else {
        seeBtn.innerHTML = "see more"
        para2.innerHTML = "Lorem ipsum dolor sit amet"
    }
}

// Quostion#3




function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var name=document.getElementById("name_row"+no);
 var country=document.getElementById("country_row"+no);
 var age=document.getElementById("age_row"+no);
	
 var name_data=name.innerHTML;
 var country_data=country.innerHTML;
 var age_data=age.innerHTML;
	
 name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
 country.innerHTML="<input type='text' id='country_text"+no+"' value='"+country_data+"'>";
 age.innerHTML="<input type='text' id='age_text"+no+"' value='"+age_data+"'>";
}

function save_row(no)
{
 var name_val=document.getElementById("name_text"+no).value;
 var country_val=document.getElementById("country_text"+no).value;
 var age_val=document.getElementById("age_text"+no).value;

 document.getElementById("name_row"+no).innerHTML=name_val;
 document.getElementById("country_row"+no).innerHTML=country_val;
 document.getElementById("age_row"+no).innerHTML=age_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
 var new_name=document.getElementById("new_name").value;
 var new_country=document.getElementById("new_country").value;
 var new_age=document.getElementById("new_age").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='country_row"+table_len+"'>"+new_country+"</td><td id='age_row"+table_len+"'>"+new_age+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_name").value="";
 document.getElementById("new_country").value="";
 document.getElementById("new_age").value="";
}