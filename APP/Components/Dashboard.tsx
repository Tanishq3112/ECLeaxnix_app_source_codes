import { useUser } from '../App';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { 
  BookOpen, 
  Award, 
  Users, 
  TrendingUp, 
  Calendar, 
  Target,
  Brain,
  Search,
  Play,
  Clock,
  Star,
  ArrowRight,
  Zap,
  Trophy,
  ChartBar,
  Lightbulb
} from 'lucide-react';

export default function Dashboard() {
  const { user } = useUser();
  
  const todaysSuggestions = [
    {
      type: 'course',
      title: 'Machine Learning Fundamentals',
      description: 'Continue your AI journey',
      progress: 65,
      timeLeft: '2h 30m',
      icon: Brain,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      type: 'mentor',
      title: 'Career Guidance Session',
      description: 'With Sarah Johnson',
      time: 'Today 3:00 PM',
      icon: Users,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      type: 'research',
      title: 'AI Ethics Research',
      description: 'New papers available',
      count: 5,
      icon: Search,
      color: 'from-emerald-500 to-teal-600'
    }
  ];

  const recentActivity = [
    { type: 'course', title: 'Completed Python Basics', time: '2 hours ago', icon: BookOpen, color: 'bg-green-500' },
    { type: 'mentor', title: 'Mentor session with Alex Chen', time: '1 day ago', icon: Users, color: 'bg-blue-500' },
    { type: 'nft', title: 'Earned Data Analysis Badge', time: '3 days ago', icon: Award, color: 'bg-yellow-500' },
    { type: 'research', title: 'Saved 3 research papers', time: '5 days ago', icon: Search, color: 'bg-purple-500' }
  ];

  const stats = [
    { 
      label: 'Courses Completed', 
      value: user?.progress?.coursesCompleted || 0, 
      icon: BookOpen, 
      gradient: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    { 
      label: 'Skill Badges', 
      value: user?.progress?.skillBadges || 0, 
      icon: Trophy, 
      gradient: 'from-yellow-500 to-orange-600',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20'
    },
    { 
      label: 'Mentor Sessions', 
      value: user?.progress?.mentorSessions || 0, 
      icon: Users, 
      gradient: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    { 
      label: 'NFT Certificates', 
      value: user?.progress?.nftCertificates || 0, 
      icon: Award, 
      gradient: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    }
  ];

  const weeklyProgress = 78;
  
  return (
    <div className="p-4 sm:p-6 space-y-6 sm:space-y-8 pt-16 lg:pt-6">
      {/* Welcome Header */}
      <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-6 sm:p-8 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center">
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
              Welcome back, {user?.name?.split(' ')[0]}! 👋
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-4">
              Ready to continue your learning journey in {user?.domain}?
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <Badge className="bg-white/20 text-white border-white/30 px-3 py-1 text-sm w-fit">
                <Star className="w-4 h-4 mr-2" />
                {user?.role?.charAt(0).toUpperCase() + user?.role?.slice(1)} Learner
              </Badge>
              <Badge className="bg-green-500/20 text-green-100 border-green-400/30 px-3 py-1 text-sm w-fit">
                <Zap className="w-4 h-4 mr-2" />
                Premium Active
              </Badge>
            </div>
          </div>
          <Avatar className="w-16 h-16 sm:w-20 sm:h-20 border-4 border-white/30 mx-auto sm:mx-0">
            <AvatarImage src={user?.avatar} />
            <AvatarFallback className="text-xl sm:text-2xl bg-white/20 text-white">{user?.name?.charAt(0)}</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className={`${stat.bgColor} border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-center sm:text-left">
                  <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300">{stat.label}</p>
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                </div>
                <div className={`p-2 sm:p-3 rounded-full bg-gradient-to-br ${stat.gradient} shadow-lg mx-auto sm:mx-0`}>
                  <stat.icon className="w-4 h-4 sm:w-5 sm:h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* Weekly Progress */}
        <Card className="bg-white dark:bg-gray-900 border-0 shadow-xl">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center text-gray-900 dark:text-white text-lg sm:text-xl">
              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 mr-3">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              Weekly Progress
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 sm:space-y-6">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-300 font-medium text-sm sm:text-base">Learning Goals</span>
              <span className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{weeklyProgress}%</span>
            </div>
            <div className="space-y-2">
              <Progress value={weeklyProgress} className="h-2 sm:h-3 bg-gray-200 dark:bg-gray-700" />
              <div className="flex justify-between text-xs font-medium text-gray-500 dark:text-gray-400">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>
            <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800">
              <div className="flex items-center">
                <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 dark:text-green-400 mr-2" />
                <p className="text-sm font-medium text-green-800 dark:text-green-200">
                  Excellent progress! You're {weeklyProgress > 75 ? 'ahead' : 'on track'} of your weekly goals.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Personalized Course Recommendations or Today's AI Suggestions */}
        <Card className="bg-white dark:bg-gray-900 border-0 shadow-xl">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center text-gray-900 dark:text-white text-lg sm:text-xl">
              <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 mr-3">
                <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              {user?.recommendations ? 'Recommended Courses For You' : 'Today\'s AI Suggestions'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 sm:space-y-4">
            {user?.recommendations ? (
              user.recommendations.map((course, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl p-3 sm:p-4 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/30 hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 touch-manipulation">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${course.color} shadow-lg`}>
                      <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                        {course.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1">
                        {course.description}
                      </p>
                      <div className="flex items-center space-x-4 mt-2">
                        <Badge className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-0 text-xs px-2 py-1">
                          {course.level}
                        </Badge>
                        <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {course.duration}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
                  </div>
                </div>
              ))
            ) : (
              todaysSuggestions.map((suggestion, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl p-3 sm:p-4 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/30 hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 touch-manipulation">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${suggestion.color} shadow-lg`}>
                    <suggestion.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                      {suggestion.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1">
                      {suggestion.description}
                    </p>
                    {suggestion.progress && (
                      <div className="mt-2 space-y-1">
                        <div className="flex justify-between text-xs font-medium">
                          <span className="text-gray-600 dark:text-gray-400">{suggestion.progress}% complete</span>
                          <span className="text-indigo-600 dark:text-indigo-400">{suggestion.timeLeft} left</span>
                        </div>
                        <Progress value={suggestion.progress} className="h-1.5" />
                      </div>
                    )}
                    {suggestion.time && (
                      <div className="flex items-center mt-2 text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-medium">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        {suggestion.time}
                      </div>
                    )}
                    {suggestion.count && (
                      <Badge className="mt-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0 text-xs px-2 py-1">
                        {suggestion.count} new
                      </Badge>
                    )}
                  </div>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
                </div>
              </div>
            )))}
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Quick Actions */}
        <Card className="bg-white dark:bg-gray-900 border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center text-gray-900 dark:text-white text-lg sm:text-xl">
              <div className="p-2 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 mr-3">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 sm:space-y-3">
            <Button className="w-full justify-start bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-md hover:shadow-lg transition-all duration-300 touch-manipulation text-sm sm:text-base py-2 sm:py-3">
              <Brain className="w-4 h-4 mr-3" />
              Generate Flashcards
            </Button>
            <Button className="w-full justify-start bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-md hover:shadow-lg transition-all duration-300 touch-manipulation text-sm sm:text-base py-2 sm:py-3">
              <Search className="w-4 h-4 mr-3" />
              Research Assistant
            </Button>
            <Button className="w-full justify-start bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-md hover:shadow-lg transition-all duration-300 touch-manipulation text-sm sm:text-base py-2 sm:py-3">
              <Users className="w-4 h-4 mr-3" />
              Book Mentor Session
            </Button>
            <Button className="w-full justify-start bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white shadow-md hover:shadow-lg transition-all duration-300 touch-manipulation text-sm sm:text-base py-2 sm:py-3">
              <Calendar className="w-4 h-4 mr-3" />
              View Schedule
            </Button>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="lg:col-span-2 bg-white dark:bg-gray-900 border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center text-gray-900 dark:text-white text-lg sm:text-xl">
              <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 mr-3">
                <ChartBar className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 sm:space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 border border-gray-200 dark:border-gray-700 touch-manipulation">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${activity.color} flex items-center justify-center shadow-md`}>
                    <activity.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                      {activity.title}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {activity.time}
                    </p>
                  </div>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}