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

## Live site
The site is published with GitHub Pages from the `main` branch. The custom domain is `jntechnologies.in`.

In GoDaddy, open the domain, choose DNS, and use these records. Remove any old parking or forwarding records for the same host names first.

| Type | Name | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | nikhileshreddy0088.github.io |

DNS can take a few minutes to a few hours. HTTPS is turned on by GitHub after the domain resolves.

## Contact details
Email: connect.jntechnologies@gmail.com
Phone / WhatsApp: +91 72076 00574
Location: Hyderabad, Telangana, India

The contact form saves each enquiry in the company Google Sheet and emails connect.jntechnologies@gmail.com. The sheet columns are S.No, Name, Email, What do you need help with?, Project details, and Time (India time).
