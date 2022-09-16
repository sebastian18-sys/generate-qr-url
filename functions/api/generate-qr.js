import qr from "qrcode"

export async function onRequestPost(context) {

  const {
    request,
    env,
    params,
    waitUntil,
    next,
    data
  } = context

  const { url } = await request.json()

  const qrImage = await qr.toString(url, { 
    type: 'svg', 
    color: {
      dark: "#FFFFFF",
      light: "#3685FF" 
    } 
  })

  return new Response(JSON.stringify({ svg: qrImage }), {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
