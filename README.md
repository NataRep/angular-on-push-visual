# 🚀 Angular OnPush Change Detection Visualizer

**Исследуем механизм обнаружения изменений в Angular через визуализацию**  
Учебный проект с интерактивной демонстрацией работы `ChangeDetectionStrategy.OnPush`

![Angular Version](https://img.shields.io/badge/Angular-18-%23DD0031)
![RxJS](https://img.shields.io/badge/RxJS-7.8.0-%23B7178C)

---


## 🌟 Demo

## 🌟 Ключевые особенности

### 🎯 Визуализация работы DoCheck
Проект наглядно демонстрирует, **когда именно** Angular выполняет проверку изменений в компонентах с OnPush стратегией:

```typescript
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush
})
```
### 🔍 Поддерживаемые сценарии и визуализация
- Клик по компоненту	          - DOM события
- Изменение @Input свойства	    - Входные параметры
- Работа AsyncPipe	            - Подписки на Observable
- Ручное управление детектором	-	markForCheck()

### 🚀 Быстрый старт
bash
1. Клонировать репозиторий
git clone https://github.com/NataRep/angular-visual-strategy-on-push.git && cd angular-visual-strategy-on-push

2. Установить зависимости
npm install

3. Запустить development сервер
npm start
Приложение будет доступно по адресу:
👉 http://localhost:4200

### 🤝 Как внести вклад
Если вы хотите улучшить проект:

1. Форкните репозиторий

2. Создайте ветку с вашими изменениями (git checkout -b feature/amazing-feature)

3. Сделайте коммит изменений (git commit -m 'Add some amazing feature')

4. Запушьте ветку (git push origin feature/amazing-feature)

5. Откройте Pull Request

📄 Лицензия
MIT © Наталья Репкина