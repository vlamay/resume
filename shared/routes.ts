import { z } from 'zod';
import { insertMessageSchema } from './schema';

export const api = {
  contact: {
    submit: {
      method: 'POST' as const,
      path: '/api/contact',
      input: insertMessageSchema,
      responses: {
        201: z.object({ success: z.boolean() }),
        400: z.object({ message: z.string() }),
        500: z.object({ message: z.string() }),
      },
    },
  },
};
