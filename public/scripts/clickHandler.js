const copyToClipboard = () => {
  // AO usar Vue, verificar animacoes!!!!!!

  navigator.clipboard.writeText('https://decito-links.web.app')

  const infoCard = document.querySelector('#clipboard-info')
  const infoIcon = document.querySelector('#clipboard-icon')

  infoCard.classList.remove('hidden')
  //animacao abaixo nao funciona ainda
  infoCard.classList.add('bottom-14', 'opacity-100')

  toggleClipboardIcon(infoIcon, 'fa-check', 'fa-link')

  const progressionBar = document.querySelector('#progression-bar')

  let width = 100

  // Verificar se o interval já foi criado ao clicar no botao novamente (spammar)

  function decreaseWidth() {
    if (width === 0)
      stopInterval()
    else {
      width--
      progressionBar.style.width = width + '%'
    }
  }

  const interval = setInterval(decreaseWidth, 60)

  const stopInterval = () => clearInterval(interval)

  setTimeout(() => {
    infoCard.classList.add('hidden')

    toggleClipboardIcon(infoIcon, 'fa-link', 'fa-check')
  }, 6300)
}

const toggleClipboardIcon = (e, n, o) => {
  e.classList.add(n)
  e.classList.remove(o)
}
