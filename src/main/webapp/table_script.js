function edit_row(no) {
    document.getElementById("edit_button" + no).style.display = "none";
    document.getElementById("save_button" + no).style.display = "block";

    var fname = document.getElementById("fname_row" + no);
    var lname = document.getElementById("lname_row" + no);
    var anum = document.getElementById("anum_row" + no);

    var fname_data = name.innerHTML;
    var lname_data = country.innerHTML;
    var anum_data = age.innerHTML;

    name.innerHTML = "<input type='text' id='fname_text" + no + "' value='" + name_data + "'>";
    country.innerHTML = "<input type='text' id='lname_text" + no + "' value='" + lname_data + "'>";
    age.innerHTML = "<input type='text' id='anum_text" + no + "' value='" + anum_data + "'>";
}

function save_row(no) {
    var fname_val = document.getElementById("fname_text" + no).value;
    var lname_val = document.getElementById("lname_text" + no).value;
    var anum_val = document.getElementById("anum_text" + no).value;

    document.getElementById("fname_row" + no).innerHTML = fname_val;
    document.getElementById("lname_row" + no).innerHTML = lname_val;
    document.getElementById("anum_row" + no).innerHTML = anum_val;

    document.getElementById("edit_button" + no).style.display = "block";
    document.getElementById("save_button" + no).style.display = "none";
}

function delete_row(no) {
    document.getElementById("row" + no + "").outerHTML = "";
}

function add_row() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var anum = document.getElementById("anum").value;

    var table = document.getElementById("data_table");
    var table_len = (table.rows.length) - 1;
    var row = table.insertRow(table_len).outerHTML = "<tr id='row" + table_len + "'><td id='fname_row" + table_len + "'>" + fname + "</td><td id='lname_row" + table_len + "'>" + lname + "</td><td id='anum_row" + table_len + "'>" + anum + "</td><td><input type='button' id='edit_button" + table_len + "' value='Edit' class='edit' onclick='edit_row(" + table_len + ")'> <input type='button' id='save_button" + table_len + "' value='Save' class='save' onclick='save_row(" + table_len + ")'> <input type='button' value='Delete' class='delete' onclick='delete_row(" + table_len + ")'></td></tr>";

    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("anum").value = "";
}

function getHttp(url) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", url, false ); // false for synchronous request
  xmlHttp.send( null );
  document.getElementById("output").innerHTML =  xmlHttp.responseText;
}

function listAllMovies() {
 getHttp('http://localhost:8080/Movie/api/account/getAllAccounts')
}
