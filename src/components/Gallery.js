import React, { useState, useRef } from "react";
import Contact from "./Contact";
import "./Gallery.css";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import MyGallery from "./MyGallery";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { getBaseImage, getImages, imagesJson } from "./Constant";


function Gallery() {
  const [selectedImageList, setSelectedImageList] = useState([]);
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const fullScreen = useMediaQuery(theme.breakpoints.down("xl"));

  const openModal = (imgSrc) => {
    const dialogImageList = [];

    const images = getImages(imgSrc.folder);
    images.forEach(image => {
      dialogImageList.push({ original: image.src,
      thumbnail: image.src});
    });
    setSelectedImageList(dialogImageList);
    handleClickOpen();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
      <h1 style={{ marginTop: "100px", fontFamily: "cursive", fontWeight: "bold", fontSize: "50px" }}>Delivered Projects</h1>

      <div className="gallery">
        {imagesJson.images.map((imgSrc, index) => (
          <div key={index} className="gallery-item" onClick={() => openModal(imgSrc)}>
            <img src={getBaseImage(imgSrc.folder)[0].src} alt={`Gallery ${index}`} />
            <center>
              <h6 style={{ fontWeight: "bold", fontFamily: "cursive", marginTop: "10px", fontSize: "20px" }}>{imgSrc.name}</h6>
            </center>
          </div>
        ))}

        <Dialog maxWidth="xl" fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
          <DialogContent>
            <ImageGallery items={selectedImageList} thumbnailPosition="left" showBullets="true" />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}

export default Gallery;
