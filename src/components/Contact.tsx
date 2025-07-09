
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Clock, MapPin, Phone, Mail, Send, CircleDot} from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Pesan Terkirim",
      description: "Terima kasih telah menghubungi kami. Kami akan segera membalas pesan Anda.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="kontak" className="py-16 bg-white">
      <div className="section-container">
        <h2 className="section-title">Hubungi Kami</h2>
        <p className="section-subtitle">
          Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan atau ingin 
          mendaftarkan anak Anda di Taman Kanak-Kanak Sabiluna Ceria
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-kinder-blue/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-kinder-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Alamat</h3>
                    <p className="text-gray-600 mb-4">
                      TK Sabiluna Ceria Bintaro Jl. Rss Desa Sawah baru Blok E04, Ciputat, Tangerang Selatan
                    </p>
                    <p className="text-gray-600">
                      TK Sabiluna Ceria Dua Jl. Puskesmas Pondok Aren no. 25, Tangerang Selatan
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-kinder-pink/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-kinder-pink" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Telepon</h3>
                    <p className="text-gray-600">
                      +62 857 7290 3342
                    </p>
                    <p className="text-gray-600">
                      +62 815 9175 242
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-kinder-yellow/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-kinder-yellow" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Email</h3>
                    <p className="text-gray-600">
                      info@sabilunaceria.sch.id
                    </p>
                    <p className="text-gray-600">
                      pendaftaran@sabilunaceria.sch.id
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-kinder-green/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-kinder-green" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Jam Operasional</h3>
                    <p className="text-gray-600">
                      Senin - Jumat: 07.30 - 12.00 WIB
                    </p>
                    <p className="text-gray-600">
                      Sabtu: 08.00 - 11.00 WIB (Jadwal Kunjungan)
                    </p>
                    <p className="text-gray-600">
                      Minggu & Hari Libur: Tutup
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="border-none shadow-lg h-full">
              <CardContent className="p-6">
                <h3 className="font-bold text-2xl mb-6">Kirim Pesan</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nama Lengkap</Label>
                      <Input id="name" placeholder="Masukkan nama lengkap Anda" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Alamat Email</Label>
                      <Input id="email" type="email" placeholder="Masukkan alamat email Anda" required />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Nomor Telepon</Label>
                      <Input id="phone" placeholder="Masukkan nomor telepon Anda" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subjek</Label>
                      <Input id="subject" placeholder="Masukkan subjek pesan" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Pesan</Label>
                    <Textarea id="message" placeholder="Tulis pesan Anda di sini" rows={5} required />
                  </div>

                  <Button type="submit" className="w-full bg-kinder-blue hover:bg-kinder-blue/90 text-white">
                    <Send className="h-4 w-4 mr-2" /> Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-kinder-blue/5 p-4 rounded-t-lg">
            <h3 className="font-bold text-lg">Lokasi Kami</h3>
          </div>
          <div className="aspect-video rounded-b-lg overflow-hidden border border-gray-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.009899821633!2d106.71533647355493!3d-6.2624253613072085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb6e73bc28c9%3A0x2178a73c2f60af44!2sTK%20SABILUNA%20CERIA%20DUA!5e0!3m2!1sid!2sid!4v1751911516794!5m2!1sid!2sid"
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
