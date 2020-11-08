var firebaseURL = 'https://[YOUR-FIREBASE-NAME-HERE].firebaseio.com/like-button/';
let storedtweets = JSON.parse(localStorage.getItem("tweets"));
// let storedUserName = localStorage.getItem("userName");
let heat = localStorage.getItem("emojy");
let tweets = storedtweets ? storedtweets : [];
let list = document.getElementById("List");
createTweet();
document.getElementById("tweetButton").addEventListener('click',function(){
    let tweet = document.getElementById("twitterText").value;
    let userName = document.getElementById("userName").value;
    tweets.push({tweet: tweet})
    document.getElementById("twitterText").value = "";
    console.log(userName, "userName");
    console.log(tweets, "tweets");
    createTweet();
})
function createTweet(){
    list.innerHTML = "";
    let userName = document.getElementById("userName").value;
    tweets.map(function(arr, i){
        
        let tweetContent = document.createElement("div")
        tweetContent.textContent = arr.tweet;
        let user = document.createElement("h3");
        user.textContent = userName;
        // let emojy = document.createElement("div");
        // let like = document.getElementById("heart");
        // emojy.textContent = like;
        list.appendChild(user);
        list.appendChild(tweetContent);
        document.getElementById("List").style.color = "white";
    })
    localStorage.setItem("tweets", JSON.stringify(tweets));
    localStorage.setItem("userName", userName);
    // localStorage.setItem("emojy", emojy);
}

