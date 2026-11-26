'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaChevronRight,
  FaChevronLeft,
  FaPlay,
  FaBinoculars,
  FaLeaf,
  FaUsers,
  FaTicketAlt,
  FaStar,
  FaClock,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { MdOutlineExplore, MdSecurity } from 'react-icons/md';

import { safaris } from '@/data/safaris';
import { promotions } from '@/data/promotions';
import MiniEnquiryForm from '@/components/MiniEnquiryForm';
import ChatPrompt from '@/components/ChatPrompt';

// ─── Hero carousel images ───
const heroSlides = [
  { src: '/images/hero/hero-home.jpg', alt: 'Elephants at sunset on the African savanna' },
  { src: '/images/hero/hero-2.jpg', alt: 'Mountain gorilla in Bwindi Impenetrable Forest' },
  { src: '/images/hero/hero-3.avif', alt: 'Lion pride resting in Queen Elizabeth National Park' },
  { src: '/images/hero/hero-4.jpg', alt: 'Boat cruise on the Nile near Murchison Falls' },
];

export default function Home() {
  // Show more safaris in the featured carousel (was 3 → now 8)
  const featured = safaris.slice(0, 8);

  // Two independent scroll containers
  const promoScrollRef = useRef<HTMLDivElement>(null);
  const featuredScrollRef = useRef<HTMLDivElement>(null);

  // ─── Hero carousel state ───
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setSlide((s) => (s + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setSlide((s) => (s - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(nextSlide, 3000);
    return () => clearInterval(t);
  }, [paused, nextSlide]);

  // Scroll helper that works on either carousel
  const scrollBy = (
    ref: React.RefObject<HTMLDivElement | null>,
    delta: number
  ) => {
    ref.current?.scrollBy({ left: delta, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* ═══════════ HERO WITH CAROUSEL ═══════════ */}
      <section
        className="relative h-screen flex items-center justify-center"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Background carousel */}
        <div className="absolute inset-0 z-0">
          {heroSlides.map((s, i) => (
            <div
              key={s.src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === slide ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <Image
                src={s.src}
                alt={s.alt}
                fill
                priority={i === 0}
                sizes="100vw"
                className={`object-cover transition-transform duration-[7000ms] ease-out ${i === slide ? 'scale-110' : 'scale-100'
                  }`}
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-black/50 z-10" />
        </div>

        {/* Hero content */}
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 text-sm font-medium text-amber-300">
            <MdOutlineExplore /> Registered &amp; Licensed · Kampala, Uganda
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 drop-shadow-2xl">
            Discover the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              Wild
            </span>{' '}
            Within
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto drop-shadow-lg">
            20+ years crafting dream African holidays — savanna &amp; rainforest
            safaris, world-class cuisine and warm local hospitality. Karibu!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/uganda-safaris"
              className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all w-full sm:w-auto justify-center shadow-xl shadow-amber-900/40"
            >
              Explore Safaris <FaChevronRight />
            </Link>
            <Link
              href="/plan-trip"
              className="flex items-center gap-2 glass hover:bg-white/20 text-white px-8 py-4 rounded-full text-lg font-medium transition-all w-full sm:w-auto justify-center"
            >
              <FaPlay size={14} /> Plan My Trip
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { label: 'Years Experience', val: '20+' },
              { label: 'Happy Travelers', val: '2k+' },
              { label: 'Destinations', val: '15+' },
            ].map((s, i) => (
              <div key={i} className="glass p-4 rounded-xl">
                <div className="text-2xl font-bold text-amber-400">{s.val}</div>
                <div className="text-xs text-gray-300 uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Left / Right arrow controls */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full glass hover:bg-white/20 items-center justify-center transition"
        >
          <FaChevronLeft size={16} />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full glass hover:bg-white/20 items-center justify-center transition"
        >
          <FaChevronRight size={16} />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${i === slide ? 'bg-amber-500 w-8' : 'bg-white/50 hover:bg-white/80 w-2'
                }`}
            />
          ))}
        </div>
      </section>

      {/* ═══════════ SCROLLING OFFERS STRIP ═══════════ */}
      <div className="bg-amber-600 text-black py-3 overflow-hidden relative">
        <div className="flex gap-12 animate-marquee whitespace-nowrap text-sm font-bold uppercase tracking-wider">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex gap-12">
              <span>🔥 Gorilla Tracking from $1,200 pp</span>
              <span>·</span>
              <span>✈️ Dubai Getaway from $350 pp</span>
              <span>·</span>
              <span>🦁 Queen Elizabeth Safari from $400 pp</span>
              <span>·</span>
              <span>🏝️ Ssese Islands from $300 pp</span>
              <span>·</span>
              <span>💳 Pay by credit card</span>
              <span>·</span>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════ CURRENT PROMOTIONS (carousel) ═══════════ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500">
                <FaTicketAlt size={22} />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-1">
                  Current Promotions
                </h2>
                <p className="text-gray-400 text-sm">
                  Tap a flyer to see the details and ask us about it.
                </p>
              </div>
            </div>
            <Link
              href="/promotions"
              className="hidden md:flex items-center gap-1 text-amber-500 hover:text-amber-400 font-medium transition-colors whitespace-nowrap"
            >
              View All <FaChevronRight size={12} />
            </Link>
          </div>
        </div>

        <div className="relative overflow-hidden scrollbar-hide promotions-carousel">
          <button
            onClick={() => scrollBy(promoScrollRef, -400)}
            className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full glass hover:bg-white/20 items-center justify-center transition"
            aria-label="Scroll promotions left"
          >
            <FaChevronRight className="rotate-180" size={14} />
          </button>
          <button
            onClick={() => scrollBy(promoScrollRef, 400)}
            className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full glass hover:bg-white/20 items-center justify-center transition"
            aria-label="Scroll promotions right"
          >
            <FaChevronRight size={14} />
          </button>

          <div
            ref={promoScrollRef}
            className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide px-4 md:px-[max(1rem,calc((100vw-80rem)/2+1rem))] pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {promotions.map((promo) => (
              <Link
                key={promo.id}
                href="/promotions"
                className="group relative glass-card rounded-2xl overflow-hidden aspect-[3/4] shrink-0 w-[70%] sm:w-[45%] md:w-[280px] snap-start"
              >
                <Image
                  src={promo.flyer}
                  alt={promo.title}
                  fill
                  sizes="(max-width: 640px) 70vw, (max-width: 768px) 45vw, 280px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  {promo.validUntil && (
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-amber-600 text-black px-2 py-0.5 rounded mb-2">
                      Until {promo.validUntil}
                    </span>
                  )}
                  <h3 className="text-white font-bold text-sm leading-tight mb-1">
                    {promo.title}
                  </h3>
                  {promo.price && (
                    <p className="text-amber-400 text-xs font-bold">
                      {promo.price}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center md:hidden">
          <Link
            href="/promotions"
            className="inline-flex items-center gap-1 text-amber-500 font-medium text-sm"
          >
            View All Promotions <FaChevronRight size={12} />
          </Link>
        </div>
      </section>

      {/* ═══════════ FEATURED EXPEDITIONS (carousel) ═══════════ */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Featured Expeditions
              </h2>
              <p className="text-gray-400">
                Hand-picked journeys for the discerning traveler.
              </p>
            </div>
            <Link
              href="/uganda-safaris"
              className="hidden md:flex items-center gap-1 text-amber-500 hover:text-amber-400 font-medium transition-colors whitespace-nowrap"
            >
              View All <FaChevronRight size={12} />
            </Link>
          </div>
        </div>

        <div className="relative overflow-hidden scrollbar-hide">
          <button
            onClick={() => scrollBy(featuredScrollRef, -400)}
            className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full glass hover:bg-white/20 items-center justify-center transition"
            aria-label="Scroll featured left"
          >
            <FaChevronRight className="rotate-180" size={14} />
          </button>
          <button
            onClick={() => scrollBy(featuredScrollRef, 400)}
            className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full glass hover:bg-white/20 items-center justify-center transition"
            aria-label="Scroll featured right"
          >
            <FaChevronRight size={14} />
          </button>

          <div
            ref={featuredScrollRef}
            className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide px-4 md:px-[max(1rem,calc((100vw-80rem)/2+1rem))] pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {featured.map((s) => (
              <Link
                key={s.slug}
                href={`/safaris/${s.slug}`}
                className="group glass-card rounded-2xl overflow-hidden shrink-0 snap-start w-[80%] sm:w-[55%] md:w-[320px]"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 640px) 80vw, (max-width: 768px) 55vw, 320px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="glass px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-black/40 uppercase tracking-wider">
                      {s.category === 'uganda' ? 'Uganda' : 'Outbound'}
                    </span>
                  </div>
                  {/* Rating pill */}
                  <div className="absolute top-3 right-3">
                    <span className="glass px-2 py-0.5 rounded-full text-[10px] font-bold bg-black/40 flex items-center gap-1">
                      <FaStar size={9} className="text-amber-400" />
                      {(s.rating ?? 4.8).toFixed(1)}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/30 to-transparent">
                    <h3 className="text-white font-bold text-base leading-tight mb-1">
                      {s.title}
                    </h3>
                    <p className="text-[11px] text-gray-300 line-clamp-1">
                      {s.shortDesc}
                    </p>
                  </div>
                </div>
                <div className="p-4 flex justify-between items-center border-t border-white/10">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <FaClock size={10} className="text-amber-400" />
                    {s.duration}
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider">From</div>
                    <div className="font-bold text-amber-400 text-sm">${s.price} pp</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center md:hidden">
          <Link
            href="/uganda-safaris"
            className="inline-flex items-center gap-1 text-amber-500 font-medium text-sm"
          >
            View All Safaris <FaChevronRight size={12} />
          </Link>
        </div>
      </section>

      {/* ═══════════ MINI ENQUIRY + WHY US ═══════════ */}
      <section className="py-20 px-4 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl font-bold mb-3">The Lonely Wild Difference</h2>
          <p className="text-gray-400 mb-8">
            Whether you&apos;re an individual, family or group, look to our
            experience and professionalism for a remarkable travel.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: <FaBinoculars size={24} />, title: 'Expert Guides', desc: 'Local knowledge, global standards.' },
              { icon: <MdSecurity size={24} />, title: 'Safe & Secure', desc: 'Your safety is our top priority.' },
              { icon: <FaLeaf size={24} />, title: 'Eco-Conscious', desc: 'Travel that protects the wild.' },
              { icon: <FaUsers size={24} />, title: 'Small Groups', desc: 'Intimate, personalized experiences.' },
            ].map((f, i) => (
              <div key={i} className="glass p-5 rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 mb-3">
                  {f.icon}
                </div>
                <h3 className="font-bold mb-1">{f.title}</h3>
                <p className="text-xs text-gray-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <MiniEnquiryForm />
      </section>

      {/* ═══════════ FINAL CTA ═══════════ */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto glass rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-600/30 blur-[80px] rounded-full" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-amber-600/30 blur-[80px] rounded-full" />
          <h2 className="text-4xl font-bold mb-4 relative z-10">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto relative z-10">
            Let us craft a bespoke itinerary that matches your spirit of
            adventure. No crowds, just the wild.
          </p>
          <Link
            href="/contact"
            className="relative z-10 inline-block bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-full font-bold transition-all shadow-lg"
          >
            Speak to a Safari Expert
          </Link>
        </div>
      </section>

      <ChatPrompt />
    </main>
  );
}