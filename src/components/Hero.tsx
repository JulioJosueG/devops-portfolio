import React from 'react';
import { ArrowRight, Cloud, Server, Shield, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    return (
        <section className="relative overflow-hidden pt-10 pb-16 md:pt-20 md:pb-32">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex-1 max-w-2xl"
                >
                    <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-6">
                        <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                        Available for new projects
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
                        Julio Hernandez <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-foreground">
                            DevOps & Platform Strategy
                        </span>
                    </h1>


                    <p className="text-xl text-muted-foreground mb-8 text-pretty">
                        I'm a DevOps Engineer specialized in automating deployment pipelines,
                        optimizing cloud architecture, and ensuring zero-downtime releases.
                        Currently focused on Azure & GitHub Actions.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        >
                            View Case Studies
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-md border border-input bg-transparent px-6 py-3 text-base font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>

                {/* Hero Visual - Abstract Infrastructure */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="flex-1 relative w-full h-[400px] max-w-lg hidden md:block"
                >
                    {/* Central Hub */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center z-10 border border-primary/20 shadow-lg shadow-primary/10">
                        <Cloud className="w-10 h-10 text-primary" />
                    </div>

                    {/* Floating Elements */}
                    {[
                        { Icon: Server, top: '20%', left: '20%', delay: 0 },
                        { Icon: Shield, top: '20%', right: '20%', delay: 1 },
                        { Icon: Cpu, bottom: '20%', left: '50%', delay: 2 },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="absolute p-4 bg-card rounded-xl shadow-sm border border-muted z-10"
                            style={{ top: item.top, left: item.left, right: item.right, bottom: item.bottom, transform: 'translate(-50%, -50%)' }}
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                delay: item.delay,
                                ease: "easeInOut"
                            }}
                        >
                            <item.Icon className="w-6 h-6 text-foreground" />
                        </motion.div>
                    ))}

                    {/* Connecting Lines (Decorators) */}
                    <svg className="absolute inset-0 w-full h-full text-muted-foreground/20 pointer-events-none" style={{ zIndex: 0 }}>
                        <circle cx="50%" cy="50%" r="100" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="animate-[spin_20s_linear_infinite]" />
                        <circle cx="50%" cy="50%" r="180" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
                    </svg>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
