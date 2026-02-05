import React, { useState } from 'react';
import { Menu, X, Terminal, Github, Linkedin, Mail } from 'lucide-react';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigation = [
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-muted bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Terminal className="h-6 w-6 text-primary" />
                        <span className="font-bold text-lg tracking-tight">DevOps.Engineer</span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                            >
                                {item.name}
                            </a>
                        ))}
                        <div className="flex items-center gap-4 ml-4 border-l border-muted pl-4">
                            <a href="https://github.com/JulioJosueG" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                                <Github className="h-5 w-5" />
                            </a>
                            <a href="https://www.linkedin.com/in/julio-hernandez-8319a3114/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="mailto:juliohernandez@tartaro.net" className="text-muted-foreground hover:text-foreground">
                                <Mail className="h-5 w-5" />
                            </a>
                        </div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-muted-foreground hover:text-foreground"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-muted bg-background">
                    <div className="space-y-1 px-4 pb-3 pt-2">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="block py-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-md px-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
