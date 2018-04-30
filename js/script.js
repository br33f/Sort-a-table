// Czemu tutaj var, a niżej już używasz let?
var xhr = new XMLHttpRequest();

// Mogą pytać dlaczego używasz funkcji strzałkowej? Czym różni się () => {} od function() {} 
// Warto to wiedzieć :)
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
    // Czy może wystąpić taka sytuacja, że element #app jeszcze nie będzie istniał w DOM ? Dlaczego?
    document.getElementById('app').innerHTML = `<table> <tr> <th> NAME </th> <th> AGE </th> ${newContent} </table>`;
	}
}

xhr.open('GET', 'data/data.json', true);
xhr.send(null);

let sortTable = (n) => {
  // Możesz pomyśleć, czy dałoby się jakoś uprościć kod w tej funkcji, może dałoby się to zrobić prościej, albo rozbić
  // na mniejsze funkcje. Trzeba się chwile pogłowić, żeby zrozumieć jak to działa.
  let i, shouldSwitch; 
  let switchcount = 0;
  // Mogą pytać o różnice pomiędzy document.getElementsByTagName("table"), a document.querySelectorAll('table')
  let table = document.getElementsByTagName("table");
  let switching = true;
  // Takie rzeczy należałoby wyciągnąć do stałych: const SORT_DIRECTION_ASC = 'asc';
  let dir = "asc"; 

  while (switching) {
    switching = false;
    let rows = document.getElementsByTagName("tr");
    // Skoro i tak piszesz w ES6, to można użyć Array.prototype.forEach zamiast zwykłego for'a :)
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      // To trochę taka magia. Jak się pierwszy raz czyta kod to nie wiadomo czym jest to n, skąd ono się bierze (zwłaszcza że wywołanie funkcji jest pomieszane z plikiem html)
      // Możesz się zastanowić czy da się to zrobić czytelniej i bardziej niezawodnie (no bo tutaj zmienisz kolejność kolumn i już nie zadziała)
      let x = rows[i].getElementsByTagName("td")[n];
      let y = rows[i + 1].getElementsByTagName("td")[n];
      // Mogą pytać o różnice pomiędzy porównaniem == oraz ===
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
      // Sortowanie bezpośrednio na DOM nie jest chyba najszybsze,
      // Może lepiej pobrać dane, posortować i później podmienić cała zawartość tabeli
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

// Zdaje mi się, że lepiej byłoby dodawać listener'y na zdarzenia bezpośrednio w JavaScript, a nie htmlowego onclick.
// Zauważ, że w takim wypadku nie byłoby konieczności dodawania funkcji do kontekstu 'window'


