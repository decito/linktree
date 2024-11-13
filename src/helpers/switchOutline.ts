export const switchUserAvatarOutlineColor = (color: string) => {
  const avatar = document.getElementById('user-ring') as HTMLElement
  avatar.classList.forEach(className => {
    if (className.startsWith('bg-')) {
      avatar.classList.remove(className)
    }
  })
  if (color === 'instagram') avatar.classList.add('bg-instagram-gradient')
  else avatar.classList.add(`bg-${color}`)
}
