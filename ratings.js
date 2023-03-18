function getPlayerId(row) {
    name_cell = row.cells[1]
    links_in_cell = name_cell.getElementsByTagName('a')

    if (links_in_cell.length != 1) {
        return null
    } else {
        return links_in_cell[0].getAttribute('href').split('/').pop()
    }
}



function fill_ratings() {
    table_element = document.getElementById('gvRegistrovani');


    // Fetch all ratings
    fetch('https://www.dgolf.cz/en/api/json/players/ratings')
      .then(response => response.json())
      .then(ratings => {       
	    // Add cells and fill them
	    for (let i = 0; i < table_element.rows.length; i++) {        
	        table_row = table_element.rows[i];
	        player_id = getPlayerId(table_row);

	        new_rating_cell = table_row.insertCell(4);

	        if (player_id & ratings[player_id]) {
	            new_rating_cell.innerHTML = '<a href="https://www.dgolf.cz/cs/players/' 
	                + player_id + '" target="_blank">'
	                + ratings[player_id].toFixed()
	                + '</a>'
	        }
	    }

	    // Add header
	    table_element.rows[0].cells[3].innerHTML = 'PDGA rating'
	    table_element.rows[0].cells[4].outerHTML = '<th role="columnheader" aria-disabled="false" aria-controls="gvRegistrovani" unselectable="on" aria-sort="none" aria-label="Rating" style="user-select: none;">Dgolf.cz rating</th>'
    })
}

// window.addEventListener('load',() => {
//   fill_ratings()
// });
