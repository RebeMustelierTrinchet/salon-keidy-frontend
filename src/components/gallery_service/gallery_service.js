
import React, { useState } from "react";
import styles from "./gallery_service.module.css";

export default function Gallery_Service({ item }) {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleClose = () => {
        setSelectedImage(null);
    };

    return (
        <div className={styles.main__container}>
            {item.map((image, index) => (
                <div key={index} className={styles.image__container}>
                    <img
                        className={styles.image}
                        alt={`img service ${index}`}
                        src={image}
                        onClick={() => handleImageClick(image)}
                    />
                </div>
            ))}

            {selectedImage && (
                <div className={styles.modal} onClick={handleClose}>
                    <div className={styles.modalContent}>
                        <img className={styles.modalImage} alt="selected" src={selectedImage} />
                    </div>
                </div>
            )}
        </div>
    );
}
