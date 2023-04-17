type Types =
  | 'twitch'
  | 'twitter'
  | 'instagram'
  | 'github'
  | 'youtube'
  | 'linkedin'

export type CardItem = {
  icon: string
  link: string
  name: string
  type: Types
  username: string
}
