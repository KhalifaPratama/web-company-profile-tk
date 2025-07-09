
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { School, Puzzle, Book, Users, Utensils, Trees } from "lucide-react";

const Facilities = () => {
  const facilities = [
    {
      id: "ruang-kelas",
      name: "Ruang Kelas",
      icon: School,
      description: "Ruang kelas yang dirancang dengan warna-warna cerah dan perabotan yang aman untuk anak, dilengkapi dengan berbagai alat peraga pendidikan yang mendukung proses pembelajaran.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "area-bermain",
      name: "Area Bermain",
      icon: Puzzle,
      description: "Area bermain indoor dan outdoor yang luas dan aman, dilengkapi dengan permainan yang mendukung perkembangan motorik, sosial, dan kognitif anak.",
      image: "https://images.unsplash.com/photo-1566454825481-43072367d3ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "perpustakaan",
      name: "Perpustakaan",
      icon: Book,
      description: "Perpustakaan yang berisi berbagai buku cerita, buku pengetahuan, dan materi pembelajaran yang sesuai untuk anak usia dini.",
      image: "https://images.unsplash.com/photo-1588580000645-5f35e891621b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "ruang-pertemuan",
      name: "Ruang Pertemuan",
      icon: Users,
      description: "Ruang pertemuan untuk kegiatan bersama, pertunjukan, dan pertemuan orang tua yang nyaman dan luas.",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "kantin",
      name: "Kantin Sehat",
      icon: Utensils,
      description: "Kantin yang menyediakan makanan dan minuman sehat dengan menu yang bervariasi dan diawasi oleh ahli gizi.",
      image: "https://images.unsplash.com/photo-1611261167003-63a7afa3dba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "taman",
      name: "Taman Edukasi",
      icon: Trees,
      description: "Taman edukasi dengan berbagai tanaman dan area berkebun untuk mengajarkan anak tentang alam dan lingkungan.",
      image: "https://images.unsplash.com/photo-1594732832278-abd644401426?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section id="fasilitas" className="py-16 bg-kinder-green/10">
      <div className="section-container">
        <h2 className="section-title">Fasilitas</h2>
        <p className="section-subtitle">
          Kami menyediakan berbagai fasilitas modern dan aman untuk mendukung perkembangan 
          dan kenyamanan anak selama berada di sekolah.
        </p>

        <Tabs defaultValue="ruang-kelas" className="mt-12">
          <TabsList className="grid grid-cols-3 md:grid-cols-6 h-auto bg-kinder-green/20 p-1">
            {facilities.map((facility) => (
              <TabsTrigger 
                key={facility.id} 
                value={facility.id}
                className="flex flex-col py-4 data-[state=active]:bg-white"
              >
                <facility.icon className="h-5 w-5 mb-1" />
                <span className="text-sm font-medium">{facility.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {facilities.map((facility) => (
            <TabsContent key={facility.id} value={facility.id} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">{facility.name}</h3>
                  <p className="text-gray-600 mb-6">{facility.description}</p>
                  <ul className="space-y-2">
                    {["Aman", "Bersih", "Modern", "Terawat"].map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-kinder-blue"></div>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <img 
                    src={facility.image} 
                    alt={facility.name} 
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 bg-kinder-blue/10 rounded-lg"></div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Facilities;
