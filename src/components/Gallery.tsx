
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Gallery = () => {
  const [activeImage, setActiveImage] = useState(0);

  const galleryImages = [
    {
      src: "/images/berenang.png",
      alt: "Berenang",
      category: "Berenang"
    },
    {
      src: "/images/marawis.png",
      alt: "pawai ramadhan",
      category: "Pawai Ramadhan"
    },
    {
      src: "/images/fieldtrip.png",
      alt: "Kegiatan fieldtrip",
      category: "Fieldtrip"
    },
    {
      src: "/images/memasakbersama.png",
      alt: "Kegiatan memasak pizza",
      category: "Kegiatan Memasak Pizza"
    },
    {
      src: "/images/memasak.png",
      alt: "Kelas memasak",
      category: "Kelas Memasak"
    },
    {
      src: "/images/manasikhaji.png",
      alt: "Manasik haji",
      category: "Manasik Haji"
    },
  ];

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="galeri" className="py-16 bg-kinder-purple/10">
      <div className="section-container">
        <h2 className="section-title">Galeri Kegiatan</h2>
        <p className="section-subtitle">
          Intip berbagai kegiatan menyenangkan dan mendidik yang dilakukan oleh anak-anak 
          di Taman Kanak-Kanak Sabiluna Ceria
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">

          {galleryImages.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div className="relative group cursor-pointer overflow-hidden rounded-lg">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-60 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white font-medium">{image.category}</span>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle>{image.category}</DialogTitle>
                  <DialogDescription>{image.alt}</DialogDescription>
                </DialogHeader>
                <div className="relative">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="mx-auto mt-8 bg-kinder-blue hover:bg-kinder-blue/90 text-white">
              Lihat Semua Galeri
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-5xl">
            <DialogHeader>
              <DialogTitle>Galeri Kegiatan</DialogTitle>
              <DialogDescription>
                Berbagai kegiatan menyenangkan di Taman Kanak-Kanak Sabiluna Ceria
              </DialogDescription>
            </DialogHeader>
            <div className="relative">
              <img 
                src={galleryImages[activeImage].src} 
                alt={galleryImages[activeImage].alt} 
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <Button 
                variant="outline" 
                size="icon" 
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80"
                onClick={prevImage}
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80"
                onClick={nextImage}
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-center text-gray-500 mt-2">
              {activeImage + 1}/{galleryImages.length}: {galleryImages[activeImage].alt}
            </p>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
