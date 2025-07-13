import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { contactInfo } from '@/data/portfolio';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setStatus({ type: 'error', message: 'Please enter your name' });
      return false;
    }
    if (!formData.email.trim()) {
      setStatus({ type: 'error', message: 'Please enter your email' });
      return false;
    }
    if (!formData.email.includes('@')) {
      setStatus({ type: 'error', message: 'Please enter a valid email address' });
      return false;
    }
    if (!formData.subject.trim()) {
      setStatus({ type: 'error', message: 'Please enter a subject' });
      return false;
    }
    if (!formData.message.trim()) {
      setStatus({ type: 'error', message: 'Please enter your message' });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      // Create a properly formatted email body
      const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

---
Sent from your portfolio contact form
      `.trim();

      // Use a simple and reliable email service
      // You can replace this with your preferred email service
      const emailData = {
        service_id: 'service_5aq1x0m', // Replace with your EmailJS service ID
        template_id: 'template_cvc0ppq', // Replace with your EmailJS template ID
        user_id: '7f2hK6ibbLIPO8kXc', // Replace with your EmailJS user ID
        template_params: {
          to_email: contactInfo.email,
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      };

      // For now, let's use a simple approach that works reliably
      // This will open the user's email client with pre-filled data
      const mailtoUrl = `mailto:${contactInfo.email}?subject=${encodeURIComponent(`Portfolio Contact: ${formData.subject}`)}&body=${encodeURIComponent(
        `Hi Yuvraj,

I'm reaching out from your portfolio website.

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

Best regards,
${formData.name}`
      )}`;
      
      // Open email client
      window.location.href = mailtoUrl;
      
      setStatus({ 
        type: 'success', 
        message: 'Email client opened! Please send the message from there.' 
      });

      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setStatus({ type: 'idle', message: '' });
      }, 3000);

    } catch (error) {
      console.error('Email error:', error);
      setStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try emailing me directly at ' + contactInfo.email 
      });
    }
  };

  const isFormValid = formData.name.trim() && 
                     formData.email.trim() && 
                     formData.email.includes('@') && 
                     formData.subject.trim() && 
                     formData.message.trim();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="bg-card border border-border rounded-lg p-6 shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Mail className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Send me a message</h3>
            <p className="text-sm text-muted-foreground">
              I'll get back to you as soon as possible
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Subject *</Label>
            <Input
              id="subject"
              name="subject"
              type="text"
              placeholder="What's this about?"
              value={formData.subject}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell me about your project, question, or just say hello!"
              value={formData.message}
              onChange={handleInputChange}
              rows={5}
              required
            />
          </div>

          {status.message && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex items-center gap-2 p-3 rounded-md text-sm ${
                status.type === 'success' 
                  ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800'
                  : status.type === 'error'
                  ? 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800'
                  : 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800'
              }`}
            >
              {status.type === 'success' ? (
                <CheckCircle className="w-4 h-4" />
              ) : status.type === 'error' ? (
                <AlertCircle className="w-4 h-4" />
              ) : (
                <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
              )}
              {status.message}
            </motion.div>
          )}

          <Button
            type="submit"
            disabled={status.type === 'loading' || !isFormValid}
            className="w-full hover:shadow-lg hover:shadow-primary/20 transition-all duration-200"
          >
            {status.type === 'loading' ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </form>

        <div className="mt-6 pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            Or email me directly at{' '}
            <a 
              href={`mailto:${contactInfo.email}`}
              className="text-primary hover:underline"
            >
              {contactInfo.email}
            </a>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactForm; 