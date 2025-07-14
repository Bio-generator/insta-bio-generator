const captions = {
happy: [
  "Smiles, sparkles, and sunshine ✨",
  "Feeling good looking better 😄",
  "Happiness looks good on me 💛",
  "Sunshine mixed with a little bit of me ☀",
  "This smile? It’s permanent today 😁",
  "Just here to spread good vibes 🌈",
  "Too happy to care 😍",
  "Joy in my soul and glitter in my eyes ✨",
  "Woke up smiling and stayed that way 🌞",
  "Smiling because why not? 😋",
  "Nothing but positive energy here ✌",
  "Happiness is homemade 💫",
  "Good mood. Good food. Good day. 🍕😁",
  "Be a voice of joy in a world of noise 🎶",
  "Laugh louder, love harder 💕",
  "My hearts dancing today 💃",
  "Smiling through it all 😌",
  "Just good vibes and better selfies 📸",
  "Happy looks like this ➡ (me!) 😎",
  "Sweet as sunshine, wild as the wind "
],
  moody: [
  "Not sad, just vibing low 🌙",
  "Eyes speak what lips don’t say 💭",
  "Silent but loud in my own way 🖤",
  "Dark skies, deep thoughts...",
  "Lost in a world of maybes 🌫",
  "Smiling on the outside, storms inside ⛈",
  "My vibe? Off. Don’t disturb 🚫",
  "Moonlit thoughts and midnight silence 🌕",
  "Peace in isolation, not in noise 🤫",
  "My mood has its own weather ⛅",
  "Thinking too much, feeling too deep...",
  "Wearing confidence, hiding chaos 🪞",
  "The calm before the emotional storm 🌪",
  "Messy hair, messy heart 🖤",
  "Eyes like oceans, hiding shipwrecks 🌊",
  "Crying inside but posting selfies 🙂",
  "Heavy soul with soft music 🎧",
  "Broken but still beautiful 🌘",
  "Quiet mind, loud heart 💔",
  "Sometimes silence screams the loudest 🔇"
],
boss: [
  "No crown, still a queen 👑",
  "Slaying silently 💅",
  "Too glam to give a damn 🔥",
  "Focused. Fierce. Fabulous.",
  "I don’t chase, I attract 💎",
  "Messy bun and getting stuff done 💁‍♀",
  "Boss up or get lost 💼",
  "She believed, so she did 💥",
  "Not everyone likes me—and that’s power 🖤",
  "Queens don’t compete, we elevate 👠",
  "Classy, sassy, and a bit badassy 😎",
  "Busy building my empire 🏰",
  "Pretty face, savage mind 🧠💄",
  "Know your worth, then add tax 💰",
  "Unapologetically me 💋",
  "Confidence level: selfie with no filter 📸",
  "On my worst days, I still slay 💪",
  "Built from pain, shaped by power 🛡",
  "Not lucky, just unstoppable ⚡",
  "I’m not a backup plan, and I’m not second choice 🚫"
],
    
  aesthetic: [
  "Dreamy skies & quiet vibes 🌙",
  "Soft heart. Sharp mind. Pretty soul 🌸",
  "Sunsets and subtle thoughts 🌇",
  "Dressed in dreams, thinking in colors 🎨",
  "Living slowly, loving deeply ☁",
  "Moonchild with a wild soul 🌜",
  "A moment of peace in a noisy world 🍃",
  "Simplicity is the ultimate aesthetic 🤍",
  "Glowing differently ✨",
  "Coffee, books & rainy moods ☕📖",
  "Let the soft things stay 🕊",
  "Golden hour is my aesthetic filter 🧡",
  "Peaceful chaos in a pretty frame 🖼",
  "Chasing the moon, not people 🌕",
  "Vibes over everything 🎧",
  "In my own little universe 🌌",
  "Eyes full of stars, heart full of calm ⭐",
  "Not art, but definitely a vibe 🎭",
  "My moodboard lives here 🎞",
  "Soft like petals, deep like oceans 🌺🌊"
],
};

function generateCaption(mood) {
  let allCaptions;

  if (mood === 'random') {
    // Combine all moods
    allCaptions = [
      ...captions.happy,
      ...captions.moody,
      ...captions.boss,
      ...captions.aesthetic
    ];
  } else {
    allCaptions = captions[mood];
  }

  const randomIndex = Math.floor(Math.random() * allCaptions.length);
  const caption = allCaptions[randomIndex];

  document.getElementById("caption-text").textContent = caption;
  
  // ✨ Background Mood Update
  document.body.className = ""; // clear all mood classes
  document.body.classList.add("mood-" + mood); // add new mood class
}
function closePopup() {
  document.getElementById("insta-popup").style.display = "none";

}
function copyCaption() {
  const caption = document.getElementById("caption-text").textContent;

  if (caption && caption !== "Your caption will appear here...") {
    navigator.clipboard.writeText(caption).then(() => {
      const copyBtn = document.getElementById("copy-btn");
      copyBtn.textContent = "✅ Copied!";
      setTimeout(() => {
        copyBtn.textContent = "📋 Copy Caption";
      }, 2000);
    });
  } else {
    alert("Please generate a caption first!");
  }
}
function getAISuggestion() {
  const input = document.getElementById("keywords").value.toLowerCase();
  let suggestion = "";

  if (input.includes("happy") || input.includes("joy")) {
    suggestion = "Radiating happiness and catching smiles 😊✨";
  } else if (input.includes("moody") || input.includes("alone")) {
    suggestion = "Floating through my feelings like a midnight cloud 🌌";
  } else if (input.includes("boss") || input.includes("strong")) {
    suggestion = "Commanding the room without a sound 💼💅";
  } else if (input.includes("aesthetic") || input.includes("vibe")) {
    suggestion = "Soft hues, hard truths, calm chaos 🎨🌙";
  } else {
    suggestion = "Curating a vibe that's uniquely me 🌟";
  }

  document.getElementById("ai-output").textContent = suggestion;
}
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  preloader.style.opacity = 0;
  setTimeout(() => {
    preloader.style.display = "none";
  }, 500);
});
