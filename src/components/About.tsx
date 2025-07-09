
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const About = () => {
  return (
    <section id="tentang-kami" className="py-16 bg-pattern-dots">
      <div className="section-container">
        <h2 className="section-title">Tentang Kami</h2>
        <p className="section-subtitle">
          Taman Kanak-Kanak Sabiluna Ceria didirikan pada tanggal 30 Desember tahun 2014 dengan tujuan menciptakan lingkungan 
          belajar yang menyenangkan bagi anak-anak usia dini
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-8">
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/images/profilsabiluna.png"
                // "https://images.unsplash.com/photo-1544140708-514b7837e6b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                alt="Lingkungan belajar yang menyenangkan"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-kinder-blue rounded-lg -z-10"></div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Visi dan Misi</h3>
            
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-3 text-kinder-blue">Visi</h4>
              <p className="text-gray-600 mb-4">
                Menjadi lembaga pendidikan anak usia dini terpercaya yang menghasilkan 
                generasi berkarakter, mandiri, dan siap menghadapi masa depan
              </p>
            </div>
            
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-3 text-kinder-blue">Misi</h4>
              <ul className="space-y-3">
                {[
                  "Menyediakan pendidikan berkualitas dengan pendekatan bermain sambil belajar",
                  "Mengembangkan potensi anak secara optimal sesuai tahap perkembangannya",
                  "Membangun karakter positif dan nilai-nilai moral sejak dini",
                  "Menciptakan lingkungan belajar yang aman, nyaman, dan menyenangkan",
                  "Melibatkan orang tua sebagai mitra dalam proses pendidikan anak"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 mt-1 bg-kinder-green rounded-full p-1">
                      <Check className="h-4 w-4 text-white" />
                    </span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Button className="bg-kinder-blue hover:bg-kinder-blue/90 text-white">
              <a href="#program">Lihat Program Kami</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
