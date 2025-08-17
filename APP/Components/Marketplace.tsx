import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { 
  Search, 
  DollarSign, 
  Clock, 
  Star, 
  MapPin, 
  Calendar,
  TrendingUp,
  Briefcase,
  ExternalLink,
  Filter
} from 'lucide-react';

export default function Marketplace() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('');

  const freelanceGigs = [
    {
      id: 1,
      title: 'AI Chatbot Development for E-commerce',
      description: 'Build an intelligent customer service chatbot using NLP and machine learning for our online store.',
      budget: '$2,500 - $4,000',
      duration: '4-6 weeks',
      difficulty: 'Intermediate',
      skills: ['Python', 'NLP', 'TensorFlow', 'REST APIs'],
      category: 'AI & ML',
      client: {
        name: 'TechMart Solutions',
        rating: 4.8,
        reviews: 34,
        location: 'San Francisco, CA'
      },
      postedAt: '2024-03-15',
      applications: 12,
      verified: true,
      featured: true
    },
    {
      id: 2,
      title: 'React Dashboard for Analytics Platform',
      description: 'Create a responsive dashboard with real-time data visualization and user management features.',
      budget: '$1,800 - $2,800',
      duration: '3-4 weeks',
      difficulty: 'Beginner',
      skills: ['React', 'JavaScript', 'D3.js', 'CSS'],
      category: 'Web Development',
      client: {
        name: 'DataViz Inc',
        rating: 4.6,
        reviews: 18,
        location: 'New York, NY'
      },
      postedAt: '2024-03-14',
      applications: 8,
      verified: true,
      featured: false
    },
    {
      id: 3,
      title: 'Mobile App UI/UX Design',
      description: 'Design user interface and experience for a fitness tracking mobile application with social features.',
      budget: '$1,200 - $2,000',
      duration: '2-3 weeks',
      difficulty: 'Intermediate',
      skills: ['Figma', 'UI Design', 'UX Research', 'Prototyping'],
      category: 'Design',
      client: {
        name: 'FitLife Startup',
        rating: 4.9,
        reviews: 7,
        location: 'Austin, TX'
      },
      postedAt: '2024-03-13',
      applications: 15,
      verified: false,
      featured: true
    },
    {
      id: 4,
      title: 'Data Analysis for Marketing Campaign',
      description: 'Analyze customer behavior data and create insights for improving marketing campaign performance.',
      budget: '$800 - $1,500',
      duration: '1-2 weeks',
      difficulty: 'Beginner',
      skills: ['Python', 'Pandas', 'SQL', 'Tableau'],
      category: 'Data Science',
      client: {
        name: 'MarketPro Agency',
        rating: 4.7,
        reviews: 23,
        location: 'Chicago, IL'
      },
      postedAt: '2024-03-12',
      applications: 6,
      verified: true,
      featured: false
    },
    {
      id: 5,
      title: 'Cloud Infrastructure Setup',
      description: 'Set up scalable cloud infrastructure on AWS with CI/CD pipeline and monitoring.',
      budget: '$3,000 - $5,000',
      duration: '6-8 weeks',
      difficulty: 'Advanced',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
      category: 'DevOps',
      client: {
        name: 'CloudFirst Solutions',
        rating: 4.5,
        reviews: 41,
        location: 'Seattle, WA'
      },
      postedAt: '2024-03-11',
      applications: 9,
      verified: true,
      featured: false
    }
  ];

  const categories = ['AI & ML', 'Web Development', 'Design', 'Data Science', 'DevOps', 'Mobile Development'];
  const experienceLevels = ['Beginner', 'Intermediate', 'Advanced'];

  const filteredGigs = freelanceGigs.filter(gig => {
    const matchesSearch = searchQuery === '' || 
      gig.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      gig.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === '' || selectedCategory === 'all' || gig.category === selectedCategory;
    const matchesExperience = selectedExperience === '' || selectedExperience === 'all' || gig.difficulty === selectedExperience;

    return matchesSearch && matchesCategory && matchesExperience;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500 bg-opacity-20 text-green-200 border-green-400 border-opacity-30';
      case 'Intermediate': return 'bg-yellow-500 bg-opacity-20 text-yellow-200 border-yellow-400 border-opacity-30';
      case 'Advanced': return 'bg-red-500 bg-opacity-20 text-red-200 border-red-400 border-opacity-30';
      default: return 'bg-gray-500 bg-opacity-20 text-gray-200 border-gray-400 border-opacity-30';
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Course-to-Cash Marketplace</h1>
        <p className="text-slate-300 mt-2">
          Turn your newly acquired skills into freelance opportunities
        </p>
      </div>

      {/* Stats Banner */}
      <Card className="bg-white bg-opacity-5 backdrop-blur-sm border-white border-opacity-20">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">{freelanceGigs.length}</div>
              <p className="text-sm text-slate-300">Available Gigs</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">$2,340</div>
              <p className="text-sm text-slate-300">Avg. Project Value</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">89%</div>
              <p className="text-sm text-slate-300">Success Rate</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">72h</div>
              <p className="text-sm text-slate-300">Avg. Response Time</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Filters */}
      <Card className="bg-white bg-opacity-5 backdrop-blur-sm border-white border-opacity-20">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-purple-300" />
                <Input
                  placeholder="Search gigs by title, skills, or company..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white bg-opacity-10 border-white border-opacity-20 text-white placeholder:text-slate-400"
                />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-40 bg-white bg-opacity-10 border-white border-opacity-20 text-white">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedExperience} onValueChange={setSelectedExperience}>
                <SelectTrigger className="w-full sm:w-40 bg-white bg-opacity-10 border-white border-opacity-20 text-white">
                  <SelectValue placeholder="Experience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  {experienceLevels.map(level => (
                    <SelectItem key={level} value={level}>{level}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button variant="outline" className="bg-white bg-opacity-10 border-white border-opacity-20 text-white hover:bg-white hover:bg-opacity-15">
                <Filter className="w-4 h-4 mr-2 text-purple-300" />
                More Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <div className="flex justify-between items-center">
        <p className="text-slate-300">
          {filteredGigs.length} opportunities found
        </p>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="bg-blue-500 bg-opacity-20 text-blue-200 border-blue-400 border-opacity-30">
            <TrendingUp className="w-3 h-3 mr-1" />
            Featured
          </Badge>
          <span className="text-sm text-slate-400">Top matching gigs</span>
        </div>
      </div>

      {/* Gigs List */}
      <div className="space-y-4">
        {filteredGigs.map((gig) => (
          <Card key={gig.id} className={`hover:shadow-lg transition-shadow bg-white bg-opacity-5 backdrop-blur-sm border-white border-opacity-20 ${gig.featured ? 'ring-2 ring-blue-500' : ''}`}>
            {gig.featured && (
              <div className="bg-blue-600 text-white px-4 py-2 text-sm font-medium rounded-t-lg">
                ⭐ Featured Opportunity
              </div>
            )}
            
            <CardContent className="p-6">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-semibold text-white">
                        {gig.title}
                      </h3>
                      <Badge className={getDifficultyColor(gig.difficulty)}>
                        {gig.difficulty}
                      </Badge>
                      {gig.verified && (
                        <Badge variant="outline" className="bg-green-500 bg-opacity-20 text-green-200 border-green-400 border-opacity-30">
                          Verified Client
                        </Badge>
                      )}
                    </div>
                    <p className="text-slate-300">
                      {gig.description}
                    </p>
                  </div>
                </div>

                {/* Client Info */}
                <div className="flex items-center space-x-4">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback>{gig.client.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-white">{gig.client.name}</p>
                    <div className="flex items-center space-x-3 text-sm text-slate-400">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        {gig.client.rating} ({gig.client.reviews} reviews)
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1 text-purple-300" />
                        {gig.client.location}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {gig.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-purple-500 bg-opacity-20 text-purple-200 border-purple-400 border-opacity-30">
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center text-slate-300">
                    <DollarSign className="w-4 h-4 mr-2 text-purple-300" />
                    <span>{gig.budget}</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <Clock className="w-4 h-4 mr-2 text-purple-300" />
                    <span>{gig.duration}</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <Briefcase className="w-4 h-4 mr-2 text-purple-300" />
                    <span>{gig.applications} applications</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <Calendar className="w-4 h-4 mr-2 text-purple-300" />
                    <span>Posted {new Date(gig.postedAt).toLocaleDateString()}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex justify-between items-center pt-4 border-t border-white border-opacity-20">
                  <Badge variant="outline" className="bg-purple-500 bg-opacity-20 text-purple-200 border-purple-400 border-opacity-30">{gig.category}</Badge>
                  <div className="space-x-2">
                    <Button variant="outline" size="sm" className="bg-white bg-opacity-10 border-white border-opacity-20 text-white hover:bg-white hover:bg-opacity-15">
                      <ExternalLink className="w-4 h-4 mr-2 text-purple-300" />
                      View Details
                    </Button>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                      Apply Now
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline" size="lg" className="bg-white bg-opacity-10 border-white border-opacity-20 text-white hover:bg-white hover:bg-opacity-15">
          Load More Opportunities
        </Button>
      </div>

      {/* Portfolio Builder CTA */}
      <Card className="bg-white bg-opacity-5 backdrop-blur-sm border-white border-opacity-20">
        <CardContent className="p-8 text-center">
          <Briefcase className="w-16 h-16 text-purple-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">
            Build Your Portfolio
          </h3>
          <p className="text-slate-300 mb-4">
            Showcase your course projects and skills to attract better clients
          </p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
            Create Portfolio
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}