import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { 
  Search, 
  Filter, 
  Clock, 
  Star, 
  Users, 
  Play, 
  BookOpen,
  Award,
  TrendingUp,
  Brain
} from 'lucide-react';

export default function LearningPaths() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');

  const learningPaths = [
    {
      id: 1,
      title: 'AI & Machine Learning Master Path',
      description: 'Complete journey from basics to advanced AI implementation',
      domain: 'AI & ML',
      difficulty: 'Intermediate',
      duration: '16 weeks',
      price: 299,
      rating: 4.9,
      students: 12547,
      mentor: {
        name: 'Dr. Sarah Chen',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face',
        rating: 4.9
      },
      modules: 12,
      certificates: 3,
      tags: ['Python', 'TensorFlow', 'Neural Networks', 'Computer Vision'],
      featured: true
    },
    {
      id: 2,
      title: 'UX/UI Design Professional',
      description: 'Master user experience and interface design principles',
      domain: 'Design',
      difficulty: 'Beginner',
      duration: '12 weeks',
      price: 199,
      rating: 4.8,
      students: 8932,
      mentor: {
        name: 'Alex Rivera',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
        rating: 4.8
      },
      modules: 10,
      certificates: 2,
      tags: ['Figma', 'Prototyping', 'User Research', 'Design Systems'],
      featured: false
    },
    {
      id: 3,
      title: 'Full-Stack Web Development',
      description: 'Build modern web applications from frontend to backend',
      domain: 'Development',
      difficulty: 'Intermediate',
      duration: '20 weeks',
      price: 399,
      rating: 4.7,
      students: 15678,
      mentor: {
        name: 'Marcus Johnson',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
        rating: 4.7
      },
      modules: 16,
      certificates: 4,
      tags: ['React', 'Node.js', 'Database', 'API Design'],
      featured: true
    },
    {
      id: 4,
      title: 'Digital Marketing Analytics',
      description: 'Data-driven marketing strategies and campaign optimization',
      domain: 'Marketing',
      difficulty: 'Beginner',
      duration: '8 weeks',
      price: 149,
      rating: 4.6,
      students: 6543,
      mentor: {
        name: 'Emily Zhang',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
        rating: 4.6
      },
      modules: 8,
      certificates: 2,
      tags: ['Google Analytics', 'SEO', 'PPC', 'Social Media'],
      featured: false
    },
    {
      id: 5,
      title: 'Cybersecurity Fundamentals',
      description: 'Essential security practices and threat prevention',
      domain: 'Security',
      difficulty: 'Advanced',
      duration: '14 weeks',
      price: 349,
      rating: 4.8,
      students: 4321,
      mentor: {
        name: 'David Kim',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
        rating: 4.8
      },
      modules: 14,
      certificates: 3,
      tags: ['Penetration Testing', 'Network Security', 'Encryption', 'Compliance'],
      featured: false
    },
    {
      id: 6,
      title: 'Data Science & Analytics',
      description: 'Extract insights from data using statistical methods',
      domain: 'Data Science',
      difficulty: 'Intermediate',
      duration: '18 weeks',
      price: 279,
      rating: 4.9,
      students: 9876,
      mentor: {
        name: 'Lisa Park',
        avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face',
        rating: 4.9
      },
      modules: 15,
      certificates: 4,
      tags: ['Python', 'R', 'Statistics', 'Visualization'],
      featured: true
    }
  ];

  const domains = ['AI & ML', 'Design', 'Development', 'Marketing', 'Security', 'Data Science'];
  const difficulties = ['Beginner', 'Intermediate', 'Advanced'];
  const durations = ['8 weeks', '12 weeks', '16 weeks', '20 weeks'];

  const filteredPaths = learningPaths.filter(path => {
    return (
      (searchQuery === '' || path.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
       path.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))) &&
      (selectedDomain === '' || selectedDomain === 'all' || path.domain === selectedDomain) &&
      (selectedDifficulty === '' || selectedDifficulty === 'all' || path.difficulty === selectedDifficulty) &&
      (selectedDuration === '' || selectedDuration === 'all' || path.duration === selectedDuration)
    );
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300';
      case 'Advanced': return 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Learning Paths</h1>
        <p className="text-slate-300 mt-2">
          Choose from our curated learning paths designed by industry experts
        </p>
      </div>

      {/* Filters */}
      <Card className="bg-white bg-opacity-5 backdrop-blur-sm border-white border-opacity-20">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-purple-300" />
                <Input
                  placeholder="Search learning paths, skills, or technologies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white bg-opacity-10 border-white border-opacity-20 text-white placeholder:text-slate-400"
                />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Select value={selectedDomain} onValueChange={setSelectedDomain}>
                <SelectTrigger className="w-full sm:w-40 bg-white bg-opacity-10 border-white border-opacity-20 text-white">
                  <SelectValue placeholder="Domain" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Domains</SelectItem>
                  {domains.map(domain => (
                    <SelectItem key={domain} value={domain}>{domain}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                <SelectTrigger className="w-full sm:w-40 bg-white bg-opacity-10 border-white border-opacity-20 text-white">
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  {difficulties.map(difficulty => (
                    <SelectItem key={difficulty} value={difficulty}>{difficulty}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedDuration} onValueChange={setSelectedDuration}>
                <SelectTrigger className="w-full sm:w-40 bg-white bg-opacity-10 border-white border-opacity-20 text-white">
                  <SelectValue placeholder="Duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Durations</SelectItem>
                  {durations.map(duration => (
                    <SelectItem key={duration} value={duration}>{duration}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <div className="flex justify-between items-center">
        <p className="text-slate-300">
          Showing {filteredPaths.length} learning paths
        </p>
        <Button variant="outline" size="sm" className="bg-white bg-opacity-10 border-white border-opacity-20 text-white hover:bg-white hover:bg-opacity-15">
          <Filter className="w-4 h-4 mr-2 text-purple-300" />
          More Filters
        </Button>
      </div>

      {/* Learning Paths Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredPaths.map((path) => (
          <Card key={path.id} className={`hover:shadow-lg transition-shadow bg-white bg-opacity-5 backdrop-blur-sm border-white border-opacity-20 ${path.featured ? 'ring-2 ring-purple-500' : ''}`}>
            {path.featured && (
              <div className="bg-purple-600 text-white px-3 py-1 text-sm rounded-t-lg">
                <TrendingUp className="w-4 h-4 inline mr-1" />
                Featured Path
              </div>
            )}
            
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start mb-2">
                <Badge className={getDifficultyColor(path.difficulty)}>
                  {path.difficulty}
                </Badge>
                <div className="flex items-center text-sm text-slate-300">
                  <Star className="w-4 h-4 text-yellow-500 mr-1" />
                  {path.rating}
                </div>
              </div>
              
              <CardTitle className="text-lg text-white">{path.title}</CardTitle>
              <p className="text-sm text-slate-300">
                {path.description}
              </p>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Mentor Info */}
              <div className="flex items-center space-x-3">
                <Avatar className="w-8 h-8">
                  <AvatarImage src={path.mentor.avatar} />
                  <AvatarFallback>{path.mentor.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium text-white">{path.mentor.name}</p>
                  <div className="flex items-center text-xs text-slate-400">
                    <Star className="w-3 h-3 text-yellow-500 mr-1" />
                    {path.mentor.rating} mentor rating
                  </div>
                </div>
              </div>

              {/* Path Stats */}
              <div className="flex justify-between text-sm text-slate-300">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1 text-purple-300" />
                  {path.duration}
                </div>
                <div className="flex items-center">
                  <BookOpen className="w-4 h-4 mr-1 text-purple-300" />
                  {path.modules} modules
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1 text-purple-300" />
                  {path.students.toLocaleString()}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1">
                {path.tags.slice(0, 3).map((tag, index) => (
                  <Badge key={index} variant="secondary" className="text-xs bg-purple-500 bg-opacity-20 text-purple-200 border-purple-400 border-opacity-30">
                    {tag}
                  </Badge>
                ))}
                {path.tags.length > 3 && (
                  <Badge variant="secondary" className="text-xs bg-purple-500 bg-opacity-20 text-purple-200 border-purple-400 border-opacity-30">
                    +{path.tags.length - 3} more
                  </Badge>
                )}
              </div>

              {/* Certificates */}
              <div className="flex items-center text-sm text-slate-300">
                <Award className="w-4 h-4 mr-1 text-purple-300" />
                {path.certificates} NFT certificates included
              </div>

              {/* Price and CTA */}
              <div className="flex justify-between items-center pt-2 border-t border-white border-opacity-20">
                <div>
                  <span className="text-2xl font-bold text-white">
                    ${path.price}
                  </span>
                  <span className="text-sm text-slate-400 ml-1">
                    one-time
                  </span>
                </div>
                <div className="space-x-2">
                  <Button variant="outline" size="sm" className="bg-white bg-opacity-10 border-white border-opacity-20 text-white hover:bg-white hover:bg-opacity-15">
                    Preview
                  </Button>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                    <Play className="w-4 h-4 mr-1" />
                    Start Path
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline" size="lg" className="bg-white bg-opacity-10 border-white border-opacity-20 text-white hover:bg-white hover:bg-opacity-15">
          Load More Paths
        </Button>
      </div>
    </div>
  );
}