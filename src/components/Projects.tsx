import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Server, GitCommit, ExternalLink, Activity, Clock, ShieldCheck, Globe } from 'lucide-react';

const projects = [
    {
        id: 'lingomap',
        title: 'LingoMap',
        subtitle: 'Interactive Global Language Explorer',
        description: 'A high-performance interactive map application built with TanStack Start and MapLibre, deployed to Azure App Service with zero-downtime CI/CD.',
        tags: ['TanStack Start', 'Azure Web App', 'GitHub Actions', 'MapLibre'],
        stats: [
            { label: 'Uptime', value: '99.9%', icon: ShieldCheck },
            { label: 'Performance', value: 'High', icon: Activity },
            { label: 'Deploy Time', value: '<3m', icon: Clock },
        ],
        content: (
            <div className="space-y-6">
                <div className="bg-slate-900 rounded-lg p-4 font-mono text-xs md:text-sm text-slate-300 overflow-x-auto">
                    <div className="flex items-center gap-2 mb-3 border-b border-slate-700 pb-2">
                        <GitCommit className="w-4 h-4 text-primary" />
                        <span className="font-semibold text-white">azure-pipelines.yml</span>
                    </div>
                    <pre>
                        {`name: Build and deploy Node.js app to Azure
jobs:
  build:
    steps:
      - name: npm install, build
        run: |
          npm install
          npm run build --if-present
          
  deploy:
    steps:
      - name: 'Deploy to Azure Web App'
        uses: azure/webapps-deploy@v3
        with:
          app-name: 'map'
          package: .
          # Automated Slot Swap occurs here
          slot-name: 'production'`}
                    </pre>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative p-5 bg-accent/20 rounded-lg border border-accent/30">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <Globe className="w-4 h-4 text-primary" />
                            Global Scale
                        </h4>
                        <p className="text-sm text-muted-foreground">
                            Leverages vector tiles via **MapLibre GL** for smooth rendering of thousands of language data points across the globe.
                        </p>
                    </div>

                    <div className="relative p-5 bg-accent/20 rounded-lg border border-accent/30">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <Server className="w-4 h-4 text-primary" />
                            DevOps Strategy
                        </h4>
                        <p className="text-sm text-muted-foreground">
                            Uses **Azure Deployment Slots** to stage changes. The pipeline deploys to a slot, warms it up, and hot-swaps to production for zero user interruption.
                        </p>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 'gitea-runners',
        title: 'Self-Hosted Runners',
        subtitle: 'Infrastructure Optimization',
        description: 'Managed self-hosted runners for Gitea to reduce build costs and enable specialized build environments (Previous Work).',
        tags: ['Gitea', 'Docker', 'Linux', 'Security'],
        stats: [
            { label: 'Build Cost', value: '-40%', icon: Activity },
            { label: 'Build Time', value: '-25%', icon: Clock },
            { label: 'Control', value: '100%', icon: ShieldCheck },
        ],
        content: (
            <div className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                    Transitioned from shared runners to a dedicated self-hosted fleet. This allowed for caching of large Docker layers and heavy dependencies that were slowing down the pipeline on ephemeral runners.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <li className="flex items-start gap-3 p-3 bg-card rounded border border-muted">
                        <ShieldCheck className="w-5 h-5 text-green-500 mt-0.5" />
                        <div>
                            <span className="font-medium text-sm block">Security Isolation</span>
                            <span className="text-xs text-muted-foreground">Runners isolated in private VNET</span>
                        </div>
                    </li>
                    <li className="flex items-start gap-3 p-3 bg-card rounded border border-muted">
                        <Activity className="w-5 h-5 text-blue-500 mt-0.5" />
                        <div>
                            <span className="font-medium text-sm block">Custom Hardware</span>
                            <span className="text-xs text-muted-foreground">GPU access for ML tasks</span>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
];

const Projects: React.FC = () => {
    const [activeProject, setActiveProject] = useState(projects[0].id);

    return (
        <section className="py-12">
            <div className="mb-12">
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-4">
                    Case Studies
                </div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">Infrastructure as Story</h2>
                <p className="text-lg text-muted-foreground max-w-2xl">
                    DevOps is about more than just tools. It's about problem solving, efficiency, and reliability.
                    Here's how I solve complex infrastructure challenges.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Project List / Navigation */}
                <div className="lg:col-span-4 space-y-4">
                    {projects.map((project) => (<button
                        key={project.id}
                        onClick={() => setActiveProject(project.id)}
                        className={`w-full text-left p-4 md:p-6 rounded-xl border transition-all duration-300 group ${activeProject === project.id
                            ? 'border-primary bg-primary/5 shadow-md'
                            : 'border-muted hover:border-primary/50'
                            }`}
                    >
                        <h3 className={`text-lg font-semibold mb-1 group-hover:text-primary transition-colors ${activeProject === project.id ? 'text-primary' : 'text-foreground'
                            }`}>
                            {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">{project.subtitle}</p>

                        <div className="flex flex-wrap gap-2">
                            {project.tags.slice(0, 3).map(tag => (
                                <span key={tag} className="text-xs px-2 py-1 rounded bg-background border border-muted text-muted-foreground">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </button>
                    ))}

                    <div className="p-6 rounded-xl border border-dashed border-muted bg-muted/20 flex flex-col items-center justify-center text-center">
                        <span className="text-sm font-medium text-muted-foreground mb-1">Coming Soon</span>
                        <span className="text-xs text-muted-foreground/70">Kubernetes High Availability Setup</span>
                    </div>
                </div>

                {/* Project Detail View */}
                <div className="lg:col-span-8">
                    <AnimatePresence mode="wait">
                        {projects.map((project) => (
                            project.id === activeProject && (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-card rounded-2xl border border-muted shadow-sm overflow-hidden"
                                >
                                    <div className="p-5 md:p-8 border-b border-muted">
                                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                                            <div>
                                                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                                <p className="text-muted-foreground">{project.description}</p>
                                            </div>
                                            {project.id === 'lingomap' && (
                                                <a
                                                    href="https://lingomap.tartaro.net/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all text-sm font-medium border border-primary/20 hover:border-primary/50 self-start md:self-auto"
                                                >
                                                    <span>Visit Live Site</span>
                                                    <ExternalLink className="w-4 h-4" />
                                                </a>
                                            )}
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                            {project.stats.map((stat, idx) => (
                                                <div key={idx} className="p-4 bg-muted/30 rounded-lg border border-muted/50">
                                                    <div className="flex items-center gap-2 mb-1 text-muted-foreground text-xs font-medium uppercase tracking-wider">
                                                        <stat.icon className="w-3 h-3" />
                                                        {stat.label}
                                                    </div>
                                                    <div className="text-xl md:text-2xl font-bold">{stat.value}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="p-6 md:p-8 bg-muted/10">
                                        <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Implementation Details</h4>
                                        {project.content}
                                    </div>
                                </motion.div>
                            )
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Projects;
