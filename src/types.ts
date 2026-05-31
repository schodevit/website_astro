export interface Category {
  title: string
  skills: Skill[]
}

export interface Rate {
  label: string
  level: number
}

export interface Skill {
  name: string
  level: number
  icon: string
}
