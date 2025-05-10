import { Home, LucideIcon, Calendar, User, BookOpen, Settings, Network } from 'lucide-react';
import { Path } from '@/shared/routing/path';

export interface MenuItem {
    name: string;
    path: string;
    icon: LucideIcon;
}

export const MenuItems: MenuItem[] = [
    { name: 'Главная', path: Path.Home, icon: Home },
    { name: 'Календарь', path: Path.Calendar, icon: Calendar },
    { name: 'Курсы', path: Path.Courses, icon: BookOpen },
    { name: 'Глоссарий', path: Path.Gloassary, icon: Network },
    { name: 'Профиль', path: Path.Profile, icon: User },
    { name: 'Настройки', path: Path.Settings, icon: Settings }
]