document.querySelectorAll(".video-container video").forEach((video) => {
  video.onclick = () => {
    document.querySelector(".popup-video").style.display = "block";
    document.querySelector(".popup-video video").src =
      video.getAttribute("src");
    document.querySelector(".popup-video video").play();
  };
});

document.querySelector(".popup-video span").onclick = () => {
  document.querySelector(".popup-video").style.display = "none";
  document.querySelector(".popup-video video").pause();
};
