# JN Technologies — Marketing Website

Responsive React + Vite one-page marketing website.

## Included
- Home, About, Vision, Solutions, Approach and Contact sections
- Enterprise / ERP, Custom Software, AI & Intelligent Automation, IoT & Embedded Systems
- Responsive mobile navigation
- Enquiry form that opens the visitor's email app with a pre-filled message
- No backend or database required for this initial marketing release

## Run locally
Requires Node.js 20+ recommended.

```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
```
The deployable website is generated in `dist/`.

## Deploy to Cloudflare Pages
1. Push this folder to a GitHub repository.
2. In Cloudflare Dashboard, choose Workers & Pages → Create → Pages → Connect to Git.
3. Select the repository.
4. Build command: `npm run build`
5. Build output directory: `dist`
6. Deploy, then add `jntechnologies.in` and `www.jntechnologies.in` under Custom domains.
7. Follow the exact DNS instructions Cloudflare provides.

## Contact details
Email: connect.jntechnologies@gmail.com
Phone / WhatsApp: +91 72076 00574
Location: Hyderabad, Telangana, India

The contact form currently uses `mailto:`; it does not save enquiries in a database. Add a secure form endpoint, spam protection and server-side validation before depending on it for high-volume lead capture.
