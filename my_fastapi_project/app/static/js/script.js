
        const responses = {
            'резюме': 'Я анализирую резюме с помощью NLP, извлекая навыки, опыт и ключевые фразы. Автоматически рассчитываю процент соответствия кандидата требованиям вакансии. Поддерживаю форматы PDF, DOCX и онлайн-профили.',
            'голос': 'Провожу голосовые интервью с поддержкой разных языков и диалектов. Анализирую не только содержание ответов, но и паузы, интонацию, эмоциональное состояние кандидата для полной оценки.',
            'интервью': 'Использую структурированный подход с динамически адаптируемыми вопросами. В зависимости от ответов кандидата корректирую следующие вопросы для максимально точной оценки соответствия позиции.',
            'отчет': 'Генерирую подробные отчеты с рекомендациями: "на следующий этап", "отказ" или "требуется уточнение". Каждое решение обосновано конкретными критериями и примерами из интервью.',
            'время': 'Работаю 24/7 без выходных. Кандидаты могут проходить интервью в любое удобное время, что особенно важно для международного найма и работы с разными часовыми поясами.',
            'фидбек': 'Автоматически отправляю персональные уведомления всем кандидатам с детальной обратной связью по результатам интервью, что повышает их лояльность к компании.',
            'эффект': 'Наши клиенты сократили время HR-отдела на скрининг на 75%, увеличили объем обработанных кандидатов в 3 раза при сохранении высокого качества отбора.',
            'default': 'Я AI-аватар для автоматизации HR-процессов. Специализируюсь на: анализе резюме, проведении голосовых интервью, генерации отчетов и фидбека кандидатам. Что вас больше всего интересует?'
        };

        function scrollToDemo() {
            document.getElementById('demo').scrollIntoView({ behavior: 'smooth' });
        }

        function handleKeyPress(event) {
            if (event.key === 'Enter') {
                sendMessage();
            }
        }

        function sendMessage() {
            const input = document.getElementById('chatInput');
            const message = input.value.trim();
            
            if (!message) return;

            addMessage(message, 'user');
            input.value = '';

            const sendButton = document.getElementById('sendButton');
            sendButton.disabled = true;

            setTimeout(() => {
                const response = generateResponse(message);
                addMessage(response, 'bot');
                sendButton.disabled = false;
            }, 1000);
        }

        function addMessage(text, sender) {
            const messagesContainer = document.getElementById('chatMessages');
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${sender}`;
            
            const avatar = document.createElement('div');
            avatar.className = 'message-avatar';
            avatar.textContent = sender === 'bot' ? 'AI' : 'Вы';
            
            const content = document.createElement('div');
            content.className = 'message-content';
            content.textContent = text;
            
            messageDiv.appendChild(avatar);
            messageDiv.appendChild(content);
            messagesContainer.appendChild(messageDiv);
            
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }

        function generateResponse(message) {
            const lowerMessage = message.toLowerCase();
            
            for (const [key, response] of Object.entries(responses)) {
                if (lowerMessage.includes(key)) {
                    return response;
                }
            }
            
            return responses.default;
        }
    