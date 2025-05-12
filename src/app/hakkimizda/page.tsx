import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollTop";
import Image from "next/image";
import { Leaf, GraduationCap, Award } from "lucide-react";
import Section from "@/components/Section";
import TawkMessenger from "@/components/TawkMessenger";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main>
        <ScrollToTop />

        <section className="relative h-[400px] overflow-hidden">
          <Image
            src="/hero1.jpg"
            alt="About Hero"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              About Me
            </h1>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-48">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Leaf className="h-6 w-6 text-[#445D3B]" />
                    <h2 className="text-3xl font-bold text-[#445D3B]">
                      Family Counseling Specialist
                    </h2>
                  </div>
                  <h3 className="text-2xl font-semibold">Sedef Yıldız</h3>
                </div>
                <div className="prose max-w-none text-gray-600 space-y-4">
                  <p>
                    I graduated from the Psychology Department of Çankaya
                    University. After graduation, I completed my master's degree
                    in Interdisciplinary Family Counseling at Ankara University
                    Faculty of Health Sciences and earned my specialization in
                    family counseling.
                  </p>
                  <p>
                    During my mandatory internship, I worked in the Learning,
                    Development and Training department of Borusan Machinery and
                    Power Systems, completing my internship in the field of
                    industrial psychology.
                  </p>
                  <p>
                    Apart from my internship, I worked as a trainee psychologist
                    in Special Education during the last two years of my
                    undergraduate education.
                  </p>
                </div>
              </div>
              <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/about1.jpg"
                  alt="Sedef Yıldız"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-48">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <GraduationCap className="h-10 w-10 text-[#445D3B] mb-6" />
                <h3 className="text-2xl font-bold mb-6">Education</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="w-2 h-2 mt-2 rounded-full bg-[#445D3B]" />
                    <div>
                      <h4 className="font-semibold">Ankara University</h4>
                      <p className="text-gray-600">
                        Master's in Family Counseling
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-2 h-2 mt-2 rounded-full bg-[#445D3B]" />
                    <div>
                      <h4 className="font-semibold">Çankaya University</h4>
                      <p className="text-gray-600">Bachelor's in Psychology</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <Award className="h-10 w-10 text-[#445D3B] mb-6" />
                <h3 className="text-2xl font-bold mb-6">Areas of Expertise</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="w-2 h-2 mt-2 rounded-full bg-[#445D3B]" />
                    <div>
                      <h4 className="font-semibold">Family Counseling</h4>
                      <p className="text-gray-600">
                        Family communication and problem-solving
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-2 h-2 mt-2 rounded-full bg-[#445D3B]" />
                    <div>
                      <h4 className="font-semibold">Couples Therapy</h4>
                      <p className="text-gray-600">
                        Relationship issues and solutions
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-2 h-2 mt-2 rounded-full bg-[#445D3B]" />
                    <div>
                      <h4 className="font-semibold">Individual Counseling</h4>
                      <p className="text-gray-600">
                        Personal development and psychological support
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Section />
      <TawkMessenger />
    </div>
  );
}
