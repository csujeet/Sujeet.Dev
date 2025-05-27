import React, { useRef, useState } from 'react';
import GlitchText from '../ui/GlitchText';
import { Send, Linkedin, Github, Twitter, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser'; // <-- Add this import

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null); // Optional: for error handling
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setError(null);

  if (!formRef.current) return;

  const SERVICE_ID = 'service_d3mdhgn';
  const TEMPLATE_ID = 'template_5pd7qto'; // To you
  const USER_ID = '8A_DE2qIebFup7Hgo';

  // Send to owner (you)
  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, USER_ID)
    .then(() => {
      // Send auto-reply to user
      emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        to_email: formState.email,
        to_name: formState.name,
        to_message: formState.message,
      }, USER_ID);

      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    })
    .catch(() => {
      setIsSubmitting(false);
      setError('Failed to send message. Please try again.');
    });
};

  const socialLinks = [
    { name: 'LinkedIn', icon: <Linkedin size={20} />, url: 'https://linkedin.com/in/' },
    { name: 'GitHub', icon: <Github size={20} />, url: 'https://github.com/' },
    { name: 'Twitter', icon: <Twitter size={20} />, url: 'https://twitter.com/' },
    { name: 'Email', icon: <Mail size={20} />, url: 'mailto:csujeet8926@gmail.com' },
  ];

  return (
    <section id="contact" className="py-20 bg-matrix-black relative">
      {/* Matrix code background */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="matrix-code-bg h-full w-full text-matrix-green text-opacity-10 text-xs leading-none">
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} className="whitespace-nowrap">
              {Array.from({ length: 100 }).map((_, j) => (
                <span key={j}>{String.fromCharCode(33 + Math.floor(Math.random() * 94))}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="section-container relative z-10">
        <h2 className="section-heading text-center mb-16">
          <GlitchText text="Get In Touch" />
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-matrix-green">Let's Connect</h3>
            <p className="text-matrix-green opacity-80 mb-8">
              Have a project in mind or just want to chat about technology? 
              I'm always open to new opportunities and interesting conversations.
              Fill out the form or reach out through any of the platforms below.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-matrix-dark-green flex items-center justify-center mr-4">
                  <Mail size={18} className="text-matrix-green" />
                </div>
                <span className="text-matrix-green">csujeet8926@gmail.com</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-matrix-dark-green hover:border-matrix-green flex items-center justify-center transition-colors duration-300"
                  aria-label={link.name}
                >
                  <span className="text-matrix-green">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <form 
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-matrix-gray bg-opacity-30 p-8 rounded-lg border border-matrix-dark-green"
            >
              {/* Terminal-like header */}
              <div className="absolute -top-5 left-4 right-4 h-10 bg-matrix-dark-green rounded-t-lg flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-xs text-matrix-green">message_transmission.sh</div>
              </div>

              <div className="space-y-6 mt-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-matrix-green mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-matrix-black border border-matrix-dark-green focus:border-matrix-green text-matrix-green p-3 rounded-md focus:outline-none transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-matrix-green mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-matrix-black border border-matrix-dark-green focus:border-matrix-green text-matrix-green p-3 rounded-md focus:outline-none transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-matrix-green mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-matrix-black border border-matrix-dark-green focus:border-matrix-green text-matrix-green p-3 rounded-md focus:outline-none transition-colors"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className="matrix-button w-full flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-matrix-green" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Transmitting...
                    </span>
                  ) : submitted ? (
                    <span className="flex items-center">
                      Message Received
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send size={18} className="mr-2" />
                      Send Message
                    </span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;