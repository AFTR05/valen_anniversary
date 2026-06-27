import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const TO_EMAIL = import.meta.env.VITE_TO_EMAIL || 'andrestoro0303@gmail.com'

export async function sendRestaurantChoice(restaurant) {
  console.log('EmailJS config:', { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY, TO_EMAIL })
  const params = {
    to_email: TO_EMAIL,
    restaurante: restaurant.name,
    lugar: restaurant.place,
    vibra: restaurant.tags.join(' · '),
    descripcion: restaurant.description,
  }
  console.log('Params:', params)
  try {
    const res = await emailjs.send(SERVICE_ID, TEMPLATE_ID, params, PUBLIC_KEY)
    console.log('EmailJS OK:', res)
    return res
  } catch (err) {
    console.error('EmailJS error:', JSON.stringify(err))
    throw err
  }
}
