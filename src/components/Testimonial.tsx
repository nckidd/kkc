import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Quote } from 'lucide-react';

interface TestimonialProps {
    name: string;
    content: string;
    image: string;
    role?: string;
}

export const Testimonial: 
    React.FC<TestimonialProps> = ({ name, content, image, role }) =>
    {
        return( 
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="w-full max-w-2xl mx-auto"
            >
                <Card
                    className="pt-6 px-8 pb-8"
                >
                    <CardContent
                        className="flex flex-col items-center text-center"
                    >
                        <Avatar
                            className="w-20 h-20 mb-4"
                        >
                            <AvatarImage
                                src={image}
                                alt={name}
                            />
                            <AvatarFallback>
                                {name[0]}
                            </AvatarFallback>
                        </Avatar>
                        <Quote
                            className="text-pink-500 w-8 h-8 mb-4"
                        />
                        {/* Add stars here */}
                        <p
                            className="text-lg text-gray-700 italic mb-6"
                        >
                            {content}
                        </p>
                        <div className="mt-4">
                            <h3
                                className="font-semibold text-gray-900"
                            >{name}</h3>
                            {role && <p
                                className="text-sm text-gray-500"
                            >{role}</p>}
                            {/* Add vertical divider and cat icon here */}
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        );
    }