import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Textarea } from './ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { 
  Play, 
  Pause, 
  MessageCircle, 
  Heart, 
  Share2, 
  Clock,
  Mic,
  Send,
  Headphones
} from 'lucide-react';

export default function PodcastFeed() {
  const [currentPlaying, setCurrentPlaying] = useState(null);
  const [question, setQuestion] = useState('');

  const podcasts = [
    {
      id: 1,
      title: 'Breaking into AI: From Bootcamp to Big Tech',
      mentor: {
        name: 'Dr. Sarah Chen',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face',
        company: 'Google DeepMind'
      },
      duration: '12:34',
      publishedAt: '2024-03-15',
      category: 'Career Transition',
      description: 'Practical advice on transitioning from traditional programming to AI/ML roles, including what to study and how to build a portfolio.',
      likes: 156,
      listens: 2840,
      tags: ['AI', 'Career', 'Interview Tips']
    },
    {
      id: 2,
      title: 'Mastering System Design Interviews',
      mentor: {
        name: 'Marcus Johnson',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
        company: 'Netflix'
      },
      duration: '18:45',
      publishedAt: '2024-03-12',
      category: 'Interview Prep',
      description: 'Deep dive into system design concepts that actually matter in interviews, with real examples from Netflix architecture.',
      likes: 203,
      listens: 1890,
      tags: ['System Design', 'Interviews', 'Architecture']
    },
    {
      id: 3,
      title: 'Building Design Systems at Scale',
      mentor: {
        name: 'Emily Zhang',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
        company: 'Airbnb'
      },
      duration: '15:23',
      publishedAt: '2024-03-10',
      category: 'Design',
      description: 'Lessons learned from building and scaling design systems across multiple product teams and platforms.',
      likes: 98,
      listens: 1456,
      tags: ['Design Systems', 'UX', 'Team Management']
    },
    {
      id: 4,
      title: 'Data Science Career Roadmap 2024',
      mentor: {
        name: 'Alex Rivera',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
        company: 'Spotify'
      },
      duration: '21:12',
      publishedAt: '2024-03-08',
      category: 'Career Growth',
      description: 'Complete roadmap for aspiring data scientists, from learning fundamentals to landing your first role.',
      likes: 187,
      listens: 3210,
      tags: ['Data Science', 'Career Path', 'Learning']
    }
  ];

  const categories = ['All', 'Career Transition', 'Interview Prep', 'Design', 'Career Growth', 'Technical Skills'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPodcasts = selectedCategory === 'All' 
    ? podcasts 
    : podcasts.filter(p => p.category === selectedCategory);

  const togglePlayback = (podcastId) => {
    setCurrentPlaying(currentPlaying === podcastId ? null : podcastId);
  };

  const submitQuestion = () => {
    if (question.trim()) {
      alert(`Question submitted: "${question}"`);
      setQuestion('');
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Career Mentor Podcasts</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Listen to career advice and insights from industry experts
        </p>
      </div>

      {/* Ask Question Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Mic className="w-5 h-5 mr-2" />
            Ask a Question
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="Ask our mentors about career transitions, interview tips, skill development, or any professional advice..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="min-h-20"
          />
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Questions are answered in upcoming podcast episodes
            </p>
            <Button onClick={submitQuestion} disabled={!question.trim()}>
              <Send className="w-4 h-4 mr-2" />
              Submit Question
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Podcast Feed */}
      <div className="space-y-4">
        {filteredPodcasts.map((podcast) => (
          <Card key={podcast.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={podcast.mentor.avatar} />
                  <AvatarFallback>{podcast.mentor.name.charAt(0)}</AvatarFallback>
                </Avatar>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                        {podcast.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mt-1">
                        <span>{podcast.mentor.name}</span>
                        <span>•</span>
                        <span>{podcast.mentor.company}</span>
                        <span>•</span>
                        <span>{new Date(podcast.publishedAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <Badge variant="secondary">{podcast.category}</Badge>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                    {podcast.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {podcast.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => togglePlayback(podcast.id)}
                      >
                        {currentPlaying === podcast.id ? (
                          <Pause className="w-4 h-4 mr-2" />
                        ) : (
                          <Play className="w-4 h-4 mr-2" />
                        )}
                        {currentPlaying === podcast.id ? 'Pause' : 'Play'}
                      </Button>

                      <div className="flex items-center space-x-3 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {podcast.duration}
                        </div>
                        <div className="flex items-center">
                          <Headphones className="w-4 h-4 mr-1" />
                          {podcast.listens.toLocaleString()}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Heart className="w-4 h-4 mr-1" />
                        {podcast.likes}
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Audio Player (when playing) */}
                  {currentPlaying === podcast.id && (
                    <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Button size="sm" variant="ghost">
                          <Pause className="w-4 h-4" />
                        </Button>
                        <div className="flex-1">
                          <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-1">
                            <div className="bg-indigo-600 h-1 rounded-full" style={{ width: '35%' }}></div>
                          </div>
                          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                            <span>4:32</span>
                            <span>{podcast.duration}</span>
                          </div>
                        </div>
                        <Button size="sm" variant="ghost">
                          1.5x
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline" size="lg">
          Load More Episodes
        </Button>
      </div>
    </div>
  );
}