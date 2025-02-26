
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MessageSquare, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export const ContactSection = () => {
  const { toast } = useToast();
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: 'Email',
      value: 'contact@example.com'
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: 'Phone',
      value: '+1 (555) 123-4567'
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-primary" />,
      title: 'Social',
      value: '@portfolio'
    }
  ];

  return (
    <section id="contact" className="section-container">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gradient">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-lg">
            Let's connect and discuss opportunities
          </p>
        </div>

        {!isVisible ? (
          <div className="flex justify-center">
            <button
              onClick={() => setIsVisible(true)}
              className="relative group px-8 py-4 bg-primary/10 border border-primary/20 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-primary/20 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 font-semibold text-xl text-gradient">
                Click Me!
              </div>
              <div className="absolute -inset-full group-hover:inset-0 transition-all duration-300 bg-gradient-to-r from-primary/10 to-purple-400/10 opacity-0 group-hover:opacity-100 animate-pulse" />
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
            <Card className="glass-card animate-scale-in">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-center gap-4">
                    {method.icon}
                    <div>
                      <h3 className="font-medium">{method.title}</h3>
                      <p className="text-muted-foreground">{method.value}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="glass-card animate-scale-in">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-background/50"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-background/50"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-background/50 min-h-[120px]"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-primary/10 hover:bg-primary/20 border border-primary/20 rounded-lg transition-colors duration-200"
                  >
                    Send Message
                  </button>
                </form>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

