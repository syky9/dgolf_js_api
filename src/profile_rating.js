function get_cadg_id() {
	id_element = document.getElementById('lblCADG_ID');
	return id_element.innerHTML;
}

function fill_dgolf_rating(data) {
	rating_element = document.getElementById('lblRatingPDGA');
	rating_element.innerHTML = "PDGA: " + rating_element.innerHTML + ' <br>Dgolf.cz: ' + data.current_rating;
}

function fill_profile_player_rating() {
    fetch('https://www.dgolf.cz/en/api/json/player/' + get_cadg_id())
        .then((response) => response.json())
        .then((data) => fill_dgolf_rating(data));
}

window.addEventListener('load',() => {
    fill_profile_player_rating()
  });
