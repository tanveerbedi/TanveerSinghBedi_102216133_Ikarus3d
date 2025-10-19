````markdown
# 🛋️ FurniVerse – AI-Powered Furniture Discovery Platform

![FurniVerse Banner](https://user-images.githubusercontent.com/placeholder/furniverse-banner.png)

> **Find your perfect furniture, instantly.**  
> FurniVerse is a smart AI-based furniture discovery and shopping platform built using **Next.js, Firebase, and Genkit (Google Gemini AI)** — designed to make browsing, comparing, and buying furniture effortless and elegant.

---

## ✨ Features

✅ **AI-Powered Product Discovery** – Users can describe what they want (“modern coffee table for a small apartment”) and the AI suggests the best matches.  
✅ **Dynamic Product Filtering** – Browse by categories: Tables, Sofas, Chairs, Storage, and more.  
✅ **Smart Image Validation** – Automatically hides broken product images and pushes them into the *Load More* section.  
✅ **Responsive UI** – Elegant layout optimized for all screen sizes.  
✅ **Firebase Integration** – Firestore for product data, Storage for images, and Hosting for deployment.  
✅ **Genkit + Gemini Integration** – Uses Google’s Gemini AI to understand natural language queries.  
✅ **Admin Dashboard** – Upload and manage product data directly from CSV/JSON files.  
✅ **Load More Pagination** – Loads verified products first, then shows leftover or missing-image entries gradually.  

---

## 🧠 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | [Next.js 14](https://nextjs.org/) with App Router |
| **UI/UX** | Tailwind CSS, ShadCN UI, Lucide Icons |
| **Backend / AI** | [Genkit](https://genkit.dev/) + [Google Gemini](https://aistudio.google.com/) |
| **Database** | Firebase Firestore |
| **Storage** | Firebase Storage + Cloudinary (optional for CDN images) |
| **Auth** | Firebase Authentication |
| **Deployment** | Vercel / Firebase Hosting |
| **Language** | TypeScript / JavaScript (ESNext) |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/furniverse.git
cd furniverse
````

### 2️⃣ Install dependencies

```bash
npm install
# or
pnpm install
```

### 3️⃣ Add environment variables

Create a file named `.env.local` in the root directory:

```bash
# 🔥 Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# 🤖 Google Gemini
GEMINI_API_KEY=your_google_gemini_api_key

# (optional) Cloudinary for optimized image fetching
NEXT_PUBLIC_CLOUDINARY_CLOUD=your_cloudinary_name
```

---

### 4️⃣ Run the development server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) 🎨

---

## 🚀 Deployment Guide

### **Option 1: Deploy to Vercel (Recommended)**

1. Push your code to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import your repo.
3. Add the same environment variables under
   **Settings → Environment Variables**.
4. Click **Deploy** — you’ll get an instant live link.

### **Option 2: Firebase Hosting**

```bash
firebase login
firebase init hosting
npm run build
firebase deploy
```

For CI/CD via GitHub Actions:

```bash
firebase init hosting:github
```

It automatically creates a deploy workflow that runs on every push to `main`.

---

## 🪄 AI Integration

FurniVerse uses **Genkit + Google Gemini** to interpret natural language furniture queries.

```ts
import { genkit } from 'genkit';
import googleAI from '@genkit-ai/google-genai';

export const ai = genkit({
  plugins: [googleAI()],
});
```

Make sure your environment includes:

```bash
GEMINI_API_KEY=your_api_key
```

You can create one here 👉 [Google AI Studio – API Keys](https://aistudio.google.com/app/apikey)

---

## 🗂️ Project Structure

```
furniverse/
├── app/
│   ├── (shop)/             # Product pages
│   ├── (home)/             # Landing page & hero
│   ├── (admin)/            # Uploads & dashboard
│   └── layout.tsx          # Shared layout
├── components/
│   ├── ProductCard.tsx
│   ├── CategoryTabs.tsx
│   ├── SearchBar.tsx
│   └── AiAssistant.tsx
├── lib/
│   ├── firebase.ts
│   ├── genkit.ts
│   └── products.ts
├── public/
│   └── icons/ logo.svg
├── .env.local
├── package.json
└── README.md
```

---

## 🛠️ Developer Notes

* Products are fetched from Firestore where `image_ok == true`.
* “Load more” fetches the remaining entries with missing or broken images.
* Use `npm run lint` to check code quality.
* Image validation handled automatically by `validateProductImages` cloud function.
* You can update categories dynamically by changing the `categoryKey` derivation logic.

---

## 📸 Screenshots

| Home Page                                                               | Product Grid                                                            | AI Assistant                                                                      |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| ![home](https://user-images.githubusercontent.com/placeholder/home.png) | ![grid](https://user-images.githubusercontent.com/placeholder/grid.png) | ![assistant](https://user-images.githubusercontent.com/placeholder/assistant.png) |

---

## 💡 Future Enhancements

* 🧾 Personalized recommendations using user behavior.
* 🗣️ Voice search for hands-free browsing.
* 💬 Chat-based product comparison.
* 🛒 Wishlist & order tracking integration.

---

## 👨‍💻 Author

**Tanveer Singh Bedi**
🚀 Software Engineer | ML & AI Developer | Full-Stack Enthusiast
📧 [tbedi_be22@thapar.edu](mailto:tbedi_be22@thapar.edu)
🔗 [GitHub](https://github.com/tanveerbedi) • [LinkedIn](https://www.linkedin.com/in/tanveersinghbedi)

---

## 🧾 License

This project is licensed under the **MIT License** – feel free to use, modify, and distribute with attribution.

---

## ⭐ Support

If you found this project helpful, consider giving it a **⭐ star** on GitHub — it helps more developers discover FurniVerse!

> “Let’s furnish the digital world — beautifully.” 🪑✨

```

---

Would you like me to tailor this README with **your actual repository link and screenshots (from your running build)** — so it’s fully personalized before uploading to GitHub?
```
