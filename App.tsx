import React from 'react';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Download, 
  ExternalLink, 
  CheckCircle2, 
  Palette, 
  Code2, 
  Image as ImageIcon, 
  PenTool,
  Menu,
  X
} from 'lucide-react';
import AIChat from './components/AIChat';
import { PERSONAL_INFO, SERVICES, PROJECTS, FREE_ASSETS, REVIEWS } from './constants';
import { AvailabilityStatus } from './types';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'layout': return <Palette className="w-6 h-6" />;
      case 'code': return <Code2 className="w-6 h-6" />;
      case 'image': return <ImageIcon className="w-6 h-6" />;
      case 'pen-tool': return <PenTool className="w-6 h-6" />;
      default: return <Code2 className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-dark-950 text-slate-200">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-dark-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 flex items-center gap-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-brand-400 to-purple-500 bg-clip-text text-transparent">
                MA
              </span>
              <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-xs font-medium text-green-400">{PERSONAL_INFO.availability}</span>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#about" className="hover:text-brand-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#services" className="hover:text-brand-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Services</a>
                <a href="#projects" className="hover:text-brand-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Work</a>
                <a href="#assets" className="hover:text-brand-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Assets</a>
                <a href="#reviews" className="hover:text-brand-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Reviews</a>
              </div>
            </div>

            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-dark-900 border-b border-white/5">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['About', 'Services', 'Projects', 'Assets', 'Reviews'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section id="about" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-sm font-medium tracking-wide">
                HELLO, I'M {PERSONAL_INFO.nickname.toUpperCase()}
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
                Creative <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-purple-500">Artist</span> &<br />
                UI <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-purple-500">Developer</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
                {PERSONAL_INFO.bio}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a 
                  href="#contact"
                  className="px-8 py-4 rounded-xl bg-brand-600 text-white font-semibold hover:bg-brand-500 transition-all shadow-lg shadow-brand-500/25 flex items-center justify-center gap-2"
                >
                  <Mail size={20} />
                  Contact Me
                </a>
                <a 
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-xl bg-slate-800 text-white font-semibold hover:bg-slate-700 transition-all border border-slate-700 flex items-center justify-center gap-2"
                >
                  <Github size={20} />
                  GitHub Profile
                </a>
              </div>
            </div>
            
            <div className="flex-1 relative">
              <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-500 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                <img 
                  src="https://picsum.photos/400/400?grayscale" 
                  alt={PERSONAL_INFO.name}
                  className="relative w-full h-full object-cover rounded-full border-4 border-slate-800 shadow-2xl"
                />
                
                {/* Floating Skill Badge */}
                <div className="absolute -bottom-6 -right-6 bg-dark-800 p-4 rounded-2xl border border-slate-700 shadow-xl flex items-center gap-3 animate-bounce delay-700">
                  <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                    <Code2 size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">React & TS</div>
                    <div className="text-xs text-slate-400">Expert Level</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GitHub Stats / Connector Section */}
        <section className="py-12 bg-dark-900/50 border-y border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-slate-400 mb-6">Connected Repositories & Activity</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-dark-800 p-6 rounded-xl border border-white/5 hover:border-brand-500/50 transition-colors group cursor-pointer">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2 text-slate-300 group-hover:text-white">
                                <Github size={20} />
                                <span className="font-semibold">portfolio-v1</span>
                            </div>
                            <span className="text-xs bg-slate-700 px-2 py-1 rounded-full text-slate-300">Public</span>
                        </div>
                        <p className="text-sm text-slate-500 text-left mb-4">The source code for this portfolio website using React and Tailwind.</p>
                        <div className="flex items-center gap-4 text-xs text-slate-400">
                            <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-yellow-400"></div> TypeScript</span>
                            <span>★ 12</span>
                            <span>Updated 2 days ago</span>
                        </div>
                    </div>
                     <div className="bg-dark-800 p-6 rounded-xl border border-white/5 hover:border-brand-500/50 transition-colors group cursor-pointer">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2 text-slate-300 group-hover:text-white">
                                <Github size={20} />
                                <span className="font-semibold">react-ui-kit</span>
                            </div>
                            <span className="text-xs bg-slate-700 px-2 py-1 rounded-full text-slate-300">Public</span>
                        </div>
                        <p className="text-sm text-slate-500 text-left mb-4">A reusable component library for modern web applications.</p>
                        <div className="flex items-center gap-4 text-xs text-slate-400">
                            <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-blue-400"></div> React</span>
                            <span>★ 45</span>
                            <span>Updated 1 week ago</span>
                        </div>
                    </div>
                    <div className="bg-dark-800 p-6 rounded-xl border border-white/5 hover:border-brand-500/50 transition-colors flex flex-col items-center justify-center text-center">
                        <h3 className="text-xl font-bold text-white mb-2">150+</h3>
                        <p className="text-slate-400 text-sm">Total Contributions this year</p>
                        <a href={PERSONAL_INFO.github} className="mt-4 text-brand-400 text-sm hover:underline">View GitHub Profile &rarr;</a>
                    </div>
                </div>
            </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-dark-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Services & Pricing</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">High-quality design and development solutions tailored to your needs.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {SERVICES.map((service) => (
                <div key={service.id} className="bg-dark-900 rounded-2xl p-6 border border-white/5 hover:border-brand-500/30 transition-all hover:-translate-y-1">
                  <div className="w-12 h-12 bg-brand-500/10 rounded-xl flex items-center justify-center text-brand-400 mb-6">
                    {getServiceIcon(service.icon)}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-slate-400 text-sm mb-4 h-10">{service.description}</p>
                  <div className="text-2xl font-bold text-white mb-6">{service.price}</div>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle2 size={16} className="text-brand-500 mt-0.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-2.5 rounded-lg border border-brand-500/30 text-brand-400 hover:bg-brand-500 hover:text-white transition-all text-sm font-medium">
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 bg-dark-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Recent Projects</h2>
                <p className="text-slate-400">A selection of my latest design and development work.</p>
              </div>
              <a href="#" className="text-brand-400 hover:text-brand-300 flex items-center gap-1">
                View All <ExternalLink size={16} />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {PROJECTS.map((project) => (
                <div key={project.id} className="group relative overflow-hidden rounded-2xl bg-dark-800 border border-white/5">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="inline-block px-3 py-1 bg-brand-500/20 text-brand-300 text-xs font-medium rounded-full mb-2 backdrop-blur-sm">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-slate-300 text-sm">{project.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Free Assets Section */}
        <section id="assets" className="py-24 bg-dark-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Free Assets</h2>
              <p className="text-slate-400">Resources I've created for the community.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {FREE_ASSETS.map((asset) => (
                <div key={asset.id} className="bg-dark-900 rounded-xl overflow-hidden border border-white/5 hover:border-brand-500/30 transition-all">
                  <div className="h-48 bg-slate-800 overflow-hidden relative">
                    <img src={asset.thumbnail} alt={asset.title} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-xs text-white">
                      {asset.type}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-white mb-1">{asset.title}</h3>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xs text-slate-500 flex items-center gap-1">
                        <Download size={14} /> {asset.downloadCount} downloads
                      </span>
                      <button className="text-sm text-brand-400 hover:text-white font-medium transition-colors">
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="py-24 bg-dark-900/50">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <h2 className="text-3xl font-bold text-white mb-12 text-center">Client Reviews</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {REVIEWS.map((review) => (
                 <div key={review.id} className="bg-dark-800 p-8 rounded-2xl border border-white/5 relative">
                   <div className="flex items-center gap-4 mb-6">
                     <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                     <div>
                       <h4 className="font-semibold text-white">{review.name}</h4>
                       <p className="text-sm text-slate-400">{review.role}</p>
                     </div>
                   </div>
                   <p className="text-slate-300 italic">"{review.content}"</p>
                   <div className="flex gap-1 mt-4 text-yellow-500">
                     {[...Array(review.rating)].map((_, i) => (
                       <span key={i}>★</span>
                     ))}
                   </div>
                 </div>
               ))}
             </div>
           </div>
        </section>

        {/* Footer / Contact */}
        <footer id="contact" className="bg-black py-12 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <h2 className="text-2xl font-bold text-white mb-8">Ready to start a project?</h2>
             <div className="flex justify-center gap-6 mb-12">
               <a href="#" className="p-3 bg-dark-800 rounded-full text-slate-400 hover:text-white hover:bg-brand-600 transition-all">
                 <Github size={20} />
               </a>
               <a href="#" className="p-3 bg-dark-800 rounded-full text-slate-400 hover:text-white hover:bg-blue-600 transition-all">
                 <Linkedin size={20} />
               </a>
               <a href="#" className="p-3 bg-dark-800 rounded-full text-slate-400 hover:text-white hover:bg-sky-500 transition-all">
                 <Twitter size={20} />
               </a>
             </div>
             <p className="text-slate-500 text-sm">
               © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
             </p>
          </div>
        </footer>

        <AIChat />
      </main>
    </div>
  );
}

export default App;