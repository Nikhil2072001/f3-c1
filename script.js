var c=0;
function addUser(){
    var name = document.getElementById("name").value;
    var profession = document.getElementById("pro").value;
    var age = document.getElementById("age").value;
    console.log(name + ", " + profession + ", " + age);
    if(name=="" || profession=="" || age==""){
        // var para = document.createElement("p");
        // para.innerHTML = "Error : please make sure all the fields are filled before adding in an employee.";
        // document.getElementById("mssg").appendChild(para);
        document.getElementById("mssg1").style.visibility="visible"; 
        document.getElementById("mssg2").style.visibility="hidden";
        return;
    }else{
        document.getElementById("mssg2").style.visibility="visible";
        document.getElementById("mssg1").style.visibility="hidden"; 
    }
//     var li = document.createElement("li");
//     li.innerHTML =`    ${name}    ${profession}    ${age} `;
//     var btn = document.createElement("button");
//     btn.style="width:50px, height:20px "
//     li.appendChild(btn);
//     console.log(li);
//     document.getElementById("list").appendChild(li);
// //    var html ="<tr></tr>";
//    html+="<td>name</td>";
//    html+="<td>profession</td>";
//    html+="<td>age</td>";
//    html+="<td>btns</td>";
c++;
if(c>0){
    document.getElementById("zero").style.visibility="hidden";
}
var tr = document.createElement("tr");
var btn = document.createElement("button");
btn.innerHTML="Delete";
var td1 = document.createElement("td");
// var li = document.createElement("li");
// // td1.innerHTML =c;
// var ol = document.getElementById("ol");
// ol.appendChild(li);
// td1.appendChild(li);
tr.appendChild(td1);
var td2 = document.createElement("td");
td2.innerHTML =name;
tr.appendChild(td2);
var td3 = document.createElement("td");
td3.innerHTML=profession;
tr.appendChild(td3);
var td4 = document.createElement("td");
td4.innerHTML=age;
tr.appendChild(td4);
var td5 = document.createElement("td");
td5.appendChild(btn);
tr.appendChild(td5);
tr.setAttribute("id", `my-id-${c}`);
tr.setAttribute("title", `my-title-${c}`);
tr.setAttribute("class", `list-item`);
tr.setAttribute("onclick", `removeItem("my-id-${c}")`);
document.getElementById("tab").appendChild(tr);
var para= document.createElement("span");
// para.innerHTML = "Success : Employee Added!";
document.getElementById("mssg").appendChild(para);
c++;

}
function removeItem(id) {
    console.log("ID", id);
    let itemToBeRemoved = document.getElementById(id);
    document.getElementById("tab").removeChild(itemToBeRemoved);
  }