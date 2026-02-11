'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Lock, Server } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-white/40 dark:bg-transparent dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-slate-900 dark:via-[#0f172a] dark:to-black dark:opacity-90" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,black,rgba(0,0,0,0))]" />

                {/* Animated Particles/Glow */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center space-x-2 bg-slate-100/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm shadow-sm"
                >
                    <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-sm font-medium text-primary dark:text-primary-foreground/80">
                        Enterprise-grade Security Solutions
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-foreground dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-white dark:to-white/60"
                >
                    Beyond Checklists.<br />
                    <span className="text-primary">Proactive Protection.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-2xl text-xl text-muted-foreground mb-10"
                >
                    AtlasHive secures your digital assets with advanced VAPT, compliance management (ISO 27001, SOC2), and 24/7 infrastructure monitoring.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4"
                >
                    <Link href="/services">
                        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 min-w-[200px] text-lg h-12 shadow-[0_0_20px_rgba(0,255,65,0.2)]">
                            Explore Services
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button size="lg" variant="outline" className="border-slate-300 dark:border-white/20 hover:bg-slate-100 dark:hover:bg-white/10 min-w-[200px] text-lg h-12">
                            Book a Consultation
                            <Shield className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </motion.div>

                {/* Floating Icons/Trust Indicators */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
                >
                    {/* Using text placeholders for trust icons properly */}
                    <div className="flex items-center space-x-2">
                        <Shield className="h-6 w-6 text-primary" />
                        <span className="font-semibold text-lg">ISO 27001</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Lock className="h-6 w-6 text-primary" />
                        <span className="font-semibold text-lg">SOC2 Type II</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Server className="h-6 w-6 text-primary" />
                        <span className="font-semibold text-lg">GDPR Ready</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Shield className="h-6 w-6 text-primary" />
                        <span className="font-semibold text-lg">CREST Certified</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
