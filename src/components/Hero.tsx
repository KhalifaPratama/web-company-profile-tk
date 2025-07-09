
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div id="beranda" className="pt-24 pb-16 md:pb-24 md:pt-32 bg-gradient-to-b from-kinder-blue/10 to-white relative overflow-hidden">
      <div className="absolute top-20 left-10 w-24 h-24 bg-kinder-yellow rounded-full opacity-40 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-kinder-pink rounded-full opacity-40 animate-float delay-700"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-kinder-green rounded-full opacity-40 animate-float delay-500"></div>
      
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight text-gray-900">
              Taman Kanak-Kanak <span className="text-kinder-blue">Sabiluna Ceria</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
              Membimbing si kecil dengan penuh kasih sayang dalam lingkungan yang kreatif, mandiri dan berakhlak mulia untuk tumbuh dan berkembang.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-kinder-blue hover:bg-kinder-blue/90 text-white px-8 py-6 rounded-xl h-auto text-lg">
                <a href="#kontak">Daftar Sekarang</a>
              </Button>
              <Button variant="outline" className="border-kinder-blue text-kinder-blue hover:bg-kinder-blue/10 px-8 py-6 rounded-xl h-auto text-lg">
                <a href="#program">Lihat Program</a>
              </Button>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative z-10 bg-white p-3 rounded-2xl shadow-lg rotate-3 transform hover:rotate-0 transition-transform duration-300">
              <img 
                src="/images/sabilunaceria.png"
                // "https://images.unsplash.com/photo-1543248939-ff40856f65d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80" 
                alt="Anak-anak belajar sambil bermain" 
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-kinder-purple/20 rounded-full -z-10"></div>
          </div>
        </div>
        
        <div className="mt-20 py-8 px-6 bg-white rounded-2xl shadow-md grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-4 rounded-xl bg-kinder-blue/10 hover:bg-kinder-blue/20 transition-colors">
            <div className="w-16 h-16 bg-kinder-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Perkembangan Kreatif</h3>
            <p className="text-gray-600">Mendorong kreativitas dan imajinasi anak melalui berbagai aktivitas menarik.</p>
          </div>
          
          <div className="text-center p-4 rounded-xl bg-kinder-yellow/10 hover:bg-kinder-yellow/20 transition-colors">
            <div className="w-16 h-16 bg-kinder-yellow rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-gray-700">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Pendidikan Karakter Mandiri</h3>
            <p className="text-gray-600">Menanamkan nilai-nilai positif dan karakter yang mandiri sejak dini.</p>
          </div>
          
          <div className="text-center p-4 rounded-xl bg-kinder-pink/10 hover:bg-kinder-pink/20 transition-colors">
            <div className="w-16 h-16 bg-kinder-pink rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-gray-700">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Berakhlak Mulia</h3>
            <p className="text-gray-600">Membangun akhlakul qarimah yang erat antara guru, orang tua, dan anak.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
