import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Feature } from "@/types";

const features: Feature[] = [
    {
        title: "Tailored Care",
        tagline: "Just Fur You",
        description: "From playful kittens to chill senior cats, we understand every cat has their quirks. And our sitting services are designed specifically for your cat's preferences. We'll make sure they get the care, cuddles (if they want them), and attention they need.",
        image: "",
        alt: "Cat hiding under blanket",
        cta: "Tell us about your cat!",
        buttonText: "Book now",
        buttonLink: "",
    },
    {
        title: "Experienced Cat Sitters",
        tagline: "The purr-fessionals",
        description: "Our team consists of passionate cat lovers who are trained to cater to your cat's unique personality. You can count on us to be reliable, loving and ready for anything your cat needs.",
        image: "",
        alt: "Cat pawing at camera",
        cta: "Get a trusted sitter today.",
        buttonText: "Meet the team",
        buttonLink: "",
    },
    {
        title: "Daily Updates You Can Count On",
        tagline: "Stay in the Meow",
        description: "Whether it's a weekend getaway or a long trip, we provide detailed updates after each visit so you know exactly how your cat is doing in your absence - complete with photos and notes on their behavior and activities.",
        image: "",
        alt: "Cat hiding under nightstand",
        cta: "Enjoy peace of mind!",
        buttonText: "Book now",
        buttonLink: "",
    }
];

const container = { 
    hidden: { opacity: 0},
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        }
    }
};

const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
    }
};
export const Features: React.FC = () => {
    return (
        <section>
            <div>
                <motion.h2>
                    Compassionate Cat Sitting You Can Trust
                </motion.h2>
            </div>
        </section>
    );
};