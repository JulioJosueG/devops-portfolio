import React from 'react';
import Hero from '../components/Hero';
import SkillsGrid from '../components/SkillsGrid';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import About from '../components/About';
import { ShieldCheck, ExternalLink } from 'lucide-react';

const Home: React.FC = () => {
    return (
        <div className="space-y-24 pb-20">
            <Hero />
            <div id="about" className="scroll-mt-24">
                <About />
            </div>
            <div id="skills" className="scroll-mt-24">
                <SkillsGrid />
            </div>
            <div id="projects" className="scroll-mt-24">
                <Projects />
            </div>

            <div className="max-w-4xl mx-auto py-12 px-4 space-y-6">
                {/* Completed Certs */}
                <div className="p-6 rounded-2xl bg-card border border-muted flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-lg font-bold flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5 text-green-500" />
                            Certified Professional
                        </h3>
                        <p className="text-muted-foreground mt-1 text-sm">
                            Holds
                            <a href="https://learn.microsoft.com/en-us/users/juliojosuehernandezanthony-5214/credentials/35256bf0c717245e" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline mx-1 font-medium inline-flex items-center">
                                Azure Administrator Associate (AZ-104) <ExternalLink className="w-3 h-3 ml-1" />
                            </a>
                            and
                            <a href="https://learn.microsoft.com/en-us/users/juliojosuehernandezanthony-5214/credentials/974fc15802426edb" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline mx-1 font-medium inline-flex items-center">
                                Azure Fundamentals (AZ-900) <ExternalLink className="w-3 h-3 ml-1" />
                            </a>.
                        </p>
                    </div>
                </div>

                {/* In Progress */}
                <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900/20 to-primary/10 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-lg font-bold flex items-center gap-2">
                            <span className="flex h-3 w-3 rounded-full bg-yellow-400 animate-pulse"></span>
                            Certification in Progress
                        </h3>
                        <p className="text-muted-foreground mt-1">
                            Currently preparing for <span className="text-foreground font-semibold">Microsoft Certified: DevOps Engineer Expert (AZ-400)</span>.
                        </p>
                    </div>
                    <div className="shrink-0">
                        <span className="inline-block px-4 py-2 rounded-lg bg-background border border-muted font-mono text-xs font-medium">
                            STATUS: STUDYING
                        </span>
                    </div>
                </div>
            </div>

            <div id="contact" className="scroll-mt-24">
                <Contact />
            </div>
        </div>
    );
};

export default Home;
