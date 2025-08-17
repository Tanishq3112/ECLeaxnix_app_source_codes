import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { CheckCircle, Award, ExternalLink, Share2, Download } from 'lucide-react';
import { getRarityColor, getRarityIcon, shareNFT, downloadCertificate } from './utils/nftUtils';

interface NFTBadgeCardProps {
  badge: any;
}

export default function NFTBadgeCard({ badge }: NFTBadgeCardProps) {
  const RarityIcon = getRarityIcon(badge.rarity);

  return (
    <Card className="hover:shadow-lg transition-shadow overflow-hidden">
      <div className={`h-32 bg-gradient-to-br ${badge.color} relative`}>
        <div className="absolute top-4 left-4">
          <Badge className={getRarityColor(badge.rarity)}>
            <RarityIcon className="w-3 h-3 mr-1" />
            {badge.rarity}
          </Badge>
        </div>
        <div className="absolute top-4 right-4">
          {badge.verified && (
            <CheckCircle className="w-6 h-6 text-white" />
          )}
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white font-semibold text-lg truncate">
            {badge.title}
          </h3>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-3">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {badge.description}
          </p>
          
          <div className="flex flex-wrap gap-1">
            {badge.skills.slice(0, 3).map((skill: string, index: number) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
            {badge.skills.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{badge.skills.length - 3}
              </Badge>
            )}
          </div>

          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
            <span>Grade: {badge.grade}</span>
            <span>{badge.hours}h completed</span>
          </div>

          <div className="flex space-x-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="flex-1">
                  View Details
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>{badge.title}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className={`h-24 bg-gradient-to-br ${badge.color} rounded-lg flex items-center justify-center`}>
                    <Award className="w-12 h-12 text-white" />
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium">Issued:</span>
                      <span>{new Date(badge.issueDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Blockchain:</span>
                      <span>{badge.blockchain}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Token ID:</span>
                      <span className="text-xs">{badge.tokenId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Issuer:</span>
                      <span>{badge.issuer}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Course:</span>
                      <span>{badge.course}</span>
                    </div>
                  </div>

                  <div className="flex space-x-2 pt-4">
                    <Button variant="outline" size="sm" onClick={() => shareNFT(badge)}>
                      <Share2 className="w-4 h-4 mr-1" />
                      Share
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => downloadCertificate(badge)}>
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                    <Button size="sm">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Verify
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            <Button size="sm" variant="ghost" onClick={() => shareNFT(badge)}>
              <Share2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}