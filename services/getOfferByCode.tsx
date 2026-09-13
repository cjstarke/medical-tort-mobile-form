import axios from 'axios'
import { Offer } from '../types/offer'

export default async function getOfferByCode(
  offerCode: string
): Promise<Offer | null> {
  const offerSearchEndpoint = process.env.OFFER_SEARCH_ENDPOINT

  if (!offerSearchEndpoint) {
    console.error('OFFER_SEARCH_ENDPOINT is not defined')
    return null
  }

  try {
    const response = await axios.get<Offer[]>(
      `${offerSearchEndpoint}?offer_code=${offerCode}`
    )

    return response.data.length > 0 ? response.data[0] : null
  } catch (error) {
    console.error('Error fetching offer:', error)
    return null
  }
}
