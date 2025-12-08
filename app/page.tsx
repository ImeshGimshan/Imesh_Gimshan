'use client';
import About from '@/components/about/page';
import Nav from '@/components/header/page';
import Hero from '@/components/hero/page.jsx';
import Teckstack from '@/components/teckStack/page';
import Timeline from '@/components/timeline/page';
import Footer from '@/components/footer/page';
import SmoothScroll from '@/components/ui/SmoothScroll';

export default function Page() {
  return (
    <SmoothScroll>
      <Nav />
      <Hero />
      <About />
      <Teckstack />
      <Timeline />
      <Footer />
    </SmoothScroll>
  );
}