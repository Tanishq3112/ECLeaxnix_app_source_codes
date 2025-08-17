import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { GraduationCap, Users, Briefcase, Microscope, Brain, Award, DollarSign, Menu, X } from 'lucide-react';

export default function Landing() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const roles = [
    { id: 'student', title: 'Student', icon: GraduationCap, description: 'Learn with AI-powered tools and personalized guidance', color: 'from-blue-500 to-indigo-600' },
    { id: 'faculty', title: 'Faculty', icon: Users, description: 'Create and manage courses with advanced analytics', color: 'from-purple-500 to-pink-600' },
    { id: 'professional', title: 'Working Professional', icon: Briefcase, description: 'Upskill while managing your career', color: 'from-emerald-500 to-teal-600' },
    { id: 'researcher', title: 'Researcher', icon: Microscope, description: 'Access research tools and academic resources', color: 'from-orange-500 to-red-600' }
  ];

  const features = [
    { icon: Brain, title: 'AI-Powered Learning', description: 'Smart recommendations and personalized study paths', color: 'from-indigo-500 to-purple-600' },
    { icon: Users, title: 'Expert Mentorship', description: 'Connect with industry experts for guidance', color: 'from-blue-500 to-cyan-600' },
    { icon: Award, title: 'NFT Certificates', description: 'Blockchain-verified proof of your skills', color: 'from-yellow-500 to-orange-600' },
    { icon: DollarSign, title: 'Earn While Learning', description: 'Turn your skills into freelance opportunities', color: 'from-green-500 to-emerald-600' }
  ];

  const handleGetStarted = () => {
    if (selectedRole) {
      navigate('/login', { state: { role: selectedRole } });
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-950">
      {/* Header */}
      <header className="container mx-auto px-4 sm:px-6 py-4 sm:py-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-xl flex items-center justify-center shadow-lg">
              <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
            <span className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">ECLearnix 2.0</span>
          </div>
          
          {/* Desktop Sign In */}
          <div className="hidden sm:block">
            <Button variant="outline" onClick={() => navigate('/login')} className="border-indigo-200 dark:border-indigo-700 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/50">
              Sign In
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 dark:text-gray-300"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-4 pb-4">
            <Button 
              variant="outline" 
              onClick={() => navigate('/login')} 
              className="w-full border-indigo-200 dark:border-indigo-700 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/50"
            >
              Sign In
            </Button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
            The Future of <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">AI-Powered</span> Education
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 leading-relaxed px-4 sm:px-0">
            Transform your learning journey with personalized AI guidance, expert mentorship, 
            blockchain certificates, and direct pathways to earning opportunities.
          </p>

          {/* Role Selection */}
          <div className="mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-6 sm:mb-8">Choose Your Learning Path</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
              {roles.map((role) => (
                <Card 
                  key={role.id}
                  className={`p-4 sm:p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-0 bg-white dark:bg-gray-800 shadow-lg touch-manipulation ${
                    selectedRole === role.id ? 'ring-4 ring-indigo-300 dark:ring-indigo-600 shadow-xl' : ''
                  }`}
                  onClick={() => setSelectedRole(role.id)}
                >
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-xl bg-gradient-to-br ${role.color} flex items-center justify-center shadow-md`}>
                    <role.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-base sm:text-lg">{role.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{role.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-4 px-4 sm:px-0">
            <Button 
              size="lg" 
              className="text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto touch-manipulation" 
              onClick={handleGetStarted}
            >
              Get Started Free
            </Button>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              No credit card required • 14-day free trial • Trusted by 50,000+ learners
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-12 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-16">
            Everything You Need to Succeed
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-xl sm:rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300`}>
                  <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-white text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">Trusted by Learners Worldwide</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">50,000+</div>
              <div className="text-indigo-100 text-sm sm:text-base">Active Learners</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">95%</div>
              <div className="text-indigo-100 text-sm sm:text-base">Success Rate</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">1,200+</div>
              <div className="text-indigo-100 text-sm sm:text-base">Expert Mentors</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">$2.3M+</div>
              <div className="text-indigo-100 text-sm sm:text-base">Earned by Students</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-bold">ECLearnix 2.0</span>
          </div>
          <p className="text-gray-400 text-sm sm:text-base">&copy; 2024 ECLearnix 2.0. All rights reserved. Empowering the next generation of learners.</p>
        </div>
      </footer>
    </div>
  );
}