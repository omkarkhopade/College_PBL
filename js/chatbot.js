// Initialize Botpress Webchat
window.botpressWebChat.init({
    botId: "20250329135452-KERW9YCZ", 
    hostUrl: "https://cdn.botpress.cloud/webchat/v2.4",
    messagingUrl: "https://messaging.botpress.cloud",
    clientId: "KERW9YCZ",
  
    // Appearance customization
    botName: "CS Department Assistant 🤖",
    backgroundColor: "#0d47a1",       // Deep blue background
    textColorOnBackground: "#ffffff", // White text
    foregroundColor: "#ffffff",
    themeName: "custom",
    theme: {
      primaryColor: "#1976d2"         // Lighter blue (button color, etc.)
    },
    
    // Behavior
    enableTranscriptDownload: true,   // Allow users to download chat
    showPoweredBy: false,              // Hide "Powered by Botpress" branding
    layoutWidth: "400px",
    layoutHeight: "600px",
    openByDefault: false,              // Do not open automatically
    hideWidget: false,                 // Show chat button always
  
    // Greetings and avatar
    introMessage: "👋 Welcome to the Computer Science Department! How can I assist you today?",
    avatarUrl: "images/bot-avatar.png" // Your custom bot avatar (upload this image!)
  });
  
  // Optional: Auto-open chat after 5 seconds
  setTimeout(() => {
    window.botpressWebChat.sendEvent({ type: "show" });
  }, 5000);
  