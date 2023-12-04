import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
const USER_PROMT = 'Generate an image that looks exactly like this:';
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages } = await req.json();
  const response = await openai.chat.completions.create({
    model: 'gpt-4-vision-preview',
    stream: true,
    messages:[{
      role: 'system',
      content: 'Thinkin...Generating Image...'

    }
    {
      role: 'user',
      content: [
        {
          type: 'text',
          text: USER_PROMT,

        }
        {
          type: 'image_url',
          url: messages[0].content
        }
      ]
    }
    ],
  });
  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}









