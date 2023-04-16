const stopFlag = ref(false)

export const copyToClipboard = () => {
  if (stopFlag.value) return

  navigator.clipboard.writeText('https://decito-links.web.app')

  stopFlag.value = true

  const infoCard = document.querySelector('#clipboard-info')
  const infoIcon = document.querySelector('#clipboard-icon')

  if (!infoCard || !infoIcon) return

  infoCard.classList.remove('opacity-0', 'bottom-0', '-z-10')
  infoCard.classList.add('bottom-20', 'z-10')

  toggleClipboardIcon(infoIcon, 'fa-check', 'fa-link')

  const progressionBar: HTMLDivElement | null =
    document.querySelector('#progression-bar')

  let width = 100

  function decreaseWidth() {
    if (!progressionBar) return

    if (width === 0) stopInterval()
    else {
      width--
      progressionBar.style.width = width + '%'
    }
  }

  const interval = setInterval(decreaseWidth, 60)

  const stopInterval = () => {
    clearInterval(interval)

    stopFlag.value = false
  }

  setTimeout(() => {
    infoCard.classList.remove('bottom-20', 'z-10')
    infoCard.classList.add('bottom-0', 'opacity-0', '-z-10')

    toggleClipboardIcon(infoIcon, 'fa-link', 'fa-check')
  }, 6300)
}

const toggleClipboardIcon = (el: Element, newIcon: string, oldIcon: string) => {
  el.classList.add(newIcon)
  el.classList.remove(oldIcon)
}
