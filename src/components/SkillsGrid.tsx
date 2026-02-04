import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, GitBranch, Terminal, Shield, LayoutDashboard, Activity } from 'lucide-react';

const skills = [
    {
        category: "Cloud Platforms",
        icon: Cloud,
        items: ["Azure App Service", "Azure Functions", "Azure SQL", "AWS (Basic)"],
        color: "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400"
    },
    {
        category: "CI/CD & Automation",
        icon: GitBranch,
        items: ["GitHub Actions", "Azure DevOps", "YAML Pipelines", "Release Strategies"],
        color: "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
    },
    {
        category: "Infrastructure as Code",
        icon: Terminal,
        items: ["Terraform", "Bicep", "ARM Templates", "Ansible"],
        color: "bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-400"
    },
    {
        category: "Containerization",
        icon: LayoutDashboard,
        items: ["Docker", "Kubernetes (Basic)", "Helm", "Container Registry"],
        color: "bg-orange-50 text-orange-700 dark:bg-orange-900/20 dark:text-orange-400"
    },
    {
        category: "Observability",
        icon: Activity,
        items: ["Azure Monitor", "Application Insights", "Prometheus", "Grafana"],
        color: "bg-sky-50 text-sky-700 dark:bg-sky-900/20 dark:text-sky-400"
    },
    {
        category: "Security",
        icon: Shield,
        items: ["Identity Management", "Key Vault", "Network Security Groups", "Secret Management"],
        color: "bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400"
    }
];

const SkillsGrid: React.FC = () => {
    return (
        <section>
            <div className="mb-12">
                <h2 className="text-3xl font-bold tracking-tight mb-4">Technical Arsenal</h2>
                <p className="text-lg text-muted-foreground max-w-2xl">
                    I focus on tools that enable automation, scalability, and reliability.
                    Here's the stack I work with daily.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                        <motion.div
                            key={skill.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-xl border border-muted bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/20"
                        >
                            <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg mb-4 ${skill.color}`}>
                                <Icon className="h-6 w-6" />
                            </div>

                            <h3 className="text-xl font-semibold mb-4">{skill.category}</h3>

                            <ul className="space-y-2">
                                {skill.items.map((item) => (
                                    <li key={item} className="flex items-center text-sm text-muted-foreground">
                                        <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default SkillsGrid;
