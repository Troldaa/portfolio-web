import React from 'react';
import { Send, Mail, User, MessageCircle } from 'lucide-react';
import Modal from './Modal';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`LET'S <span class="text-blue-500">TALK</span>`}
    >
      <div className="space-y-8">
        <p className="text-gray-500 text-sm font-medium -mt-8">Ready for your next big project?</p>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Name</label>
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition-colors">
                <User size={18} />
              </div>
              <input
                type="text"
                placeholder="Steve"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all placeholder:text-gray-700 font-medium"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Email</label>
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition-colors">
                <Mail size={18} />
              </div>
              <input
                type="email"
                placeholder="steve@minecraft.net"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all placeholder:text-gray-700 font-medium"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Message</label>
            <div className="relative group">
              <div className="absolute left-4 top-6 text-gray-500 group-focus-within:text-blue-500 transition-colors">
                <MessageCircle size={18} />
              </div>
              <textarea
                rows={4}
                placeholder="How can I help you?"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all placeholder:text-gray-700 font-medium resize-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-5 bg-gradient-to-r from-red-600 to-blue-700 rounded-3xl font-black text-sm uppercase tracking-widest shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1 transition-all active:translate-y-0 flex items-center justify-center gap-3"
          >
            Send Message <Send size={18} />
          </button>
        </form>

        <div className="flex justify-center gap-8 pt-4 border-t border-white/5">
           <div className="flex flex-col items-center gap-1">
              <span className="text-[10px] uppercase tracking-widest text-gray-600 font-bold">Discord</span>
              <span className="text-sm font-medium">MiniOmega#6969</span>
           </div>
           <div className="flex flex-col items-center gap-1">
              <span className="text-[10px] uppercase tracking-widest text-gray-600 font-bold">Location</span>
              <span className="text-sm font-medium">Czech Republic</span>
           </div>
        </div>
      </div>
    </Modal>
  );
};

export default ContactModal;
