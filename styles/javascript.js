document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.querySelector('.header__mobile-toggle');
  const mobileMenu = document.querySelector('.header__mobile-menu');
  const body = document.body;
  
  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      this.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      body.classList.toggle('menu-open');
    });
    
    mobileMenu.querySelectorAll('a, .header__mobile-login').forEach(link => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });
    
    document.addEventListener('click', (e) => {
      if (mobileMenu.classList.contains('active') && 
          !mobileMenu.contains(e.target) && 
          !toggleBtn.contains(e.target)) {
        closeMenu();
      }
    });
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        closeMenu();
      }
    });
    
    function closeMenu() {
      toggleBtn.classList.remove('active');
      mobileMenu.classList.remove('active');
      body.classList.remove('menu-open');
    }
  }
});