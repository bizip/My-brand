//getting question from the database
//================================================================================================
//create element and render single question
let renderQuery = (doc) => {
    var queryList = document.getElementById("single__article");
    let box = document.createElement("div");
    let name = document.createElement('h4');
    let message = document.createElement("p")
    let delet = document.createElement("div");
    let reply = document.createElement("div");
    box.setAttribute('data-id', doc.id);
    box.className = "item1";
    reply.style.color = "#651a8c";
    delet.style.color = "#651a8c";
    reply.textContent = doc.data().email;
    delet.textContent = "Delete";
    name.textContent = doc.data().fullName;
    message.textContent = doc.data().message;
    box.appendChild(name);
    box.appendChild(message);
    box.appendChild(reply);
    box.appendChild(delet);
    queryList.appendChild(box);
    queryList.className = "article";

    //deleting articles
    delet.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = e.target.parentElement.getAttribute('data-id');
        // console.log(db.collection('messages').document(id));
        db.collection('messages').doc(id).delete().then(function() {
            let deletDoc = document.getElementById("deleteDoc");
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
db.collection("messages").get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderQuery(doc);
    });
});