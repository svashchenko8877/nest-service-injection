## Структура Проекту

Проект складається з кількох модулів:

1. **ExportModuleA** – Експортує WebSocketService для використання в інших модулях.
2. **ImportModuleA** – Імпортує WebSocketService та містить контролер `WsControllerController`, який надає ендпоінт для отримання часу створення WebSocket з'єднання.
3. **ModuleA** – Інжектує контролер `WsControllerController`
4. **ModuleB** – Інжектує контролер `WsControllerController`.
5. **WebSocketService** – Обробляє WebSocket підключення та зберігає час створення з'єднання.

## Опис модулів

### ExportModuleAModule
Модуль, який експортує WebSocketService, що дозволяє іншим модулям використовувати цей сервіс.

### ImportModuleAModule
Імпортує WebSocketService і містить контролер `WsControllerController`, який має метод `getDate()`, що повертає час створення WebSocket підключення.

### ModuleA
Інжектує контролер `WsControllerController`.

### ModuleB
Інжектує контролер `WsControllerController`.

### WebSocketService
Сервіс, який створює WebSocket підключення до `wss://echo.websocket.org/` і зберігає час створення підключення. Цей час можна отримати через метод `get createdAtDate()`.

## Використання

### Ендпоінти

- **GET /get-created-date**: Повертає час створення WebSocket підключення у форматі JSON:
  ```json
  {
      "createdAt": "2024-10-17T12:34:56.789Z"
  }
  ```
