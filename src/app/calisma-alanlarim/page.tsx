import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollTop";
import Image from "next/image";
import { Leaf } from "lucide-react";
import Section from "@/components/Section";
import TawkMessenger from "@/components/TawkMessenger";
import Link from "next/link";

const services = [
  {
    title: "Psychological and Emotional Support",
    image: "/service1.jpg",
    description: `I provide professional support for coping with everyday challenges such as stress, anxiety, and depression. With modern therapy techniques and a holistic approach, I help improve your mental health and enhance your quality of life.`,
  },
  {
    title: "Working on Beliefs and Values",
    image: "/service2.jpg",
    description: `I help you lead a life aligned with your personal values and beliefs. I guide you on your spiritual journey to find inner peace and balance.`,
  },
  {
    title: "Family and Couple Counseling",
    image: "/service3.jpg",
    description: `I provide expert support in resolving family communication issues, parenting challenges, and relationship problems. We work together to strengthen relationships and create a healthier family environment.`,
  },
  {
    title: "Grief and Loss Processes",
    image: "/service8.jpg",
    description: `Losing loved ones is one of the hardest experiences in life. I support you in managing the grieving process in a healthy way and adapting to a new life structure.`,
  },
  {
    title: "Fighting Addictions",
    image: "/service4.jpg",
    description: `I offer professional support in dealing with various types of addiction. By understanding the underlying causes, I guide you and your family through the recovery process.`,
  },
  {
    title: "Personal Development and Self-Discovery",
    image: "/service5.jpg",
    description: `I help you discover and realize your potential. I support you in developing self-awareness, building self-confidence, and achieving your personal goals.`,
  },
  {
    title: "Career and Life Path Counseling",
    image: "/service6.jpg",
    description: `I provide professional guidance in career selection and transitions. By exploring your skills and interests, I help you determine the most suitable career path.`,
  },
  {
    title: "Parenting Education",
    image: "/service7.jpg",
    description: `I offer counseling on child development and parenting skills. I support you in establishing healthy communication with your child and developing effective parenting strategies.`,
  },
];
export default function CalismaAlanlariPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main>
        <ScrollToTop />

        <section className="relative h-[400px] overflow-hidden">
          <Image
            src="/hero1.jpg"
            alt="Çalışma Alanları"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              Çalışma Alanlarım
            </h1>
          </div>
        </section>

        {/* Hizmetler Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-48">
            <div className="space-y-4 text-center mb-12">
              <div className="flex items-center justify-center gap-2">
                <Leaf className="h-6 w-6 text-[#445D3B]" />
                <h2 className="text-3xl font-bold text-[#445D3B]">
                  Areas of Expertise
                </h2>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                In order to serve you in the best way possible, I constantly
                improve myself and follow current approaches in my field.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-64">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold text-[#445D3B]">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#445D3B]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-48 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold text-white">
                I am here for you for professional support
              </h2>
              <p className="text-white/90">
                Every individual is special and has their own story. You can
                make an appointment for solutions specific to you.
              </p>

              <button className="bg-white text-[#445D3B] px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
                <Link href="/#iletisim">Make an Appointment</Link>
              </button>
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
