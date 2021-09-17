module.exports = {
  email: 'simonelungarella@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/surveiior',
    },
    {
      name: 'Stack',
      url: 'https://stackoverflow.com/users/10722088/simone-lungarella',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/simone-lungarella/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/surveiior',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/simonelungarella/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/Surveiior',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    yellow: '#efc050',
    navy: '#1f2833',
    darkNavy: '#131920',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
