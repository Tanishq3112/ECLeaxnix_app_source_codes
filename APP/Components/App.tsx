import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, createContext, useContext, useEffect } from 'react';
import Landing from './components/Landing';
import Login from './components/Login';
import Onboarding from './components/Onboarding';
import Dashboard from './components/Dashboard';
import LearningPaths from './components/LearningPaths';
import AIStudyTools from './components/AIStudyTools';
import ResearchAssistant from './components/ResearchAssistant';
import PodcastFeed from './components/PodcastFeed';
import MentorMarketplace from './components/MentorMarketplace';
import CourseKits from './components/CourseKits';
import NFTBadges from './components/NFTBadges';
import Marketplace from './components/Marketplace';
import Settings from './components/Settings';
import Navigation from './components/Navigation';

// User context for state management
const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export default function App() {
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    let initialDarkMode = false;
    
    if (savedDarkMode !== null) {
      // Use saved preference
      initialDarkMode = savedDarkMode === 'true';
    } else {
      // Use system preference
      initialDarkMode = systemPrefersDark;
    }
    
    setDarkMode(initialDarkMode);
    
    // Apply dark class to document element
    if (initialDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    setIsInitialized(true);
  }, []);

  // Update document class and localStorage when darkMode changes
  useEffect(() => {
    if (!isInitialized) return;
    
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Save preference to localStorage
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode, isInitialized]);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Don't render until dark mode is initialized to prevent flash
  if (!isInitialized) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-950 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <UserContext.Provider value={{ 
      user, 
      login, 
      logout, 
      darkMode, 
      toggleDarkMode, 
      sidebarOpen, 
      setSidebarOpen, 
      toggleSidebar 
    }}>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-950">
        <Router>
          {!user ? (
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          ) : !user.onboardingCompleted ? (
            <Routes>
              <Route path="/onboarding" element={<Onboarding />} />
              <Route path="*" element={<Navigate to="/onboarding" />} />
            </Routes>
          ) : (
            <div className="flex h-screen overflow-hidden">
              <Navigation />
              
              {/* Mobile overlay */}
              {sidebarOpen && (
                <div 
                  className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                  onClick={toggleSidebar}
                />
              )}
              
              <main className="flex-1 overflow-auto bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-950">
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/learning-paths" element={<LearningPaths />} />
                  <Route path="/ai-study-tools" element={<AIStudyTools />} />
                  <Route path="/research-assistant" element={<ResearchAssistant />} />
                  <Route path="/podcast-feed" element={<PodcastFeed />} />
                  <Route path="/mentors" element={<MentorMarketplace />} />
                  <Route path="/course-kits" element={<CourseKits />} />
                  <Route path="/nft-badges" element={<NFTBadges />} />
                  <Route path="/marketplace" element={<Marketplace />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="*" element={<Navigate to="/dashboard" />} />
                </Routes>
              </main>
            </div>
          )}
        </Router>
      </div>
    </UserContext.Provider>
  );
}