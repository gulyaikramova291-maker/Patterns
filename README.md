"# Patterns" 
# GitHub'ga Push qilish tartibi

## 1. VS Code terminalini ochish

VS Code → Terminal → New Terminal

Project papkasi ichida ekanligingni tekshir.

## 2. GitHub'ga birinchi marta Push qilish

**1. Git'ni ishga tushirish**
```bash
git init
```

**2. Barcha fayllarni qo‘shish**
```bash
git add .
```

**3. Commit yaratish**
```bash
git commit -m "first commit"
```

**4. Branch nomini main qilish**
```bash
git branch -M main
```

**5. GitHub repository'ni ulash**
```bash
git remote add origin https://github.com/gulyaikramova291-maker/Patterns.git
```

**6. GitHub'ga Push qilish**
```bash
git push -u origin main
```

## 3. Keyingi safar Push qilish

Project'da o‘zgarish qilganingdan keyin faqat quyidagi 3 ta buyruqni ishlatish kifoya:

```bash
git add .
git commit -m "update project"
git push
```

## 4. Foydali Git buyruqlari

| Buyruq | Vazifasi |
|---|---|
| `git status` | O‘zgarishlarni tekshirish |
| `git log` | Commit tarixini ko‘rish |
| `git branch` | Branch'larni ko‘rish |
| `git remote -v` | GitHub repository manzilini ko‘rish |
| `git pull` | GitHub'dan yangiliklarni olish |

## GitHub Repository

https://github.com/gulyaikramova291-maker/Patterns

**Eslatma:** `git init` va `git remote add origin` buyruqlari birinchi marta sozlash uchun. Keyingi pushlarda ularni qayta yozish shart emas.