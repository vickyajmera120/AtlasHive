'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function AboutSection() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            {/* Background decorative element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Security Built for <span className="text-primary">Growth</span>.
                        </h2>
                        <div className="space-y-6 text-muted-foreground text-lg">
                            <p>
                                At AtlasHive, we believe cybersecurity shouldn't be a blocker—it should be an enabler. Founded by <strong className="text-foreground">Tirth Shah</strong>, our mission is to move beyond simple checklists to provide deep, actionable security insights.
                            </p>
                            <p>
                                We partner with modern enterprises to build resilient infrastructure that can withstand evolving threats. Whether you need VAPT, ISO certification, or a full-scale security roadmap, we stand by your side.
                            </p>
                        </div>

                        <div className="mt-8">
                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-8 mb-8">
                                <div>
                                    <div className="text-3xl font-bold text-primary">50+</div>
                                    <div className="text-sm text-muted-foreground">Clients Secured</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-primary">100%</div>
                                    <div className="text-sm text-muted-foreground">Compliance Success</div>
                                </div>
                            </div>

                            <Link href="/about">
                                <Button variant="secondary" className="group">
                                    Learn More About Us
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Image Placeholder / Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-square bg-slate-900 rounded-2xl border border-white/10 p-2 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-blue-500/20 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                            {/* Placeholder for Founder Image or Abstract Graphic */}
                            <div className="h-full w-full bg-slate-950 rounded-xl flex items-center justify-center border border-white/5">
                                <span className="text-muted-foreground/50 font-mono text-sm">[Security Architecture Visualization]</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
