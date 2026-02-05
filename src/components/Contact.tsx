import React from 'react';
import { Mail, Github, Linkedin, Terminal } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <section className="py-20 border-t border-muted">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Automate?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                    I'm currently looking for new opportunities to help teams build reliable, scalable infrastructure.
                    Whether you have a question or just want to say hi, my inbox is open.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <a
                        href="mailto:juliohernandez@tartaro.net"
                        className="flex flex-col items-center justify-center p-8 bg-card rounded-xl border border-muted hover:border-primary/50 hover:shadow-lg transition-all group"
                    >
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Mail className="w-6 h-6" />
                        </div>
                        <h3 className="font-semibold mb-1">Email Me</h3>
                        <p className="text-sm text-muted-foreground">juliohernandez@tartaro.net</p>
                    </a>

                    <a
                        href="https://github.com/JulioJosueG"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center p-8 bg-card rounded-xl border border-muted hover:border-primary/50 hover:shadow-lg transition-all group"
                    >
                        <div className="w-12 h-12 bg-gray-50 text-gray-900 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Github className="w-6 h-6" />
                        </div>
                        <h3 className="font-semibold mb-1">GitHub</h3>
                        <p className="text-sm text-muted-foreground">@JulioJosueG</p>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/julio-hernandez-8319a3114/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center p-8 bg-card rounded-xl border border-muted hover:border-primary/50 hover:shadow-lg transition-all group"
                    >
                        <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Linkedin className="w-6 h-6" />
                        </div>
                        <h3 className="font-semibold mb-1">LinkedIn</h3>
                        <p className="text-sm text-muted-foreground">Connect with me</p>
                    </a>
                </div>

                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-muted/50 text-xs font-mono text-muted-foreground">
                    <Terminal className="w-3 h-3 mr-2" />
                    <span>echo "Thanks for visiting!"</span>
                </div>
            </div>
        </section>
    );
};

export default Contact;
