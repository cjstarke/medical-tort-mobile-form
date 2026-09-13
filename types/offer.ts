export interface Agent {
  id: string
  createdAt: string
  updatedAt: string
  who: string
  archived: boolean
  postalCodeLists: any[]
  name: string
  slug: string
  client_id: string
  logo: string | null
  clientName: string
  agentMappedValues: any[]
  fieldsets: any[]
  fieldsetIds: any[]
  tcpa_consent: string
  client_application_id: string
  client_unifier: string
}

export interface Category {
  id: string
  createdAt: string
  updatedAt: string
  who: string
  archived: boolean
  name: string
  children: any[]
  slug: string
  parent_id: string
}

export interface Offer {
  id: string
  name: string
  clientCode: string
  agent: Agent
  agentName: string
  categories: Category[]
  headline: string
  subHeadline: string | null
  disclaimer: string
  isDisclaimerFullWidth: boolean
  heroImage: string
  sticker: string
  stickerAlt: string
  postalCodes: string | null
}


export const thankYouOffers = [
  {
    tort: "Roundup",
    description:
      "If you or someone you know has been exposed to Herbicide Roundup and were later diagnosed with cancer, you may be entitled to compensation.",
    img: "https://converge-strapi-prod.s3.amazonaws.com/roundupinfield_34d2c40842.webp",
    link: "https://consumerlifeline.com/roundup/a/?hxc_id=7960",
    id: "roundup",
  },
];
export type TYOffer = {tort: string, description: string, img: string, link: string, id: string}


