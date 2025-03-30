import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu as MenuIcon, Home, Calendar, User, BookOpen, Settings, Globe } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '../../../shared/ui/sheet';
import { cn } from '../../../shared/lib/cn';

const menuItems = [
  { name: 'Главная', path: '/', icon: Home },
  { name: 'Планер', path: '/planner', icon: Calendar },
  { name: 'Профиль', path: '/profile', icon: User },
  { name: 'Курсы', path: '/courses', icon: BookOpen },
  { name: 'Настройки', path: '/settings', icon: Settings },
  { name: 'Глоссарий', path: '/glossary', icon: Globe },
];

const MenuContent = ({ className = "", isMobile = false, onClose }: { className?: string, isMobile?: boolean, onClose?: () => void }) => {
  const location = useLocation();
  const [prevActive, setPrevActive] = useState(location.pathname);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (prevActive !== location.pathname) {
      setIsAnimating(true);
      setPrevActive(location.pathname);
      
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 800);
      
      return () => clearTimeout(timer);
    }
  }, [location.pathname, prevActive]);

  return (
    <div className={cn(
      isMobile 
        ? "flex flex-col gap-2 p-[24px] pt-[60px]" 
        : "flex flex-col gap-2 p-[24px] pr-0 pt-[60px]",
      className
    )}>
      {menuItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.name}
            to={item.path}
            onClick={onClose}
            className={cn(
              "flex items-center gap-3 px-4 py-2 text-[#FAFAFA] transition-all duration-700 relative",
              isMobile ? "rounded-xl hover:bg-[#F5F5F5] hover:text-[#252525]" : "rounded-l-[25px]  hover:text-[#252525] relative group",
              isActive && "bg-[#F5F5F5] text-foreground"
            )}
          >
            <Icon className={cn(
              "w-5 h-5 flex-shrink-0 transition-transform duration-300",
              !isMobile && "group-hover:scale-110 group-hover:rotate-3"
            )} />
            <span className={cn(
              "text-sm font-medium whitespace-nowrap transition-transform duration-300",
              !isMobile && "group-hover:translate-x-2",
              !isMobile && "opacity-0 group-hover:opacity-100"
            )}>
              {item.name}
            </span>
            {!isMobile && isActive && (
              <div 
               className={cn(
                "absolute inset-0 bg-[#F5F5F5] -z-10 rounded-l-[25px] pr-0",
                isAnimating && "menu-background-slide"
              )}>
                <div className="before:content-[''] before:absolute before:bg-transparent before:bottom-full before:right-0 before:h-[150%] before:w-[24px] before:rounded-br-[25px] before:shadow-[0_20px_0_0_#F5F5F5]" />
                <div className="after:content-[''] after:absolute after:bg-transparent after:top-full after:right-0 after:h-[150%] after:w-[24px] after:rounded-tr-[25px] after:shadow-[0_-20px_0_0_#F5F5F5]" />
              </div>
            )}
          </Link>
        );
      })}
    </div>
  );
};

const NavigationMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu */}
      <div className="md:hidden">
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <button className="p-2">
              <MenuIcon className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className={cn(
              "w-[280px] p-0 bg-[#B291FF] overflow-hidden transform-gpu transition-transform duration-1000 ease-in-out",
              isMenuOpen ? "animate-slideIn" : "animate-slideOut"
            )}
            onInteractOutside={handleMenuClose}
          >
            <MenuContent isMobile onClose={handleMenuClose} />
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Menu */}
      <div 
        className="hidden md:block fixed left-0 top-[4em] bg-[#B291FF] rounded-tr-[25px] h-[calc(100vh-4em)] overflow-hidden transition-all duration-300 w-[100px] hover:w-[200px] group z-[10]"
      >
        <MenuContent />
      </div>
    </>
  );
};

export default NavigationMenu;