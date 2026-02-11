import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Linkedin, Twitter, Github, Mail } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-background border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Link href="/" className="block relative h-12 w-40">
                            <Image
                                src="/logo.png"
                                alt="AtlasHive"
                                fill
                                className="object-contain object-left"
                            />
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Securing the digital future with enterprise-grade VAPT and compliance solutions. Beyond checklists, towards true resilience.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Github className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Cyber Services</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="/services#vapt" className="hover:text-primary transition-colors">VAPT & Penetration Testing</Link></li>
                            <li><Link href="/services#cloud" className="hover:text-primary transition-colors">Cloud Security Assessment</Link></li>
                            <li><Link href="/services#phishing" className="hover:text-primary transition-colors">Phishing Simulation</Link></li>
                            <li><Link href="/services#network" className="hover:text-primary transition-colors">Network Security Audit</Link></li>
                        </ul>
                    </div>

                    {/* Compliance Column */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Compliance</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="/services#iso27001" className="hover:text-primary transition-colors">ISO 27001:2022</Link></li>
                            <li><Link href="/services#soc2" className="hover:text-primary transition-colors">SOC2 Type I & II</Link></li>
                            <li><Link href="/services#gdpr" className="hover:text-primary transition-colors">GDPR Readiness</Link></li>
                            <li><Link href="/services#hipaa" className="hover:text-primary transition-colors">HIPAA Compliance</Link></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Contact</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li className="flex items-start">
                                <Mail className="h-5 w-5 mr-2 text-primary shrink-0" />
                                <span>contact@atlashive.com</span>
                            </li>
                            <li>
                                <p>123 Cyber Park, Tech District</p>
                                <p>San Francisco, CA 94105</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} AtlasHive Security. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
