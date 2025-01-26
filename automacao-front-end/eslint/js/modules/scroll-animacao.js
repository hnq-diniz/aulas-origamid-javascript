export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');

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
    const windowParcial = window.innerHeight * 0.6;

    animaScroll();

    window.addEventListener('scroll', animaScroll);
  }
}
