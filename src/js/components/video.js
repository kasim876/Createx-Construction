// video

if (document.querySelector(".video-wrapper")) {
  const video = document.querySelector(".video-wrapper__content");
  const videoWrapper = document.querySelector(".video-wrapper");
  const videoPlayBtn = document.querySelector(".video-wrapper__btn");

  const videoWrapperPlayedClass = "video-wrapper_played";
  const videoBtnPlayedClass = "video-wrapper__btn_played"

  function videoPlay() {
    videoWrapper.classList.add(videoWrapperPlayedClass);
    videoPlayBtn.classList.add(videoBtnPlayedClass);

    video.play();
    video.controls = true;
  }

  videoPlayBtn.addEventListener("click", videoPlay);
}