import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { motion, AnimatePresence } from "framer-motion";

interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  content?: string;
}

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export function BlogModal({ post, onClose }: BlogModalProps) {
  if (!post) return null;

  return (
    <Dialog open={!!post} onOpenChange={() => onClose()}>
      <AnimatePresence>
        {post && (
          <DialogContent className="bg-card border-white/[0.05] max-w-3xl max-h-[90vh] flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <DialogHeader className="flex-shrink-0">
                <DialogTitle className="text-2xl font-bold text-white">
                  {post.title}
                </DialogTitle>
                <p className="text-sm text-muted-foreground">{post.date}</p>
              </DialogHeader>
              
              <div className="overflow-y-auto flex-grow pr-2">
                <div className="flex flex-col space-y-6">
                  <motion.img
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    className="prose prose-invert"
                  >
                    <p className="text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Artificial Intelligence is revolutionizing the way businesses operate and interact with their customers. As we move further into 2025, the integration of AI technologies has become not just a competitive advantage, but a necessity for survival in the modern business landscape.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      The rapid advancement of natural language processing, machine learning, and automation has opened up new possibilities for businesses to streamline their operations, enhance customer experiences, and drive growth. From intelligent chatbots that provide 24/7 customer support to sophisticated analytics tools that predict market trends, AI is transforming every aspect of business operations.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      As we look to the future, it's clear that organizations that embrace AI and adapt to this technological revolution will be better positioned to thrive in an increasingly competitive marketplace. The key to success lies in understanding how to effectively implement these technologies while maintaining a human-centric approach to business.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      One of the most significant advantages of AI implementation is its ability to process and analyze vast amounts of data in real-time. This capability enables businesses to make data-driven decisions quickly and accurately, leading to improved operational efficiency and better customer outcomes. AI-powered systems can identify patterns and trends that might be invisible to human analysts, providing valuable insights that can drive strategic planning and innovation.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Moreover, the scalability of AI solutions means that businesses can grow their operations without a proportional increase in overhead costs. Automated systems can handle increasing workloads efficiently, ensuring consistent service quality while freeing up human resources for more complex and creative tasks.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </DialogContent>
        )}
      </AnimatePresence>
    </Dialog>
  );
}