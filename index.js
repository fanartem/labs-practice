const videos = document.querySelectorAll(".video");

    console.log(videos)
  const playAllButton = document.getElementById("playAllButton");
  const pauseAllButton = document.getElementById("pauseAllButton");

  playAllButton.addEventListener("click", function () {
    videos.forEach((video) => {
      video.play();
    });
  });
  pauseAllButton.addEventListener("click", function () {
    videos.forEach((video) => {
      video.pause();
    });
  });