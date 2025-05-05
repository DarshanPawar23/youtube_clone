const video = document.getElementById('videoElement');
const canvas = document.getElementById('frameCanvas');
const screenshotBtn = document.getElementById('screenshotBtn');

screenshotBtn.addEventListener('click', () => {
  const context = canvas.getContext('2d');

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  context.drawImage(video, 0, 0, canvas.width, canvas.height);
  const imageDataURL = canvas.toDataURL('image/png');
  const a = document.createElement('a');
  a.href = imageDataURL;
  a.download = 'video-frame.png';
  a.click();
});


const premium = document.getElementById("pim");
premium.addEventListener("click",()=>{
    window.location.href ='premium.html';
})


const ai = document.querySelector(".askai");

ai.addEventListener("click", () => {
  window.open(
    'https://chatgpt.com/?utm_source=google&utm_medium=paidsearch_brand&utm_campaign=DEPT_SEM_Google_Brand_Acquisition_APAC_India_Consumer_CPA_BAU_Mix_English&utm_term=chatgpt&gad_source=1&gad_campaignid=22370388714&gbraid=0AAAAA-IW-UWdKM_KcHPxnxH820pApzBYv&gclid=Cj0KCQjwoNzABhDbARIsALfY8VM-aK7QwKoT7Eya8vdJoa1VwGCKZy1W-VseTVKPeadlacKeNJbyK4EaAmEdEALw_wcB',
    '_blank' 
  );
}); 

const Twc = document.querySelector(".twc");
Twc.addEventListener("click",()=>{
    window.location.href ='Twc.html';
})