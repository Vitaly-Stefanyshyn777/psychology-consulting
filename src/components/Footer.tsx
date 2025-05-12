import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#F4F4F4] text-gray-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-48 py-12">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-12">
          <Image
            src="/footer.png"
            alt="Sedef Yıldız Logo"
            width={500}
            height={500}
            className="mb-4"
          />
        </div>

        <div className="h-px bg-gray-200 w-full mb-12" />

        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-[#445D3B] mb-6">
              Our Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#445D3B] mt-1" />
                <p className="text-sm">
                  Mutlukent Neighborhood - Ankara 85 site, 2023. Street
                  Number:21 Beysukent, 06810 Cankaya/Ankara
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#445D3B]" />
                <div className="space-y-1">
                  <p className="text-sm">+90 312 235 57 05</p>
                  <p className="text-sm">+90 (532) 162 48 92</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#445D3B]" />
                <p className="text-sm">info@sedefyildiz.com</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#445D3B] mb-6">
              Hızlı Erişim
            </h3>
            <div className="space-y-3">
              <Link href="/" className="block text-sm hover:text-[#445D3B]">
                Home Page
              </Link>
              <Link
                href="/hakkimizda"
                className="block text-sm hover:text-[#445D3B]"
              >
                About Us
              </Link>
              <Link
                href="/calisma-alanlarim"
                className="block text-sm hover:text-[#445D3B]"
              >
                My Working Areas
              </Link>
              <Link
                href="/tests"
                className="block text-sm hover:text-[#445D3B]"
              >
                Tests I Applied
              </Link>

              <Link
                href="/iletisim"
                className="block text-sm hover:text-[#445D3B]"
              >
                Communication
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#445D3B] mb-6">
              Our Working Hours
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Mon-Fri:</span>
                <span>09:00 - 19:00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Saturday:</span>
                <span>09:00 - 15:00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Sunday:</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
