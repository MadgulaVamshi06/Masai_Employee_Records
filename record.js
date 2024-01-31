var form1 = document.querySelector("form");
form1.addEventListener("submit", function () {
  getData();
});

var dataArry = [];
function getData() {
  event.preventDefault();
  var emp_name = document.getElementById("name").value;
  var emp_id = document.getElementById("employeeID").value;
  var emp_depart = document.getElementById("department").value;
  var emp_exp = document.getElementById("exp").value;
  var emp_email = document.getElementById("email").value;
  var emp_phone = document.getElementById("mbl").value;

  var obj = {
    name: emp_name,
    id: emp_id,
    depart: emp_depart,
    experiance: emp_exp,
    email: emp_email,
    mobile: emp_phone,
  };

  console.log(obj);
  dataArry.push(obj);
  console.log(dataArry);
  dispalyData(obj);
}

function dispalyData(obj) {
  var tbody = document.querySelector("tbody");
  var tr = document.createElement("tr");

  for (let key in obj) {
    var td = document.createElement("td");
    td.innerText = obj[key];
    tr.append(td);
    tbody.append(tr);
  }

  let td1 = document.createElement("td");
  if (obj.experiance > 5) {
    td1.innerText = "Senior";
  } else if (obj.experiance >= 2 && obj.experiance <= 5) {
    td1.innerText = "Junior";
  } else if (obj.experiance <= 1) {
    td1.innerText = "Fresher";
  }
  tr.append(td1);
  tbody.append(tr);



  let btn = document.createElement("button");
  btn.innerHTML = "Delete";
  btn.addEventListener("click", function () {
    tr.remove();
  });
  var deletecell = document.createElement("td");
  deletecell.append(btn);
  tr.append(deletecell);
}
