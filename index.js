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
        

    




function getParamater() {
    let params = new URLSearchParams(window.location.search);
    return params.get('user');
}

let parametersResult = getParamater();
let selectedUser = users[parametersResult];

console.log(selectedUser.displayName);



//:::::::::::::::::::::::::::::END OF OBJECT::::::::::::::::::::::::::::::::::::::::::::

function calculateNumberOfTweets (tweetsObj){
    let count = 0;

    for(let i = 0; i < tweetsObj.tweets.length;i++){
        count++;
    }
    return count;
}

function thousandNums(num){
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
     }
     if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
     }
     return num;
}

//Adding the arrow "back" button and the display name of the profile.
const header = document.getElementById('header-container');
header.innerHTML = `
    <div class = "arrow-btn-div">
        <a href="#">
            <button class = "arrow-box-btn">←</button>
        </a>
    </div>
    <div class = "user-header">
       <h2 class = "display-name-top">${selectedUser.displayName}</h2>
       <p class = "num-tweets-top">${calculateNumberOfTweets(selectedUser)} Tweets</p> 
    </div>
`;

//Here we're adding the cover photo
const coverPhoto = document.getElementById('cover-photo');
coverPhoto.style.backgroundImage = `url(${selectedUser.coverPhotoURL})`;

//Adding the profile details
const profileDetailsDiv = document.getElementById('profile-details-container');

profileDetailsDiv.innerHTML = `
    <div class = "profile-div">
        <div id = "profile-pic-id" class="profile-pic"></div>
    </div>
    <div class = "follow-btn-container">
        <button class = "follow-btn">Following</button>
    </div>
    <div class = "user-info">
        <h2>${selectedUser.displayName}</h2>
        <h3 class = "user-name-profile">${selectedUser.userName}</h3>
        <h4 class = "join-profile">🗓 Joined ${selectedUser.joinedDate}</h4>
        <div class="following-followers-info">
            <h4 class = "num-following">${thousandNums(selectedUser.followingCount)}</h4>
            <h4 class = "text-follow-info">Following</h4>
            <h4 class = "num-followers">${thousandNums(selectedUser.followerCount)}</h4> 
            <h4 class = "text-follow-info">Followers</h4> 
        </div>
    </div>
    
`;

let profilePictureDiv = document.getElementById('profile-pic-id');
profilePictureDiv.style.backgroundImage = `url('${selectedUser.avatarURL}')`; 

const tweetsContainer = document.getElementById('tweets-container');



function showTweets(){

    

    for(let i = 0; i < selectedUser.tweets.length; i++){
        let tweet = document.createElement('div');
        tweet.classList.add('tweet-div');
        tweet.innerHTML = `
            <div class = "small-pic"></div>
            <div class = "single-tweet">

                <div class = "single-tweet-info">
                    <div class = "single-tweet-display-name">  
                        ${selectedUser.displayName}   
                    </div>
                    <div class = "single-tweet-user-name">
                        ${selectedUser.userName}     
                    </div>
                    <div class = "single-tweet-posted-time">
                    5h <!--${selectedUser.tweets[i].timestamp}-->     
                    </div>
                </div>
                <div>
                    <p class = "tweet">${selectedUser.tweets[i].text}</p>
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
        tweetsContainer.appendChild(tweet);
    }

    let smallPics = document.getElementsByClassName('small-pic');
        
    for(let smallPic of smallPics){
        smallPic.style.backgroundImage = `url(${selectedUser.avatarURL})`;
        console.log(smallPic);
    }
    
    
    
}




showTweets();







/*
<div class="container">
<div class="selector">
    <div class="tab tab-active">
        Shirts
    </div>
    <div class="tab">
        Pants
    </div>
    <div class="tab">
        Shoes
    </div>
</div>
<div class="content">
    <div id = "Shirts" class="content-body show-active">
        <h4>Shirts</h4>
        <p>Our shirts are all of the best quality</p>
    </div>
    <div id = "Pants" class="content-body">
        <h4>Pants</h4>
        <p>Pants can be custom tailored upon request</p>
    </div>
    <div id = "Shoes" class="content-body">
        <h4>Shoes</h4>
        <p>Shoes all US sized unless indicated otherwise</p>
    </div>
</div>
</div>
<script>    
//function to remove 'show-active' class and add to clicked
function setNewActive (el){
    //Select all content-body
    var contentBodies = document.getElementsByClassName('content-body');
    //remove show-active
    for (var contentBody of contentBodies){
        contentBody.classList.remove('show-active');
    }
    //add show-active (block) to clicked
    document.getElementById(el.textContent.trim()).classList.add('show-active');
    let tabs = document.getElementsByClassName('tab');
    for (let tab of tabs){
        tab.classList.remove('tab-active');
    }
    el.classList.add('tab-active');
}

//select tab class and loop through
let tabs = document.getElementsByClassName('tab');
for(let tab of tabs){
    tab.addEventListener('click', function(e){
        setNewActive(e.currentTarget);
    });
}
</script>*/

       