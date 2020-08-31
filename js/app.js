const sectionPage = new fullpage('#fullpage', {
  // ROLLING
  autoScrolling: true,
  fitToSection: false,
  fitToSectionDelay: 300,
  easing: 'easeInOutCubic',
  scrollingSpeed: 700,
  css3: true,
  easingcss3: 'ease-out',
  loopBottom: false,
  // NAVIGATION
  navigation: true,
  menu: '#menu',
  anchors: ['inicio', 'productos', 'contacto'],
  navigationTooltips: ['Inicio', 'Productos', 'Contacto'],
  showActiveTooltip: false,
  // SECTIONES
  sectionsColor: ['#000', '#c2c2c2', '#000'],
  verticalCentered: true,
  // SLIDES
  controlArrows: true,
  slidesNavigation: false,
  afterLoad: function (origin, destination) {
    if (destination.anchor == 'contacto') {
      document.querySelector('.footer').querySelector('h2').style.opacity = 1;
    }
  },
});
