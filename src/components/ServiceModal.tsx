import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  longDescription: string;
  image: string;
}

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
}

export function ServiceModal({ service, onClose }: ServiceModalProps) {
  if (!service) return null;

  const handleBookDemo = () => {
    onClose();
    const demoSection = document.getElementById('contact');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Dialog open={!!service} onOpenChange={() => onClose()}>
      <AnimatePresence>
        {service && (
          <DialogContent className="bg-card border-white/[0.05]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2 text-white">
                  {service.icon}
                  <span>{service.title}</span>
                </DialogTitle>
              </DialogHeader>
              
              <div className="flex flex-col space-y-4">
                <motion.img
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="text-muted-foreground leading-relaxed"
                >
                  {service.longDescription}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    className="w-full bg-white text-black hover:bg-white/90"
                    onClick={handleBookDemo}
                  >
                    Book a Demo
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </DialogContent>
        )}
      </AnimatePresence>
    </Dialog>
  );
}