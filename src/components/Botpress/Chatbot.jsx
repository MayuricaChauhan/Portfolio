import { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://widget.cxgenie.ai/widget.js";
    script.async = true;
    script.setAttribute('data-aid', 'a0901272-fcb2-4772-a067-8b5e05ed0916');
    script.setAttribute('data-lang', 'en');
    document.body.appendChild(script);

    script.onload = () => {
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

      // Trigger the bot to send the first message
      window.botpressWebChat.sendEvent({ type: 'show' });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="webchat" />;
};

export default Chatbot;
