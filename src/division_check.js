
function fill_divisions() {
    table_element = document.getElementById('gvRegistrovani');

	for (let i = 0; i < table_element.rows.length; i++) {        
		table_row = table_element.rows[i];
		rating = parseInt(table_row.cells[3].textContent) || parseInt(table_row.cells[4].textContent) || 0;

		suggested_division_cell = table_row.insertCell(5);
		suggested_division_cell.innerHTML = division_badge(pdgl_divison_for_rating(rating))
	} 

	table_element.rows[0].cells[5].outerHTML = '<th role="columnheader" aria-disabled="false" aria-controls="gvRegistrovani" unselectable="on" aria-sort="none" aria-label="Rating" style="user-select: none;">Navržená katgorie</th>'
}

function pdgl_divison_for_rating(rating) {
	if (rating == 0) {
		return 'MA3'
	} else if (rating >= 900) {
		return 'MA1'
	} else if (rating >= 850) {
		return 'MA2'
	} else if (rating >= 800) {
		return 'MA3'
	} else if (rating < 800) {
		return 'MA4'
	}
}

function division_badge(division) {
	switch (division) {
		case 'MA1':
			badge = '<span id="gvRegistrovani_lblDivisionCode_0" class="table-badge bg-eagle">MA1</span>'
			break;
		case 'MA2':
			badge = '<span id="gvRegistrovani_lblDivisionCode_0" class="table-badge bg-birdie">MA2</span>'
			break;
		case 'MA3':
			badge = '<span id="gvRegistrovani_lblDivisionCode_0" class="table-badge bg-bogey">MA3</span>'
			break;
		case 'MA4':
			badge = '<span id="gvRegistrovani_lblDivisionCode_0" class="table-badge bg-double-bogey">MA4</span>'
			break;
		default:
			badge = '<span id="gvRegistrovani_lblDivisionCode_0" class="table-badge bg-primary">#</span>'
			break;
	}
	return badge
}

function redraw_badges() {
	badges = document.getElementsByClassName('table-badge')
	for (let i = 0; i < badges.length; i++) {
		badge = badges[i];
		
		badge.classList.remove('bg-primary')
		badge.classList.remove('bg-ma4')

		switch (badge.innerHTML) {
			case 'MA1':
				badge.classList.add('bg-eagle')
				break;
			case 'MA2':
				badge.classList.add('bg-birdie')
				break;		
			case 'MA3':
				badge.classList.add('bg-bogey')
				break;
			case 'MA4':
				badge.classList.add('bg-double-bogey')
				break;
			default:
				badge.classList.add('bg-primary')
				break;
		}
	}
}