import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

export const Hero: React.FC = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative bg-[#FFF0F5] py-16 px-4"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-6">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-4xl md:text-5xl font-bold text-gray-900"
            >
              Choosing the Right Cat Sitter Just Got A Lot Easier
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600"
            >
              Professional and caring cat sitting services you can trust
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Button 
                size="lg"
                className="bg-pink-500 hover:bg-pink-600 text-white"
              >
                Book Now
              </Button>
            </motion.div>
          </div>
          <motion.div 
            className="flex-1"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <img
              src="/images/hero-cat.jpg"
              alt="Happy cat sitting"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};