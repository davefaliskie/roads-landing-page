const metaConfig = {
  default: {
    title: 'Roads Audio - Stay Close, Even When Life Gets Busy',
    description:
      'Send meaningful voice messages that feel more personal than texting. Roads helps you stay close to friends, partners, and family by letting you talk when it works for you.',
    image: 'https://roadsaudioassets.s3.us-east-1.amazonaws.com/Roads_Cover.jpg',
  },
  '/travel': {
    title: 'Roads Audio - Stay Connected While Traveling',
    description:
      'Roads is a voice messaging app that helps you stay close to friends and family — even across time zones. Record and share audio updates from anywhere.',
    image: '/images/RoadsAudio-GoFarStayClose.jpg',
  },
  '/college': {
    title: 'Roads Audio - Stay Connected with College Friends',
    description:
      'Roads is a voice messaging app that helps you stay close to your college friends as life gets busy. Send voice updates and catch up on your own time.',
    image: '/images/RoadsAudio-StayCloseToCollegeFriends.jpg',
  },
  '/delete-account': {
    title: 'Roads Audio - How to delete your account',
    description: 'See how to delete your account and data from Roads.',
    image: 'https://roadsaudioassets.s3.us-east-1.amazonaws.com/Roads_Cover.jpg',
  },
  '/blogs': {
    title: 'Roads Audio Blog - Voice Messaging Tips, Guides & Stories',
    description:
      'Discover how to use voice messaging for staying connected, accessibility tips for blind users, private podcasting guides, and more from the Roads Audio blog.',
    image: 'https://roadsaudioassets.s3.us-east-1.amazonaws.com/Roads_Cover.jpg',
  },
  '/blogs/the-evolution-of-audio-from-radio-to-roads': {
    title: 'The Evolution of Audio: From Radio to Roads',
    description:
      'Explore the evolution of audio communication, from early radio innovations to the digital age with podcasts, leading up to the transformative Roads app.',
    image: '/images/blogs/001/CommunicationReinvented.png',
    datePublished: '2025-01-15',
    cluster: 'General',
  },
  '/blogs/how-to-start-a-private-micro-podcast': {
    title: 'How to Start a Private Micro Podcast With Roads Audio',
    description:
      'Skip the expensive studio setup and get the benefits of podcasting effortlessly. Perfect for businesses, creators, and communities looking for secure, invite-only audio discussions.',
    image: '/images/blogs/002/microPodcasting.png',
    datePublished: '2025-02-10',
    cluster: 'Private Podcasting',
  },
  '/blogs/audio-app-for-blind-users': {
    title: 'Audio App for Blind Users: Voice Messaging for Visually Impaired | Roads Audio',
    description:
      "Discover the best audio app for blind and visually impaired users. Roads Audio offers voice-only messaging that's faster than text, works perfectly with screen readers, and connects blind users with everyone.",
    image: '/images/blogs/003/blindUserHero.png',
    datePublished: '2025-07-20',
    cluster: 'Blind/VI',
  },
  '/blogs/voice-messaging-for-grandparents-simple-guide': {
    title: 'Voice Messaging for Grandparents: Simple Guide',
    description:
      'Learn how grandparents can easily use voice messages instead of texting. No tiny keyboards, just press and talk. Simple setup guide for staying connected with family.',
    image: '/images/blogs/004/grandparentHero.png',
    datePublished: '2025-11-15',
    cluster: 'Seniors',
  },
  '/blogs/military-families-voice-messages-deployment': {
    title: 'Military Family Communication Apps for Deployment',
    description:
      'Stay connected through deployment with voice messages. Perfect for military families across time zones. Secure, private channels for sharing moments that matter.',
    image: '/images/blogs/005/militaryFamilyHero.png',
    datePublished: '2025-12-03',
    cluster: 'Family Connection',
  },
  '/blogs/questions-to-ask-to-get-to-know-someone': {
    title: '50 Questions to Ask Someone to Get to Know Them Better | Roads Audio',
    description:
      'Use these 50 questions to get to know someone better, reconnect with a friend, and start more meaningful conversations through short voice messages or thoughtful replies.',
    image: '/images/blogs/006/50Questions.png',
    datePublished: '2026-01-11',
    cluster: 'Family Connection',
  },
  '/blogs/how-blind-people-stay-connected': {
    title: 'How Blind People Stay Connected with Friends and Family | Roads Audio',
    description:
      'Discover how blind and visually impaired users are staying close to friends and family with voice-first messaging. No typing, no screen reader fatigue, just real connection through voice.',
    image: '/images/blogs/007/blindConnectionHero.png',
    datePublished: '2026-03-15',
    cluster: 'Blind/VI',
  },
  '/blogs/voiceover-compatible-apps': {
    title: 'VoiceOver Compatible Apps: What That Actually Means | Roads Audio',
    description:
      'Learn what makes an app truly VoiceOver compatible versus just technically functional. Discover the difference between accessibility as a checkbox and accessibility that works.',
    image: '/images/blogs/008/voiceoverHero.png',
    datePublished: '2026-03-18',
    cluster: 'Blind/VI',
  },
  '/blogs/private-voice-messaging-apps': {
    title: 'Private Voice Messaging Apps: Why Some Groups Stay Closed | Roads Audio',
    description:
      'Not every conversation needs an audience. Learn why private voice messaging apps work better for families, close friends, and small communities who want to talk without broadcasting to the world.',
    image: '/images/blogs/009/privateVoiceHero.png',
    datePublished: '2026-03-22',
    cluster: 'General',
  },
  '/blogs/what-is-a-micro-podcast': {
    title: 'What is a Micro Podcast? The Private Audio Format for Groups | Roads Audio',
    description:
      'A micro podcast is a private, audio-first conversation for small groups. Learn how this format combines the best of podcasting and group chats for families, friends, and teams.',
    image: '/images/blogs/010/microPodcastHero.png',
    datePublished: '2026-03-25',
    cluster: 'Private Podcasting',
  },
  '/blogs/talkback-compatible-apps': {
    title: 'TalkBack Compatible Apps: Android Accessibility That Works | Roads Audio',
    description:
      'Learn what makes an Android app truly TalkBack compatible. Discover the difference between apps that technically work with screen readers and apps that are actually usable.',
    image: '/images/blogs/011/talkbackHero.png',
    datePublished: '2026-04-05',
    cluster: 'Blind/VI',
  },
  '/blogs/low-vision-apps': {
    title: 'Low Vision Apps for Staying Connected | Roads Audio',
    description:
      'Find apps that work for low vision users. Learn what makes an app accessible for people with partial sight and why voice-first communication reduces eye strain.',
    image: '/images/blogs/012/lowVisionHero.png',
    datePublished: '2026-04-08',
    cluster: 'Blind/VI',
  },
  '/blogs/async-standup-apps': {
    title: 'Async Standup Apps: Voice Updates for Remote Teams | Roads Audio',
    description:
      'Replace daily standup meetings with async voice updates. Learn how distributed teams use voice messaging to stay aligned without scheduling headaches.',
    image: '/images/blogs/013/asyncStandupHero.png',
    datePublished: '2026-04-13',
    cluster: 'Async/B2B',
  },
  '/blogs/stay-connected-long-distance-family': {
    title: 'How to Stay Connected with Long Distance Family | Roads Audio',
    description:
      'Keep your family close despite the miles. Learn how voice messaging helps families share everyday moments across time zones and busy schedules.',
    image: '/images/blogs/014/familyConnectionHero.png',
    datePublished: '2026-04-16',
    cluster: 'Family',
  },
  '/blogs/internal-podcast-for-teams': {
    title: 'Internal Podcasts for Teams: Company Updates Without Another Meeting | Roads Audio',
    description:
      'Create an internal podcast for your company. Share leadership updates, department news, and culture content through voice that employees can listen to on their own time.',
    image: '/images/blogs/015/internalPodcastHero.png',
    datePublished: '2026-04-21',
    cluster: 'B2B',
  },
  '/blogs/async-coaching-apps': {
    title: 'Async Coaching Apps: Voice-Based Coaching Without Scheduling Hassles | Roads Audio',
    description:
      'Deliver coaching through async voice messages. Learn how coaches are building flexible practices that work across time zones without calendar friction.',
    image: '/images/blogs/016/asyncCoachingHero.png',
    datePublished: '2026-04-24',
    cluster: 'Coaching',
  },
  '/blogs/long-distance-relationship-apps': {
    title: 'Best Long Distance Relationship Apps for Couples in 2026 | Roads Audio',
    description:
      'Stay connected with your partner across any distance. Discover why voice messaging works better than texting for long distance relationships.',
    image: '/images/blogs/017/longDistanceHero2.png',
    datePublished: '2026-04-28',
    cluster: 'Relationships',
  },
  '/blogs/couples-communication-app': {
    title: 'Couples Communication Apps: Finding the Right Way to Stay Connected | Roads Audio',
    description:
      'Find the best communication app for your relationship. Learn why voice messaging creates stronger connection than text for couples.',
    image: '/images/blogs/018/couplesCommunicationHero.png',
    datePublished: '2026-05-13',
    cluster: 'Relationships',
  },
  '/blogs/book-club-app': {
    title: 'Book Club Apps: How to Run a Virtual Book Club That Works | Roads Audio',
    description:
      "Start a book club that fits everyone's schedule. Learn how async voice discussion keeps book clubs alive without requiring everyone to meet at the same time.",
    image: '/images/blogs/019/bookClubHero.png',
    datePublished: '2026-05-19',
    cluster: 'Communities',
  },
  '/blogs/async-mentoring-apps': {
    title: 'Async Mentoring Apps: Building Mentorship Without Scheduling Barriers | Roads Audio',
    description:
      'Maintain mentoring relationships that last. Learn how async voice messaging removes the scheduling friction that kills most mentorship programs.',
    image: '/images/blogs/020/asyncMentoringHero.png',
    datePublished: '2026-05-26',
    cluster: 'Coaching',
  },
  '/blogs/dark-mode-accessibility-apps': {
    title: 'Dark Mode Accessibility: Why It Matters More Than You Think | Roads Audio',
    description:
      'Dark mode is more than a preference for users with low vision and light sensitivity. Learn why dark mode support is an accessibility necessity and how Roads Audio now supports it.',
    image: '/images/blogs/021/darkModeHero.png',
    datePublished: '2026-06-02',
    cluster: 'Accessibility',
  },
  '/blogs/feeling-disconnected-from-partner': {
    title: 'Feeling Disconnected from Your Partner? How to Rebuild Daily Connection | Roads Audio',
    description:
      'Reconnect with your partner when life gets too busy. Learn how to rebuild daily sharing habits and why voice messages help couples who have drifted apart.',
    image: '/images/blogs/022/disconnectedHero.png',
    datePublished: '2026-06-09',
    cluster: 'Relationships',
  },
  '/blogs/executive-coaching-apps': {
    title: 'Executive Coaching Apps: Tools for High-Level Leadership Development | Roads Audio',
    description:
      'Deliver executive coaching that fits demanding schedules. Learn how async voice coaching helps coaches maintain high-touch relationships with busy leaders.',
    image: '/images/blogs/023/executiveCoachingHero.png',
    datePublished: '2026-06-16',
    cluster: 'Coaching',
  },
  '/blogs/accountability-partner-app': {
    title: 'Accountability Partner Apps: Staying on Track Together | Roads Audio',
    description:
      'Find an accountability partner app that actually works. Learn how voice-based check-ins create stronger accountability than text without the hassle of scheduling calls.',
    image: '/images/blogs/024/accountabilityHero.png',
    datePublished: '2026-06-23',
    cluster: 'Coaching',
  },
};

export default metaConfig;
