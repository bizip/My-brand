// Google map
var initMap = () => {
    var options = {
        zoom: 15,
        center: {
            // lat: -1.935114,
            // lng: 30.082111
            lat: -2.00391,
            lng: 30.14696

        }

    }
    var map = new google.maps.Map(document.getElementById('map'), options);
    var marker = new google.maps.Marker({
        position: {
            lat: -2.00391,
            lng: 30.14696

        },
        map: map
    });
    var infoWindow = new google.maps.InfoWindow({
        content: "<h2>Eng. Bizimungu Pascal<sup>'s</sup> Office</h2>"
    });
    marker.addListener('mouseover', () => {
        infoWindow.open(map, marker);
    })
}



// My web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDBTiSjAs-wgFG5S0_-6-DVigzG1xl2u2I",
    authDomain: "capstone-d4be5.firebaseapp.com",
    databaseURL: "https://capstone-d4be5.firebaseio.com",
    projectId: "capstone-d4be5",
    storageBucket: "capstone-d4be5.appspot.com",
    messagingSenderId: "22977705906",
    appId: "1:22977705906:web:dd555d518b695d944b96ab",
    measurementId: "G-157R635TZE"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
const auth = firebase.auth();

//riference message collection
// var messagesRef = firebase.database().ref('messages');
const db = firebase.firestore();