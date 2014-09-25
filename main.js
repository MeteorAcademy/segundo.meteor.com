Router.configure({
   layoutTemplate: 'layout',
   yieldTemplate: {
      header: {
         to: 'header'
      },
      footer: {
         to: 'footer'
      }
   }
});

Router.map(function() {
  this.route('home', {path: '/'});
  this.route('about');
  this.route('contact');
});
