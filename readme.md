# Dgolf.cz API consumers

This repository contains examples for using Dgolf API


## Ratings for registered players

Add following code to your tournament page on idiscgolf.cz to display Dgolf rating for registered players

```
<script src="https://cdn.jsdelivr.net/gh/syky9/dgolf_js_api/ratings_all.js">
    window.addEventListener('load',() => {
    fill_ratings()
    });
</script>
```

## Rating in player profile

Add following code to your profile details on idiscgolf to display your Dgolf rating

```
<script src="https://cdn.jsdelivr.net/gh/syky9/dgolf_js_api/profile_rating.js">
    window.addEventListener('load',() => {
    fill_profile_player_rating()
    });
</script>
```

