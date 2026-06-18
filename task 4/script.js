function searchPosts() {

    let query =
    document.getElementById("searchBox")
    .value.toLowerCase();

    let cards =
    document.querySelectorAll(".blog-card");

    cards.forEach(function(card){

        let title =
        card.querySelector("h2")
        .textContent.toLowerCase();

        if(title.includes(query))
            card.style.display = "block";
        else
            card.style.display = "none";
    });
}