var xhr = new XMLHttpRequest();

xhr.onload = () => {
	if(xhr.status === 200) {
		let responseObject = JSON.parse(xhr.responseText);

		 let newContent = '';  
		 for (let i = 0; i < responseObject.entries.length; i++) { 
		 	newContent += '<tr>';    
		 	newContent += `<td> ${responseObject.entries[i].name} </td>`;
		 	newContent += `<td> ${responseObject.entries[i].age} </td>`;
		 	newContent += '</tr>';            
		}

    document.getElementById('app').innerHTML = `<table> <tr> <th> NAME </th> <th> AGE </th> ${newContent} </table>`;
	}
}

xhr.open('GET', 'data/data.json', true);
xhr.send(null);

let sortTable = (n) => {
  let i, shouldSwitch; 
  let switchcount = 0;
  let table = document.getElementsByTagName("table");
  let switching = true;
  let dir = "asc"; 

  while (switching) {
    switching = false;
    let rows = document.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      let x = rows[i].getElementsByTagName("td")[n];
      let y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++; 
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

window.sortTable = sortTable;

let minimumAge = () => {
  let input = document.getElementById("inputAge");
  let filter = input.value;
  let table = document.querySelector("table");
  let tr = table.getElementsByTagName("tr");

  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      if ((td.innerHTML) > Number(filter)) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}

window.minimumAge = minimumAge;




