import { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

  export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
    
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  const form = e.currentTarget;
  const formData = new FormData(form);

  try {
    const response = await fetch("https://formspree.io/f/xrenekoe", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      form.reset();
      toast({
        title: "Message sent successfully! ",
        description: "Your message has been sent successfully. I'll contact you soon",
      });
    } else {
      toast({
        title: "Failed to send message",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  } catch (error) {
    toast({
      title: "Something went wrong",
      description: "Please try again later.",
      variant: "destructive",
    });
  }

  setIsSubmitting(false);
};

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F5E2DE]/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6 tracking-tight">
            Get in Touch
          </h2>
          <div className="w-24 h-1.5 bg-accent rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-2"
          >
            <h3 className="text-3xl font-heading font-bold text-primary mb-4">Let's Connect</h3>
            <p className="text-primary/70 mb-12 text-lg leading-relaxed">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-8">
              <div className="group flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[#F5E2DE]/50 flex items-center justify-center shrink-0 border border-[#F5E2DE] group-hover:bg-accent group-hover:border-accent transition-colors duration-300">
                  <Mail className="text-accent group-hover:text-white transition-colors duration-300" size={24} />
                </div>
                <div className="pt-1">
                  <h4 className="text-sm font-semibold text-primary/50 uppercase tracking-wider mb-1">Email</h4>
                  <a href="mailto:aleeshatariq4499@example.com" className="text-lg text-primary font-semibold hover:text-accent transition-colors">
                    aleeshatariq4499@example.com
                  </a>
                </div>
              </div>
              
              <div className="group flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[#F5E2DE]/50 flex items-center justify-center shrink-0 border border-[#F5E2DE] group-hover:bg-accent group-hover:border-accent transition-colors duration-300">
                  <Phone className="text-accent group-hover:text-white transition-colors duration-300" size={24} />
                </div>
                <div className="pt-1">
                  <h4 className="text-sm font-semibold text-primary/50 uppercase tracking-wider mb-1">Phone</h4>
                  <a href="tel:+923229629083" className="text-lg text-primary font-semibold hover:text-accent transition-colors">
                    +92 322 962 9083
                  </a>
                </div>
              </div>

              <div className="group flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[#F5E2DE]/50 flex items-center justify-center shrink-0 border border-[#F5E2DE] group-hover:bg-accent group-hover:border-accent transition-colors duration-300">
                  <MapPin className="text-accent group-hover:text-white transition-colors duration-300" size={24} />
                </div>
                <div className="pt-1">
                  <h4 className="text-sm font-semibold text-primary/50 uppercase tracking-wider mb-1">Location</h4>
                  <span className="text-lg text-primary font-semibold">
                    Sambrial, Pakistan
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-16">
              <a href="https://github.com/Aleesha1234" className="group relative w-12 h-12 rounded-full border-2 border-gray-100 flex items-center justify-center text-primary overflow-hidden transition-all duration-300 hover:border-accent" aria-label="GitHub">
                <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <Github size={20} className="relative z-10 group-hover:text-white transition-colors duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/aleesha-tariq-se" className="group relative w-12 h-12 rounded-full border-2 border-gray-100 flex items-center justify-center text-primary overflow-hidden transition-all duration-300 hover:border-accent" aria-label="LinkedIn">
                <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <Linkedin size={20} className="relative z-10 group-hover:text-white transition-colors duration-300" />
              </a>
            </div>
          </motion.div>
          
{/* Contact Form */}
<motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
  className="lg:col-span-3"
>
  <form 
    onSubmit={handleSubmit}
    className="bg-white border border-gray-100 p-8 md:p-10 rounded-[24px] shadow-[0_10px_40px_-10px_rgba(29,58,77,0.08)]"
  >
    <h3 className="text-2xl font-heading font-bold text-primary mb-8">Send a Message</h3>
    
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-semibold text-primary/80 ml-1">
            Your Name
          </label>
          <input 
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50/50 text-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all placeholder:text-gray-400 font-medium"
            placeholder="Ahmed Ali"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-semibold text-primary/80 ml-1">
            Email Address
          </label>
          <input 
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50/50 text-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all placeholder:text-gray-400 font-medium"
            placeholder="ahmed.ali@example.com"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-semibold text-primary/80 ml-1">
          Your Message
        </label>
        <textarea 
          id="message"
          name="message"
          required
          rows={6}
          className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50/50 text-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all resize-none placeholder:text-gray-400 font-medium"
          placeholder="Tell me about your project or inquiry..."
        ></textarea>
      </div>
      
      <button 
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 flex items-center justify-center gap-2 mt-4 hover:-translate-y-0.5"
      >
        {isSubmitting ? (
  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
) : (
  <>
    <span>Send Message</span>
    <Send size={18} />
  </>
)}
      </button>
    </div>
  </form>
</motion.div>
        </div>
      </div>
    </section>
  );
  }