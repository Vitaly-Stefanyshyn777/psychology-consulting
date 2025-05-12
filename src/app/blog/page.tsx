"use client";

import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollTop";
import Image from "next/image";
import { Leaf, Calendar, Clock, X } from "lucide-react";
import Section from "@/components/Section";
import TawkMessenger from "@/components/TawkMessenger";
import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "Methods for Coping with Anxiety",
    excerpt: "Effective ways to cope with anxiety in daily life...",
    content: `Anxiety can be a normal part of daily life, but when uncontrolled, it can reduce our quality of life. Here are effective ways to cope with anxiety:

1. Breathing Exercises: Deep breathing is one of the most effective ways to calm your body. Try the 4-7-8 technique: inhale for 4 seconds, hold for 7 seconds, exhale for 8 seconds.

2. Mindfulness Practice: Focusing on the present moment helps reduce future-related worries. Try meditating for 10 minutes daily.

3. Regular Exercise: Physical activity is very effective in lowering anxiety levels. Even daily walks can make a difference.

4. Thought Journal: Writing down anxious thoughts can help you evaluate them more objectively.`,
    image: "/service9.jpg",
    date: "15 March 2024",
    readTime: "5 minutes",
  },
  {
    id: 2,
    title: "Foundations of Healthy Relationships",
    excerpt: "Key tips for building long-lasting and healthy relationships...",
    content: `A healthy relationship is possible when both parties make active efforts. Here are the foundations of healthy relationships:

1. Effective Communication: Clearly express your thoughts and feelings. Listen without judgment.

2. Boundaries: Set your personal boundaries and respect those of your partner.

3. Trust: The foundation of any relationship. Honesty and consistency build trust.

4. Autonomy: Maintain your individuality within the relationship. Keep your hobbies and friendships.

5. Empathy: Try to understand the other person's perspective. Empathy plays a key role in resolving conflicts.`,
    image: "/service10.png",
    date: "10 March 2024",
    readTime: "6 minutes",
  },
  {
    id: 3,
    title: "Spiritual Well-Being and Psychological Health",
    excerpt: "The impact of spiritual well-being on psychological health...",
    content: `Spiritual well-being is an important dimension of psychological health. Research shows positive effects of spiritual connection on mental health:

1. Meaning and Purpose: Spiritual beliefs enhance the sense of meaning and purpose in life.

2. Community Support: Spiritual communities offer social support and a sense of belonging.

3. Coping Mechanisms: Spiritual practices help in dealing with stress and challenges.

4. Inner Peace: Practices like meditation and prayer increase inner peace.

5. Hope and Optimism: Spiritual beliefs nurture hope and optimism for the future.`,
    image: "/service11.jpg",
    date: "5 March 2024",
    readTime: "7 minutes",
  },
];

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<
    null | (typeof blogPosts)[0]
  >(null);

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main>
        <ScrollToTop />

        <section className="relative h-[400px] overflow-hidden">
          <Image
            src="/hero1.jpg"
            alt="Blog"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              Blog
            </h1>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-48">
            <div className="space-y-4 text-center mb-12">
              <div className="flex items-center justify-center gap-2">
                <Leaf className="h-6 w-6 text-[#445D3B]" />
                <h2 className="text-3xl font-bold text-[#445D3B]">
                  Psikoloji Yazıları
                </h2>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover our articles containing useful information on mental
                health, personal development and psychology.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedPost(post)}
                >
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold text-[#445D3B] line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {selectedPost && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-3xl max-h-[90vh] overflow-y-auto">
              <div className="relative h-64">
                <Image
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-4 right-4 bg-white rounded-full p-2"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="p-8 space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold text-[#445D3B]">
                    {selectedPost.title}
                  </h2>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{selectedPost.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{selectedPost.readTime}</span>
                    </div>
                  </div>
                </div>
                <div className="prose max-w-none">
                  {selectedPost.content
                    .split("\n\n")
                    .map((paragraph, index) => (
                      <p key={index} className="mb-4">
                        {paragraph}
                      </p>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
      <Section />
      <TawkMessenger />
    </div>
  );
}
