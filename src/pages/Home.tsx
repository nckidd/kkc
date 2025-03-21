import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';

export const Home = () => {
  return (
    <main className="min-h-screen bg-pink-50">
      {/* Hero Section */}
      <section className="relative py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4"
        >
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Choosing the Right Cat Sitter Just Got A Lot Easier
              </h1>
              <p className="text-lg mb-8">
                Professional and caring cat sitting services you can trust
              </p>
              <div className="flex gap-4">
                <Button size="lg">Book Now</Button>
                <Button variant="outline" size="lg">Learn More</Button>
              </div>
            </div>
            <div className="flex-1">
              <img 
                src="/cat-hero.jpg" 
                alt="Happy cat" 
                className="rounded-2xl"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Compassionate Cat Sitting You Can Trust
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service Cards */}
            {/* Add the three service cards here */}
          </div>
        </div>
      </section>
    </main>
  );
};