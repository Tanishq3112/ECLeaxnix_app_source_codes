import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Award, Clock } from 'lucide-react';
import { nftBadges, pendingBadges } from './data/nftBadgesData';
import NFTBadgeCard from './NFTBadgeCard';

export default function NFTBadges() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">NFT Skill Badges</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Your blockchain-verified proof of skills and achievements
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-indigo-600">{nftBadges.length}</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Earned Badges</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-green-600">{nftBadges.filter(b => b.verified).length}</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Verified</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-yellow-600">
              {nftBadges.reduce((acc, b) => acc + b.hours, 0)}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Learning Hours</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-purple-600">{pendingBadges.length}</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">In Progress</p>
          </CardContent>
        </Card>
      </div>

      {/* Earned Badges */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Earned Badges ({nftBadges.length})
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nftBadges.map((badge) => (
            <NFTBadgeCard key={badge.id} badge={badge} />
          ))}
        </div>
      </div>

      {/* Pending Badges */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          In Progress ({pendingBadges.length})
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pendingBadges.map((badge) => (
            <Card key={badge.id}>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {badge.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {badge.description}
                      </p>
                    </div>
                    <Award className="w-8 h-8 text-gray-400" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{badge.progress}%</span>
                    </div>
                    <Progress value={badge.progress} className="h-2" />
                  </div>

                  <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                    <span>Course: {badge.course}</span>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      Expected: {new Date(badge.expectedDate).toLocaleDateString()}
                    </div>
                  </div>

                  <Button variant="outline" size="sm" className="w-full">
                    Continue Learning
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Achievement Gallery */}
      <Card>
        <CardHeader>
          <CardTitle>Achievement Gallery</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <Award className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Share Your Success
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Your NFT badges are blockchain-verified and can be shared across platforms
            </p>
            <Button>
              <Award className="w-4 h-4 mr-2" />
              View Public Gallery
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}