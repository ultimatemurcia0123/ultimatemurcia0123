'use client';

import { useState, type FormEvent } from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import { SITE_CONTENT } from '@/data/site-content';

const topics = ['Buying a property', 'Selling a property', 'Local support', 'General enquiry'];
export default function ContactDraft({ initialTopic, property, area }: { initialTopic: string; property: string; area: string }) {
  const [topic, setTopic] = useState(topics.includes(initialTopic) ? initialTopic : 'General enquiry');
  const [name, setName] = useState('');
  const [message, setMessage] = useState(property ? 'Hello, I’d like to know more about ' + property + '.' : area ? 'Hello, I’m interested in properties in ' + area + '.' : '');
  const { brand } = SITE_CONTENT;
  const body = ['Hello Christine,', '', message.trim(), '', name.trim() ? 'From: ' + name.trim() : ''].join('\n').trim();
  const subject = topic + (property ? ' — ' + property : '');
  function openDraft(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const method = (event.nativeEvent as SubmitEvent).submitter?.getAttribute('value');
    if (method === 'whatsapp') {
      window.open('https://wa.me/' + brand.whatsappNumber + '?text=' + encodeURIComponent(subject + '\n\n' + body), '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = 'mailto:' + brand.email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    }
  }
  return <form onSubmit={openDraft} className="surface-card contact-draft space-y-5">
    <div><h2 className="section-heading">Start your message</h2><p className="page-copy mt-3">Write a few details below, then open your email app or WhatsApp to send them.</p></div>
    <div className="grid sm:grid-cols-2 gap-5">
      <div><label htmlFor="contact-name" className="field-label">Your name <span className="font-normal text-neutral-500">(optional)</span></label><input id="contact-name" name="name" autoComplete="name" className="form-field" value={name} onChange={event => setName(event.target.value)} maxLength={100} /></div>
      <div><label htmlFor="contact-topic" className="field-label">What can we help with?</label><select id="contact-topic" name="topic" className="form-field" value={topic} onChange={event => setTopic(event.target.value)}>{topics.map(item => <option key={item}>{item}</option>)}</select></div>
    </div>
    <div><label htmlFor="contact-message" className="field-label">Your message</label><textarea id="contact-message" name="message" className="form-field resize-y min-h-40" rows={6} required maxLength={1500} value={message} onChange={event => setMessage(event.target.value)} placeholder="Tell us what you’re looking for, or a little about the home you’d like to sell." /></div>
    <div className="flex flex-wrap gap-3"><button type="submit" value="email" className="action-primary"><Mail size={16} aria-hidden="true" />Open email draft</button><button type="submit" value="whatsapp" className="action-secondary"><MessageCircle size={16} aria-hidden="true" />Open WhatsApp draft</button></div>
    <p className="text-xs text-neutral-500 leading-relaxed">You’ll review and send the message in your chosen app. Nothing is sent from this form.</p>
  </form>;
}
