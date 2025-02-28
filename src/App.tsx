import React, { useState } from 'react';
import {
	MessageSquare,
	Mic,
	Target,
	Database,
	Cpu,
	BookOpen,
	Linkedin,
	Twitter,
	Mail,
} from 'lucide-react';
import { ServiceModal } from './components/ServiceModal';
import { BlogModal } from './components/BlogModal';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { SplineHero } from './components/SplineHero';
import { ProcessTimeline } from './components/ProcessTimeline';

const services = [
	{
		icon: <MessageSquare className="w-12 h-12 text-white" />,
		title: 'AI Chat Agents',
		description:
			'24/7 intelligent customer support with natural language processing',
		longDescription:
			'Our AI Chat Agents provide round-the-clock customer support using advanced natural language processing. They can handle multiple conversations simultaneously, learn from interactions, and provide consistent, accurate responses. This solution reduces response times, improves customer satisfaction, and significantly cuts operational costs.',
		image:
			'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80',
	},
	{
		icon: <Mic className="w-12 h-12 text-white" />,
		title: 'AI Voice Agents',
		description: 'Advanced voice assistants for seamless customer interactions',
		longDescription:
			'Transform your customer service with AI Voice Agents that understand and respond to natural speech. Our voice assistants handle calls with human-like understanding, manage appointments, answer queries, and route complex issues to human agents when needed. They operate 24/7, speaking multiple languages and maintaining consistent quality.',
		image:
			'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80',
	},
	{
		icon: <Target className="w-12 h-12 text-white" />,
		title: 'Lead Generation',
		description: 'AI-powered lead identification and qualification',
		longDescription:
			'Supercharge your sales pipeline with AI-driven lead generation. Our system analyzes vast amounts of data to identify and qualify potential leads, predicts customer behavior, and prioritizes opportunities based on likelihood to convert. This results in more efficient sales processes and higher conversion rates.',
		image:
			'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
	},
	{
		icon: <Database className="w-12 h-12 text-white" />,
		title: 'CRM Integration',
		description: 'Seamless integration with your existing CRM systems',
		longDescription:
			'Enhance your CRM capabilities with AI-powered integrations. Our solution connects with your existing CRM system to automate data entry, provide predictive analytics, and generate actionable insights. This leads to better customer relationship management and increased sales efficiency.',
		image:
			'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
	},
	{
		icon: <Cpu className="w-12 h-12 text-white" />,
		title: 'Custom AI Solutions',
		description: 'Tailored automation solutions for your unique needs',
		longDescription:
			"Get custom AI solutions designed specifically for your business needs. Whether it's process automation, predictive analytics, or specialized AI models, we create tailored solutions that integrate seamlessly with your existing workflows and drive real business value.",
		image:
			'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80',
	},
	{
		icon: <BookOpen className="w-12 h-12 text-white" />,
		title: 'AI Consultation',
		description: 'Expert guidance on AI implementation strategies',
		longDescription:
			'Benefit from expert guidance on implementing AI in your business. Our consultation services help you identify opportunities for AI adoption, develop implementation strategies, and ensure successful deployment. We provide ongoing support to maximize the value of your AI investments.',
		image:
			'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
	},
];

const testimonials = [
	{
		quote:
			"The AI solutions provided by this team have transformed our customer service operations. We've seen a 60% reduction in response times and significantly improved customer satisfaction scores.",
		author: 'Sarah Chen',
		role: 'CTO',
		company: 'TechForward',
	},
	{
		quote:
			'Implementing their AI chat agents has been a game-changer for our business. The seamless integration and powerful capabilities have exceeded our expectations.',
		author: 'Michael Rodriguez',
		role: 'Head of Innovation',
		company: 'Future Dynamics',
	},
	{
		quote:
			'The level of expertise and support we received during our AI transformation journey was exceptional. Their solutions have given us a competitive edge in our market.',
		author: 'Emily Watson',
		role: 'Operations Director',
		company: 'Global Solutions Inc',
	},
	{
		quote:
			'The custom AI solutions developed for our specific needs have revolutionized our workflow. The attention to detail and understanding of our business requirements was impressive.',
		author: 'David Park',
		role: 'CEO',
		company: 'InnovateAI',
	},
	{
		quote:
			'Their AI consultation services provided invaluable insights that helped us navigate our digital transformation. The ROI has been remarkable.',
		author: 'Lisa Thompson',
		role: 'Digital Strategy Director',
		company: 'NextGen Solutions',
	},
];

const blogPosts = [
	{
		title: 'The Future of AI in Customer Service',
		excerpt:
			'Discover how artificial intelligence is revolutionizing customer service and what it means for businesses in 2025 and beyond.',
		image:
			'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80',
		date: 'March 15, 2025',
		content: 'Full blog post content here...',
	},
	{
		title: 'Maximizing ROI with AI-Powered Lead Generation',
		excerpt:
			'Learn how businesses are leveraging AI to identify and qualify leads more effectively, resulting in higher conversion rates.',
		image:
			'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
		date: 'March 10, 2025',
		content: 'Full blog post content here...',
	},
	{
		title: 'The Rise of Voice AI in Business Communications',
		excerpt:
			"Explore the latest developments in voice AI technology and how it's transforming business communications.",
		image:
			'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80',
		date: 'March 5, 2025',
		content: 'Full blog post content here...',
	},
];

function App() {
	const [selectedService, setSelectedService] = useState(null);
	const [selectedBlogPost, setSelectedBlogPost] = useState(null);
	const extendedTestimonials = [...testimonials, ...testimonials];

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
				ease: 'easeOut',
			},
		},
	};

	return (
		<div className="min-h-screen bg-background text-foreground">
			{/* Hero Section with SplineScene */}
			<SplineHero onScrollToSection={scrollToSection} />

			{/* Services Section */}
			<div id="services" className="bg-card mx-auto px-20 py-32">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-4xl font-bold text-center mb-24"
				>
					Services
				</motion.h2>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					{services.map((service, index) => (
						<motion.div
							key={index}
							variants={itemVariants}
							whileHover={{ scale: 1.02 }}
							onClick={() => setSelectedService(service)}
							className={cn(
								'p-8 rounded-2xl bg-card',
								'border border-white/[0.05]',
								'transition-all duration-300 hover:border-white/[0.1]',
								'cursor-pointer card-hover'
							)}
						>
							<div className="mb-6">{service.icon}</div>
							<h3 className="text-3xl font-bold mb-4">{service.title}</h3>
							<p className="text-lg text-muted-foreground leading-relaxed">
								{service.description}
							</p>
						</motion.div>
					))}
				</motion.div>
			</div>

			{/* Process Section */}
			<div
				id="process"
				className="bg-card py-32"
				style={{ background: 'black' }}
			>
				<div className="mx-auto px-20">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="text-4xl font-bold text-center"
					>
						Process
					</motion.h2>
					<ProcessTimeline />
				</div>
			</div>

			{/* Testimonials Section */}
			<div className="bg-card py-32">
				<div className="mx-auto px-20">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="text-4xl font-bold text-center mb-24"
					>
						Testimonials
					</motion.h2>
					<div className="overflow-x-hidden">
						<div className="testimonials-container">
							{extendedTestimonials.map((testimonial, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, scale: 0.8 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className={cn(
										'p-8 rounded-2xl bg-background/50',
										'border border-white/[0.05]',
										'transition-all duration-300 hover:border-white/[0.1]',
										'card-hover',
										'w-[400px] flex-shrink-0 mx-4'
									)}
								>
									<blockquote className="text-lg text-muted-foreground mb-6">
										"{testimonial.quote}"
									</blockquote>
									<div>
										<p className="font-bold">{testimonial.author}</p>
										<p className="text-sm text-muted-foreground">
											{testimonial.role} at {testimonial.company}
										</p>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Blog Posts Section */}
			<div className="py-32">
				<div className="mx-auto px-20">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="text-4xl font-bold text-center mb-24"
					>
						Latest articles
					</motion.h2>
					<motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="grid grid-cols-1 md:grid-cols-3 gap-8"
					>
						{blogPosts.map((post, index) => (
							<motion.div
								key={index}
								variants={itemVariants}
								whileHover={{ scale: 1.02 }}
								className={cn(
									'rounded-2xl overflow-hidden',
									'border border-white/[0.05]',
									'transition-all duration-300 hover:border-white/[0.1]',
									'card-hover'
								)}
							>
								<img
									src={post.image}
									alt={post.title}
									className="w-full h-48 object-cover"
								/>
								<div className="p-6">
									<p className="text-sm text-muted-foreground mb-2">
										{post.date}
									</p>
									<h3 className="text-xl font-bold mb-3">{post.title}</h3>
									<p className="text-muted-foreground mb-4">{post.excerpt}</p>
									<Button
										variant="ghost"
										className="text-white hover:text-white/90"
										onClick={() => setSelectedBlogPost(post)}
									>
										Read More
									</Button>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>

			{/* Book a Demo Section */}
			<div id="contact" className="py-32 bg-card">
				<div className="mx-auto px-20">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="max-w-2xl mx-auto"
					>
						<h2 className="text-4xl font-bold text-center mb-12">
							Book a Demo
						</h2>
						<motion.form
							className="space-y-6"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ delay: 0.2, duration: 0.6 }}
						>
							<div className="space-y-2">
								<Label htmlFor="name">Name</Label>
								<motion.input
									whileFocus={{ scale: 1.01 }}
									id="name"
									type="text"
									className={cn(
										'flex h-12 w-full rounded-lg border bg-background/50 px-4',
										'text-base transition-colors',
										'border-white/[0.05]',
										'focus:border-white/[0.25] focus:outline-none'
									)}
									placeholder="Your name"
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="email">Email</Label>
								<motion.input
									whileFocus={{ scale: 1.01 }}
									id="email"
									type="email"
									className={cn(
										'flex h-12 w-full rounded-lg border bg-background/50 px-4',
										'text-base transition-colors',
										'border-white/[0.05]',
										'focus:border-white/[0.25] focus:outline-none'
									)}
									placeholder="your@email.com"
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="website">Company Website</Label>
								<motion.input
									whileFocus={{ scale: 1.01 }}
									id="website"
									type="url"
									className={cn(
										'flex h-12 w-full rounded-lg border bg-background/50 px-4',
										'text-base transition-colors',
										'border-white/[0.05]',
										'focus:border-white/[0.25] focus:outline-none'
									)}
									placeholder="https://your-company.com"
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="message">Message</Label>
								<motion.textarea
									whileFocus={{ scale: 1.01 }}
									id="message"
									className={cn(
										'flex w-full rounded-lg border bg-background/50 px-4 py-3',
										'text-base transition-colors',
										'border-white/[0.05]',
										'focus:border-white/[0.25] focus:outline-none'
									)}
									rows={4}
									placeholder="Tell us about your project"
								></motion.textarea>
							</div>
							<motion.div
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								<Button
									type="submit"
									className="w-full h-12 text-base bg-white text-black hover:bg-white/90 button-hover"
								>
									Book a Demo
								</Button>
							</motion.div>
						</motion.form>
					</motion.div>
				</div>
			</div>

			{/* Footer */}
			<footer className="bg-background py-16 border-t border-white/[0.05]">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mx-auto px-20"
				>
					<div className="flex flex-col items-center justify-center space-y-6">
						<motion.a
							whileHover={{ scale: 1.05 }}
							href="mailto:hello@marouenabdi.com"
							className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors"
						>
							<Mail className="w-5 h-5" />
							hello@marouenabdi.com
						</motion.a>
						<div className="flex space-x-4">
							<motion.div whileHover={{ scale: 1.1 }}>
								<Button variant="ghost" size="icon" asChild>
									<a
										href="https://linkedin.com"
										target="_blank"
										rel="noopener noreferrer"
										className="text-muted-foreground hover:text-white"
									>
										<Linkedin className="w-5 h-5" />
									</a>
								</Button>
							</motion.div>
							<motion.div whileHover={{ scale: 1.1 }}>
								<Button variant="ghost" size="icon" asChild>
									<a
										href="https://twitter.com"
										target="_blank"
										rel="noopener noreferrer"
										className="text-muted-foreground hover:text-white"
									>
										<Twitter className="w-5 h-5" />
									</a>
								</Button>
							</motion.div>
						</div>
					</div>
				</motion.div>
			</footer>

			<ServiceModal
				service={selectedService}
				onClose={() => setSelectedService(null)}
			/>

			<BlogModal
				post={selectedBlogPost}
				onClose={() => setSelectedBlogPost(null)}
			/>
		</div>
	);
}

export default App;
