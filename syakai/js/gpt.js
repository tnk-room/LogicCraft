let messageHistory = [];

async function appendAssistantResponse(assistantMessage) {
    messageHistory.push({ 'role': 'assistant', 'content': assistantMessage });
}

function typeText(text,element) {
    return new Promise((resolve) => {
        let i = 0;
        const speed = 50;
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                resolve();
            }
        }
        type();
    });
}

$('#chat-form').on('submit', async function (event) {
    event.preventDefault();
    const userMessage = $('#chat-input').val();
    $('#chat-history').append('<p class="you">' + userMessage + '</p>');

    messageHistory.push({ 'role': 'user', 'content': userMessage });

    const url = 'https://api.openai.com/v1/chat/completions';
    const response = await fetch(url, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer',
        },
        body: JSON.stringify({
        'model': 'gpt-3.5-turbo',
        'stream': true,
        'messages': messageHistory,
        }),
    });

    if (!response.ok) {
        console.error('Error:', await response.text());
        return;
    }

    $("#chat-input").val("");
    $("#chat-input").focus();

    const reader = response.body.getReader();
    const textDecoder = new TextDecoder();
    let buffer = '';
    let assistantMessages = '';

    const gptElement = $('<span class="gpt"></span>');
    $('#chat-history').append(gptElement);

    while (true) {
        const { value, done } = await reader.read();

        if (done) break;

        buffer += textDecoder.decode(value, { stream: true });

        while (true) {
            const newlineIndex = buffer.indexOf('\n');
            if (newlineIndex === -1) break;

            const line = buffer.slice(0, newlineIndex);
            buffer = buffer.slice(newlineIndex + 1);

            if (line.startsWith('data:')) {
                if (line.includes('[DONE]')) {
                    await appendAssistantResponse(assistantMessages);
                    return;
                }
                try{
                    const jsonData = JSON.parse(line.slice(5));

                    if (jsonData.choices && jsonData.choices[0].delta && jsonData.choices[0].delta.content) {
                        const assistantMessage = jsonData.choices[0].delta.content;
                        assistantMessages += assistantMessage;
                        await typeText(assistantMessage, gptElement[0]);
                        scrollChatWindow();
                    }
                } catch (error) {
                    console.log('Error parsing JSON:', error);
                }
            }
        }
    }
});

function scrollChatWindow() {
    const chatWindow = document.getElementById('chat-window');
    chatWindow.scrollTop = chatWindowScrollHeight;
}
