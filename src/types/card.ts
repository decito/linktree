type Types =
  | 'twitch'
  | 'twitter'
  | 'twitter-blue'
  | 'instagram'
  | 'github'
  | 'youtube'
  | 'linkedin'
  | 'discord'

export type CardItem = {
  icon: string
  link: string
  name: string
  type: Types
  username: string
  order: number
}
