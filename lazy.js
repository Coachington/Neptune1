window.onload = function() {

 // Select the first element with the class '.co-name'
var coNameElement = document.querySelector('.co-name');

// Clone the selected element
var coNameElementClone = coNameElement.cloneNode(true);

// Modify the text content of the clone
coNameElementClone.textContent = 'RE/MAX Real Estate Group';

// Insert the clone right after the original element
coNameElement.parentNode.insertBefore(coNameElementClone, coNameElement.nextSibling);



  const imageElement = document.createElement('img');
  imageElement.src = 'https://cy-chime-assets.s3.amazonaws.com/sites/donniebowenrealestate.com/images/newlogo.png';
  imageElement.classList.add('hero-logo'); // Add the class "hero-logo"
  const mediaInfoElement = document.querySelector('body.home .media-info');
  mediaInfoElement.prepend(imageElement); 

          // Function to check screen size and move elements if screen width is less than 400px
          function moveElementsOnSmallScreen() {
              const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  
              if (screenWidth < 400) {
                  // Get references to the elements to be moved
                  const contentBox = document.querySelector('.content-box');
                  const imageBox = document.querySelector('#welcome_box .image-box');
  
                  // Get all elements with class 'welcome-call-btn' inside 'content-box'
                  const buttonsToMove = contentBox.querySelectorAll('.welcome-call-btn');
  
                  // Move each button to 'image-box'
                  buttonsToMove.forEach(button => {
                      imageBox.appendChild(button);
                  });
              }
          }
  
          // Call the function initially and add a resize event listener to check when the screen size changes
          moveElementsOnSmallScreen();
          window.addEventListener('resize', moveElementsOnSmallScreen);


  const cyfooter = document.querySelector('.claimer');
  cyfooter.innerHTML += '<a style="color:white!important" class="cherieYoung" href="https://www.cherieyoung.com/">Lofty Custom Designs</a>';

  // Get all elements with the cy-lazy class
  var lazyElements = document.querySelectorAll('.cy-lazy');
  console.log(lazyElements);

  // Check if an element is in view
  function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      var parentRect = el.parentElement.getBoundingClientRect();
      return (
          rect.top >= parentRect.top &&
          rect.left >= parentRect.left &&
          rect.bottom <= parentRect.bottom &&
          rect.right <= parentRect.right &&
          rect.top <= (window.innerHeight || document.documentElement.clientHeight)
      );
  }




// Intersection Observer configuration
const observerConfig = {
  rootMargin: "0px",
  threshold: 0.5 // 50% of the element visible in the viewport
};

// Function to start counting animation for a single number
function startCounter(counter) {
  const target = counter.getAttribute("data-target"); // Get the target value as a string
  let count = 0;
  const duration = 5000; // Duration of the counting animation in milliseconds
  const increment = (target / (duration / 100)); // Increment value per animation frame

  const updateCounter = () => {
    count += increment;
    counter.textContent = Math.round(count);
    if (count < target) {
      requestAnimationFrame(updateCounter);
    } else {
      counter.textContent = target; // Set the final value as a string
    }
  };

  updateCounter();
}

// Intersection Observer callback function
function observerCallback(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counters = document.querySelectorAll('.numCount[data-target]');
      counters.forEach(counter => {
        startCounter(counter);
      });
      observer.unobserve(entry.target);
    }
  });
}

// Create the Intersection Observer
const observer = new IntersectionObserver(observerCallback, observerConfig);

// Observe the #stats element
const statsElement = document.querySelector("#stats");
if (statsElement) {
  observer.observe(statsElement);
}








  // Load images when they are in view
  function lazyLoad() {
      for (var i = 0; i < lazyElements.length; i++) {
          if (isElementInViewport(lazyElements[i])) {
              if (lazyElements[i].tagName.toLowerCase() === 'img') {
                  var photoSource = lazyElements[i].getAttribute('data-photosource');
                  console.log(photoSource, lazyElements[i].getAttribute('data-photosource'));
                  if (photoSource) {
                      lazyElements[i].src = photoSource;
                  }
              } else {
                  var photoSource = lazyElements[i].getAttribute('data-photosource');
                  if (photoSource) {
                      lazyElements[i].style.backgroundImage = 'url(' + photoSource + ')';
                  }
              }
              lazyElements[i].classList.add("fade-in"); // Add fade-in class for animation
              lazyElements[i].classList.remove("cy-lazy"); // Remove the lazy class once the image has loaded
          }
      }
  }

  // Add fade-in animation class when element is in view
  function handleFadeClass(el, className) {
      if (isElementInViewport(el)) {
          var newClass = className.replace('-pre', '');
          el.classList.remove(className);
          el.classList.add(newClass);
          window.removeEventListener('scroll', function() {
              handleFadeClass(el, className);
          });
      }
  }

  var fadeElements = document.querySelectorAll('.fade-up-pre, .fade-down-pre, .fade-left-pre, .fade-right-pre');

  function checkFadeElements() {
      fadeElements.forEach(function(el) {
          var className = el.classList[0];
          handleFadeClass(el, className);
      });
  }

console.log("test");

  let checkForm = setInterval(function() {
      console.log("test2222222222");

      let  pageComponentEl = document.querySelector('.md-form');
      if (pageComponentEl) {
        const formHolderEl = document.querySelector('#form-holder');
        formHolderEl.appendChild(pageComponentEl);
        console.log("Moving it");
  
        clearInterval(checkForm);
      }
    }, 1000);

    let checkBlog = setInterval(function() {
      console.log("test2222222222");

      let  pageComponentEl = document.querySelector('.md-blog');
      if (pageComponentEl) {
        const formHolderEl = document.querySelector('.blog-holder');
        formHolderEl.appendChild(pageComponentEl);
        console.log("Moving it");
  
        clearInterval(checkBlog);
      }
    }, 1000);



  // Attach handleFadeClass function to scroll event
  // Attach lazyLoad function to scroll event

  window.addEventListener('scroll', function() {
      lazyLoad();
      checkFadeElements();
      //countUpNumbers();
  });

  const elfsightHolder = document.querySelector('.elfsight-holder');
  if (elfsightHolder) {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
    let scriptsRun = false;

    function isScrolledIntoView(elem) {
      const docViewTop = window.pageYOffset || document.documentElement.scrollTop;
      const docViewBottom = docViewTop + window.innerHeight;

      const elemTop = elem.offsetTop;
      const elemBottom = elemTop + elem.offsetHeight;

      return (elemBottom <= docViewBottom) && (elemTop >= docViewTop);
    }

    function loadScripts() {
      if (isScrolledIntoView(elfsightHolder) && !scriptsRun) {
        const scriptEl = document.createElement('script');
        scriptEl.src = 'https://apps.elfsight.com/p/platform.js';
        scriptEl.async = true;
        scriptEl.onload = function() {
          // Callback
        };
        document.body.appendChild(scriptEl);

        scriptsRun = true;
      }
    }

    loadScripts();

    window.addEventListener('scroll', loadScripts);
  }

  // Trigger lazyLoad on page load
  lazyLoad();
};





