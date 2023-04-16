export const copyToClipboard = () => {
  console.log('clicado')
  // AO usar Vue, verificar animacoes!!!!!!

  navigator.clipboard.writeText('https://decito-links.web.app')

  const infoCard = document.querySelector('#clipboard-info')
  const infoIcon = document.querySelector('#clipboard-icon')

  if (!infoCard || !infoIcon) return

  infoCard.classList.remove('opacity-0', 'translate-y-full')
  infoCard.classList.add('-translate-y-10')
  //animacao abaixo nao funciona ainda

  toggleClipboardIcon(infoIcon, 'fa-check', 'fa-link')

  const progressionBar: HTMLDivElement | null =
    document.querySelector('#progression-bar')

  let width = 100

  // TODO: Verificar se o interval já foi criado ao clicar no botao novamente (spammar) pois ele esta criando varios intervalos. Memory leak

  function decreaseWidth() {
    if (!progressionBar) return

    if (width === 0) stopInterval()
    else {
      width--
      progressionBar.style.width = width + '%'
    }
  }

  const interval = setInterval(decreaseWidth, 60)

  const stopInterval = () => clearInterval(interval)

  setTimeout(() => {
    infoCard.classList.add('opacity-0', 'translate-y-full')

    toggleClipboardIcon(infoIcon, 'fa-link', 'fa-check')
  }, 6300)
}

const toggleClipboardIcon = (el: Element, newIcon: string, oldIcon: string) => {
  el.classList.add(newIcon)
  el.classList.remove(oldIcon)
}
