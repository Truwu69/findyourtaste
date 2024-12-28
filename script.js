function filterRestaurants() {
    const filterValue = document.getElementById('category-filter').value.toLowerCase();
    const restaurants = document.getElementsByClassName('restaurant-item');

    for (let i = 0; i < restaurants.length; i++) {
        const category = restaurants[i].getAttribute('data-category').toLowerCase();

        if (filterValue === 'all' || category === filterValue) {
            restaurants[i].style.display = 'flex'; // Show the restaurant if it matches the filter
        } else {
            restaurants[i].style.display = 'none'; // Hide the restaurant if it doesn't match
        }
    }
}
