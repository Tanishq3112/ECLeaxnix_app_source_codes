import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../App';
import { Button } from './ui/button';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import { 
  Brain, 
  Target, 
  Clock, 
  TrendingUp, 
  Users, 
  BookOpen, 
  Lightbulb,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  GraduationCap,
  Zap
} from 'lucide-react';

export default function Onboarding() {
  const navigate = useNavigate();
  const { user, login } = useUser();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({
    experience: '',
    goals: [],
    timeCommitment: '',
    learningStyle: '',
    topics: [],
    urgency: '',
    previousEducation: ''
  });

  const questions = [
    {
      id: 'experience',
      title: 'What\'s your current experience level?',
      description: 'Help us understand where you\'re starting from',
      icon: TrendingUp,
      type: 'radio',
      options: [
        { value: 'beginner', label: 'Complete Beginner', description: 'New to this field entirely' },
        { value: 'intermediate', label: 'Some Experience', description: 'I have basic knowledge and skills' },
        { value: 'advanced', label: 'Experienced', description: 'I have solid foundation and want to advance' },
        { value: 'expert', label: 'Expert Level', description: 'Looking for specialized or cutting-edge content' }
      ]
    },
    {
      id: 'goals',
      title: 'What are your primary learning goals?',
      description: 'Select all that apply to you',
      icon: Target,
      type: 'checkbox',
      options: [
        { value: 'career-change', label: 'Career Change', description: 'Switch to a new field or role' },
        { value: 'skill-upgrade', label: 'Skill Upgrade', description: 'Enhance current skills for promotion' },
        { value: 'personal-growth', label: 'Personal Growth', description: 'Learn for personal satisfaction' },
        { value: 'certification', label: 'Get Certified', description: 'Earn industry-recognized credentials' },
        { value: 'freelancing', label: 'Start Freelancing', description: 'Build skills for independent work' },
        { value: 'entrepreneurship', label: 'Entrepreneurship', description: 'Start my own business' }
      ]
    },
    {
      id: 'timeCommitment',
      title: 'How much time can you dedicate to learning?',
      description: 'Be realistic about your schedule',
      icon: Clock,
      type: 'radio',
      options: [
        { value: '1-2 hours', label: '1-2 hours per week', description: 'Light learning, flexible pace' },
        { value: '3-5 hours', label: '3-5 hours per week', description: 'Steady progress, manageable commitment' },
        { value: '6-10 hours', label: '6-10 hours per week', description: 'Serious learning, faster progress' },
        { value: '10+ hours', label: '10+ hours per week', description: 'Intensive learning, rapid advancement' }
      ]
    },
    {
      id: 'learningStyle',
      title: 'How do you prefer to learn?',
      description: 'Choose your ideal learning format',
      icon: Brain,
      type: 'radio',
      options: [
        { value: 'visual', label: 'Visual Learning', description: 'Videos, diagrams, and visual content' },
        { value: 'hands-on', label: 'Hands-on Practice', description: 'Projects, labs, and practical exercises' },
        { value: 'reading', label: 'Reading & Research', description: 'Articles, books, and written materials' },
        { value: 'interactive', label: 'Interactive Learning', description: 'Quizzes, games, and interactive content' },
        { value: 'social', label: 'Social Learning', description: 'Group discussions and peer interaction' }
      ]
    },
    {
      id: 'topics',
      title: 'Which topics interest you most?',
      description: 'Select your areas of interest (choose 3-5)',
      icon: Lightbulb,
      type: 'checkbox',
      options: [
        { value: 'ai-ml', label: 'AI & Machine Learning', description: 'Artificial Intelligence, ML algorithms' },
        { value: 'web-dev', label: 'Web Development', description: 'Frontend, backend, full-stack development' },
        { value: 'data-science', label: 'Data Science', description: 'Analytics, statistics, data visualization' },
        { value: 'mobile-dev', label: 'Mobile Development', description: 'iOS, Android, cross-platform apps' },
        { value: 'cybersecurity', label: 'Cybersecurity', description: 'Security, ethical hacking, compliance' },
        { value: 'cloud', label: 'Cloud Computing', description: 'AWS, Azure, Google Cloud, DevOps' },
        { value: 'design', label: 'UX/UI Design', description: 'User experience, interface design' },
        { value: 'blockchain', label: 'Blockchain', description: 'Cryptocurrency, smart contracts, Web3' },
        { value: 'business', label: 'Business Skills', description: 'Management, marketing, entrepreneurship' },
        { value: 'finance', label: 'Finance & Investing', description: 'Financial analysis, investing, fintech' }
      ]
    },
    {
      id: 'urgency',
      title: 'What\'s your timeline for achieving your goals?',
      description: 'This helps us prioritize your learning path',
      icon: Zap,
      type: 'radio',
      options: [
        { value: '1-3 months', label: '1-3 months', description: 'Urgent need, intensive focus required' },
        { value: '3-6 months', label: '3-6 months', description: 'Moderate timeline, steady progress' },
        { value: '6-12 months', label: '6-12 months', description: 'Comfortable timeline, thorough learning' },
        { value: '1+ years', label: '1+ years', description: 'Long-term goal, flexible approach' }
      ]
    }
  ];

  const totalSteps = questions.length;
  const progressPercentage = ((currentStep + 1) / totalSteps) * 100;

  const handleAnswerChange = (questionId, value, isCheckbox = false) => {
    setAnswers(prev => {
      if (isCheckbox) {
        const currentValues = prev[questionId] || [];
        const newValues = currentValues.includes(value)
          ? currentValues.filter(v => v !== value)
          : [...currentValues, value];
        return { ...prev, [questionId]: newValues };
      } else {
        return { ...prev, [questionId]: value };
      }
    });
  };

  const generateRecommendations = () => {
    const recommendations = [];
    
    // AI/ML recommendations
    if (answers.topics.includes('ai-ml')) {
      if (answers.experience === 'beginner') {
        recommendations.push({
          title: 'Introduction to Machine Learning',
          description: 'Perfect starter course for ML fundamentals',
          level: 'Beginner',
          duration: '8 weeks',
          color: 'from-blue-500 to-indigo-600'
        });
      } else {
        recommendations.push({
          title: 'Advanced Deep Learning Specialization',
          description: 'Neural networks and advanced ML techniques',
          level: 'Advanced',
          duration: '12 weeks',
          color: 'from-purple-500 to-pink-600'
        });
      }
    }

    // Web Development recommendations
    if (answers.topics.includes('web-dev')) {
      recommendations.push({
        title: 'Full-Stack Web Development Bootcamp',
        description: 'Complete web development from frontend to backend',
        level: answers.experience === 'beginner' ? 'Beginner' : 'Intermediate',
        duration: '16 weeks',
        color: 'from-emerald-500 to-teal-600'
      });
    }

    // Data Science recommendations
    if (answers.topics.includes('data-science')) {
      recommendations.push({
        title: 'Data Science with Python',
        description: 'Analytics, visualization, and statistical modeling',
        level: 'Intermediate',
        duration: '10 weeks',
        color: 'from-orange-500 to-red-600'
      });
    }

    // UX/UI Design recommendations
    if (answers.topics.includes('design')) {
      recommendations.push({
        title: 'UX/UI Design Masterclass',
        description: 'User research, prototyping, and design systems',
        level: 'Beginner',
        duration: '6 weeks',
        color: 'from-pink-500 to-rose-600'
      });
    }

    // Default recommendations if no specific topics selected
    if (recommendations.length === 0) {
      recommendations.push(
        {
          title: 'Digital Literacy Fundamentals',
          description: 'Essential digital skills for the modern world',
          level: 'Beginner',
          duration: '4 weeks',
          color: 'from-blue-500 to-indigo-600'
        },
        {
          title: 'Critical Thinking & Problem Solving',
          description: 'Universal skills for any career path',
          level: 'Intermediate',
          duration: '6 weeks',
          color: 'from-green-500 to-emerald-600'
        }
      );
    }

    return recommendations.slice(0, 3); // Limit to top 3 recommendations
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      completeOnboarding();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const completeOnboarding = () => {
    const recommendations = generateRecommendations();
    const updatedUser = {
      ...user,
      onboardingCompleted: true,
      questionnaire: answers,
      recommendations: recommendations
    };
    
    login(updatedUser);
    navigate('/dashboard');
  };

  const currentQuestion = questions[currentStep];
  const isStepComplete = currentQuestion.type === 'checkbox' 
    ? answers[currentQuestion.id]?.length > 0 
    : answers[currentQuestion.id];

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-950 p-4 flex items-center justify-center">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-xl flex items-center justify-center shadow-lg">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">ECLearnix 2.0</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Let's Personalize Your Learning Journey
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Answer a few questions so we can recommend the perfect courses for you
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Step {currentStep + 1} of {totalSteps}
            </span>
            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
              {Math.round(progressPercentage)}% Complete
            </span>
          </div>
          <Progress value={progressPercentage} className="h-2 bg-gray-200 dark:bg-gray-700" />
        </div>

        {/* Question Card */}
        <Card className="bg-white dark:bg-gray-900 shadow-xl border-0 mb-8">
          <CardHeader className="pb-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg">
                <currentQuestion.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl text-gray-900 dark:text-white">
                  {currentQuestion.title}
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-300 mt-1">{currentQuestion.description}</p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            {currentQuestion.type === 'radio' ? (
              <RadioGroup
                value={answers[currentQuestion.id] || ''}
                onValueChange={(value) => handleAnswerChange(currentQuestion.id, value)}
              >
                {currentQuestion.options.map((option) => (
                  <div key={option.value} className="flex items-start space-x-3 p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer">
                    <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                    <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                      <div className="font-semibold text-gray-900 dark:text-white">{option.label}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">{option.description}</div>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            ) : (
              <div className="space-y-3">
                {currentQuestion.options.map((option) => (
                  <div key={option.value} className="flex items-start space-x-3 p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <Checkbox
                      id={option.value}
                      checked={answers[currentQuestion.id]?.includes(option.value) || false}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          handleAnswerChange(currentQuestion.id, option.value, true);
                        } else {
                          handleAnswerChange(currentQuestion.id, option.value, true);
                        }
                      }}
                      className="mt-1"
                    />
                    <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                      <div className="font-semibold text-gray-900 dark:text-white">{option.label}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">{option.description}</div>
                    </Label>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>

          <Button
            onClick={handleNext}
            disabled={!isStepComplete}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg"
          >
            {currentStep === totalSteps - 1 ? (
              <>
                <CheckCircle className="w-4 h-4 mr-2" />
                Complete Setup
              </>
            ) : (
              <>
                Next
                <ArrowRight className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </div>

        {/* Skip Option */}
        <div className="text-center mt-6">
          <Button
            variant="link"
            onClick={completeOnboarding}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
          >
            Skip questionnaire and explore on my own
          </Button>
        </div>
      </div>
    </div>
  );
}