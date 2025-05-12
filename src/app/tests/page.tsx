import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollTop";
import Image from "next/image";
import { Leaf, FileText, CheckCircle } from "lucide-react";
import Section from "@/components/Section";
import TawkMessenger from "@/components/TawkMessenger";

const tests = [
  {
    category: "Personality Assessment Tests",
    items: [
      {
        title: "MMPI (Minnesota Multiphasic Personality Inventory)",
        description:
          "A comprehensive personality assessment tool that helps evaluate personality traits and possible psychological issues.",
        duration: "60–90 minutes",
      },
      {
        title: "16PF (Sixteen Personality Factor Questionnaire)",
        description:
          "Measures fundamental personality factors that affect behavior and personal development.",
        duration: "45–60 minutes",
      },
    ],
  },
  {
    category: "Spiritual and Religious Assessment",
    items: [
      {
        title: "Spiritual Well-Being Scale (SWBS)",
        description:
          "Evaluates religious and existential well-being to understand spiritual needs and resources.",
        duration: "15–20 minutes",
      },
      {
        title: "Religious Coping Scale (RCOPE)",
        description:
          "Assesses how individuals use religion to cope with major life stressors and challenges.",
        duration: "20–30 minutes",
      },
    ],
  },
  {
    category: "Family and Relationship Assessment",
    items: [
      {
        title: "Family Assessment Device (FAD)",
        description:
          "Assesses family functioning across various dimensions including communication and problem-solving.",
        duration: "30–40 minutes",
      },
      {
        title: "Dyadic Adjustment Scale (DAS)",
        description:
          "Measures satisfaction and harmony in couple relationships.",
        duration: "15–20 minutes",
      },
    ],
  },
  {
    category: "Anxiety and Depression Scales",
    items: [
      {
        title: "Beck Depression Inventory (BDI)",
        description:
          "Measures the severity of depressive symptoms in adolescents and adults.",
        duration: "10–15 minutes",
      },
      {
        title: "Hamilton Anxiety Rating Scale (HAM-A)",
        description: "Evaluates the severity of anxiety symptoms.",
        duration: "10–15 minutes",
      },
    ],
  },
];

export default function TestsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main>
        <ScrollToTop />

        <section className="relative h-[400px] overflow-hidden">
          <Image
            src="/hero1.jpg"
            alt="Psychological Tests"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              Administered Tests
            </h1>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-48">
            <div className="space-y-4 text-center mb-12">
              <div className="flex items-center justify-center gap-2">
                <FileText className="h-6 w-6 text-[#445D3B]" />
                <h2 className="text-3xl font-bold text-[#445D3B]">
                  Professional Assessment Tools
                </h2>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We use scientifically validated assessment tools to provide
                accurate and comprehensive evaluations for our clients.
              </p>
            </div>

            <div className="space-y-12">
              {tests.map((category, index) => (
                <div key={index} className="space-y-6">
                  <h3 className="text-2xl font-semibold text-[#445D3B] border-b border-[#445D3B]/20 pb-2">
                    {category.category}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {category.items.map((test, testIndex) => (
                      <div
                        key={testIndex}
                        className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                      >
                        <div className="flex items-start gap-4">
                          <CheckCircle className="h-6 w-6 text-[#445D3B] mt-1 flex-shrink-0" />
                          <div className="space-y-2">
                            <h4 className="text-lg font-semibold">
                              {test.title}
                            </h4>
                            <p className="text-gray-600">{test.description}</p>
                            <p className="text-sm text-[#445D3B]">
                              Duration: {test.duration}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#445D3B]/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-48">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <Leaf className="h-8 w-8 text-[#445D3B] mx-auto" />
              <h2 className="text-2xl font-semibold text-[#445D3B]">
                Why Do We Use These Tests?
              </h2>
              <p className="text-gray-600">
                Our assessment tools are carefully selected to provide
                comprehensive insights into your psychological, spiritual, and
                emotional state. These tests help us develop personalized
                treatment plans and track your progress throughout our work
                together.
              </p>
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
