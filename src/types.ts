export interface Career {
  period: string
  role: string
  company: string
  description: string
  skills: string[]
}

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

export interface Social {
  asContact: boolean
  icon: string
  name: string
  url: string
}

export interface NavItem {
  label: string
  href: string
  icon: string
}

// ----------

export interface HomeData {
  title: string
  description: string
  siteName: string
  url: string
  fullName: string
  introHtml: string
  resumeUrl: string
}
