import { Shield, Star, Trophy, Zap } from 'lucide-react';

export const getRarityColor = (rarity: string) => {
  switch (rarity) {
    case 'Common': return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300';
    case 'Rare': return 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300';
    case 'Epic': return 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300';
    case 'Legendary': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300';
    default: return 'bg-gray-100 text-gray-700';
  }
};

export const getRarityIcon = (rarity: string) => {
  switch (rarity) {
    case 'Common': return Shield;
    case 'Rare': return Star;
    case 'Epic': return Trophy;
    case 'Legendary': return Zap;
    default: return Shield;
  }
};

export const shareNFT = (badge: any) => {
  const url = `https://eclearnix.com/nft/${badge.tokenId}`;
  if (navigator.share) {
    navigator.share({
      title: badge.title,
      text: `Check out my ${badge.title} NFT certificate!`,
      url: url
    });
  } else {
    navigator.clipboard.writeText(url);
    alert('Certificate link copied to clipboard!');
  }
};

export const downloadCertificate = (badge: any) => {
  alert(`Downloading ${badge.title} certificate...`);
};