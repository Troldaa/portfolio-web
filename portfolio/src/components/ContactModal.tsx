import React, { useState } from 'react';
import { Youtube, Instagram, Music2, MessageSquare, Copy, Check } from 'lucide-react';
import Modal from './Modal';
import { useLanguage } from '../context/LanguageContext';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('MiniOmega_69');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    { name: t.contact.youtube, icon: <Youtube size={20} />, href: 'https://youtube.com/@MiniOmega_69', color: 'bg-red-500' },
    { name: t.contact.instagram, icon: <Instagram size={20} />, href: 'https://instagram.com/jakubecz._.j', color: 'bg-pink-500' },
    { name: t.contact.tiktok, icon: <Music2 size={20} />, href: 'https://tiktok.com/@MiniOmega_69', color: 'bg-cyan-500' },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={t.contact.title}
    >
      <div className="space-y-8">
        <p className="text-gray-500 text-sm font-medium -mt-8">{t.contact.subtitle}</p>

        <div className="space-y-4">
           {/* Discord Feature Card */}
           <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex items-center justify-between group hover:bg-white/10 transition-all border-l-4 border-l-indigo-500">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-indigo-500/10 rounded-2xl text-indigo-400">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">{t.contact.discord}</h4>
                  <p className="text-lg font-bold">MiniOmega_69</p>
                </div>
              </div>
              <button
                onClick={copyToClipboard}
                className="p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all text-gray-400 hover:text-white flex items-center gap-2 text-xs font-bold"
              >
                {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                {copied ? t.contact.copied : t.contact.copy}
              </button>
           </div>

           {/* Other Socials Grid */}
           <div className="grid grid-cols-1 gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 border border-white/10 rounded-3xl p-5 flex items-center justify-between group hover:bg-white/10 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 ${social.color}/10 rounded-2xl text-${social.color.split('-')[1]}-500 group-hover:scale-110 transition-transform`}>
                      {social.icon}
                    </div>
                    <span className="font-bold">{social.name}</span>
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">Follow</div>
                </a>
              ))}
           </div>
        </div>

        <div className="pt-6 border-t border-white/5 text-center">
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-600 font-black">Czech Republic • Content Creator • 2024</p>
        </div>
      </div>
    </Modal>
  );
};

export default ContactModal;
