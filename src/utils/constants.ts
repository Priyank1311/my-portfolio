export const HLS_VIDEO_URL =
  'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8'

export const LOADING_WORDS = ['Scale', 'Engineer', 'Optimize', 'Deploy'] as const
export const LOADING_DURATION = 2700

export const HERO_ROLES = [
  'Full Stack Engineer',
  'Backend Architect',
  'React Developer',
  'AI Builder',
  'System Optimizer',
] as const

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'Contact', href: '#contact' },
] as const

export const HERO_STATS = [
  { value: 10, suffix: '+', label: 'APIs Deployed' },
  { value: 35, suffix: '%', label: 'API Latency Reduced' },
  { value: 99.9, suffix: '%', label: 'System Availability', decimals: 1 },
  { value: 100, suffix: '+', label: 'RPM Event Processing' },
] as const

export const PROJECTS = [
  {
    id: 'aircursor-pro',
    title: 'AirCursor Pro',
    tech: ['Python', 'PyQt6', 'OpenCV', 'MediaPipe', 'PyAutoGUI'],
    description:
      'Cross-platform desktop app for hands-free OS mouse control using webcam-based hand gesture recognition, smoothing, calibration, and safety controls.',
    metric: '21-point hand tracking',
    span: 'col-span-12 md:col-span-6',
    variant: 'ai' as const,
    image:
      'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'api-runner',
    title: 'API Collection Runner',
    tech: ['FastAPI', 'React', 'TypeScript', 'SQLite', 'Zustand'],
    description:
      'High-throughput API execution proxy system built to bypass browser CORS limitations using FastAPI and asynchronous request pipelines.',
    metric: '99.9% uptime',
    span: 'col-span-12 md:col-span-6',
    variant: 'terminal' as const,
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'event-tracker',
    title: 'Client Journey Event Tracker',
    tech: ['React.js', 'Django', 'PostgreSQL'],
    description:
      'Real-time analytics dashboard capable of processing and visualizing high-volume user event telemetry.',
    metric: '100+ requests/min',
    span: 'col-span-12 md:col-span-4',
    variant: 'analytics' as const,
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'music-platform',
    title: 'Scalable Music Platform',
    tech: ['Python', 'Django', 'Redis', 'PostgreSQL'],
    description:
      'Distributed backend media platform optimized with Redis caching and concurrent request handling.',
    metric: '30% faster response times',
    span: 'col-span-12 md:col-span-4',
    variant: 'backend' as const,
    image:
      'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'face-detection',
    title: 'AI Face Detection System',
    tech: ['Python', 'TensorFlow', 'OpenCV'],
    description:
      'Real-time computer vision system using deep learning pipelines for facial feature detection with 90%+ precision.',
    metric: '90%+ precision',
    span: 'col-span-12 md:col-span-4',
    variant: 'ai' as const,
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=80',
  },
] as const

export const EXPERIENCES = [
  {
    company: 'Nivesh',
    role: 'Junior Software Developer (Full Stack)',
    duration: 'June 2025 - Present',
    highlights: [
      'Built and deployed 10+ backend microservices',
      'Improved server efficiency by 25-30%',
      'Developed React-based real-time dashboards',
      'Maintained 95%+ bug-free deployment rate',
      'Collaborated in Agile fintech environments',
    ],
  },
  {
    company: 'Wealthzi',
    role: 'Backend Developer',
    duration: 'Nov 2023 - Sep 2024',
    highlights: [
      'Optimized PostgreSQL queries by 30-40%',
      'Reduced API latency by 35% using Redis',
      'Built secure REST & SOAP APIs',
      'Designed distributed fintech backend systems',
    ],
  },
] as const

export const TECH_CATEGORIES = [
  {
    title: 'Backend',
    items: [
      { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' },
      { name: 'Django', icon: 'https://cdn.simpleicons.org/django/44B78B' },
      { name: 'FastAPI', icon: 'https://cdn.simpleicons.org/fastapi/009688' },
      { name: 'DRF', icon: 'https://cdn.simpleicons.org/django/44B78B' },
      { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
      { name: 'Redis', icon: 'https://cdn.simpleicons.org/redis/FF4438' },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
      { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
      { name: 'Zustand', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
      { name: 'Tailwind', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
      { name: 'Vite', icon: 'https://cdn.simpleicons.org/vite/646CFF' },
    ],
  },
  {
    title: 'AI & Systems',
    items: [
      { name: 'TensorFlow', icon: 'https://cdn.simpleicons.org/tensorflow/FF6F00' },
      { name: 'OpenCV', icon: 'https://cdn.simpleicons.org/opencv/5C3EE8' },
      { name: 'MediaPipe', icon: 'https://cdn.simpleicons.org/google/4285F4' },
      { name: 'NumPy', icon: 'https://cdn.simpleicons.org/numpy/013243' },
      { name: 'Distributed Systems', icon: 'https://cdn.simpleicons.org/kubernetes/326CE5' },
      { name: 'Async Programming', icon: 'https://cdn.simpleicons.org/fastapi/009688' },
    ],
  },
  {
    title: 'Desktop Apps',
    items: [
      { name: 'PyQt6', icon: 'https://cdn.simpleicons.org/qt/41CD52' },
      { name: 'PyAutoGUI', icon: 'https://cdn.simpleicons.org/python/3776AB' },
      { name: 'pynput', icon: 'https://cdn.simpleicons.org/python/3776AB' },
      { name: 'JSON Config', icon: 'https://cdn.simpleicons.org/json/FFFFFF' },
    ],
  },
  {
    title: 'DevOps & Tools',
    items: [
      { name: 'GitHub Actions', icon: 'https://cdn.simpleicons.org/githubactions/2088FF' },
      { name: 'CI/CD', icon: 'https://cdn.simpleicons.org/githubactions/2088FF' },
      { name: 'Render', icon: 'https://cdn.simpleicons.org/render/46E3B7' },
      { name: 'Vercel', icon: 'https://cdn.simpleicons.org/vercel/FFFFFF' },
      { name: 'Linux', icon: 'https://cdn.simpleicons.org/linux/FCC624' },
    ],
  },
] as const

export const METRICS = [
  { value: 10, suffix: '+', label: 'Microservices Built' },
  { value: 35, suffix: '%', label: 'API Latency Reduction' },
  { value: 95, suffix: '%', label: 'Bug-Free Deployments' },
  { value: 99.9, suffix: '%', label: 'System Availability', decimals: 1 },
] as const

export const EXPLORATION_ITEMS = [
  {
    title: 'Microservices Architecture',
    tag: 'Distributed Systems',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    tech: [
      { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' },
      { name: 'FastAPI', icon: 'https://cdn.simpleicons.org/fastapi/009688' },
      { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
      { name: 'Redis', icon: 'https://cdn.simpleicons.org/redis/FF4438' },
      { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED' },
      { name: 'Linux', icon: 'https://cdn.simpleicons.org/linux/FCC624' },
    ],
  },
  {
    title: 'Real-time Analytics Pipeline',
    tag: 'Event Processing',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    tech: [
      { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
      { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
      { name: 'Django', icon: 'https://cdn.simpleicons.org/django/44B78B' },
      { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
      { name: 'Redis', icon: 'https://cdn.simpleicons.org/redis/FF4438' },
      { name: 'Vite', icon: 'https://cdn.simpleicons.org/vite/646CFF' },
    ],
  },
  {
    title: 'Fintech API Gateway',
    tag: 'Backend',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=1200&q=80',
    tech: [
      { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' },
      { name: 'Django', icon: 'https://cdn.simpleicons.org/django/44B78B' },
      { name: 'FastAPI', icon: 'https://cdn.simpleicons.org/fastapi/009688' },
      { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
      { name: 'Redis', icon: 'https://cdn.simpleicons.org/redis/FF4438' },
      { name: 'Linux', icon: 'https://cdn.simpleicons.org/linux/FCC624' },
    ],
  },
  {
    title: 'Neural Vision Pipeline',
    tag: 'AI / CV',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
    tech: [
      { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' },
      { name: 'OpenCV', icon: 'https://cdn.simpleicons.org/opencv/5C3EE8' },
      { name: 'MediaPipe', icon: 'https://cdn.simpleicons.org/google/4285F4' },
      { name: 'TensorFlow', icon: 'https://cdn.simpleicons.org/tensorflow/FF6F00' },
      { name: 'NumPy', icon: 'https://cdn.simpleicons.org/numpy/013243' },
      { name: 'PyQt6', icon: 'https://cdn.simpleicons.org/qt/41CD52' },
    ],
  },
  {
    title: 'Redis Caching Layer',
    tag: 'Performance',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    tech: [
      { name: 'Redis', icon: 'https://cdn.simpleicons.org/redis/FF4438' },
      { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' },
      { name: 'Django', icon: 'https://cdn.simpleicons.org/django/44B78B' },
      { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
      { name: 'FastAPI', icon: 'https://cdn.simpleicons.org/fastapi/009688' },
      { name: 'GitHub Actions', icon: 'https://cdn.simpleicons.org/githubactions/2088FF' },
    ],
  },
  {
    title: 'CI/CD Automation',
    tag: 'DevOps',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=1200&q=80',
    tech: [
      { name: 'GitHub Actions', icon: 'https://cdn.simpleicons.org/githubactions/2088FF' },
      { name: 'Vercel', icon: 'https://cdn.simpleicons.org/vercel/FFFFFF' },
      { name: 'Render', icon: 'https://cdn.simpleicons.org/render/46E3B7' },
      { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED' },
      { name: 'Linux', icon: 'https://cdn.simpleicons.org/linux/FCC624' },
      { name: 'Vite', icon: 'https://cdn.simpleicons.org/vite/646CFF' },
    ],
  },
] as const

export const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/Priyank1311' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/priyank-bhardwaj-211974180/' },
  // { label: 'Twitter/X', href: 'https://x.com/priyankbhardwaj' },
] as const

export const EMAIL = 'priyankbhardwaj2477@gmail.com'

export const FOOTER_MARQUEE =
  'FULL STACK • FASTAPI • REACT • DISTRIBUTED SYSTEMS • AI • DJANGO • POSTGRESQL'
