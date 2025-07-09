
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Baby, BookOpen, Puzzle } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      title: "Kelompok Bermain",
      age: "2-3 tahun",
      description: "Program untuk anak usia 2-3 tahun yang berfokus pada pengembangan motorik dan sosial melalui kegiatan bermain yang menyenangkan.",
      features: [
        "Pengenalan rutinitas sekolah",
        "Bermain sensori dan motorik",
        "Aktivitas musik dan gerakan",
        "Pengembangan bahasa dasar"
      ],
      icon: Baby,
      color: "bg-kinder-pink",
      shadowColor: "shadow-kinder-pink/20"
    },
    {
      title: "TK A",
      age: "4-5 tahun",
      description: "Program untuk anak usia 4-5 tahun yang mengembangkan keterampilan dasar dan kesiapan belajar melalui aktivitas yang terstruktur.",
      features: [
        "Pengembangan keterampilan pra-baca",
        "Pengenalan angka dan konsep matematika",
        "Eksplorasi sains sederhana",
        "Pengembangan keterampilan sosial"
      ],
      icon: Puzzle,
      color: "bg-kinder-blue",
      shadowColor: "shadow-kinder-blue/20"
    },
    {
      title: "TK B",
      age: "5-6 tahun",
      description: "Program untuk anak usia 5-6 tahun yang mempersiapkan mereka untuk masuk sekolah dasar dengan pengembangan keterampilan yang lebih kompleks.",
      features: [
        "Membaca dan menulis dasar",
        "Matematika dasar",
        "Proyek seni dan kreativitas",
        "Pengembangan kemandirian"
      ],
      icon: BookOpen,
      color: "bg-kinder-yellow",
      shadowColor: "shadow-kinder-yellow/20"
    }
  ];

  return (
    <section id="program" className="py-16 bg-white">
      <div className="section-container">
        <h2 className="section-title">Program Kami</h2>
        <p className="section-subtitle">
          Kami menawarkan berbagai program pendidikan yang dirancang khusus untuk memenuhi kebutuhan
          perkembangan anak sesuai dengan usianya.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {programs.map((program, index) => (
            <Card key={index} className={`border-none ${program.shadowColor} shadow-xl hover:shadow-2xl transition-shadow overflow-hidden`}>
              <CardHeader className={`${program.color} text-white`}>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-2xl font-bold">{program.title}</CardTitle>
                  <program.icon className="h-8 w-8" />
                </div>
                <CardDescription className="text-white/90 font-medium">
                  Usia {program.age}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4">{program.description}</p>
                <ul className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${program.color}`}></div>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-kinder-blue/10 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Tertarik dengan Program Kami?</h3>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Kami menawarkan sesi pengenalan gratis bagi orang tua dan anak untuk mengenal 
            lingkungan sekolah dan program yang kami tawarkan
          </p>
          <Button className="bg-kinder-blue hover:bg-kinder-blue/90 text-white px-8">
            <a href="#kontak">Jadwalkan Kunjungan</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
