var xhr = new XMLHttpRequest();

xhr.onload = function () {
	if(xhr.status === 200) {
		responseObject = JSON.parse(xhr.responseText);

		 var newContent = '';  
		 for (var i = 0; i < responseObject.entries.length; i++) { // Iteracja przez obiekt.  
		 	newContent += '<tr>';    
		 	newContent += '<td>' + responseObject.entries[i].name + '</td>';
		 	newContent += '<td>' + responseObject.entries[i].age + '</td>';
		 	newContent += '</tr>';            
		}

        document.getElementById('demo').innerHTML = '<table>' + '<tr>' + '<th>' + 'NAME' + '</th>' + '<th>' + 'AGE' + '</th>' + newContent + '</table>';
	}
};

xhr.open('GET', 'data/data.json', true);
xhr.send(null);

function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.querySelectorAll("table");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc"; 
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = document.querySelectorAll("tr");
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].querySelectorAll("td")[n];
      y = rows[i + 1].querySelectorAll("td")[n];
      /* Check if the two rows should switch place,
      based on the direction, asc or desc: */
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount ++; 
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

function myFunction() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.querySelector("table");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].querySelectorAll("td")[1];
    if (td) {
      if (Number(td.innerHTML) >= Number(filter)) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}
