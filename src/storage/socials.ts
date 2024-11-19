export const shareLink = 'https://decito.vercel.app'

export const socials = {
  facebook: {
    name: 'Facebook',
    type: 'facebook',
    icon: 'fab fa-facebook',
    link: `https://www.facebook.com/sharer/sharer.php?u=${shareLink}`
  },
  twitter: {
    name: 'X',
    type: 'twitter',
    icon: 'fab fa-x-twitter',
    link: `https://x.com/intent/tweet?url=${shareLink}`
  },
  linkedin: {
    name: 'LinkedIn',
    type: 'linkedin',
    icon: 'fab fa-linkedin',
    link: `https://www.linkedin.com/shareArticle?url=${shareLink}`
  },
  whatsapp: {
    name: 'WhatsApp',
    type: 'whatsapp',
    icon: 'fab fa-whatsapp',
    link: `https://wa.me/?text=${shareLink}`
  }
}
