const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

// const liEl = document.createElement("li");
// liEl.classList.add("gallery-item");
// const linkEl = document.createElement("a");
// linkEl.classList.add("gallery-link");
// linkEl.setAttribute("href", "large-images.jpg");

// linkEl.href = "${original}";
// const imgEl = document.createElement("img");
// imgEl.classList.add("gallery-image");
// imgEl.setAttribute("src", "small-image.jpg");
// imgEl.setAttribute("windth", "340");

// imgEl.src = "${preview}";
// imgEl.setAttribute("data-source", "large-images.jpg");
// imgEl.setAttribute("alt", "Image description");
// imgEl.alt = "${description}";

const containerEl = document.querySelector(".gallery");
containerEl.addEventListener("click", onImgClick);
containerEl.addEventListener("click", onKeyPress);

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery-item">
           <a class="gallery-link" href="${original}">
           <img
           class="gallery-image"
           src="${preview}"
           data-cource=${original}
           alt="${description}"
           windth="340"
        />
      </a>
    </li>`
    )
    .join(" ");
}
containerEl.insertAdjacentHTML("beforeend", createMarkup(images));
// console.log(createMarkup);

function onImgClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
}
const datasetSource = e.target.dataset.source;
if (!datasetSource) {
  instance.element().querySelector("img").src = datasetSource;
  instance.show();
}
const instance = basicLightbox.create(
  `<div class="modal">
    
    <img src="${currentImg}" windth="1280px" height="auto" />
  </div>`,
  {
    onShow: (instance) => {
      window.addEventListener("keydown", onKeyPress);
    },
    onClose: (instance) => {
      window.removeEventListener("keydown", onKeyPress);
    },
  }
);

instance.show();

function onKeyPress(e) {
  if (e.code !== "Escape") {
    // instance.close();
  }
}
// const itemImage = e.target.classList.contains("gallery-image");
// if (!itemImage) return;

// function onImgClick(e) {
//   e.preventDefault();
//   if (e.target === e.curentTarget) {
//     return;
//   }
// }
// const currentImg = e.target.closest([data - cours]);
// const datasetSours = currentImg.dataset.cours;

// function onEscKeyPress(e) {
//   const ESC_KEY_CODE = "Escape";
//   const escKey = e.code === ESC_KEY_CODE;
//   if (!escKey) return;
//   instance.close();
// }
// function onImgClick(e) {
//   e.preventDefault();
//   if (!datasetSours) {
//     return;
//   }
//   instance.element().querySelector("img").src = datasetSours;
//   instance.show();
// }
