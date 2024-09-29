const imagesJson = {
  images: [
    {
      name: "Wardrobe",
      folder: "Wardrobe",
    },
    {
      name: "Kitchen",
      folder: "Kitchen",
    },
    {
      name: "Bed",
      folder: "Bed",
    },
    {
      name: "Drawing room",
      folder: "DrawingRoom",
    },
    {
      name: "Sofa",
      folder: "Sofa",
    },
    {
      name: "Dining Set",
      folder: "DiningSet",
    },
    {
      name: "Study Table",
      folder: "StudyTable",
    },
    {
      name: "Exterior",
      folder: "Exterior",
    },
    {
      name: "Others",
      folder: "Others",
    },
  ],
};

const getImages = (folder) => {
  if (folder === "Bed") return importAll(import.meta.webpackContext("./../assets/images/Bed/", { recursive: false, regExp: /\.(png|jpe?g|svg)$/ }));
  if (folder === "DiningSet") return importAll(import.meta.webpackContext("./../assets/images/DiningSet/", { recursive: false, regExp: /\.(png|jpe?g|svg)$/ }));
  if (folder === "Wardrobe") return importAll(import.meta.webpackContext("./../assets/images/Wardrobe/", { recursive: false, regExp: /\.(png|jpe?g|svg)$/ }));
  if (folder === "Kitchen") return importAll(import.meta.webpackContext("./../assets/images/Kitchen/", { recursive: false, regExp: /\.(png|jpe?g|svg)$/ }));
  if (folder === "DrawingRoom") return importAll(import.meta.webpackContext("./../assets/images/DrawingRoom/", { recursive: false, regExp: /\.(png|jpe?g|svg)$/ }));
  if (folder === "Sofa") return importAll(import.meta.webpackContext("./../assets/images/Sofa/", { recursive: false, regExp: /\.(png|jpe?g|svg)$/ }));
  if (folder === "StudyTable") return importAll(import.meta.webpackContext("./../assets/images/StudyTable/", { recursive: false, regExp: /\.(png|jpe?g|svg)$/ }));
  if (folder === "Exterior") return importAll(import.meta.webpackContext("./../assets/images/Exterior/", { recursive: false, regExp: /\.(png|jpe?g|svg)$/ }));
  if (folder === "Others") return importAll(import.meta.webpackContext("./../assets/images/Others/", { recursive: false, regExp: /\.(png|jpe?g|svg)$/ }));
};

const getBaseImage = (folder) => {
  if (folder === "Bed") return importAll(import.meta.webpackContext("./../assets/images/Bed/", { recursive: false, regExp: /(basePhoto)\.(png|jpe?g|svg)$/ }));
  if (folder === "DiningSet") return importAll(import.meta.webpackContext("./../assets/images/DiningSet/", { recursive: false, regExp: /(basePhoto)\.(png|jpe?g|svg)$/ }));
  if (folder === "Wardrobe") return importAll(import.meta.webpackContext("./../assets/images/Wardrobe/", { recursive: false, regExp: /(basePhoto)\.(png|jpe?g|svg)$/ }));
  if (folder === "Kitchen") return importAll(import.meta.webpackContext("./../assets/images/Kitchen/", { recursive: false, regExp: /(basePhoto)\.(png|jpe?g|svg)$/ }));
  if (folder === "DrawingRoom") return importAll(import.meta.webpackContext("./../assets/images/DrawingRoom/", { recursive: false, regExp: /(basePhoto)\.(png|jpe?g|svg)$/ }));
  if (folder === "Sofa") return importAll(import.meta.webpackContext("./../assets/images/Sofa/", { recursive: false, regExp: /(basePhoto)\.(png|jpe?g|svg)$/ }));
  if (folder === "StudyTable") return importAll(import.meta.webpackContext("./../assets/images/StudyTable/", { recursive: false, regExp: /(basePhoto)\.(png|jpe?g|svg)$/ }));
  if (folder === "Exterior") return importAll(import.meta.webpackContext("./../assets/images/Exterior/", { recursive: false, regExp: /(basePhoto)\.(png|jpe?g|svg)$/ }));
  if (folder === "Others") return importAll(import.meta.webpackContext("./../assets/images/Others/", { recursive: false, regExp: /(basePhoto)\.(png|jpe?g|svg)$/ }));
};

function importAll(imagesContext) {
    return imagesContext.keys().map((key) => ({
      key,
      src: imagesContext(key),
    }));
  }

export { imagesJson, getImages, getBaseImage  };
