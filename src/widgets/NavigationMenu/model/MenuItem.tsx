import { Home, LucideIcon, Calendar, User, BookOpen, Settings, Globe } from 'lucide-react';
import { Navigation } from '@/shared/config/navigation';

export interface MenuItem {
    name: string;
    path: string;
    icon: LucideIcon;
}

export const MenuItems: MenuItem[] = [
    { name: "Главная", path: Navigation.Home, icon: Home },
    { name: "Календарь", path: Navigation.Calendar, icon: Calendar },
    { name: "Курсы", path: Navigation.Courses, icon: BookOpen },
    { name: "Глоссарий", path: Navigation.Gloassary, icon: Globe },
    { name: "Профиль", path: Navigation.Profile, icon: User },
    { name: "Настройки", path: Navigation.Settings, icon: Settings }
]