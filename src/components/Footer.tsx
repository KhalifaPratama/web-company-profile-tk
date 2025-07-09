
import { Facebook, Instagram, Mail, MapPin, Phone, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-kinder-blue/10 pt-16 pb-6">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <span className="h-10 w-10 rounded-full bg-kinder-blue flex items-center justify-center">
                <span className="text-white font-bold">TK</span>
              </span>
              <span className="font-display font-bold text-2xl">Sabiluna Ceria</span>
            </div>
            <p className="text-gray-600 mb-6">
              Taman Kanak-Kanak Sabiluna Ceria adalah tempat terbaik untuk anak Anda belajar dan berkembang.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/sabiluna.ceria?locale=id_ID" className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-shadow">
                <Facebook className="h-5 w-5 text-kinder-blue" />
              </a>
              <a href="https://www.instagram.com/sabiluna_ceria/" className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-shadow">
                <Instagram className="h-5 w-5 text-kinder-pink" />
              </a>
              <a href="https://wa.me/6285772903342?text=Halo%2C%20saya%20ingin%20bertanya%20mengenai%20informasi%20pendaftaran%20siswa%20baru%20di%20TK%20Sabiluna%20Ceria" className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-shadow">
                <MessageCircle className="h-5 w-5 text-green-500" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Link Cepat</h3>
            <ul className="space-y-3">
              <li>
                <a href="#beranda" className="text-gray-600 hover:text-kinder-blue transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#tentang-kami" className="text-gray-600 hover:text-kinder-blue transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#program" className="text-gray-600 hover:text-kinder-blue transition-colors">
                  Program
                </a>
              </li>
              <li>
                <a href="#galeri" className="text-gray-600 hover:text-kinder-blue transition-colors">
                  Galeri
                </a>
              </li>
              <li>
                <a href="#kontak" className="text-gray-600 hover:text-kinder-blue transition-colors">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Program</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-kinder-blue transition-colors">
                  Kelompok Bermain (2-3 tahun)
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-kinder-blue transition-colors">
                  TK A (4-5 tahun)
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-kinder-blue transition-colors">
                  TK B (5-6 tahun)
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-kinder-blue transition-colors">
                  Program Ekstrakurikuler
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-kinder-blue transition-colors">
                  Program Akhir Pekan
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Kontak</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-kinder-blue mt-0.5" />
                <span className="text-gray-600">
                  TK Sabiluna Ceria Dua Jl. Puskesmas Pondok Aren no. 25
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-kinder-blue" />
                <span className="text-gray-600">
                  +62 857 7290 3342
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-kinder-blue" />
                <span className="text-gray-600">
                  info@sabilunaceria.sch.id
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Taman Kanak-Kanak Sabiluna Ceria. Hak Cipta Dilindungi.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-kinder-blue text-sm transition-colors">
                Kebijakan Privasi
              </a>
              <a href="#" className="text-gray-600 hover:text-kinder-blue text-sm transition-colors">
                Syarat & Ketentuan
              </a>
              <a href="#" className="text-gray-600 hover:text-kinder-blue text-sm transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
