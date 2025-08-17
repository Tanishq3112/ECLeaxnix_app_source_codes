import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  Download, 
  Play, 
  FileText, 
  Video, 
  Code, 
  BookOpen,
  CheckCircle,
  Clock,
  HardDrive,
  Wifi,
  WifiOff
} from 'lucide-react';

export default function CourseKits() {
  const [downloadingId, setDownloadingId] = useState(null);
  
  const courseKits = [
    {
      id: 1,
      title: 'AI & Machine Learning Complete Kit',
      instructor: 'Dr. Sarah Chen',
      progress: 75,
      totalSize: '2.3 GB',
      downloadedSize: '1.7 GB',
      isDownloaded: false,
      materials: {
        videos: 24,
        pdfs: 12,
        code: 8,
        quizzes: 6
      },
      description: 'Complete offline package including video lectures, code examples, datasets, and practice projects.',
      lastSync: '2024-03-15T10:30:00Z',
      category: 'AI & ML'
    },
    {
      id: 2,
      title: 'Full-Stack Development Toolkit',
      instructor: 'Marcus Johnson',
      progress: 100,
      totalSize: '1.8 GB',
      downloadedSize: '1.8 GB',
      isDownloaded: true,
      materials: {
        videos: 32,
        pdfs: 8,
        code: 15,
        quizzes: 10
      },
      description: 'Everything you need to build modern web applications, including starter templates and deployment guides.',
      lastSync: '2024-03-12T14:20:00Z',
      category: 'Development'
    },
    {
      id: 3,
      title: 'UX Design Masterclass Package',
      instructor: 'Emily Zhang',
      progress: 60,
      totalSize: '1.5 GB',
      downloadedSize: '0.9 GB',
      isDownloaded: false,
      materials: {
        videos: 18,
        pdfs: 15,
        code: 0,
        quizzes: 8
      },
      description: 'Design thinking frameworks, Figma templates, and real-world case studies for hands-on learning.',
      lastSync: '2024-03-10T09:15:00Z',
      category: 'Design'
    },
    {
      id: 4,
      title: 'Data Science Essentials',
      instructor: 'Alex Rivera',
      progress: 45,
      totalSize: '2.1 GB',
      downloadedSize: '0.0 GB',
      isDownloaded: false,
      materials: {
        videos: 28,
        pdfs: 10,
        code: 12,
        quizzes: 7
      },
      description: 'Python notebooks, datasets, visualization templates, and statistical analysis guides.',
      lastSync: 'Never',
      category: 'Data Science'
    }
  ];

  const handleDownload = (kitId) => {
    setDownloadingId(kitId);
    // Mock download process
    setTimeout(() => {
      setDownloadingId(null);
      alert('Download completed!');
    }, 3000);
  };

  const handleSync = (kitId) => {
    alert(`Syncing course kit ${kitId}...`);
  };

  const getTotalMaterials = (materials) => {
    return materials.videos + materials.pdfs + materials.code + materials.quizzes;
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Downloadable Course Kits</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Access your courses offline with complete learning materials
        </p>
      </div>

      {/* Storage Info */}
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600">6.7 GB</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Downloaded</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">12.3 GB</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Available Space</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">2</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Offline Ready</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Course Kits */}
      <div className="space-y-6">
        {courseKits.map((kit) => (
          <Card key={kit.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {kit.title}
                      </h3>
                      {kit.isDownloaded ? (
                        <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                          <WifiOff className="w-3 h-3 mr-1" />
                          Offline Ready
                        </Badge>
                      ) : (
                        <Badge variant="outline">
                          <Wifi className="w-3 h-3 mr-1" />
                          Online Only
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                      <span>by {kit.instructor}</span>
                      <Badge variant="secondary">{kit.category}</Badge>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">
                      {kit.isDownloaded ? kit.totalSize : `${kit.downloadedSize} / ${kit.totalSize}`}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {kit.progress}% complete
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300">
                  {kit.description}
                </p>

                {/* Progress */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Download Progress</span>
                    <span>{kit.progress}%</span>
                  </div>
                  <Progress value={kit.progress} className="h-2" />
                </div>

                {/* Materials Breakdown */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center space-x-2">
                    <Video className="w-4 h-4 text-indigo-600" />
                    <span className="text-sm">{kit.materials.videos} Videos</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FileText className="w-4 h-4 text-green-600" />
                    <span className="text-sm">{kit.materials.pdfs} PDFs</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Code className="w-4 h-4 text-purple-600" />
                    <span className="text-sm">{kit.materials.code} Code Files</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-4 h-4 text-yellow-600" />
                    <span className="text-sm">{kit.materials.quizzes} Quizzes</span>
                  </div>
                </div>

                {/* Last Sync */}
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>
                      Last synced: {kit.lastSync === 'Never' ? 'Never' : new Date(kit.lastSync).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <HardDrive className="w-4 h-4" />
                    <span>{getTotalMaterials(kit.materials)} files</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-3 pt-2 border-t">
                  {kit.isDownloaded ? (
                    <>
                      <Button className="flex-1">
                        <Play className="w-4 h-4 mr-2" />
                        Access Offline
                      </Button>
                      <Button variant="outline" onClick={() => handleSync(kit.id)}>
                        Sync Updates
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button 
                        className="flex-1"
                        onClick={() => handleDownload(kit.id)}
                        disabled={downloadingId === kit.id}
                      >
                        {downloadingId === kit.id ? (
                          <>
                            <Download className="w-4 h-4 mr-2 animate-bounce" />
                            Downloading...
                          </>
                        ) : (
                          <>
                            <Download className="w-4 h-4 mr-2" />
                            Download for Offline
                          </>
                        )}
                      </Button>
                      <Button variant="outline">
                        <Play className="w-4 h-4 mr-2" />
                        Stream Online
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Download Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Download Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Auto-download new content</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Automatically download new materials when connected to WiFi
              </p>
            </div>
            <Button variant="outline" size="sm">
              Configure
            </Button>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Download quality</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Choose video quality for offline downloads
              </p>
            </div>
            <Button variant="outline" size="sm">
              High Quality
            </Button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Storage management</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Manage downloaded content and clear space
              </p>
            </div>
            <Button variant="outline" size="sm">
              Manage Storage
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}