// Define identifier, checker, progressBtn, and tellerText variables outside the startTimer function
var identifier = null;
var checker = null;
var progressBtn = document.querySelector('.progress');
let tellerText = document.querySelector('.teller');

let likeButtonA = document.querySelector('.like_button');
let shareButtonA = document.querySelector('.share_button');
let subsButtonA = document.querySelector('.subscribe_button');
let watchButtonA = document.querySelector('.watch_button');

let timerInterval;
let isDocumentHidden = false;

//Time defined for Like, Share, Subscribe and watch video
let like_time_second = 3;
let share_time_second = 5;
let subscribe_time_second = 4;
let watch_time_minutes = 10;//totalsecondsinminute * minutes

let window_to_watch = "https://youtu.be/62hfF8fH3_k?si=zeBKWAffDTtz_zE3";//link of the video

let name_of_zip = "AlucardXTanjiro.zip";
let filepath_zip = "projects/assets/download_zip/"+name_of_zip;

//-----------------
let totalSeconds = 0;
        let minutes = 0;
        let seconds = 0;

document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'hidden') {
      isDocumentHidden = false;
      startTimer(); // Resume the timer
    } else {
        isDocumentHidden = true;
        clearInterval(timerInterval); // Pause the timer
    }
});

function startTimer() {
    totalSeconds = 0; // Initialize globally
    timerInterval = setInterval(() => {
        if (!isDocumentHidden) {
            minutes = Math.floor(totalSeconds / 60);
            seconds = totalSeconds % 60;
            totalSeconds++; // Increment the global variable
            // Your existing task completion logic here...
        } else {
            clearInterval(timerInterval);
        }
  
        // Check identifier inside the setInterval callback
        // If executed then Like is done
        if (totalSeconds >= like_time_second && (identifier === 'like')) {
            clearInterval(timerInterval);

            likeButtonA.style.backgroundColor = 'green';
            likeButtonA.style.color = 'black';
        
            // Means NewTodo
            shareButtonA.style.backgroundColor = 'red';
            document.querySelector('.share_logo').style.filter = 'none';

            // Progress update
            progressBtn.style.backgroundImage = 'linear-gradient(to right, gray 25%, black 25%)';
            progressBtn.style.transition = 'background-image 0.3s ease'; // Adjust the duration and timing function as needed

            progressBtn.textContent = 'Unlock Progress 1/4'; 
            tellerText.textContent = 'Do: Share the Video';
            
            //must disabled
            likeButtonA.disabled = true;
            subsButtonA.disabled = true;
            watchButtonA.disabled = true;
            //enabling the next Task
            shareButtonA.disabled = false;
        }   
      
        // If executed then Share is done
        if (totalSeconds >= share_time_second && (identifier === 'share')) {
            clearInterval(timerInterval);
          
            shareButtonA.style.backgroundColor = 'green';
            shareButtonA.style.color = 'black';
        
            document.querySelector('.share_logo').style.filter = 'none';
        
            // Means NewTodo
            subsButtonA.style.backgroundColor = 'red';
            document.querySelector('.bell_logo').style.filter = 'none';
           
            // Progress update
            progressBtn.style.backgroundImage = 'linear-gradient(to right, gray 50%, black 50%)';        
            progressBtn.textContent = 'Unlock Progress 2/4';       
            tellerText.textContent = 'Do: Subscribe my Channel';

            //must disabled
            likeButtonA.disabled = true;
            shareButtonA.disabled = true;
            watchButtonA.disabled = true;
            //enabling the next Task
            subsButtonA.disabled = false;
        }

        // If executed then Subscribe is done
        if (totalSeconds >= subscribe_time_second && (identifier === 'subscribe')) {
            clearInterval(timerInterval);
          
            subsButtonA.style.backgroundColor = 'green';
            subsButtonA.style.color = 'black';
        
            // Means NewTodo
            watchButtonA.style.backgroundColor = 'red';
            document.querySelector('.yt_logo').style.filter = 'none';
            
            // Progress update
            progressBtn.style.backgroundImage = 'linear-gradient(to right, gray 75%, black 25%)';
            progressBtn.style.transition = 'background-image 0.3s ease'; // Adjust the duration and timing function as needed

            progressBtn.textContent = 'Unlock Progress 3/4';      

            tellerText.innerHTML = 'Do: Watch Video <br> Watch Time Needed: 10 : 00  Minutes<br>(Do Watch the Video Straight or it will restart)';

            //enabling the next Task
            //must disabled
            likeButtonA.disabled = true;
            shareButtonA.disabled = true;
            subsButtonA.disabled = true;
            //enabling the next Task
            watchButtonA.disabled = false;
        }

        // If executed then Youtube Watch is done LASTLY
        // Depends on how much time the video is
        if (minutes >= watch_time_minutes && (identifier === 'watch')) {
            clearInterval(timerInterval);
          
            watchButtonA.style.backgroundColor = 'green';
            watchButtonA.style.color = 'black';
            
            // Progress update
            progressBtn.style.backgroundImage = 'linear-gradient(to right, gray 100%, black 0%)';
            progressBtn.textContent = 'Completed Task 4/4';
            
            document.querySelector('.download_button').style.backgroundColor = 'green';
            document.querySelector('.download_button').disabled = false; // Corrected disabled property
            document.querySelector('.download_button').cursor = 'pointer';
        }
        console.clear();
        console.log(minutes + ' : ' + seconds);
    }, 1000);
}

function linkForLikeShareWatch(){
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      window.open(window_to_watch);//aldousXsaitama
} else {
    window.open(window_to_watch, "_blank");//aldousXsaitama   
}
}

// Like function
function redirectToYtToLike() {

    linkForLikeShareWatch();
    identifier = 'like';
    startTimer();
    
    checker = 'doneLike';
}

// Share function
function redirectToYtToShare() {
  if(checker === 'doneLike'){
    linkForLikeShareWatch();

    identifier = 'share';
    startTimer();

    checker = 'doneShare';
  }
}

// Subscribe function
function redirectToYtToSubscribe() {
  if(checker === 'doneShare'){
   window.open('https://www.youtube.com/@dream_mlbb');
    identifier = 'subscribe';
    startTimer();

    checker = 'doneSubscribe';
  }
}

// Watch function
function redirectToYtToWatch() {
  if(checker === 'doneSubscribe'){
    linkForLikeShareWatch();

    identifier = 'watch';
    startTimer();
  }
}


//subscribe
function subscribe() {
  window.open('https://www.youtube.com/@dream_mlbb');
}

//-------------------------------------------------------------------
let selectionPanel = document.querySelector('.selection');

let backBtn = document.querySelector('.back');

function backToMainPanel(){
  window.location.href = "https://linksysfree.github.io/Unlock_Link/";
}

// Download Zip function
function downloadZip() {

  var link = document.createElement("a");

  link.href = filepath_zip;//location of zip
  link.download = name_of_zip;

  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
}