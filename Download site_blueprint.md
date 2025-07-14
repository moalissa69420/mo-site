# MO ALISSA PERSONAL WEBSITE – STRUCTURE & NAVIGATION BLUEPRINT

## PURPOSE
This document outlines the full structure, navigation logic, and content flow of Mo Alissa's personal website. The site is built as a modular creative operating system — a hybrid between a portfolio, lab notebook, strategic memo, and visual archive. It’s designed to feel raw, functional, and alive.

## FILE STRUCTURE OVERVIEW

```
/index.html            -> homepage (hover nav directory)
/style.css             -> fonts, spacing, layout rules
/experiments.html      -> deep scroll: image tech, 3D R&D
/scale.html            -> marketing funnels, growth systems
/direction.html        -> creative direction & brand systems
/studio.html           -> visual artwork, photo, painting
/interface.html        -> working style, contact, tools
/archive.html          -> essays, books, quotes, research
/assets/               -> all videos, PDFs, images, GIFs
```

## HOMEPAGE — `/index.html`
**Function:** Landing hub with no scroll. Hover on nav items reveals brief preview. Clicking navigates to individual page.

**Content Blocks:**
- **Title:** `MO ALISSA`
- **Tagline:** `Product Architecture and Creative Systems. Based in Toronto.`
- **Subtitle/Voice Line:** `Operating at the intersection of retention, resonance, and revenue.`
- **Top Nav List:**
  - Experiments
  - Scale
  - Direction
  - Studio
  - Interface
  - Recently been to
  - Currently ideating
  - Recently found
- **Bottom Links:**
  - Archive
  - Selected Projects
  - Contact

Each nav is styled text. Hover = subtle image reveal or caption. Click = direct link to subpage.

## NAVIGATION SECTIONS (FULL DETAIL)

### 1. EXPERIMENTS → `/experiments.html`
**Purpose:** Showcase R&D projects from Modu + Mo’s tech stack.  
**Features:**
- Relighting from 3D images
- Single video → 3D parallax scenes
- Color space & LUT manipulation
- POV 3D headset test footage
- Scroll-based layout with project title, short blurb, embed

### 2. SCALE → `/scale.html`
**Purpose:** Display performance-based work in growth, ads, and funnel design.  
**Features:**
- FILM3D → 4M users (timeline, screenshots, tactics)
- Bello: $4K → $100K in 5 weeks (ads + retention)
- Breakdown of onboarding flows
- Funnel wireframes, performance metrics, screenshots

### 3. DIRECTION → `/direction.html`
**Purpose:** Highlight Mo’s creative direction, brand systems, campaign visuals.  
**Features:**
- Julia Gin branding case study (deck preview)
- Bagel Room design and story
- MODU enterprise decks (Google, Amazon)
- Scrollable sections with imagery and one-liners

### 4. STUDIO → `/studio.html`
**Purpose:** Archive of Mo’s analog and digital art practice.  
**Features:**
- Photography (film, digital, stereoscopic)
- Paintings and ink work
- Visual experiments and scanned pages
- Gallery-style scroll layout

### 5. INTERFACE → `/interface.html`
**Purpose:** Contact portal + personal infra.  
**Features:**
- Contact: Email, Calendly, IG, DM
- Systems: creative templates, onboarding docs
- Tools Mo uses or made (Notion, AI prompts, templates)
- OS diagrams or playbooks

### 6. RECENTLY BEEN TO → *(optional `/journal.html`)*
**Purpose:** Travel log, residencies, IRL work or footage  
**Features:**
- Scroll of city/location headers
- Photos from trips or collabs
- Journal-style log

### 7. CURRENTLY IDEATING → *(optional embed)*
**Purpose:** Open threads, WIPs, notes in progress  
**Features:**
- Current technical ideas
- Screenshots of notebooks or sketches
- Could embed from Notion or hardcode

### 8. RECENTLY FOUND → *(subsection of archive)*
**Purpose:** Link log or idea collage  
**Features:**
- Quotes
- Screenshots
- Links to articles or visuals
- Scroll-based grid or stream-of-thought

## STATIC FOOTER NAVIGATION

### ARCHIVE → `/archive.html`
- Reading list with short notes
- Essays on tech, brand, AI, design
- Reference system with theme-based anchors (e.g., branding, depth, time)

### SELECTED PROJECTS → *(optional alias)*
- Condensed view of top projects from Scale, Direction, Experiments
- Each has: title, tag, one metric or visual

### CONTACT → `/interface.html#contact`
- Scroll to bottom anchor or direct section
- Could be shown as plaintext or form

## RUNNING LOCALLY

```bash
cd mo-site
python3 -m http.server
```

Then open:
```
http://localhost:8000/index.html
```

---

**This site = Mo’s creative operating system. Each section is a module. Each module is alive.**
