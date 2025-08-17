import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Calendar } from './ui/calendar';
import { 
  Search, 
  Star, 
  Clock, 
  DollarSign, 
  MessageCircle, 
  Calendar as CalendarIcon,
  Video,
  CheckCircle,
  Award,
  Briefcase,
  GraduationCap
} from 'lucide-react';

export default function MentorMarketplace() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('');
  const [selectedPriceRange, setPriceRange] = useState('');
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const mentors = [
    {
      id: 1,
      name: 'Dr. Sarah Chen',
      title: 'AI Research Scientist',
      company: 'Google DeepMind',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face',
      rating: 4.9,
      reviews: 127,
      hourlyRate: 150,
      expertise: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'Research'],
      experience: '8 years',
      totalSessions: 432,
      responseTime: '< 2 hours',
      languages: ['English', 'Mandarin'],
      availability: 'Mon-Fri 9AM-5PM PST',
      bio: 'Former Stanford researcher with 50+ publications in top-tier AI conferences. Specializing in helping students transition from academia to industry.',
      featured: true
    },
    {
      id: 2,
      name: 'Marcus Johnson',
      title: 'Senior Full-Stack Developer',
      company: 'Netflix',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      rating: 4.8,
      reviews: 89,
      hourlyRate: 120,
      expertise: ['React', 'Node.js', 'System Design', 'Career Transition'],
      experience: '10 years',
      totalSessions: 298,
      responseTime: '< 4 hours',
      languages: ['English', 'Spanish'],
      availability: 'Evenings & Weekends',
      bio: 'Self-taught developer who went from bootcamp to senior engineer at Netflix. Passionate about helping others make similar career transitions.',
      featured: false
    },
    {
      id: 3,
      name: 'Emily Zhang',
      title: 'Head of Product Design',
      company: 'Airbnb',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      rating: 4.9,
      reviews: 156,
      hourlyRate: 140,
      expertise: ['UX Design', 'Design Systems', 'Product Strategy', 'Leadership'],
      experience: '12 years',
      totalSessions: 387,
      responseTime: '< 1 hour',
      languages: ['English'],
      availability: 'Flexible schedule',
      bio: 'Led design for multiple successful product launches. Expert in user research, design systems, and building design teams.',
      featured: true
    },
    {
      id: 4,
      name: 'Alex Rivera',
      title: 'Data Science Manager',
      company: 'Spotify',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      rating: 4.7,
      reviews: 73,
      hourlyRate: 130,
      expertise: ['Data Science', 'Machine Learning', 'Analytics', 'Team Management'],
      experience: '7 years',
      totalSessions: 189,
      responseTime: '< 3 hours',
      languages: ['English', 'Portuguese'],
      availability: 'Weekends preferred',
      bio: 'Built data science teams from ground up. Specializes in practical ML applications and career growth in data science.',
      featured: false
    },
    {
      id: 5,
      name: 'David Kim',
      title: 'Cybersecurity Architect',
      company: 'Microsoft',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      rating: 4.8,
      reviews: 94,
      hourlyRate: 160,
      expertise: ['Cybersecurity', 'Cloud Security', 'Penetration Testing', 'Compliance'],
      experience: '15 years',
      totalSessions: 234,
      responseTime: '< 6 hours',
      languages: ['English', 'Korean'],
      availability: 'Evenings PST',
      bio: 'Certified ethical hacker with extensive experience in enterprise security. Helps professionals break into cybersecurity.',
      featured: true
    }
  ];

  const domains = ['AI & ML', 'Development', 'Design', 'Data Science', 'Cybersecurity', 'Product Management'];
  const priceRanges = ['Under $100', '$100-150', '$150-200', 'Above $200'];

  const filteredMentors = mentors.filter(mentor => {
    const matchesSearch = searchQuery === '' || 
      mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.expertise.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesDomain = selectedDomain === '' || selectedDomain === 'all' || 
      mentor.expertise.some(skill => skill.toLowerCase().includes(selectedDomain.toLowerCase()));
    
    const matchesPrice = selectedPriceRange === '' || selectedPriceRange === 'all' ||
      (selectedPriceRange === 'Under $100' && mentor.hourlyRate < 100) ||
      (selectedPriceRange === '$100-150' && mentor.hourlyRate >= 100 && mentor.hourlyRate <= 150) ||
      (selectedPriceRange === '$150-200' && mentor.hourlyRate > 150 && mentor.hourlyRate <= 200) ||
      (selectedPriceRange === 'Above $200' && mentor.hourlyRate > 200);

    return matchesSearch && matchesDomain && matchesPrice;
  });

  const handleBookSession = (mentor) => {
    setSelectedMentor(mentor);
  };

  const confirmBooking = () => {
    alert(`Session booked with ${selectedMentor?.name} for ${selectedDate.toLocaleDateString()}`);
    setSelectedMentor(null);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Find Your Mentor</h1>
        <p className="text-slate-300 mt-2">
          Connect with industry experts for personalized guidance and career advice
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
                  placeholder="Search mentors by name, skill, or company..."
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

              <Select value={selectedPriceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="w-full sm:w-40 bg-white bg-opacity-10 border-white border-opacity-20 text-white">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  {priceRanges.map(range => (
                    <SelectItem key={range} value={range}>{range}</SelectItem>
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
          {filteredMentors.length} mentors available
        </p>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="bg-yellow-500 bg-opacity-20 text-yellow-200 border-yellow-400 border-opacity-30">
            <Star className="w-3 h-3 mr-1" />
            Featured
          </Badge>
          <span className="text-sm text-slate-400">Top rated mentors</span>
        </div>
      </div>

      {/* Mentors Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredMentors.map((mentor) => (
          <Card key={mentor.id} className={`hover:shadow-lg transition-shadow bg-white bg-opacity-5 backdrop-blur-sm border-white border-opacity-20 ${mentor.featured ? 'ring-2 ring-yellow-500' : ''}`}>
            {mentor.featured && (
              <div className="bg-yellow-500 text-yellow-900 px-3 py-1 text-sm font-medium rounded-t-lg">
                ⭐ Featured Mentor
              </div>
            )}
            
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={mentor.avatar} />
                  <AvatarFallback>{mentor.name.charAt(0)}</AvatarFallback>
                </Avatar>
                
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-lg text-white">
                        {mentor.name}
                      </h3>
                      <p className="text-slate-300">{mentor.title}</p>
                      <p className="text-sm text-slate-400">{mentor.company}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-sm text-slate-300 mb-1">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        {mentor.rating} ({mentor.reviews})
                      </div>
                      <div className="text-lg font-bold text-white">
                        ${mentor.hourlyRate}/hr
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {/* Bio */}
                    <p className="text-sm text-slate-300">
                      {mentor.bio}
                    </p>

                    {/* Expertise */}
                    <div className="flex flex-wrap gap-1">
                      {mentor.expertise.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs bg-purple-500 bg-opacity-20 text-purple-200 border-purple-400 border-opacity-30">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex justify-between text-xs text-slate-400">
                      <div className="flex items-center">
                        <Briefcase className="w-3 h-3 mr-1 text-purple-300" />
                        {mentor.experience}
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-3 h-3 mr-1 text-purple-300" />
                        {mentor.totalSessions} sessions
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1 text-purple-300" />
                        {mentor.responseTime}
                      </div>
                    </div>

                    {/* Availability */}
                    <div className="text-xs text-slate-300">
                      <span className="font-medium">Available:</span> {mentor.availability}
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-2 pt-2">
                      <Button size="sm" variant="outline" className="flex-1 bg-white bg-opacity-10 border-white border-opacity-20 text-white hover:bg-white hover:bg-opacity-15">
                        <MessageCircle className="w-4 h-4 mr-1 text-purple-300" />
                        Message
                      </Button>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            size="sm" 
                            className="flex-1 bg-purple-600 hover:bg-purple-700 text-white" 
                            onClick={() => handleBookSession(mentor)}
                          >
                            <CalendarIcon className="w-4 h-4 mr-1" />
                            Book Session
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md bg-white bg-opacity-95 backdrop-blur-sm">
                          <DialogHeader>
                            <DialogTitle className="text-gray-900">Book Session with {mentor.name}</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                              <Avatar className="w-12 h-12">
                                <AvatarImage src={mentor.avatar} />
                                <AvatarFallback>{mentor.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-medium text-gray-900">{mentor.name}</p>
                                <p className="text-sm text-gray-600">${mentor.hourlyRate}/hour</p>
                              </div>
                            </div>
                            
                            <div>
                              <label className="text-sm font-medium text-gray-900">Select Date</label>
                              <Calendar
                                mode="single"
                                selected={selectedDate}
                                onSelect={setSelectedDate}
                                className="rounded-md border mt-2"
                              />
                            </div>

                            <div className="grid grid-cols-3 gap-2">
                              {['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM', '6:00 PM', '8:00 PM'].map((time) => (
                                <Button key={time} variant="outline" size="sm" className="text-xs">
                                  {time}
                                </Button>
                              ))}
                            </div>

                            <div className="flex justify-between items-center pt-4 border-t">
                              <div>
                                <p className="text-sm text-gray-600">Total (1 hour)</p>
                                <p className="font-bold text-gray-900">${mentor.hourlyRate}</p>
                              </div>
                              <Button onClick={confirmBooking} className="bg-purple-600 hover:bg-purple-700 text-white">
                                <Video className="w-4 h-4 mr-2" />
                                Confirm Booking
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
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
          Load More Mentors
        </Button>
      </div>
    </div>
  );
}