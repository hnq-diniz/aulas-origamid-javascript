export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  const windowParcial = window.innerHeight * 0.6;

  function animaScroll() {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - windowParcial < 0;
      if (isSectionVisible) {
        section.classList.add('ativo');
      }
    });
  }

  if (sections.length) {
    animaScroll();

    window.addEventListener('scroll', animaScroll);
  }
}
