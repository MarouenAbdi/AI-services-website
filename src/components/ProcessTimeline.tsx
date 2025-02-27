import React from 'react';
import { Timeline } from "@/components/ui/timeline";
import { motion } from "framer-motion";
import { MessageSquare, Cpu, Zap, CheckCircle, Users } from 'lucide-react';

export function ProcessTimeline() {
  const processData = [
    {
      title: "Consultation",
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      content: (
        <div>
          <p className="text-muted-foreground leading-relaxed text-base">
            We begin with a thorough consultation to understand your business needs, challenges, and goals. Our team of AI experts will analyze your current processes and identify opportunities for automation and enhancement.
          </p>
        </div>
      ),
    },
    {
      title: "Solution Design",
      icon: <Cpu className="w-6 h-6 text-white" />,
      content: (
        <div>
          <p className="text-muted-foreground leading-relaxed text-base">
            Based on our consultation, we design a customized AI solution tailored to your specific requirements. This includes selecting the appropriate AI technologies, planning integration with your existing systems, and creating a detailed implementation roadmap.
          </p>
        </div>
      ),
    },
    {
      title: "Implementation",
      icon: <Zap className="w-6 h-6 text-white" />,
      content: (
        <div>
          <p className="text-muted-foreground leading-relaxed text-base">
            Our expert team implements the AI solution, ensuring seamless integration with your existing systems. We follow a phased approach to minimize disruption to your business operations while providing regular updates on progress and addressing any concerns.
          </p>
        </div>
      ),
    },
    {
      title: "Training & Adoption",
      icon: <Users className="w-6 h-6 text-white" />,
      content: (
        <div>
          <p className="text-muted-foreground leading-relaxed text-base">
            We provide comprehensive training for your team to ensure they can effectively use and manage the new AI systems. Our adoption strategies help ensure smooth transition and maximum utilization of the new capabilities across your organization.
          </p>
        </div>
      ),
    },
    {
      title: "Ongoing Support",
      icon: <CheckCircle className="w-6 h-6 text-white" />,
      content: (
        <div>
          <p className="text-muted-foreground leading-relaxed text-base">
            Our relationship doesn't end with implementation. We provide ongoing support, monitoring, and continuous optimization of your AI solutions. As your business evolves, we ensure your AI systems adapt and improve to meet changing needs and leverage new technologies.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-background">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Timeline 
          data={processData} 
        />
      </motion.div>
    </div>
  );
}