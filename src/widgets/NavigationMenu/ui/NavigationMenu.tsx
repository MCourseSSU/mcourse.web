import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu as MenuIcon } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/shared/ui/sheet';
import { cn } from '@/shared/lib/cn';
import styles from './NavigationMenu.module.css';
import { MenuItems, MenuItem } from '../model/MenuItem';

const NavigationMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const renderMenuItem = (item: MenuItem, isMobile = false) => {
    const Icon = item.icon;
    const isActive = location.pathname === item.path;
    
    return (
      <Link
        key={item.name}
        to={item.path}
        onClick={isMobile ? () => setIsMenuOpen(false) : undefined}
        className={cn(
          "flex items-center gap-3 px-4 py-2 text-[#FAFAFA] transition-all duration-700",
          isMobile 
            ? "rounded-xl hover:bg-[#F5F5F5] hover:text-[#252525]" 
            : "rounded-l-[25px] hover:text-[#252525] group/item relative",
          isActive && "bg-[#F5F5F5] text-[#252525]"
        )}
      >
        <Icon className={cn(
          "w-5 h-5 flex-shrink-0", 
          !isMobile && "transition-transform duration-300 group-hover/item:scale-110 group-hover/item:rotate-3"
        )} />
        
        <span className={cn(
          "text-sm font-medium",
          isMobile ? "" : "whitespace-nowrap transition-transform duration-300 opacity-0 group-hover:opacity-100 group-hover/item:translate-x-2"
        )}>
          {item.name}
        </span>
        
        {!isMobile && isActive && (
          <div className={cn("absolute inset-0 bg-[#F5F5F5] -z-10 rounded-l-[25px]", styles.menuBackgroundSlide)}>
            <div className="before:content-[''] before:absolute before:bg-transparent before:bottom-full before:right-0 before:h-[150%] before:w-[24px] before:rounded-br-[25px] before:shadow-[0_20px_0_0_#F5F5F5]" />
            <div className="after:content-[''] after:absolute after:bg-transparent after:top-full after:right-0 after:h-[150%] after:w-[24px] after:rounded-tr-[25px] after:shadow-[0_-20px_0_0_#F5F5F5]" />
          </div>
        )}
      </Link>
    );
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
              "w-[280px] p-0 bg-[#B291FF] overflow-hidden transition-transform duration-1000 ease-in-out",
              isMenuOpen ? styles.animateSlideIn : styles.animateSlideOut
            )}
          >
            <div className="flex flex-col gap-2 p-[24px] pt-[60px]">
              {MenuItems.map(item => renderMenuItem(item, true))}
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:block fixed left-0 top-[4em] bg-[#B291FF] rounded-tr-[25px] h-[calc(100vh-4em)] overflow-hidden transition-all duration-300 w-[100px] hover:w-[200px] group z-[10]">
        <div className="flex flex-col gap-2 p-[24px] pr-0 pt-[60px]">
          {MenuItems.map(item => renderMenuItem(item))}
        </div>
      </div>
    </>
  );
};

export default NavigationMenu;