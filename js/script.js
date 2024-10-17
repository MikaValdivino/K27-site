const videoPlayer = document.getElementById("video-player");
const videoSources = [
  "/videos/model1.mp4",
  "/videos/model2.mp4",
  "/videos/model3.mp4",
  "/videos/model5.mp4",
]; // Adicione aqui os outros vídeos
let currentVideoIndex = 0;

// Função para carregar o próximo vídeo
const loadNextVideo = () => {
  currentVideoIndex = (currentVideoIndex + 1) % videoSources.length; // Loop pelos vídeos
  videoPlayer.src = videoSources[currentVideoIndex];
  videoPlayer.play(); // Toca o próximo vídeo
};

// Quando o vídeo terminar, carrega o próximo
videoPlayer.addEventListener("ended", loadNextVideo);

document.querySelectorAll(".letter").forEach((letter) => {
  letter.addEventListener("mouseenter", () => {
    gsap.to(letter, { scale: 1.2, duration: 0.3, ease: "power1.inOut" });
  });
  letter.addEventListener("mouseleave", () => {
    gsap.to(letter, { scale: 1, duration: 0.3, ease: "power1.inOut" });
  });
});

gsap.from(".copy p", {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power2.out",
  stagger: 0.3,
});

gsap.from(".letter", 0.8, {
  y: -20,
  opacity: 0,
  ease: "power3.inOut",
  stagger: 0.1,
});

gsap.to(".top-left, .top-right", 2, {
  top: "0",
  ease: "power3.inOut",
  delay: 2,
});

gsap.to(".bottom-right", 2, {
  bottom: "0",
  ease: "power3.inOut",
  delay: 2,
});

gsap.to(".top-left", 2, {
  left: "0",
  ease: "power3.inOut",
  delay: 4,
});

gsap.to(".top-right", 2, {
  right: "0",
  ease: "power3.inOut",
  delay: 4,
});

gsap.to(".bottom-right", 2, {
  right: "0",
  ease: "power3.inOut",
  delay: 4,
});

gsap.to(".block-left", 2, {
  left: "-50%",
  ease: "power3.inOut",
  delay: 4,
});

gsap.to(".block-right", 2, {
  right: "-50%",
  ease: "power3.inOut",
  delay: 4,
});
