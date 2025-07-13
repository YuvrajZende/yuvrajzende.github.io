import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProfileCardProps {
  name: string;
  title: string;
  handle: string;
  status: string;
  contactText: string;
  avatarUrl: string;
  showUserInfo?: boolean;
  enableTilt?: boolean;
  onContactClick?: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  title,
  handle,
  status,
  contactText,
  avatarUrl,
  showUserInfo = true,
  enableTilt = true,
  onContactClick
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!enableTilt) return;
    
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    if (!enableTilt) return;
    
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      className="relative w-80 h-96 perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      <motion.div
        className="w-full h-full relative"
        style={{
          rotateX: enableTilt ? rotateX : 0,
          rotateY: enableTilt ? rotateY : 0,
          transformStyle: 'preserve-3d',
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Main Card */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-2xl"
          style={{ transform: 'translateZ(0px)' }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Avatar Section */}
          <div className="flex flex-col items-center mb-6">
            <motion.div
              className="relative w-24 h-24 mb-4"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-background overflow-hidden">
                  <img
                    src={avatarUrl}
                    alt={name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-white text-2xl font-bold hidden">
                    {name.charAt(0)}
                  </div>
                </div>
              </div>
              
              {/* Status Indicator */}
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-background flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </motion.div>

            {/* Name and Title */}
            <div className="text-center">
              <h2 className="text-xl font-bold text-foreground mb-1">{name}</h2>
              <p className="text-sm text-muted-foreground mb-2">{title}</p>
              <p className="text-xs text-primary font-medium">@{handle}</p>
            </div>
          </div>

          {/* Status */}
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center gap-2 bg-green-500/20 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              {status}
            </div>
          </div>

          {/* User Info (if enabled) */}
          {showUserInfo && (
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Location</span>
                <span className="text-foreground font-medium">Belgavi, India</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Experience</span>
                <span className="text-foreground font-medium">Fresher</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Focus</span>
                <span className="text-foreground font-medium">AI/ML, Web Dev</span>
              </div>
            </div>
          )}

          {/* Contact Button */}
          <motion.div
            className="flex gap-2"
            style={{ transform: 'translateZ(20px)' }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={onContactClick}
                className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Mail className="w-4 h-4 mr-2" />
                {contactText}
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Glow Effect */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"
              style={{ transform: 'translateZ(-10px)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default ProfileCard; 