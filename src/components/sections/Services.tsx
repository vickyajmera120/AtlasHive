'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Search, FileCheck, Layers, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        title: "VAPT Services",
        description: "In-depth Vulnerability Assessment and Penetration Testing for Web, Mobile, and API.",
        icon: Search,
        category: "Technical",
    },
    {
        title: "ISO 27001 Implementation",
        description: "End-to-end guidance for achieving ISO 27001:2022 certification and maintaining ISMS.",
        icon: Shield,
        category: "Compliance",
    },
    {
        title: "SOC2 Readiness",
        description: "Prepare for SOC2 Type I and Type II audits with our comprehensive gap analysis and support.",
        icon: FileCheck,
        category: "Compliance",
    },
    {
        title: "Cloud Security",
        description: "AWS, Azure, and GCP security configuration reviews and hardening.",
        icon: Layers,
        category: "Technical",
    },
    {
        title: "Phishing Simulations",
        description: "Train your employees to recognize and report phishing attacks with realistic campaigns.",
        icon: Users,
        category: "Awareness",
    },
    {
        title: "Infrastructure Security",
        description: "Network architecture reviews and firewall auditing to secure your perimeter.",
        icon: Lock,
        category: "Technical",
    },
];

export function ServicesSection() {
    return (
        <section id="services" className="py-24 bg-background/50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Security Services</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        From technical testing to compliance frameworks, we cover every aspect of your organization's security posture.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full bg-card/50 backdrop-blur-sm border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,65,0.1)] group">
                                <CardHeader>
                                    <div className="mb-4 inline-block p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                        <service.icon className="h-6 w-6" />
                                    </div>
                                    <CardTitle className="text-xl">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base">
                                        {service.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
