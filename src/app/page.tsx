import Carousel from '@/components/Carousel';
import BioSection from '@/components/BioSection';

const carouselSlides = [
  {
    id: 'buboy',
    backgroundImage: '/graphics/buboy.webp',
    logo: '/graphics/buboy-logo.png',
    description: 'Buboy is a Filipino-American indie rock artist who drinks a lot of milk and goes to the movie theater alone (separate activities, rarely together).',
    link: '/artists'
  },
  {
    id: 'nancys',
    backgroundImage: '/graphics/nancys.webp',
    logo: '/graphics/nancys-logo.png',
    description: 'The Nancys are an indie rock band that started with a simple recipe: good friends, great music, and the occasional interruption from their beloved cats.',
    link: '/artists'
  }
];

export default function Home() {
  return (
    <div className="swamp-homepage">
      <Carousel slides={carouselSlides} />
      <BioSection />
      {/* <ServicesSection />
      <ContactSection /> */}
    </div>
  );
}
