var users = {

    user1 : {
        userName: '@elonmusk',
        displayName: 'Elon Musk',
        joinedDate: 'June 2009',
        followingCount: 103,
        followerCount: 47900000,
        avatarURL: 'assets/elonmusk.jpg',
        coverPhotoURL: 'assets/elonmusk-cover.jpeg',
        tweets: [
            {
                text: 'I admit to judging books by their cover',
                timestamp: '2/10/2021 00:01:20'
            },
            {
                text: 'Starship to the moon',
                timestamp: '2/09/2021 18:37:12'
            },
            {
                text: 'Out on launch pad, engine swap underway',
                timestamp: '2/09/2021 12:11:51'
            }
        ]
    },

    user2 : {
        userName: '@BillGates',
        displayName: 'Bill Gates',
        joinedDate: 'June 2009',
        followingCount: 274,
        followerCount: 53800000,
        avatarURL: 'assets/billgates.jpg',
        coverPhotoURL: 'assets/billgates-cover.jpeg',
        tweets: [
            {
                text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
                timestamp: '2/10/2021 00:01:20'
            },
            {
                text: 'Should I start tweeting memes? Let me know in a comment.',
                timestamp: '2/09/2021 18:37:12'
            },
            {
                text: 'In 2020, I read a book every hour.',
                timestamp: '2/09/2021 12:11:51'
            }
        ]
    }
}


//I'm converting the string value of the timestamp to a date object.
function convertTimeToObj (){
    let str;
    let date;

    for(let key in users){
        for (let i = 0; i < users[key].tweets.length; i++){
            str = users[key].tweets[i].timestamp;
            date = new Date(str);
            users[key].tweets[i].timestamp = date;
        }
    }
}


function extractTweets(){

//I'm extracting the tweets and timestamps to an array.
for (let key in users){
    for (let i = 0; i < users[key].tweets.length; i++){
        tweetsToArrange.push(users[key].tweets[i]);
    }
}
    //Down here, I'm executing a function to sort the tweets.
    sortTweets(tweetsToArrange);
}

function sortTweets(array){
    //We sort the array of tweets from most recent to least recent.
    sortedTweets = array.sort((date1, date2) => date2.timestamp - date1.timestamp)

    showTweets(sortedTweets) ;   
}


function showTweets (array){
    
    let profilePicture = [];
    let displayName = "";
    let userName = "";

    for (let j = 0; j < array.length;j++){ 
        for (let key in users){
            for (let i = 0; i < users[key].tweets.length; i++) {
                if (array[j].text === users[key].tweets[i].text){
                    displayName = users[key].displayName;
                    userName = users[key].userName;
                    profilePicture.push(users[key].avatarURL);
                }
            }
        }

        let tweet = document.createElement('div');
            tweet.classList.add('tweet-div');
            tweet.innerHTML = `
            <div class = "small-pic"></div>
            <div class = "single-tweet">
                <div class = "single-tweet-info">
                    <div class = "single-tweet-display-name">  
                        ${displayName} 
                    </div>
                    <div class = "single-tweet-user-name">
                        ${userName}     
                    </div>
                    <div class = "single-tweet-posted-time">
                        ${array[j].timestamp}
                    </div>
                </div>
                <div>
                    <p class = "tweet">${array[j].text}</p>
                </div>
                <div class = "symbols">
                    <div class = "symbol">▢</div>
                    <div class = "symbol">⇆</div>
                    <div class = "symbol">♡</div>
                    <div class = "symbol">↥</div>
                </div>
            </div>
            <div class ="three-dots-div">
                <p class = "three-dots">...</p>
            </div>        
            `;
        
            (tweetsContainer).appendChild(tweet);
            
    }

    let smallPics = document.getElementsByClassName('small-pic');
    let index = 0;

    for(let smallPic of smallPics){
        smallPic.style.backgroundImage = `url(${profilePicture[index]})`;
        index++;
    }

 
    /*let smallPics = document.getElementsByClassName('small-pic');
    for(let smallPic of smallPics){
        smallPic.style.backgroundImage = `url(${profilePicture[0]})`;
    }

    console.log(typeof profilePicture[0]);*/
}


/*function assignImages(picture){


    let profilePic = "";
    let tweets = document.getElementsByClassName('tweet');
    let compare = "";  
    let arrayOfPictures = [];

    //Loops over the array that contains the tweets
    for (let i = 0; i < tweets.length; i++){
        //This for tests if the tweet exists in the users object.
        compare = tweets[i].textContent;
        for (let j = 0; j < users.user1.tweets.length; j++){
            if(compare === users.user1.tweets[j].text){
                isItElon = true;
                break
            }
        }

        //Validates weather it's Elon or Bill
        if(isItElon === true){
            profilePic = `url(${users.user1.avatarURL})`;
        } else {
            profilePic = `url(${users.user2.avatarURL})`;
        }

        arrayOfPictures.push(profilePic);


        isItElon = false;
        profilePic = "";

    }

    //Assigns the picture to the tweet
    let smallPics = document.getElementsByClassName('small-pic');
    for(let smallPic of smallPics){
        smallPic.style.backgroundImage = `${picture}`;
    }
}*/



const tweetsContainer = document.getElementById('tweets-container');
const tweetsToArrange = [];
let sortedTweets = [];
 
convertTimeToObj ();
extractTweets();