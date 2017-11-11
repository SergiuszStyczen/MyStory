$(document).ready(function() {
  $('#pagepiling').pagepiling({
    menu: null,
    direction: 'horizontal',
    verticalCentered: true,
    sectionsColor: [],
    // navigation: false,
    anchors: [],
    scrollingSpeed: 700,
    easing: 'swing',
    loopBottom: true,
    loopTop: true,
    css3: true,
    normalScrollElements: null,
    normalScrollElementTouchThreshold: 5,
    touchSensitivity: 5,
    keyboardScrolling: true,
    sectionSelector: '.section',
    animateAnchor: false,
  });

  $('.about').one('click', function() {
    $('.click_about').fadeOut();
    $('.about_text').typeIt({
      strings: ["My story?", "Let's see.", "Came to Warsaw 10 years ago.", "After a while I managed to get a diploma of Journalism and Japan studies on The University of Warsaw.",
       "Around 2 years ago I've realised that I want to be a web dev. Always liked technology.", "Since then I've been working as a freelancer for about 10 mounths.", "Last 8 years I've spent working for a big company as a Junior Programmer.", "But...",
      "Change is unevitable so right now I'm at the market.", "Hobbies?", "Basketball, video games, and UX.", "....", "Keep scrolling." ],
      speed: 70,
      autoStart: false
    });
  });

  $('.skills').one('click', function() {
    $('.click_skills').fadeOut();
    $('.skills_text').fadeIn(2500);
  });

  $('.contact').one('click', function() {
    $('.click_contact').fadeOut();
    $('.contact_text_wrapper').fadeIn(2500);
  });
});
