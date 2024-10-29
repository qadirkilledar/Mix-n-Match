import React, { useState } from "react";
import {
  ChevronRight,
  Shield,
  Users,
  Code,
  Bot,
  Globe,
  ChevronDown,
} from "lucide-react";

const LandingPage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-blue-900 text-white overflow-hidden relative">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-blue-400/10 animate-pulse"
              style={{
                width: Math.random() * 100 + 50 + "px",
                height: Math.random() * 100 + 50 + "px",
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
                animationDelay: Math.random() * 2 + "s",
                animationDuration: Math.random() * 4 + 2 + "s",
              }}
            />
          ))}
        </div>
      </div>

      {/* Navbar with 3D effect */}
      <nav className="border-b border-blue-800/50 backdrop-blur-sm fixed w-full z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold relative">
            <span
              className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent 
                           hover:scale-110 transform transition-transform cursor-pointer
                           after:content-[''] after:absolute after:w-full after:h-1 after:-bottom-1 
                           after:left-0 after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400"
            >
              Mix-n-Match
            </span>
          </div>
          <div className="flex gap-6">
            {["Whitepaper", "Lite Paper", "About Us", "Documentation"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-blue-400 transition-all transform hover:scale-110 
                         relative after:content-[''] after:absolute after:w-0 after:h-0.5 
                         after:bg-blue-400 after:left-0 after:-bottom-1 
                         after:transition-all hover:after:w-full"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section with 3D video call mockup */}
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6 transform hover:scale-105 transition-transform">
              <h1 className="text-6xl font-bold leading-tight">
                <span className="block transform hover:translate-x-2 transition-transform">
                  Supercharge your
                </span>
                <span className="block transform hover:translate-x-4 transition-transform delay-75">
                  community with
                </span>
                <span
                  className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent
                               block transform hover:translate-x-6 transition-transform delay-100"
                >
                  live connections
                </span>
              </h1>
              <p className="text-lg text-blue-200 transform hover:translate-x-2 transition-transform">
                Mix-n-Match pioneers web3.0 social dynamics, seamlessly uniting
                users with random strangers in an immersive virtual window.
              </p>
              <button
                className="bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 rounded-xl font-semibold 
                               flex items-center gap-2 transition-all transform hover:scale-105 hover:shadow-lg 
                               hover:shadow-blue-500/20 group"
              >
                Get Started
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="flex-1">
              {/* 3D Video Call Interface Mockup */}
              <div
                className="relative transform transition-transform hover:scale-105 hover:rotate-1"
                style={{
                  perspective: "1000px",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div
                  className={`
                  bg-gradient-to-br from-blue-900/90 to-blue-800/90 
                  border-2 border-blue-700/50 rounded-2xl p-6
                  transform transition-transform duration-500
                  ${isHovered ? "rotate-y-5" : ""}
                `}
                >
                  <div className="bg-black/30 rounded-xl overflow-hidden">
                    {/* Video Call Grid Mockup */}
                    <div className="grid grid-cols-2 gap-2 p-4">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className="aspect-video bg-blue-900/50 rounded-lg overflow-hidden relative
                                              hover:ring-2 hover:ring-blue-400 transition-all transform hover:scale-105"
                        >
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Users className="w-12 h-12 text-blue-400/50" />
                          </div>
                          <div className="absolute bottom-2 left-2 bg-black/50 px-2 py-1 rounded text-sm">
                            User {i + 1}
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* Control Bar */}
                    <div className="flex justify-center gap-4 p-4 border-t border-blue-800/30">
                      {["microphone", "video", "screen", "chat"].map(
                        (control) => (
                          <button
                            key={control}
                            className="w-10 h-10 rounded-full bg-blue-800/50 hover:bg-blue-700/50 
                                                      transition-all transform hover:scale-110"
                          ></button>
                        )
                      )}
                    </div>
                  </div>
                </div>
                {/* 3D shadow effect */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-4 bg-blue-500/10 blur-xl rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section with floating cards */}
      <div className="py-20 bg-blue-950/50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 relative">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Core Features
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield />,
                title: "Token Gating",
                description:
                  "Secure access control through blockchain-based authentication",
              },
              {
                icon: <Bot />,
                title: "Bot Service",
                description:
                  "Intelligent automation for enhanced user experience",
              },
              {
                icon: <Code />,
                title: "iFrame Integration",
                description: "Seamless embedding into any website or platform",
              },
              {
                icon: <Users />,
                title: "Virtual Connections",
                description: "Real-time matching with global users",
              },
            ].map((feature, index) => (
              <div key={index} className="relative group">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl blur-xl opacity-0 
                               group-hover:opacity-20 transition-opacity"
                />
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Privacy Section with 3D globe */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div
            className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 border border-blue-800/30 rounded-2xl p-8
                        transform hover:scale-105 transition-transform"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Privacy First
            </h2>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <p className="text-blue-200 mb-4">
                  Our Zero Knowledge Proofs (ZKP) ensure your privacy while
                  maintaining security. Experience truly anonymous connections
                  without compromising on trust.
                </p>
                <button
                  className="bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 rounded-xl font-semibold 
                                 flex items-center gap-2 transition-all transform hover:scale-105 group"
                >
                  Learn More
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="flex-1 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl opacity-20" />
                <Globe className="w-full h-48 text-blue-400 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section with animated accordions */}
      <div className="py-20 bg-blue-950/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 max-w-2xl mx-auto">
            {[
              {
                question: "How does token gating work?",
                answer:
                  "Token gating uses blockchain technology to verify ownership of specific tokens, providing exclusive access to features and communities.",
              },
              {
                question: "Can I integrate Mix-n-Match into my website?",
                answer:
                  "Yes! Our iframe solution makes it easy to embed Mix-n-Match into any website with just a few lines of code.",
              },
              {
                question: "How do you ensure user privacy?",
                answer:
                  "We implement Zero Knowledge Proofs and advanced encryption to ensure complete privacy during all interactions.",
              },
            ].map((faq, index) => (
              <FaqItem key={index} {...faq} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer with gradient border */}
      <footer className="border-t border-blue-800/50 py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950 to-blue-900 opacity-50" />
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Mix-n-Match
              </h3>
              <p className="text-blue-200">Pioneering web3.0 social dynamics</p>
            </div>
            {[
              {
                title: "Resources",
                links: ["Documentation", "API Reference", "Tutorials"],
              },
              { title: "Company", links: ["About Us", "Careers", "Contact"] },
              {
                title: "Legal",
                links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
              },
            ].map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-2 text-blue-200">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="hover:text-blue-400 transition-colors transform hover:translate-x-1 inline-block"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div
    className="bg-blue-900/30 backdrop-blur-sm border border-blue-800/30 rounded-xl p-6 
                  hover:border-blue-700/50 transition-all transform hover:scale-105 hover:-rotate-1
                  relative group overflow-hidden"
  >
    <div
      className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 opacity-0 
                    group-hover:opacity-100 transition-opacity"
    />
    <div className="relative">
      <div className="text-blue-400 mb-4 transform group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="font-semibold text-xl mb-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
        {title}
      </h3>
      <p className="text-blue-200">{description}</p>
    </div>
  </div>
);

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="border border-blue-800/30 rounded-xl overflow-hidden 
                      transition-all transform hover:scale-101 hover:border-blue-700/50"
    >
      <button
        className="w-full px-6 py-4 flex justify-between items-center bg-blue-900/30 backdrop-blur-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-blue-400 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out bg-blue-900/20
                     ${isOpen ? "max-h-48 py-4" : "max-h-0"}`}
      >
        <p className="text-blue-200">{answer}</p>
      </div>
    </div>
  );
};

// Add floating animation effect component
const FloatingElement = ({ children, delay = 0 }) => (
  <div
    className="animate-float"
    style={{
      animation: `float 3s ease-in-out infinite`,
      animationDelay: `${delay}s`,
    }}
  >
    {children}
  </div>
);

// Add particle effect component
const ParticleEffect = () => (
  <div className="absolute inset-0 pointer-events-none">
    {[...Array(50)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-particle"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${Math.random() * 10 + 10}s`,
        }}
      />
    ))}
  </div>
);

// Add keyframe animations
const style = document.createElement("style");
style.textContent = `
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
      100% { transform: translateY(0px); }
    }
    
    @keyframes particle {
      0% { transform: translateY(0) translateX(0); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translateY(-100vh) translateX(100px); opacity: 0; }
    }
    
    @keyframes pulse-border {
      0% { border-color: rgba(96, 165, 250, 0.3); }
      50% { border-color: rgba(96, 165, 250, 0.6); }
      100% { border-color: rgba(96, 165, 250, 0.3); }
    }
    
    .animate-float {
      animation: float 3s ease-in-out infinite;
    }
    
    .animate-particle {
      animation: particle 10s linear infinite;
    }
    
    .pulse-border {
      animation: pulse-border 2s infinite;
    }
  `;
document.head.appendChild(style);

export default LandingPage;
