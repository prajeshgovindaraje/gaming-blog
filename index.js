import {posts} from "./data.js"

let homeTextEle = document.getElementById("home-text")

let mainContentDivEle = document.getElementById("main-content")
let recentPostsEle = document.getElementById("recent-posts")
let aboutMeTexts = document.getElementById("about-me-text")
let viewMoreText = document.getElementById("view-more-text")
let headerTitleDiv = document.getElementById("header-title")

let canViewMore = true
let isDetailedContentPage = false


/*
---------------------------------------------
Event Listners
---------------------------------------------
*/

recentPostsEle.addEventListener('click',(e)=>{

     if(e.target.dataset.postid !== undefined){
        renderDetailedContent(e.target.dataset.postid)

     }


})

mainContentDivEle.addEventListener('click',(e)=>{
    let homeContenDiv = document.getElementById("home-content-div")
    console.log(homeContenDiv)
    console.log(e.target)

    if(isDetailedContentPage === false){
        if(e.target === homeContenDiv || e.target.id === "main-content"){
            let childEle = homeContenDiv.querySelector("p")
            console.log(childEle.dataset.postid)
             renderDetailedContent(childEle.dataset.postid)
             isDetailedContentPage = true
        }else if(e.target.id === "recent-posts-text"){
            return
        }else{
            renderDetailedContent(e.target.dataset.postid)
            isDetailedContentPage = true
        }  
    } 
})

homeTextEle.addEventListener('click',()=>{
    renderHomeContent()
    scrollToTop()
})

aboutMeTexts.addEventListener('click',()=>{

    renderAboutMe()
    scrollToTop()
    

})

viewMoreText.addEventListener('click',()=>{

    if(canViewMore){
        renderRecentPosts(posts.length)
        viewMoreText.textContent = "View Less"
        canViewMore = false

    }else{
        renderRecentPosts(4)
        viewMoreText.textContent = "View More"
        canViewMore = true
    }



})

headerTitleDiv.addEventListener('click',()=>{
    renderHomeContent()
})




/*
---------------------------------------------
Initial Function Calls
---------------------------------------------
*/
renderHomeContent()
renderRecentPosts(4)





/*
---------------------------------------------
Functions Definition
---------------------------------------------
*/

function renderRecentPosts(num){


    let html = ""


    for(let i = 1; i < num; i++){

        html += `<div class="individual-post" id="individual-post" data-postId=${posts[i].postId}>
                <img class="post-image" src=${posts[i].postImage} data-postId=${posts[i].postId}>
                <p data-postId=${posts[i].postId}>${posts[i].postDate}</p>
                <h3 data-postId=${posts[i].postId}>${posts[i].postTitle}</h3>
                <p data-postId=${posts[i].postId}>${posts[i].postPreviewContent}</p>
                </div>
        
        `



    }

    document.getElementById("recent-posts").innerHTML = html


}

function renderHomeContent(){
    isDetailedContentPage = false;
    mainContentDivEle.style.backgroundImage = `url(${posts[0].postImage})`
    let html = ""
    html += `   
                <div class="home-content-div" id="home-content-div">
                <p data-postid=${posts[0].postId}>${posts[0].postDate}</p>
                <h1 data-postid=${posts[0].postId}>${posts[0].postTitle}</h1>
                <p  data-postid=${posts[0].postId} class="home-preview-content">${posts[0].postPreviewContent} </p>
                </div>
                
        
        `
    mainContentDivEle.innerHTML = html
    scrollToTop()
}

function renderDetailedContent(postID){

    let currPost = {}

    posts.forEach((post)=>{
        if(post.postId === postID){
            currPost = post
        }
    })

    let html = ""
    html += `   
                <div class="detailed-content-div" id="detailed-content-div">
                <p>${currPost.postDate}</p>
                <h1>${currPost.postTitle}</h1>
                <p>${currPost.postPreviewContent}</p>
                <img src=${currPost.postImage}>
                <p>${currPost.postContent}</p>
                </div>
        
        `
    mainContentDivEle.innerHTML = html
    mainContentDivEle.style.backgroundImage = 'none'

    window.scrollTo({
        top: 0,
        behavior: 'instant', 
      });
}

function renderAboutMe(){

    let html = ""
    html += `   
                <div class="about-me-div" id="about-me-div">
            
                <div class="name-card">
                <img class="profile-pic" src=./images/journal-profile-pic-bw.png   >
                <div class="name-card-details">
                <h1>Hi there! My name is Prajesh and welcome to my Gaming journal.</h1>
                <h6>This blog is my space to share insights, thoughts, and detailed articles about the games I’ve played. From epic adventures and intense battles to heartwarming indie stories, I aim to capture the essence of each game and share it with fellow gamers like you.</h6>
                </div>
            

                </div>

               <h1>What You’ll Find Here:</h1>
               <ul>
                <li><img src="/images/icons/insight.png"><span>Game Insights</span> <p>: In-depth articles on gameplay, story, and mechanics of the games I’ve explored.</p></li>
                 <li><img src="/images/icons/perspective.png"><span>Personal Perspectives</span> <p>: My experiences, highlights, and lessons from each game.</p></li>
                  <li><img src="/images/icons/recommendation.png"><span>Recommendations</span> <p>: Must-play titles and hidden gems you shouldn’t miss.</p></li>
               </ul>
                </div>
        
        `
    mainContentDivEle.innerHTML = html
    mainContentDivEle.style.backgroundImage = 'none'

}


function scrollToTop(){
    window.scrollTo({
        top: 0,
        behavior:'smooth'
    })
}

