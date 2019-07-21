    document.addEventListener('DOMContentLoaded', init, false);
    function init(){
        console.log('API Key: '+apiKey);
        document.body.innerHTML+='<div id="chat">'+
            '<div class="chatbot-chat" id="chatbot-chat" style="display:none;background-color: transparent;pointer-events: none;z-index: 2147483639;max-height: 100%;position: fixed;right: 0px;bottom: 0px;border: 0px;width: 410px;height: 700px;max-width: 100%;overflow: hidden;opacity: 1;">'+
                '<div id="chatbot-chat-frame" style="pointer-events: all; background: none; border: 0px; float: none; position: absolute; top: 0px; right: 0px; bottom: 0px; left: 0px; width: 100%; height: 100%; margin: 0px; padding: 0px;">'+
                    '<div class="chat-window">'+
                            '<div class="chat-window-wrapper" style="background: rgba(255, 255, 255, 0.95);">'+
                                '<div class="window-content-wrapper">'+
                                        '<iframe src="'+ChatBotUrl+'" >'+
                                        '</iframe>'+
                                '</div>'+
                                '<div class="window-close" id="window-close" style="background: rgb(0, 108, 255);">'+
                                    '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" title="close the chat" style="fill: rgb(255, 255, 255);">'+
                                        '<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>'+
                                        '<path d="M0 0h24v24H0z" fill="none"></path>'+
                                    '</svg>'+
                                '</div>'+
                            '</div>'+
                            '<a target="_blank" href="'+ChatBotUrl+'" class="powered">'+
                                    '+Designed by <span>Ranjith</span>'+
                            '</a>'+
                    '</div>'+
                '</div>'+
            '</div>'+

            '<div class="chat-button-theme-bubble" id="chat-button-theme-bubble">'+
                '<div class="chat-button" style="background: rgb(31, 140, 235); color: rgb(250, 250, 250);">'+
                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="chat-icon" style="stroke: rgb(250, 250, 250);">'+
                        '<path d="M9.37,1.34H10.8a8.2,8.2,0,0,1,0,16.39H9.37a10,10,0,0,1-2.68-.45c-.55-.15-2.23,1.81-2.63,1.36s.05-2.79-.41-3.23q-.28-.27-.54-.57A8.2,8.2,0,0,1,9.37,1.34Z" style="fill: none;"></path> '+
                        ' <line x1="6.37" y1="7.04" x2="12.58" y2="7.04" style="fill: none; stroke-linecap: round;"></line> '+
                        '<line x1="6.37" y1="9.66" x2="14.31" y2="9.66" style="fill: none; stroke-linecap: round;"></line> '+
                        '<line x1="6.37" y1="12.28" x2="11.42" y2="12.28" style="fill: none; stroke-linecap: round;"></line>'+
                    '</svg>'+
                '</div>'+
            '</div>'+
        '</div>';

        
        function hideChatWindow() {
            console.log('hello');
            var x = document.getElementById("chatbot-chat");
            x.style.display = "none";
            var y = document.getElementById("chat-button-theme-bubble");
            y.style.display = "block";
        }
        function hideMessagebubble() {
            console.log('hello');
            var y = document.getElementById("chat-button-theme-bubble");
            y.style.display = "none";
            var x = document.getElementById("chatbot-chat");
            x.style.display = "block";
        }
        document.getElementById("window-close").addEventListener("click", hideChatWindow);
        document.getElementById("chat-button-theme-bubble").addEventListener("click", hideMessagebubble);
    }
