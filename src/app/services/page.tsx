import { ServicesSection } from "@/components/sections/Services";

export default function ServicesPage() {
    return (
        <div className="pt-20">
            <div className="bg-primary/5 py-16 text-center">
                <h1 className="text-4xl font-bold mb-4">Our Services</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto px-4">
                    Defending your organization with cutting-edge technology and expert insights.
                </p>
            </div>
            <ServicesSection />
        </div>
    );
}
