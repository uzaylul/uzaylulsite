/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { 
  Youtube, 
  Instagram, 
  Music2, 
  MessageSquare, 
  ShoppingBag, 
  Twitch, 
  Linkedin, 
  Radio, 
  Github, 
  Twitter, 
  Globe, 
  Gamepad2, 
  Mail,
  Share2,
  ChevronRight,
  Copy,
  Check,
  Wallet,
  Target,
  User
} from "lucide-react";

type Language = "en" | "tr";

const TRANSLATIONS = {
  en: {
    description: "You can access all my social media and gaming accounts from the tabs below.",
    categories: {
      highlights: "Highlights",
      store: "Store",
      socials: "Socials & Others",
      games: "Game Profiles",
      gamingIds: "Gaming IDs",
      crosshairs: "Crosshairs",
      crypto: "Crypto"
    },
    stats: {
      subscribers: "Subscribers",
      likes: "Likes",
      followers: "Followers",
      members: "Members"
    },
    toast: {
      copied: "Copied to clipboard!",
      shareError: "Sharing failed, link copied instead."
    },
    footer: "Built with precision and love"
  },
  tr: {
    description: "Tüm sosyal medya ve oyun hesaplarıma aşağıdaki sekmelerden ulaşabilirsiniz.",
    categories: {
      highlights: "Öne Çıkanlar",
      store: "Mağaza",
      socials: "Sosyal Medya ve Diğerleri",
      games: "Oyun Profilleri",
      gamingIds: "Oyun Kimlikleri",
      crosshairs: "Nişangahlar",
      crypto: "Kripto"
    },
    stats: {
      subscribers: "Abone",
      likes: "Beğeni",
      followers: "Takipçi",
      members: "Üye"
    },
    toast: {
      copied: "Panoya kopyalandı!",
      shareError: "Paylaşım başarısız, link kopyalandı."
    },
    footer: "Hassasiyet ve sevgiyle yapıldı"
  }
};

const LINKS = (lang: Language) => [
  {
    category: TRANSLATIONS[lang].categories.highlights,
    items: [
      { name: `YouTube | 7.41K+ ${TRANSLATIONS[lang].stats.subscribers}`, url: "https://youtube.com/@uzaylul", icon: Youtube, color: "hover:border-red-500/50" },
      { name: "YouTube (2)", url: "https://youtube.com/@uzaylul2", icon: Youtube, color: "hover:border-red-500/50" },
      { name: "Instagram", url: "https://instagram.com/uzaylul", icon: Instagram, color: "hover:border-pink-500/50" },
      { name: `TikTok | 36.9K+ ${TRANSLATIONS[lang].stats.likes}`, url: "https://tiktok.com/@uzaylul", icon: Music2, color: "hover:border-white/50" },
      { name: "Reddit", url: "https://reddit.com/r/uzaylul", icon: MessageSquare, color: "hover:border-orange-500/50" },
    ]
  },
  {
    category: TRANSLATIONS[lang].categories.store,
    items: [
      { name: "uzaylul fan | Polytoria", url: "https://polytoria.com/store/166949", icon: ShoppingBag, color: "hover:border-blue-500/50" },
      { name: "uzaylul t-shirt black | Roblox", url: "https://roblox.com/catalog/14365795545", icon: ShoppingBag, color: "hover:border-blue-500/50" },
      { name: "uzaylul hearted t-shirt black | Roblox", url: "https://roblox.com/catalog/13602027352", icon: ShoppingBag, color: "hover:border-blue-500/50" },
      { name: "uzaylul t-shirt white | Roblox", url: "https://roblox.com/catalog/14714456686", icon: ShoppingBag, color: "hover:border-blue-500/50" },
      { name: "uzaylul hearted t-shirt white | Roblox", url: "https://roblox.com/catalog/13900338614", icon: ShoppingBag, color: "hover:border-blue-500/50" },
      { name: `Roblox Group | 1.1K+ ${TRANSLATIONS[lang].stats.members}`, url: "https://roblox.com/communities/8649115/uzaylul#!/store", icon: ShoppingBag, color: "hover:border-blue-500/50" },
    ]
  },
  {
    category: TRANSLATIONS[lang].categories.socials,
    items: [
      { name: `Twitch | 5.7K+ ${TRANSLATIONS[lang].stats.followers}`, url: "https://twitch.tv/uzaylul", icon: Twitch, color: "hover:border-purple-500/50" },
      { name: "Kick", url: "https://kick.com/uzaylul", icon: Radio, color: "hover:border-green-500/50" },
      { name: "LinkedIn", url: "https://linkedin.com/in/uzaylul", icon: Linkedin, color: "hover:border-blue-600/50" },
      { name: "Mastodon", url: "https://mastodon.social/@uzaylul", icon: Globe, color: "hover:border-blue-400/50" },
      { name: "Pinterest", url: "https://pinterest.com/uzaylul", icon: Globe, color: "hover:border-red-600/50" },
      { name: "Medium", url: "https://medium.com/@uzaylul", icon: Globe, color: "hover:border-white/50" },
      { name: "Rumble", url: "https://rumble.com/user/uzaylul", icon: Radio, color: "hover:border-green-400/50" },
      { name: "Odysee", url: "https://odysee.com/@uzaylul:a", icon: Radio, color: "hover:border-red-400/50" },
      { name: "BiliBili", url: "https://space.bilibili.com/3494349868370156", icon: Globe, color: "hover:border-blue-300/50" },
      { name: "X (Twitter)", url: "https://x.com/uzaylul", icon: Twitter, color: "hover:border-white/50" },
      { name: "GitHub", url: "https://github.com/uzaylul", icon: Github, color: "hover:border-white/50" },
      { name: "Spotify", url: "https://open.spotify.com/user/317cyiznuu5m52kpbujoaoz2q5sa", icon: Music2, color: "hover:border-green-500/50" },
      { name: "Bluesky", url: "https://bsky.app/profile/uzaylul.com", icon: Globe, color: "hover:border-blue-500/50" },
    ]
  },
  {
    category: TRANSLATIONS[lang].categories.games,
    items: [
      { name: `Roblox | 3.1K+ ${TRANSLATIONS[lang].stats.followers}`, url: "https://roblox.com/users/122482369", icon: Gamepad2, color: "hover:border-white/50" },
      { name: "Polytoria", url: "https://polytoria.com/u/uzaylul", icon: Gamepad2, color: "hover:border-blue-400/50" },
      { name: "Steam", url: "https://steamcommunity.com/id/uzaylul", icon: Gamepad2, color: "hover:border-blue-600/50" },
      { name: "Minecraft", url: "https://namemc.com/profile/uzaylul.1", icon: Gamepad2, color: "hover:border-green-600/50" },
      { name: "Speedrun.com", url: "https://speedrun.com/users/uzaylul", icon: Gamepad2, color: "hover:border-yellow-500/50" },
      { name: "Epic Games", url: "https://store.epicgames.com/tr/u/989551cb749940d2a498fdd1b5bfa17e", icon: Gamepad2, color: "hover:border-white/50" },
      { name: "PSN Profiles", url: "https://psnprofiles.com/uzaylul", icon: Gamepad2, color: "hover:border-blue-700/50" },
      { name: "Xbox", url: "https://xboxgamertag.com/search/uzaylul", icon: Gamepad2, color: "hover:border-green-500/50" },
      { name: "GOG", url: "https://gog.com/u/uzaylul", icon: Gamepad2, color: "hover:border-purple-600/50" },
      { name: "Rockstar Games", url: "https://socialclub.rockstargames.com/member/uzaylul", icon: Gamepad2, color: "hover:border-yellow-600/50" },
      { name: "Itch.io", url: "https://uzaylul.itch.io", icon: Gamepad2, color: "hover:border-red-500/50" },
    ]
  }
];

const GAMING_IDS = [
  { platform: "Battle.net", id: "uzaylul#2120" },
  { platform: "EA", id: "uzaylul" },
  { platform: "Riot", id: "uzaylul#000" },
  { platform: "Ubisoft", id: "uzaylul" },
];

const CROSSHAIRS = [
  { game: "CS2", code: "CSGO-TpORA-p9Ley-TLQ3P-HzXJY-U9z6A" },
  { game: "Valorant", code: "0;P;c;5;h;0;d;1;z;3;f;0;s;0;0t;5;0l;1;0v;0;0g;1;0o;0;0a;1;0e;1.0;1b;0" },
];

const CRYPTO = [
  { name: "MetaMask", address: "0x7EBDC5a337B71ea3dA02e959c491069d5ecE40CB" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button 
      onClick={handleCopy}
      className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white"
    >
      {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
    </button>
  );
}

export default function App() {
  const [lang, setLang] = useState<Language>("en");
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const showToast = (message: string) => {
    setToast(message);
  };

  const handleShare = async () => {
    const shareData = {
      title: 'uzaylul | links',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // Fallback if sharing is cancelled or fails
        navigator.clipboard.writeText(window.location.href);
        showToast(TRANSLATIONS[lang].toast.shareError);
      }
    } else {
      // Desktop fallback
      navigator.clipboard.writeText(window.location.href);
      showToast(TRANSLATIONS[lang].toast.copied);
    }
  };

  const t = TRANSLATIONS[lang];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-white/10 selection:text-white">
      {/* Background Decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-blue-500/10 to-transparent blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Language Switcher */}
      <div className="fixed top-6 right-6 z-50 flex gap-2">
        <button 
          onClick={() => setLang("en")}
          className={`w-10 h-10 rounded-full flex items-center justify-center text-xl border transition-all ${lang === "en" ? "bg-white/10 border-white/20 scale-110" : "bg-black/40 border-white/5 opacity-50 hover:opacity-100"}`}
          title="English"
        >
          🇺🇸
        </button>
        <button 
          onClick={() => setLang("tr")}
          className={`w-10 h-10 rounded-full flex items-center justify-center text-xl border transition-all ${lang === "tr" ? "bg-white/10 border-white/20 scale-110" : "bg-black/40 border-white/5 opacity-50 hover:opacity-100"}`}
          title="Türkçe"
        >
          🇹🇷
        </button>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] px-6 py-3 bg-white text-black rounded-full font-bold shadow-2xl text-sm"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>

      <main className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        {/* Profile Header */}
        <header className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative mb-8"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full p-1 bg-[#944A32] shadow-2xl">
              <img 
                src="https://yt3.googleusercontent.com/aKR0tENkLP16lcJlhHTfDPpK10-pZsyoZigXHvpTQwKTKxhxaTlRog_--8I01s7uztU-elMjpg=s3840-c-k-c0x00ffffff-no-rj" 
                alt="uzaylul" 
                className="w-full h-full rounded-full object-cover border-4 border-[#0a0a0a]"
                referrerPolicy="no-referrer"
              />
            </div>
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleShare}
              className="absolute -bottom-1 -right-1 p-2 bg-[#1a1a1a] rounded-full shadow-lg border border-white/10 cursor-pointer text-gray-400 hover:text-white transition-colors"
            >
              <Share2 size={18} />
            </motion.div>
          </motion.div>

          <motion.h1 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
          >
            uzaylul
          </motion.h1>

          <motion.p 
            key={lang}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 max-w-md leading-relaxed mb-8"
          >
            {t.description}
          </motion.p>

          <motion.div 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-2 px-5 py-2.5 bg-white/5 rounded-full border border-white/10 text-sm text-gray-400 hover:border-white/20 transition-colors group"
          >
            <Mail size={14} className="group-hover:text-white transition-colors" />
            <a href="mailto:uzaylul@gmail.com" className="group-hover:text-white transition-colors">uzaylul@gmail.com</a>
          </motion.div>
        </header>

        {/* Links Sections */}
        <motion.div 
          key={lang}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {LINKS(lang).map((section) => (
            <section key={section.category} className="space-y-4">
              <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 px-2">
                {section.category}
              </h2>
              <div className="grid gap-3">
                {section.items.map((link) => (
                  <motion.a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    whileHover={{ scale: 1.01, x: 4 }}
                    whileTap={{ scale: 0.99 }}
                    className={`group flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 transition-all duration-300 ${link.color}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2.5 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                        <link.icon size={20} className="text-gray-300 group-hover:text-white" />
                      </div>
                      <span className="font-medium text-gray-300 group-hover:text-white">{link.name}</span>
                    </div>
                    <ChevronRight size={18} className="text-gray-600 group-hover:text-white transition-colors" />
                  </motion.a>
                ))}
              </div>
            </section>
          ))}

          {/* Gaming IDs Section */}
          <section className="space-y-4">
            <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 px-2 flex items-center gap-2">
              <User size={12} /> {t.categories.gamingIds}
            </h2>
            <div className="grid gap-3">
              {GAMING_IDS.map((item) => (
                <motion.div
                  key={item.platform}
                  variants={itemVariants}
                  className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 rounded-xl bg-white/5">
                      <Gamepad2 size={20} className="text-gray-400" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{item.platform}</p>
                      <p className="font-medium text-gray-200">{item.id}</p>
                    </div>
                  </div>
                  <CopyButton text={item.id} />
                </motion.div>
              ))}
            </div>
          </section>

          {/* Crosshairs Section */}
          <section className="space-y-4">
            <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 px-2 flex items-center gap-2">
              <Target size={12} /> {t.categories.crosshairs}
            </h2>
            <div className="grid gap-3">
              {CROSSHAIRS.map((item) => (
                <motion.div
                  key={item.game}
                  variants={itemVariants}
                  className="flex flex-col gap-3 p-4 bg-white/5 rounded-2xl border border-white/5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Target size={16} className="text-blue-400" />
                      <span className="font-bold text-sm tracking-wide">{item.game} {t.categories.crosshairs}</span>
                    </div>
                    <CopyButton text={item.code} />
                  </div>
                  <div className="p-3 bg-black/40 rounded-xl border border-white/5">
                    <code className="text-xs text-gray-400 break-all leading-relaxed">{item.code}</code>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Crypto Section */}
          <section className="space-y-4">
            <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 px-2 flex items-center gap-2">
              <Wallet size={12} /> {t.categories.crypto}
            </h2>
            <div className="grid gap-3">
              {CRYPTO.map((item) => (
                <motion.div
                  key={item.name}
                  variants={itemVariants}
                  className="flex flex-col gap-3 p-4 bg-white/5 rounded-2xl border border-white/5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Wallet size={16} className="text-orange-400" />
                      <span className="font-bold text-sm tracking-wide">{item.name}</span>
                    </div>
                    <CopyButton text={item.address} />
                  </div>
                  <div className="p-3 bg-black/40 rounded-xl border border-white/5">
                    <code className="text-xs text-gray-400 break-all font-mono">{item.address}</code>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </motion.div>

        {/* Footer */}
        <footer className="mt-32 text-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="space-y-2">
              <p className="text-[10px] text-gray-600 font-black tracking-[0.3em] uppercase">
                © {new Date().getFullYear()} UZAYLUL
              </p>
              <p className="text-[9px] text-gray-700 font-medium tracking-widest uppercase">
                {t.footer}
              </p>
            </div>
          </motion.div>
        </footer>
      </main>
    </div>
  );
}
