import { AboutSection } from "@/components/sections/About";

export default function AboutPage() {
    return (
        <div className="pt-20">
            <div className="bg-slate-900/50 py-16 text-center border-b border-white/5">
                <h1 className="text-4xl font-bold mb-4">About AtlasHive</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto px-4">
                    Building trust through transparency and technical excellence.
                </p>
            </div>
            <AboutSection />
        </div>
    );
}
