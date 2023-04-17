type Types = 'twitch' | 'twitter' | 'instagram' | 'github' | 'youtube'

export type CardItem = {
  icon: string
  link: string
  name: string
  type: Types
  username: string
}
