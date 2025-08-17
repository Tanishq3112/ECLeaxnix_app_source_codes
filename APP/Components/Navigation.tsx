import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useUser } from '../App';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Separator } from './ui/separator';
import { Switch } from './ui/switch';
import {
  Home,
  BookOpen,
  Brain,
  Search,
  Podcast,
  Users,
  Download,
  Award,
  Briefcase,
  Settings,
  Moon,
  Sun,
  LogOut,
  GraduationCap,
  Menu,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout, darkMode, toggleDarkMode, sidebarOpen, setSidebarOpen, toggleSidebar } = useUser();
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth < 1024) {
        setSidebarOpen(false);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [setSidebarOpen]);

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/dashboard' },
    { icon: BookOpen, label: 'Learning Paths', path: '/learning-paths' },
    { icon: Brain, label: 'AI Study Tools', path: '/ai-study-tools' },
    { icon: Search, label: 'Research Assistant', path: '/research-assistant' },
    { icon: Podcast, label: 'Podcast Feed', path: '/podcast-feed' },
    { icon: Users, label: 'Find Mentors', path: '/mentors' },
    { icon: Download, label: 'Course Kits', path: '/course-kits' },
    { icon: Award, label: 'NFT Badges', path: '/nft-badges' },
    { icon: Briefcase, label: 'Marketplace', path: '/marketplace' },
    { icon: Settings, label: 'Settings', path: '/settings' }
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleNavigation = (path) => {
    navigate(path);
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  // Mobile menu button (shows in main content area)
  if (isMobile && !sidebarOpen) {
    return (
      <Button
        variant="ghost"
        size="sm"
        className="fixed top-4 left-4 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg hover:bg-white dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700"
        onClick={toggleSidebar}
      >
        <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300" />
      </Button>
    );
  }

  return (
    <>
      {/* Mobile Header with Menu Toggle */}
      {isMobile && (
        <div className="lg:hidden fixed top-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 z-50 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">ECLearnix 2.0</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleSidebar}
              className="text-gray-700 dark:text-gray-300"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      )}

      {/* Sidebar */}
      <div className={`
        ${isMobile ? 'fixed' : 'relative'}
        ${isMobile && !sidebarOpen ? '-translate-x-full' : 'translate-x-0'}
        ${isMobile ? 'z-50' : ''}
        left-0 top-0 h-full bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 shadow-xl
        ${collapsed && !isMobile ? 'w-16' : 'w-64'}
      `}>
        <div className="flex flex-col h-full">
          {/* Desktop Header */}
          {!isMobile && (
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                {!collapsed && (
                  <span className="text-xl font-bold text-gray-900 dark:text-white">ECLearnix 2.0</span>
                )}
              </div>
            </div>
          )}

          {/* Mobile Header with Close */}
          {isMobile && (
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-gray-900 dark:text-white">ECLearnix 2.0</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleSidebar}
                  className="text-gray-500 dark:text-gray-400"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>
          )}

          {/* User Profile */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3">
              <Avatar className="w-10 h-10 border-2 border-indigo-200 dark:border-indigo-700">
                <AvatarImage src={user?.avatar} />
                <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
                  {user?.name?.charAt(0)}
                </AvatarFallback>
              </Avatar>
              {(!collapsed || isMobile) && (
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 dark:text-white truncate">
                    {user?.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 truncate capitalize">
                    {user?.role}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Button
                  key={item.path}
                  variant={isActive ? 'default' : 'ghost'}
                  className={`w-full justify-start ${collapsed && !isMobile ? 'px-3' : 'px-4'} text-left ${
                    isActive 
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-md' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                  onClick={() => handleNavigation(item.path)}
                >
                  <item.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-500 dark:text-gray-400'}`} />
                  {(!collapsed || isMobile) && <span className="ml-3">{item.label}</span>}
                </Button>
              );
            })}
          </nav>

          <Separator className="bg-gray-200 dark:bg-gray-700" />

          {/* Dark Mode Toggle */}
          <div className="p-4">
            <div className={`flex items-center ${collapsed && !isMobile ? 'justify-center' : 'justify-between'}`}>
              {(!collapsed || isMobile) && (
                <div className="flex items-center space-x-2">
                  <Sun className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Light</span>
                </div>
              )}
              <Switch
                checked={darkMode}
                onCheckedChange={toggleDarkMode}
                className="data-[state=checked]:bg-indigo-600"
              />
              {(!collapsed || isMobile) && (
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-700 dark:text-gray-300">Dark</span>
                  <Moon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                </div>
              )}
            </div>
          </div>

          <Separator className="bg-gray-200 dark:bg-gray-700" />

          {/* Logout */}
          <div className="p-4">
            <Button
              variant="ghost"
              className={`w-full justify-start text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/20 ${collapsed && !isMobile ? 'px-3' : 'px-4'}`}
              onClick={handleLogout}
            >
              <LogOut className="w-5 h-5" />
              {(!collapsed || isMobile) && <span className="ml-3">Logout</span>}
            </Button>
          </div>

          {/* Desktop Collapse Toggle */}
          {!isMobile && (
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <Button
                variant="ghost"
                size="sm"
                className="w-full text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setCollapsed(!collapsed)}
              >
                {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
                {!collapsed && <span className="ml-2">Collapse</span>}
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}