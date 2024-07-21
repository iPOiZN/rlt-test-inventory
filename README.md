# Проект на Vue 3 с json-server

Этот проект использует Vue 3 и `json-server` для создания макета backend'а. Включает скрипты для запуска сервера разработки и мок-API.

## Установка

1. Убедитесь, что у вас установлен Node.js. Если нет, скачайте и установите [Node.js](https://nodejs.org/).
2. Клонируйте репозиторий на ваш локальный компьютер.
3. Перейдите в директорию проекта в терминале.
4. Выполните `npm install`, чтобы установить все зависимости.

## Использование

Для запуска проекта с `json-server` используйте следующие npm скрипты:

- `npm run dev` - Запускает сервер разработки Vite для приложения на Vue.
- `npm run dev-db` - Запускает как сервер разработки Vite, так и `json-server`, используя `db.json` в качестве файла с мок-данными. Флаг `--watch` заставляет `json-server` следить за изменениями в `db.json` и автоматически обновлять мок-API.
- `npm run db-only` - Запускает только `json-server`, используя `db.json` в качестве файла с мок-данными. Флаг `--watch` заставляет `json-server` следить за изменениями в `db.json` и автоматически обновлять мок-API.

## Структура проекта

- `src/` - Содержит исходные файлы приложения на Vue.
- `db.json` - Файл с мок-данными, используемый `json-server` для API ответов.
- `public/` - Содержит статические ресурсы, такие как изображения и шрифты.
- `vite.config.js` - Файл конфигурации для Vite.
- `package.json` - Содержит метаданные проекта и npm скрипты.

## Скрипты

В `package.json` определены следующие скрипты:

- **`dev`**: `vite` - Запускает сервер разработки Vite для приложения на Vue.
- **`dev-db`**: `vite & npx json-server db.json --watch` - Запускает как Vite, так и `json-server`, позволяя одновременно разрабатывать приложение на Vue и мок-API.
- **`db-only`**: `npx json-server db.json --watch` - Запускает только `json-server` для создания мок-API.

## Дополнительная конфигурация

Вы можете настроить параметры `json-server` или изменить `db.json` в зависимости от потребностей вашего приложения. Убедитесь, что вы перезапустили скрипт `dev-db`, чтобы применить изменения.

## Лицензия

Этот проект лицензирован под лицензией MIT. Подробности смотрите в файле [LICENSE](LICENSE).
