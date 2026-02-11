export default function ContactPage() {
    return (
        <div className="pt-20 min-h-screen">
            <div className="bg-primary/5 py-16 text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto px-4">
                    Ready to secure your business? Get in touch with our experts.
                </p>
            </div>

            <div className="max-w-3xl mx-auto px-4">
                <div className="bg-card border border-white/10 rounded-lg p-8">
                    <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                    <p className="text-muted-foreground mb-8">
                        [Form Placeholder - Phase 3 Implementation]
                    </p>
                    {/* Form will be implemented in Phase 3 */}
                </div>
            </div>
        </div>
    );
}
