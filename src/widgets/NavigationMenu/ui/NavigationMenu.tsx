import React from 'react';
import { Link } from 'react-router-dom';
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

const MenuContent = ({ className = "", isMobile = false }: { className?: string, isMobile?: boolean }) => {
  const [activeItem, setActiveItem] = React.useState<string | null>(null);

  return (
    <div className={cn(
      isMobile 
        ? "flex flex-col gap-2 p-[24px] pt-[60px]" 
        : "flex flex-col gap-2 p-[24px] pr-0 pt-[60px]",
      className
    )}>
      {menuItems.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.name}
            to={item.path}
            className={cn(
              "flex items-center gap-3 px-4 py-2 text-white transition-all duration-300 relative",
              isMobile ? "rounded-xl hover:bg-white hover:text-foreground" : "rounded-l-xl hover:bg-[#F5F5F5] hover:text-[#252525] relative group",
              activeItem === item.name && !isMobile && "bg-background text-foreground"
            )}
            onMouseEnter={() => !isMobile && setActiveItem(item.name)}
            onMouseLeave={() => !isMobile && setActiveItem(null)}
          >
            <Icon className="w-5 h-5 flex-shrink-0" />
            <span className={cn(
              "text-sm font-medium whitespace-nowrap transition-opacity duration-300",
              !isMobile && "opacity-0 group-hover:opacity-100"
            )}>
              {item.name}
            </span>
            {!isMobile && activeItem === item.name && (
              <div className="absolute inset-0 bg-[#F5F5F5] -z-10 rounded-l-xl pr-0">
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
  return (
    <>
      {/* Mobile Menu */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button className="p-2">
              <MenuIcon className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[280px] p-0 bg-[#B291FF]">
            <MenuContent isMobile />
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