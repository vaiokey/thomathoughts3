import sgMail from '@sendgrid/mail'
import {NextApiRequest, NextApiResponse} from 'next'

export default async function send (req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (process.env.SENDGRID_API_KEY!==undefined) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  } else {
    return console.error('SENDGRID_API_KEY is wrong or missing.')
  }
  const {message}: {message: string} = req.body

  if (process.env.MY_EMAIL === undefined) {
    res.status(500).send("The feedback message wasn't sent for some reasons.")
    throw new Error('500: Server Error')
  }

  const content = {
    to: process.env.MY_EMAIL,
    from: process.env.MY_EMAIL,
    subject: '[thomathoughts] Error report',
    text: message,
    html: `<p>${message}</p>`,
  }

  try {
    await sgMail.send(content)
    res.status(200).send('Message sent successfully.')
  } catch (err) {
    console.log('ERROR', err)
    res.status(400).send('Message not sent.')
  }
}
