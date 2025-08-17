import { useState } from 'react';
import { useUser } from '../App';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Switch } from './ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  User, 
  Bell, 
  Shield, 
  Palette, 
  Globe, 
  CreditCard,
  Download,
  Trash2,
  Edit,
  Save,
  Camera
} from 'lucide-react';

export default function Settings() {
  const { user, darkMode, toggleDarkMode } = useUser();
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    bio: 'Passionate learner exploring AI and machine learning. Currently pursuing advanced certifications in deep learning.',
    location: 'San Francisco, CA',
    website: 'https://myportfolio.dev',
    domain: user?.domain || ''
  });

  const [notifications, setNotifications] = useState({
    coursesUpdates: true,
    mentorMessages: true,
    weeklyDigest: true,
    marketplaceAlerts: false,
    researchUpdates: true
  });

  const [privacy, setPrivacy] = useState({
    profileVisibility: 'public',
    showProgress: true,
    showCertificates: true,
    allowMessages: true
  });

  const handleSave = () => {
    alert('Settings saved successfully!');
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Settings</h1>
        <p className="text-slate-300 mt-2">
          Manage your account preferences and privacy settings
        </p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5 bg-white bg-opacity-5 backdrop-blur-sm border-white border-opacity-20">
          <TabsTrigger value="profile" className="text-white data-[state=active]:bg-purple-600 data-[state=active]:text-white">Profile</TabsTrigger>
          <TabsTrigger value="notifications" className="text-white data-[state=active]:bg-purple-600 data-[state=active]:text-white">Notifications</TabsTrigger>
          <TabsTrigger value="privacy" className="text-white data-[state=active]:bg-purple-600 data-[state=active]:text-white">Privacy</TabsTrigger>
          <TabsTrigger value="billing" className="text-white data-[state=active]:bg-purple-600 data-[state=active]:text-white">Billing</TabsTrigger>
          <TabsTrigger value="data" className="text-white data-[state=active]:bg-purple-600 data-[state=active]:text-white">Data</TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile" className="space-y-6">
          <Card className="bg-white bg-opacity-5 backdrop-blur-sm border-white border-opacity-20">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <User className="w-5 h-5 mr-2 text-purple-400" />
                Profile Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Avatar Section */}
              <div className="flex items-center space-x-6">
                <Avatar className="w-24 h-24">
                  <AvatarImage src={user?.avatar} />
                  <AvatarFallback className="text-xl">{user?.name?.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="bg-white bg-opacity-10 border-white border-opacity-20 text-white hover:bg-white hover:bg-opacity-15">
                    <Camera className="w-4 h-4 mr-2 text-purple-400" />
                    Change Photo
                  </Button>
                  <p className="text-sm text-slate-400">
                    JPG, PNG or GIF. Max size 5MB.
                  </p>
                </div>
              </div>

              <Separator className="bg-white bg-opacity-20" />

              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Full Name</Label>
                  <Input
                    id="name"
                    value={profileData.name}
                    onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                    className="bg-white bg-opacity-10 border-white border-opacity-20 text-white placeholder:text-slate-400"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                    className="bg-white bg-opacity-10 border-white border-opacity-20 text-white placeholder:text-slate-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location" className="text-white">Location</Label>
                  <Input
                    id="location"
                    value={profileData.location}
                    onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                    className="bg-white bg-opacity-10 border-white border-opacity-20 text-white placeholder:text-slate-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="website" className="text-white">Website/Portfolio</Label>
                  <Input
                    id="website"
                    value={profileData.website}
                    onChange={(e) => setProfileData({...profileData, website: e.target.value})}
                    className="bg-white bg-opacity-10 border-white border-opacity-20 text-white placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* Bio */}
              <div className="space-y-2">
                <Label htmlFor="bio" className="text-white">Bio</Label>
                <textarea
                  id="bio"
                  className="min-h-20 w-full rounded-md border border-white border-opacity-20 bg-white bg-opacity-10 px-3 py-2 text-sm text-white placeholder:text-slate-400"
                  value={profileData.bio}
                  onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                  placeholder="Tell us about yourself..."
                />
                <p className="text-xs text-slate-400">
                  {profileData.bio.length}/500 characters
                </p>
              </div>

              {/* Domain */}
              <div className="space-y-2">
                <Label htmlFor="domain" className="text-white">Primary Learning Domain</Label>
                <Select value={profileData.domain} onValueChange={(value) => setProfileData({...profileData, domain: value})}>
                  <SelectTrigger className="bg-white bg-opacity-10 border-white border-opacity-20 text-white">
                    <SelectValue placeholder="Select your domain" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="AI & ML">AI & Machine Learning</SelectItem>
                    <SelectItem value="Development">Web Development</SelectItem>
                    <SelectItem value="Design">UX/UI Design</SelectItem>
                    <SelectItem value="Data Science">Data Science</SelectItem>
                    <SelectItem value="Marketing">Digital Marketing</SelectItem>
                    <SelectItem value="Cybersecurity">Cybersecurity</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex justify-end">
                <Button onClick={handleSave} className="bg-purple-600 hover:bg-purple-700 text-white">
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="bg-white bg-opacity-5 backdrop-blur-sm border-white border-opacity-20">
            <CardHeader>
              <CardTitle className="text-white">Your Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">{user?.progress?.coursesCompleted}</div>
                  <p className="text-sm text-slate-300">Courses Completed</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">{user?.progress?.skillBadges}</div>
                  <p className="text-sm text-slate-300">Skill Badges</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">{user?.progress?.mentorSessions}</div>
                  <p className="text-sm text-slate-300">Mentor Sessions</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">{user?.progress?.nftCertificates}</div>
                  <p className="text-sm text-slate-300">NFT Certificates</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications" className="space-y-6">
          <Card className="bg-white bg-opacity-5 backdrop-blur-sm border-white border-opacity-20">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <Bell className="w-5 h-5 mr-2 text-purple-400" />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {Object.entries({
                coursesUpdates: 'Course updates and new content',
                mentorMessages: 'Messages from mentors',
                weeklyDigest: 'Weekly learning digest',
                marketplaceAlerts: 'Marketplace and job alerts',
                researchUpdates: 'Research paper recommendations'
              }).map(([key, label]) => (
                <div key={key} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-white">{label}</p>
                    <p className="text-sm text-slate-400">
                      Receive notifications about {label.toLowerCase()}
                    </p>
                  </div>
                  <Switch
                    checked={notifications[key]}
                    onCheckedChange={(checked) => 
                      setNotifications({...notifications, [key]: checked})
                    }
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Privacy Tab */}
        <TabsContent value="privacy" className="space-y-6">
          <Card className="bg-white bg-opacity-5 backdrop-blur-sm border-white border-opacity-20">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <Shield className="w-5 h-5 mr-2 text-purple-400" />
                Privacy Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label className="text-white">Profile Visibility</Label>
                <Select value={privacy.profileVisibility} onValueChange={(value) => 
                  setPrivacy({...privacy, profileVisibility: value})
                }>
                  <SelectTrigger className="bg-white bg-opacity-10 border-white border-opacity-20 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="public">Public - Everyone can see</SelectItem>
                    <SelectItem value="users">ECLearnix Users Only</SelectItem>
                    <SelectItem value="private">Private - Only me</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {['showProgress', 'showCertificates', 'allowMessages'].map((key) => (
                <div key={key} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-white">
                      {key === 'showProgress' && 'Show learning progress'}
                      {key === 'showCertificates' && 'Show certificates publicly'}
                      {key === 'allowMessages' && 'Allow direct messages'}
                    </p>
                  </div>
                  <Switch
                    checked={privacy[key]}
                    onCheckedChange={(checked) => 
                      setPrivacy({...privacy, [key]: checked})
                    }
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Billing Tab */}
        <TabsContent value="billing" className="space-y-6">
          <Card className="bg-white bg-opacity-5 backdrop-blur-sm border-white border-opacity-20">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <CreditCard className="w-5 h-5 mr-2 text-purple-400" />
                Billing & Subscription
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-green-500 bg-opacity-20 rounded-lg border border-green-400 border-opacity-30">
                <div>
                  <p className="font-medium text-green-200">Premium Plan</p>
                  <p className="text-sm text-green-300">Active until March 15, 2025</p>
                </div>
                <Badge variant="secondary" className="bg-green-500 bg-opacity-30 text-green-200 border-green-400 border-opacity-30">
                  Active
                </Badge>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium text-white">Payment Method</h4>
                <div className="flex items-center justify-between p-4 border border-white border-opacity-20 rounded-lg bg-white bg-opacity-5">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
                      <CreditCard className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-white">•••• •••• •••• 1234</p>
                      <p className="text-sm text-slate-400">Expires 12/26</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="bg-white bg-opacity-10 border-white border-opacity-20 text-white hover:bg-white hover:bg-opacity-15">
                    <Edit className="w-4 h-4 mr-1 text-purple-400" />
                    Edit
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium text-white">Billing History</h4>
                <div className="space-y-2">
                  {[
                    { date: 'Jan 15, 2024', amount: '$29.99', status: 'Paid' },
                    { date: 'Dec 15, 2023', amount: '$29.99', status: 'Paid' },
                    { date: 'Nov 15, 2023', amount: '$29.99', status: 'Paid' }
                  ].map((bill, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border border-white border-opacity-20 rounded bg-white bg-opacity-5">
                      <div>
                        <p className="font-medium text-white">{bill.date}</p>
                        <p className="text-sm text-slate-400">Premium Plan</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-white">{bill.amount}</p>
                        <Badge variant="secondary" className="text-xs bg-purple-500 bg-opacity-20 text-purple-200 border-purple-400 border-opacity-30">
                          {bill.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Data Tab */}
        <TabsContent value="data" className="space-y-6">
          <Card className="bg-white bg-opacity-5 backdrop-blur-sm border-white border-opacity-20">
            <CardHeader>
              <CardTitle className="text-white">Data Management</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-white border-opacity-20 rounded-lg bg-white bg-opacity-5">
                  <div>
                    <h4 className="font-medium text-white">Export Your Data</h4>
                    <p className="text-sm text-slate-400">
                      Download all your learning data, progress, and certificates
                    </p>
                  </div>
                  <Button variant="outline" className="bg-white bg-opacity-10 border-white border-opacity-20 text-white hover:bg-white hover:bg-opacity-15">
                    <Download className="w-4 h-4 mr-2 text-purple-400" />
                    Export
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 border border-red-400 border-opacity-30 rounded-lg bg-red-500 bg-opacity-10">
                  <div>
                    <h4 className="font-medium text-red-200">Delete Account</h4>
                    <p className="text-sm text-red-300">
                      Permanently delete your account and all associated data
                    </p>
                  </div>
                  <Button variant="destructive" className="bg-red-600 hover:bg-red-700 text-white">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Theme Toggle */}
      <Card className="bg-white bg-opacity-5 backdrop-blur-sm border-white border-opacity-20">
        <CardHeader>
          <CardTitle className="flex items-center text-white">
            <Palette className="w-5 h-5 mr-2 text-purple-400" />
            Appearance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-white">Dark Mode</p>
              <p className="text-sm text-slate-400">
                Switch between light and dark themes
              </p>
            </div>
            <Switch checked={darkMode} onCheckedChange={toggleDarkMode} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}