// Edit EVERYTHING here.
// Add your images into /images and reference them below.

const timeline = [
  {
    year: "2020",
    tag: "the beginning",
    text:
`Our first year. The pandemic sent everyone home which allowed us to get to know each other and start our love story. I still remember freezing outside every night but I didn't matter because I was able to talk with you. Every trip, every tank of gas and all money we wasted on food was worth so it.`,
    photos: ["2020-1.jpg", "2020-2.jpg", "2020-3.jpg", "2020-4.jpg","2020-5.jpg", "2020-6.jpg"] // optional
  },
  {
    year: "2021",
    tag: "growing",
    text:
`The year we got engaged. I still remember being so nervous to ask you parents permission to marry you. I remember thinking how far away it was till we got married and moved in together, and look at us now, 4 years down and forever to go.`,
    photos: ["2021-1.jpg", "2021-2.jpg", "2021-3.jpg", "2021-4.jpg","2021-5.jpg", "2021-6.jpg"]
  },
  {
    year: "2022",
    tag: "adventures",
    text:
`The year we got married! I still remembering saying "I do" it was the best decision of my life. getting to know you deeper and getting to actually live life with you was the best gift i could have ever recieved`,
    photos: [ "2022-1.jpg", "2022-2.jpg", "2022-3.jpg", "2022-4.jpg","2022-5.jpg", "2022-6.jpg"]
  },
  {
    year: "2023",
    tag: "us",
    text:
`We lowkey got huuuuge, all good tho. I loved living in San Diego with you everyday felt so fun and adventurous. This was also the year we decided on our Vacations schedule. I love that I got to experience new things with you.`,
    photos: ["2023-1.jpg", "2023-2.jpg", "2023-3.jpg", "2023-4.jpg","2023-5.jpg", "2023-6.jpg", "2023-7.jpg", "2023-8.jpg"]
  },
  {
    year: "2024",
    tag: "love",
    text:
`The Mini trips year. also the year you got baptized!! Each year we grow together is such a blessing. lowkey the year we locked in too. you can totally see the progression of our weight tho.`,
    photos: ["2024-1.jpg", "2024-2.jpg", "2024-3.jpg", "2024-4.jpg","2024-5.jpg", "2024-6.jpg", "2024-7.jpg", "2024-8.jpg", "2024-9.jpg", "2024-10.jpg", "2024-11.jpg", "2024-12.jpg"]
  },
  {
    year: "2025",
    tag: "more love",
    text:
`Our BIG TRIPS year!! this by far has been one of my favorite years being with you. From going to Greece, figuring out that we might want to move to Idaho and moving into our new apartment!`,
    photos: ["2025-1.jpg", "2025-2.jpg", "2025-3.jpg", "2025-4.jpg","2025-5.jpg", "2025-6.jpg", "2025-7.jpg", "2025-8.jpg", "2025-9.jpg", "2025-10.jpg", "2025-11.jpg", "2025-12.jpg"]
  },
  {
    year: "2026",
    tag: "forever",
    text:
`Can't wait to see what's to come...`,
    //photos: ["2026-1.jpg", "2026-2.jpg", "2026-3.jpg", "2026-4.jpg","2026-5.jpg", "2026-6.jpg"]
  }
];

/*const galleryPhotos = [
  "gallery-1.jpg",
  "gallery-2.jpg",
  "gallery-3.jpg",
  "gallery-4.jpg",
  "gallery-5.jpg",
  "gallery-6.jpg"
];*/


// ----------------- render -----------------
const timelineMount = document.getElementById("timelineMount");
const galleryMount = document.getElementById("galleryMount");
const letterMount = document.getElementById("letterMount");

function imgSrc(file) {
  return `images/${file}`;
}

function renderTimeline() {
  timelineMount.innerHTML = "";
  timeline.forEach((item) => {
    const section = document.createElement("div");
    section.className = "year";

    section.innerHTML = `
      <div class="year-head">
        <h3 class="year-title">${item.year}</h3>
        <div class="year-tag">${item.tag || ""}</div>
      </div>
      <div class="year-text">${escapeHtml(item.text || "")}</div>
    `;

    if (item.photos && item.photos.length) {
      const photos = document.createElement("div");
      photos.className = "year-photos";
      item.photos.forEach((p) => {
        const img = document.createElement("img");
        img.className = "photo";
        img.src = imgSrc(p);
        img.alt = `${item.year} photo`;
        img.loading = "lazy";
        photos.appendChild(img);
      });
      section.appendChild(photos);
    }

    timelineMount.appendChild(section);
  });
}

function renderGallery() {
  galleryMount.innerHTML = "";
  galleryPhotos.forEach((p) => {
    const img = document.createElement("img");
    img.className = "photo";
    img.src = imgSrc(p);
    img.alt = "Gallery photo";
    img.loading = "lazy";
    galleryMount.appendChild(img);
  });
}

function renderLetter() {
  letterMount.textContent = loveLetter;
}

// prevent html injection while still allowing multiline text
function escapeHtml(str) {
  return (str || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
    .replaceAll("\n", "<br/>");
}

renderTimeline();
renderGallery();
renderLetter();
