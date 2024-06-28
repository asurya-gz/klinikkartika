import React from "react";

const Gallery = () => {
  const galleryImages = [
    { id: 1, src: "/gallery/image1.jpg", alt: "Foto 1" },
    { id: 2, src: "/gallery/image2.jpg", alt: "Foto 2" },
    { id: 3, src: "/gallery/image3.jpg", alt: "Foto 3" },
    { id: 4, src: "/gallery/image4.jpg", alt: "Foto 4" },
    { id: 5, src: "/gallery/image5.jpg", alt: "Foto 5" },
    { id: 6, src: "/gallery/image6.jpg", alt: "Foto 6" },
  ];

  return (
    <div className="h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
          Galeri Klinik Kartika
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <div key={image.id} className="relative">
              <img
                className="w-full h-auto rounded-lg shadow-md object-cover"
                src={image.src}
                alt={image.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
