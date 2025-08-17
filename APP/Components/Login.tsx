import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useUser } from '../App';
import { Button } from './ui/button';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Separator } from './ui/separator';
import { Eye, EyeOff, Mail, Lock, ArrowLeft, GraduationCap } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useUser();
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    domain: ''
  });

  const role = location.state?.role || '';
  
  const domains = [
    'Artificial Intelligence & Machine Learning',
    'UX/UI Design',
    'Digital Marketing',
    'Data Science',
    'Web Development',
    'Mobile Development',
    'Cybersecurity',
    'Cloud Computing',
    'Business Analytics',
    'Project Management'
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Mock authentication
    const userData = {
      id: '1',
      name: formData.name || 'User',
      email: formData.email,
      role: role || 'student',
      domain: formData.domain || 'Artificial Intelligence & Machine Learning',
      avatar: `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face`,
      joinDate: new Date().toISOString(),
      onboardingCompleted: !isSignUp, // New users need onboarding, returning users skip it
      progress: {
        coursesCompleted: isSignUp ? 0 : 5,
        skillBadges: isSignUp ? 0 : 12,
        mentorSessions: isSignUp ? 0 : 3,
        nftCertificates: isSignUp ? 0 : 2
      }
    };
    
    login(userData);
    // Navigation is now handled by App.tsx based on onboardingCompleted status
  };

  const handleSocialLogin = (provider) => {
    // Mock social login - treat as new user for demo purposes
    const userData = {
      id: '1',
      name: `${provider} User`,
      email: `user@${provider.toLowerCase()}.com`,
      role: role || 'student',
      domain: 'Artificial Intelligence & Machine Learning',
      avatar: `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face`,
      joinDate: new Date().toISOString(),
      onboardingCompleted: false, // Social login users also go through onboarding
      progress: {
        coursesCompleted: 0,
        skillBadges: 0,
        mentorSessions: 0,
        nftCertificates: 0
      }
    };
    
    login(userData);
    // Navigation is now handled by App.tsx based on onboardingCompleted status
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <Button 
          variant="ghost" 
          className="mb-6 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/10" 
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <Card className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-0 shadow-2xl">
          <CardHeader className="text-center pb-6">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-xl flex items-center justify-center shadow-lg">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">ECLearnix 2.0</span>
            </div>
            <CardTitle className="text-2xl text-gray-900 dark:text-white">
              {isSignUp ? 'Join ECLearnix 2.0' : 'Welcome Back'}
            </CardTitle>
            <p className="text-gray-600 dark:text-gray-300">
              {isSignUp ? 'Create your account to get started' : 'Sign in to continue your learning journey'}
            </p>
            {role && (
              <div className="mt-4 inline-block px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full text-sm font-medium shadow-lg">
                {role.charAt(0).toUpperCase() + role.slice(1)} Path
              </div>
            )}
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Social Login */}
            <div className="space-y-3">
              <Button 
                variant="outline" 
                className="w-full border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300" 
                onClick={() => handleSocialLogin('Google')}
              >
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4 mr-2" />
                Continue with Google
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300" 
                onClick={() => handleSocialLogin('LinkedIn')}
              >
                <img src="https://www.linkedin.com/favicon.ico" alt="LinkedIn" className="w-4 h-4 mr-2" />
                Continue with LinkedIn
              </Button>
            </div>

            <div className="relative">
              <Separator className="bg-gray-200 dark:bg-gray-700" />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 px-3 text-xs text-gray-500 dark:text-gray-400">
                OR
              </span>
            </div>

            {/* Email/Password Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {isSignUp && (
                <div>
                  <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                    className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              )}

              <div>
                <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">Email</Label>
                <div className="relative">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email"
                    className="pl-10 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-indigo-500 focus:ring-indigo-500"
                  />
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400 dark:text-gray-500" />
                </div>
              </div>

              <div>
                <Label htmlFor="password" className="text-gray-700 dark:text-gray-300">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your password"
                    className="pl-10 pr-10 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-indigo-500 focus:ring-indigo-500"
                  />
                  <Lock className="absolute left-3 top-3 w-4 h-4 text-gray-400 dark:text-gray-500" />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              {isSignUp && (
                <>
                  <div>
                    <Label htmlFor="confirmPassword" className="text-gray-700 dark:text-gray-300">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required
                      placeholder="Confirm your password"
                      className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="domain" className="text-gray-700 dark:text-gray-300">Preferred Learning Domain</Label>
                    <Select value={formData.domain} onValueChange={(value) => setFormData({...formData, domain: value})}>
                      <SelectTrigger className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-indigo-500 focus:ring-indigo-500">
                        <SelectValue placeholder="Select your domain of interest" />
                      </SelectTrigger>
                      <SelectContent className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                        {domains.map((domain) => (
                          <SelectItem key={domain} value={domain} className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            {domain}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}

              <Button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg">
                {isSignUp ? 'Create Account' : 'Sign In'}
              </Button>
            </form>

            <div className="text-center">
              <Button
                variant="link"
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                {isSignUp 
                  ? 'Already have an account? Sign in' 
                  : "Don't have an account? Sign up"
                }
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}