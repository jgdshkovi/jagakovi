
import { useState, useRef } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const { toast } = useToast();
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!form.current) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Initialize EmailJS with your public key
    // You need to replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
    emailjs.init('NcAxIILtCvx7_CII6');

    // Send the email using EmailJS
    // You need to replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual EmailJS service ID and template ID
    emailjs.sendForm('service_72a0r7a', 'template_jagakovi', form.current)
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error('Failed to send email:', error.text);
        toast({
          title: "Failed to send message",
          description: "There was a problem sending your message. Please try again later.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-trendy-primary">Get In Touch</h2>
          <p className="text-trendy-neutral">
            Have a project in mind or want to discuss potential opportunities? I'm just a message away.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="md:col-span-1 space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-trendy-secondary p-3 rounded-lg">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1 text-trendy-primary">Email</h3>
                    <a href="mailto:jagakovi@gmail.com" className="text-sm text-trendy-neutral hover:text-trendy-secondary">
                      jagakovi@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-trendy-secondary p-3 rounded-lg">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1 text-trendy-primary">Phone</h3>
                    <a href="tel:+14084754078" className="text-sm text-trendy-neutral hover:text-trendy-secondary">
                      +1 (408) 475-4078
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-trendy-secondary p-3 rounded-lg">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1 text-trendy-primary">Location</h3>
                    <p className="text-sm text-trendy-neutral">
                      California, CA
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-medium mb-4 text-trendy-primary">Connect with me</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/jgdshkovi" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-trendy-accent hover:bg-trendy-secondary/20 transition-colors p-3 rounded-lg"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5 text-trendy-primary" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/jgdshkovi" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-trendy-accent hover:bg-trendy-secondary/20 transition-colors p-3 rounded-lg"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5 text-trendy-primary" />
                  </a>
                  <a 
                    href="https://jgdshkovi.github.io/portfolio" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-trendy-accent hover:bg-trendy-secondary/20 transition-colors p-3 rounded-lg"
                    aria-label="Portfolio"
                  >
                    <ArrowUpRight className="h-5 w-5 text-trendy-primary" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 bg-white p-8 rounded-xl shadow-sm border border-border">
            <h3 className="text-xl font-bold mb-6 text-trendy-primary">Send Me a Message</h3>
            <form ref={form} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1 text-trendy-primary">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="from_name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-trendy-secondary/30 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1 text-trendy-primary">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="from_email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-trendy-secondary/30 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1 text-trendy-primary">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-trendy-secondary/30 transition-all"
                  placeholder="Project Inquiry"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1 text-trendy-primary">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-trendy-secondary/30 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-trendy-secondary hover:bg-trendy-secondary/90 text-white"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
