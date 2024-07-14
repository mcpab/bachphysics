MathJax = {
  loader: {load: ['[tex]/physics']},
    tex: {
      tags: 'ams',
      inlineMath: [['$', '$'], ['\\(', '\\)']],
      packages: {'[+]': ['physics']}
    },
    startup: {
      ready: () => {
        console.log('MathJax is loaded, but not yet initialized');
      //  MathJax.startup.defaultReady();
        console.log('MathJax is initialized, and the initial typeset is queued');
      },
      pageReady: () => {
        console.log('MathJax initial typesetting complete');
        //return MathJax.startup.defaultPageReady().then(() => {
        //  console.log('MathJax initial typesetting complete');
        //});
      }
    }
  };

  