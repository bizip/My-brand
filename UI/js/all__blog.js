// create element and render blog
let renderBlog = (doc) => {
    var queryList = document.getElementById("single__item");
    // var thumb = document.getElementById("like__icon");
    let box = document.createElement("div");
    let title = document.createElement('h4');
    let dlt = document.createElement("div");
    let a = document.createElement("a");
    a.href = "../html/single_article.html"
    a.textContent = "View more";
    dlt.textContent = "delete";
    box.setAttribute('data-id', doc.id);
    box.className = "item1";
    title.textContent = doc.data().title;
    box.appendChild(title);
    box.appendChild(a);
    box.appendChild(dlt);
    queryList.appendChild(box);
    queryList.className = "article";
    //deleting articles
    dlt.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');

        db.collection('articles').doc(id).delete().then(function() {
            let deletDoc = document.getElementById("deleteArticle");
            deletDoc.textContent = "Document successfully deleted!";
            deletDoc.className = "alert__message";
            setTimeout(() => {
                window.location.reload();
            }, 4000);
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });;
    });

}

db.collection("articles").get().then((snapshot) => {
    snapshot.docs.forEach((doc) => {
        renderBlog(doc);
    })
});