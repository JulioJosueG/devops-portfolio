import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Cpu, Terminal, ShieldCheck, ExternalLink, Cloud } from 'lucide-react';

const About: React.FC = () => {
    return (
        <section className="py-20 bg-muted/30">
            <div className="max-w-4xl mx-auto px-4">
                <div className="mb-12">
                    <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-4">
                        About Me
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Bridging Development & Operations</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6 text-muted-foreground text-lg leading-relaxed"
                    >
                        <p>
                            Hi, I'm <span className="text-foreground font-semibold">Julio Hernandez</span>.
                            I started my journey as a developer, but I quickly fell in love with the "how" and "where" code lives.
                        </p>
                        <p>
                            I specialize in building <strong>reliable, automated infrastructure</strong>.
                            My philosophy is simple: if you have to do it twice, automate it. I use modern tools like
                            <strong> Azure, GitHub Actions, and Terraform</strong> to create self-healing systems that let developers sleep soundly at night.
                        </p>
                        <p>
                            When I'm not optimizing pipelines, I'm building interactive apps like <a href="https://lingomap.tartaro.net" className="text-primary underline underline-offset-4 hover:text-primary/80">LingoMap</a> to keep my coding skills sharp.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="grid grid-cols-2 gap-4"
                    >
                        {[
                            { icon: Terminal, label: "Automation", color: "text-blue-500", bg: "bg-blue-500/10" },
                            { icon: Cloud, label: "Azure Cloud", color: "text-sky-500", bg: "bg-sky-500/10" },
                            { icon: Layers, label: "IaC", color: "text-purple-500", bg: "bg-purple-500/10" },
                            { icon: Cpu, label: "Performance", color: "text-orange-500", bg: "bg-orange-500/10" }
                        ].map((item, idx) => (
                            <div key={idx} className={`p-6 rounded-2xl border border-muted ${item.bg} flex flex-col items-center justify-center text-center gap-3 transition-transform hover:scale-105`}>
                                <item.icon className={`w-8 h-8 ${item.color}`} />
                                <span className="font-semibold text-sm">{item.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Certifications Section - Moved from Home */}
                <div className="mt-16 space-y-6">
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
            </div>
        </section>
    );
};

export default About;
