'use client';

import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/solarized.css'
import RevealJS from 'reveal.js';
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight';
import RevealNote from 'reveal.js/plugin/notes/notes';
import { useEffect } from 'react';

export default function Presentation({ isHost }: { isHost: boolean }) {
  let reveal: Reveal.Api;
  let initialized: boolean = false;

  useEffect(() => {
    if (!window.Reveal) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      reveal = new RevealJS({
          embedded: true, 
          plugins: [
            RevealMarkdown,
            RevealHighlight,
            RevealNote,
          ],
          multiplex: {
              secret: isHost ? '1696162797031896178' : null,
              id: '784513a0c1194469',
              url: 'https://reveal-multiplex.glitch.me/'
          },
          dependencies: [
              { src: 'https://reveal-multiplex.glitch.me/socket.io/socket.io.js', async: true },
              { src: 'https://reveal-multiplex.glitch.me/master.js', async: true },
              { src: 'https://reveal-multiplex.glitch.me/client.js', async: true },
          ]
      });

      // @ts-ignore
      window.Reveal = reveal;

      if (!initialized) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        initialized = true;
        reveal.initialize();
      } else { 
          reveal.sync();
      }
    }
  }, [])

  return (
    <div className="reveal" style={{ width: '100vw', height: '100vh' }}>
      <div className="slides">
        <section
          data-markdown="solid.md"
          data-separator="^\n\n\n"
          data-separator-vertical="^\n\n"
          data-separator-notes="^Note:"
          data-charset="iso-8859-15"
        >
        </section>
      </div>
    </div>
  )
}
