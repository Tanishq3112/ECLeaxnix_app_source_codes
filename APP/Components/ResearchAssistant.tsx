import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { 
  Search, 
  FileText, 
  Download, 
  Save, 
  ExternalLink, 
  BookOpen,
  Calendar,
  User,
  TrendingUp,
  Lightbulb,
  RefreshCw
} from 'lucide-react';

export default function ResearchAssistant() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState(null);
  const [savedPapers, setSavedPapers] = useState([]);

  const handleSearch = () => {
    if (!searchQuery) return;
    
    setIsSearching(true);
    // Mock search results
    setTimeout(() => {
      setIsSearching(false);
      setSearchResults({
        papers: [
          {
            id: 1,
            title: 'Attention Is All You Need',
            authors: ['Vaswani, A.', 'Shazeer, N.', 'Parmar, N.'],
            year: 2017,
            citations: 15420,
            abstract: 'The dominant sequence transduction models are based on complex recurrent or convolutional neural networks...',
            venue: 'NIPS',
            url: '#',
            keywords: ['Transformer', 'Attention', 'Neural Networks']
          },
          {
            id: 2,
            title: 'BERT: Pre-training of Deep Bidirectional Transformers',
            authors: ['Devlin, J.', 'Chang, M.W.', 'Lee, K.'],
            year: 2018,
            citations: 12350,
            abstract: 'We introduce a new language representation model called BERT, which stands for Bidirectional Encoder Representations...',
            venue: 'NAACL',
            url: '#',
            keywords: ['BERT', 'Language Model', 'Pre-training']
          },
          {
            id: 3,
            title: 'Deep Learning for Natural Language Processing',
            authors: ['LeCun, Y.', 'Bengio, Y.', 'Hinton, G.'],
            year: 2019,
            citations: 8920,
            abstract: 'This paper provides a comprehensive overview of deep learning techniques applied to natural language processing...',
            venue: 'Nature',
            url: '#',
            keywords: ['Deep Learning', 'NLP', 'Neural Networks']
          }
        ],
        researchGaps: [
          'Limited understanding of transformer model interpretability',
          'Computational efficiency in large language models',
          'Bias mitigation in pre-trained language models',
          'Few-shot learning capabilities in domain-specific applications'
        ],
        thesisDirections: [
          'Investigating attention mechanisms in multilingual contexts',
          'Developing more efficient transformer architectures',
          'Exploring ethical implications of large language models',
          'Cross-modal learning with vision and language'
        ],
        summary: `Based on your search for "${searchQuery}", the research landscape shows significant advancement in transformer-based models and attention mechanisms. Current trends focus on efficiency improvements, interpretability, and ethical considerations in AI systems.`
      });
    }, 2000);
  };

  const savePaper = (paper) => {
    if (!savedPapers.find(p => p.id === paper.id)) {
      setSavedPapers([...savedPapers, paper]);
    }
  };

  const exportSummary = () => {
    alert('Research summary exported to PDF');
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">AI Research Assistant</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Discover research papers, identify gaps, and get thesis direction suggestions
        </p>
      </div>

      {/* Search Section */}
      <Card>
        <CardContent className="p-6">
          <div className="flex gap-4">
            <div className="flex-1">
              <Input
                placeholder="Enter your research topic (e.g., 'machine learning transformers', 'sustainable AI')"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
            </div>
            <Button onClick={handleSearch} disabled={isSearching}>
              {isSearching ? (
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Search className="w-4 h-4 mr-2" />
              )}
              Search
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Topics */}
      <div className="flex flex-wrap gap-2">
        <span className="text-sm text-gray-600 dark:text-gray-400">Quick searches:</span>
        {['Machine Learning', 'Neural Networks', 'Computer Vision', 'NLP', 'Robotics', 'AI Ethics'].map((topic) => (
          <Badge 
            key={topic} 
            variant="outline" 
            className="cursor-pointer hover:bg-indigo-50 dark:hover:bg-indigo-900"
            onClick={() => { setSearchQuery(topic); handleSearch(); }}
          >
            {topic}
          </Badge>
        ))}
      </div>

      {/* Search Results */}
      {searchResults && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Research Papers */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Top Research Papers ({searchResults.papers.length})
              </h2>
              <Button variant="outline" size="sm" onClick={exportSummary}>
                <Download className="w-4 h-4 mr-1" />
                Export Summary
              </Button>
            </div>

            {searchResults.papers.map((paper) => (
              <Card key={paper.id}>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold text-gray-900 dark:text-white text-lg leading-tight">
                        {paper.title}
                      </h3>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => savePaper(paper)}
                        className="text-indigo-600 hover:text-indigo-700"
                      >
                        <Save className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {paper.authors.join(', ')}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {paper.year}
                      </div>
                      <div className="flex items-center">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        {paper.citations.toLocaleString()} citations
                      </div>
                      <Badge variant="outline">{paper.venue}</Badge>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      {paper.abstract}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {paper.keywords.map((keyword, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {keyword}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex justify-between items-center pt-2">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        View Paper
                      </Button>
                      <Button variant="ghost" size="sm">
                        Related Papers
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Research Insights */}
          <div className="space-y-4">
            {/* Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Research Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {searchResults.summary}
                </p>
              </CardContent>
            </Card>

            {/* Research Gaps */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lightbulb className="w-5 h-5 mr-2" />
                  Research Gaps
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {searchResults.researchGaps.map((gap, index) => (
                    <li key={index} className="text-sm text-gray-700 dark:text-gray-300 flex items-start">
                      <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                      {gap}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Thesis Directions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Thesis Directions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {searchResults.thesisDirections.map((direction, index) => (
                    <li key={index} className="text-sm text-gray-700 dark:text-gray-300 flex items-start">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                      {direction}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Saved Papers */}
            {savedPapers.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Save className="w-5 h-5 mr-2" />
                    Saved Papers ({savedPapers.length})
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {savedPapers.slice(0, 3).map((paper, index) => (
                      <li key={index} className="text-sm">
                        <p className="font-medium text-gray-900 dark:text-white truncate">
                          {paper.title}
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                          {paper.authors[0]} et al., {paper.year}
                        </p>
                      </li>
                    ))}
                  </ul>
                  {savedPapers.length > 3 && (
                    <Button variant="outline" size="sm" className="w-full mt-2">
                      View All Saved Papers
                    </Button>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      )}

      {/* Empty State */}
      {!searchResults && (
        <Card>
          <CardContent className="p-12 text-center">
            <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Start Your Research Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Enter a research topic to discover relevant papers, identify research gaps, and get thesis direction suggestions.
            </p>
            <Button onClick={() => { setSearchQuery('machine learning'); handleSearch(); }}>
              Try Example Search
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}