var firebaseURL = 'https://[YOUR-FIREBASE-NAME-HERE].firebaseio.com/like-button/';
let storedtweets = JSON.parse(localStorage.getItem("tweets"));
// let storedlikes = localStorage.getItem("like");
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
        let btn = document.createElement('button');
        btn.innerText = '♡';
        btn.className='heartBtn';
        // let x = document.createElement("INPUT");
        // x.setAttribute("type", "text");
        // x.className = 'show';
        // like = document.getElementsByClassName('show').value = 0;
        list.appendChild(user);
        list.appendChild(tweetContent);
        list.appendChild(btn);
        // list.appendChild(x);
        document.getElementById("List").style.color = "white";
        // document.getElementsByClassName('heartBtn').addEventListener('click',function(){
        //     like = like + 1;
        // })
    })
    localStorage.setItem("tweets", JSON.stringify(tweets));
    localStorage.setItem("userName", userName);
    // localStorage.setItem("like", JSON.stringify(like));
}


