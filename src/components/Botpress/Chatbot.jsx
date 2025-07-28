import { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widget.cxgenie.ai/widget.js';
    script.async = true;
    script.setAttribute('data-aid', 'a0901272-fcb2-4772-a067-8b5e05ed0916');
    script.setAttribute('data-lang', 'en');

    // Append script to body
    document.body.appendChild(script);

    // Wait until botpressWebChat is available before calling init
    script.onload = () => {
      const checkBotpressReady = setInterval(() => {
        if (
          window.botpressWebChat &&
          typeof window.botpressWebChat.init === 'function'
        ) {
          clearInterval(checkBotpressReady);

          window.botpressWebChat.init({
            composerPlaceholder: 'Chat with bot',
            botConversationDescription: 'Your virtual assistant',
            botId: '28de6cda-e430-4f7e-a078-39475a877aa5',
            hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
            messagingUrl: 'https://messaging.botpress.cloud',
            clientId: '28de6cda-e430-4f7e-a078-39475a877aa5',
            webhookId: '41e54234-e536-4093-8eb9-e90c87aa4102',
            lazySocket: true,
            themeName: 'prism',
            frontendVersion: 'v1',
            useSessionStorage: true,
            enableConversationDeletion: true,
            theme: 'prism',
            themeColor: '#2563eb',
            allowedOrigins: []
          });

          // Show the chat automatically
          window.botpressWebChat.sendEvent({ type: 'show' });
        }
      }, 100); // Check every 100ms
    };

    // Cleanup script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="webchat" />;
};

export default Chatbot;
