# ForexBot.gr – Next.js SSR Redesign (EL-first, EN-ready)

> Στόχος: Να γυρίσει το ForexBot.gr σε Next.js (SSR/SSG), με **EL ως default**, έτοιμο για **EN**, και να “πακετάρει” όλο το υπάρχον περιεχόμενο σε καθαρή αρχιτεκτονική, SEO & νομικά safe.

---

## 0. High-level audit – τι έχουμε σήμερα

**Ισχύον μενού (EL):**  
Αρχική · Live (Core 500 v13.10, Clone 30 v13.12, Even 30 v13.13, Backtests) · Core500 · Εκδόσεις · Τεχνικά · Ιστορία · Ερωτήσεις · Σχετικά · Γλώσσα + Νομικά στο footer.

**Κύριες σελίδες (EL μόνο προς το παρόν):**

- `/el/index` – Αρχική: overview, τρεις εκδόσεις (v13.10/12/13), live account snapshot, video backtest 2008–2023, Q&A στιλ “Τι είναι / Πώς λειτουργεί / Γιατί σχεδιάστηκε / Ποιοι βρίσκονται πίσω από αυτό / κλπ.” :contentReference[oaicite:0]{index=0}  
- `/el/13-10` – Live stats & Myfxbook για v13.10 Core500. :contentReference[oaicite:1]{index=1}  
- `/el/13-12` – Υπό κατασκευή (Clone30, backtest only).  
- `/el/13-13` – Performance via Darwinex widgets (JUZE). :contentReference[oaicite:2]{index=2}  
- `/el/backtests` – Download backtests & Excel reports (λίστα/cta). :contentReference[oaicite:3]{index=3}  
- `/el/compare-live-vs-backtest` – Σύγκλιση live vs backtest με video και bullets.  
- `/el/differences` – Υπό κατασκευή, σύγκριση με S&P 500.  
- `/el/strategy` – Πλήρης τεχνική σελίδα: logic, risk, pairs, patterns, timeframes. :contentReference[oaicite:4]{index=4}  
- `/el/story` – Τimeline 2013–2025 (DiNapoli, demo, live, κλπ.).  
- `/el/faqs` – FAQ hub με ανολοκλήρωτες απαντήσεις.  
- `/el/contact` – Σχετικά & φόρμα επικοινωνίας.  
- Νομικά: Πολιτική Απορρήτου, Νομική Αποποίηση, Όροι Χρήσης, Τεχνική Πολιτική Disclaimer + **legal modal** με EL/EN κείμενο σε κάθε σελίδα. :contentReference[oaicite:5]{index=5}  

Πλεονεκτήματα:

- Πολύ ώριμη **νομική θωράκιση** και clear messaging “δεν είναι επενδυτική σύσταση”.
- Σωστό narrative: Story → Strategy → Live/Backtests → Legal.
- Τρίτες πλατφόρμες (Darwinex / Myfxbook) για credibility.

Pain points:

- Διπλές/θολές διαδρομές: Live vs Core500 vs 13-10/13-13/backtests/compare/differences.
- FAQ/Backtests σελίδες είναι πολύ “thin”.
- EN section είναι “Under Construction” και κρέμεται.
- Legal modal/κείμενα είναι embedded μέσα στο HTML, όχι ως component και όχι καλά διαχειρίσιμα σε Next.

---

## 1. Tech stack & βασικές αρχές

- **Next.js 15+ (App Router)**, `app/` directory
- **React 18+**, **TypeScript**
- **i18n** με `el` (default), `en` (προσεχώς)
- **SSR/SSG** για όλες τις marketing σελίδες
- **MDX** για μεγάλα κείμενα (story, strategy, legal, faqs)
- **Styling**: Tailwind ή CSS Modules
- **Next Image** για icons/diagrams/charts previews
- **Analytics**: GA4/Plausible, με events (ήδη από design)

Αρχές:

- EL-first, αλλά **όλες οι διαδρομές σχεδιάζονται locale-aware**.
- Νομικά και disclaimers υλοποιούνται ως shared components, **όχι copy-paste**.
- **Semantic HTML**, μια H1 ανά σελίδα, καθαρή ιεραρχία H2/H3.
- **Low JS**, hydrate μόνο interactive κομμάτια (forms, accordions, widgets).

---

## 2. Routing & IA (EL τώρα, EN αύριο)

### 2.1 Directory structure (App Router)

```txt
app/
  layout.tsx                 // root shell (no locale assumptions)
  [locale]/
    layout.tsx               // <html lang={locale}> + main nav/footer
    page.tsx                 // Αρχική (Home)
    live/
      page.tsx               // Live overview + versions summary
      core500-v13-10/
        page.tsx
      clone30-v13-12/
        page.tsx
      even30-v13-13/
        page.tsx
      compare-live-vs-backtest/
        page.tsx
      vs-sp500/
        page.tsx
    backtests/
      page.tsx               // Backtest hub, downloads, explanation
    versions/
      page.tsx               // Εκδόσεις overview (v13.10 / .12 / .13 table)
    strategy/
      page.tsx               // Τεχνικά – logic, risk, pairs, patterns, TFs
    story/
      page.tsx               // Η ιστορία
    faqs/
      page.tsx
    contact/
      page.tsx               // Σχετικά & Επικοινωνία merged με tabs
    legal/
      disclaimer/
        page.tsx
      disclaimer-technical/
        page.tsx
      terms-of-use/
        page.tsx
      privacy-cookies/
        page.tsx
  api/
    contact/route.ts         // POST contact form
  robots.txt
  sitemap.ts
SEO / legacy:
Παράλληλα κρατάμε redirects από τα παλιά URLs:

/el/13-10 → /el/live/core500-v13-10 (301)

/el/13-13 → /el/live/even30-v13-13

/el/backtests → /el/backtests (ίδιο)

/el/compare-live-vs-backtest → /el/live/compare-live-vs-backtest

/el/differences → /el/live/vs-sp500

Καταγραφή των redirects σε κονφίγκ (Next middleware ή hosting-level).

2.2 Top navigation (per locale)
EL labels (τώρα):

Αρχική → /el

Live

Core 500 – v13.10 → /el/live/core500-v13-10

Clone 30 – v13.12 → /el/live/clone30-v13-12

Even 30 – v13.13 → /el/live/even30-v13-13

Live vs Backtest → /el/live/compare-live-vs-backtest

Σύγκριση με S&P 500 → /el/live/vs-sp500

Backtests → /el/backtests

Εκδόσεις → /el/versions

Τεχνικά → /el/strategy

Ιστορία → /el/story

Ερωτήσεις → /el/faqs

Σχετικά & Επικοινωνία → /el/contact

Γλώσσα: Ελληνικά / English (locale switcher)

EN labels (μέλλον):

Home → /en

Live

Backtests

Versions

Strategy

Story

FAQs

About & Contact

Language: Ελληνικά / English

3. Components & modules
3.1 Layout & UI
txt
Copy code
components/
  layout/
    MainLayout.tsx          // header, footer, cookie/legal strip
    NavBar.tsx
    Footer.tsx
    LocaleSwitcher.tsx
  legal/
    LegalDisclaimerModal.tsx
    LegalFooterNotice.tsx
  sections/
    HomeHero.tsx
    HomeVersionsGrid.tsx
    HomeWhatIsSection.tsx
    HomeHowItWorksSection.tsx
    HomeWhoIsForSection.tsx
    HomeFAQTeaser.tsx
    LiveOverviewStats.tsx
    LiveVersionHeader.tsx
    LiveStatsTable.tsx
    LivePlatformLinks.tsx
    LiveVsBacktestSection.tsx
    VsSP500Section.tsx
    BacktestsDownloads.tsx
    StrategyLogicSection.tsx
    StrategyRiskSection.tsx
    StrategyPairsSection.tsx
    StrategyPatternsSection.tsx
    StrategyTimeframesSection.tsx
    StoryTimeline.tsx
    FAQAccordion.tsx
    ContactTeamSection.tsx
    ContactFormSection.tsx
  forms/
    ContactForm.tsx
  ui/
    Button.tsx
    Card.tsx
    Badge.tsx
    Tabs.tsx
    Accordion.tsx
    Alert.tsx
    IconWithTextRow.tsx
4. Σελίδες: περιεχόμενο & SEO δομή
4.1 /[locale] – Αρχική
Purpose: Overview + version summary + πρώτη γραμμή risk messaging.

Sections:

Hero (HomeHero)

H1 (EL):
ForexBot MT5 – Αλγοριθμική στρατηγική Forex με live δεδομένα & επαλήθευση

Subtext: 2–3 γραμμές για “ψηφιακή παρουσία διαφανούς, τεχνολογικά ώριμου συστήματος Forex trading…”. (χρησιμοποιείς το τρέχον κείμενο, ελαφρά trimmed). 
ForexBot

Primary CTA: “Δες τη ζωντανή απόδοση” → /el/live

Secondary CTA: “Δες πώς λειτουργεί” → /el/strategy

Mini-legal: “Δεν παρέχονται επενδυτικές υπηρεσίες – ενημερωτικό περιεχόμενο.”

Versions grid (HomeVersionsGrid)

3 cards για:

v13.10 Core500

v13.12 Clone30

v13.13 Even30

Stats (CAGR/Max DD/Μόχλευση/Custom Stop-Out/ Εφαρμογή) από υπάρχον περιεχόμενο. 
ForexBot

CTA ανά κάρτα: “Δες λεπτομέρειες” → αντίστοιχο /live/....

Live account snapshot teaser (LiveOverviewStats)

Προβολή αρχικής κατάθεσης, τρέχον balance/equity, margin, usable %, PnL, last update. (Pull από API/DB).

CTA: “Δες το full dashboard της v13.10 Core500” → /el/live/core500-v13-10.

Backtest video teaser

embed / CTA προς /el/live/compare-live-vs-backtest ή /el/backtests.

“Τι είναι / Πώς λειτουργεί / Γιατί σχεδιάστηκε / Ποιοι βρίσκονται πίσω από αυτό”

Re-structure του υπάρχοντος text σε 4 blocks με H2, each linking deeper:

“Τι είναι το ForexBot;” → /el/strategy

“Πώς λειτουργεί στην πράξη;” → /el/strategy

“Γιατί σχεδιάστηκε;” → /el/story

“Ποιοι βρίσκονται πίσω από αυτό;” → /el/contact.

FAQ teaser (HomeFAQTeaser)

3–4 top FAQs από /el/faqs με accordion preview.

Legal strip (LegalFooterNotice)

Short disclaimer + links προς /el/legal/disclaimer & /el/legal/disclaimer-technical.

SEO (πρόταση):

Title EL:
ForexBot MT5 – Αλγοριθμική Στρατηγική Forex με Live Δεδομένα & Επαλήθευση

Description EL:
Γνωρίστε το ForexBot, μια αυτοματοποιημένη στρατηγική Forex με backtests 2008–2023 και live παρακολούθηση μέσω Darwinex & Myfxbook. Ενημερωτικό περιεχόμενο, όχι επενδυτική συμβουλή.

4.2 /[locale]/live – Live overview
Purpose: Single summary page πριν μπεις σε κάθε version.

Sections:

H1: Live Απόδοση ForexBot – Επισκόπηση Εκδόσεων

Cards per version (Core500, Clone30, Even30) με key metrics + CTA.

Block “LIVE vs BACKTEST: Απόδειξη Σύγκλισης” με link embed / CTA σε /live/compare-live-vs-backtest.

Block “Σύγκριση με S&P 500” με CTA σε /live/vs-sp500.

Legal note under each chart.

4.3 /[locale]/live/core500-v13-10
Rebuild of /el/13-10.

Sections:

H1: ForexBot v13.10 Core500 – Ζωντανή Απόδοση & Πραγματικά Στατιστικά

Live chart embed (ή custom chart από δικά σου data).

Table “Πραγματικά Στατιστικά Επίδοσης” με τα fields που ήδη έχεις (κατάθεση, καθαρό κεφάλαιο, DD, κλπ.). 
ForexBot

CTA: “Δες backtest από το 2008” → /el/backtests ή anchor στο σχετικό section.

Short explanation: για ποιο risk profile είναι.

Strong disclaimer block.

Title/Desc EL (πρόταση):

Title: ForexBot v13.10 Core500 – Ζωντανή Απόδοση & Πραγματικά Στατιστικά

Description: Παρακολούθησε ζωντανά την απόδοση της στρατηγικής ForexBot v13.10 Core500 σε πραγματικό λογαριασμό Myfxbook. Ιστορικά tests 2008–2023 και live δεδομένα. Όχι επενδυτική σύσταση.

4.4 /[locale]/live/even30-v13-13
Rebuild του /el/13-13 (Darwinex JUZE).

Sections:

H1: ForexBot v13.13 Even30 – Απόδοση μέσω Darwinex (JUZE)

Darwinex widgets σε 3 blocks (Monthly returns, equity & drawdown, key metrics). 
ForexBot

Text κομμάτι που ήδη έχεις (και είναι πολύ καλό νομικά) ως explanatory block.

Legal note “ForexBot.gr δεν παρέχει επενδυτικές υπηρεσίες…”.

4.5 /[locale]/live/clone30-v13-12
Σήμερα είναι “Υπό κατασκευή”. Τώρα:

H1: ForexBot v13.12 Clone30 – Backtest & Προφίλ Ρίσκου

Hero text: εξηγεί ότι είναι backtest-only έκδοση 1:30 με ~25% DD και ~25% CAGR (σύμφωνα με home). 
ForexBot

Section για summary των backtests με links σε αρχεία.

Section “Εκτιμώμενη διαθεσιμότητα live εφαρμογής” (με date if/when).

4.6 /[locale]/live/compare-live-vs-backtest
Rebuild /el/compare-live-vs-backtest.

H1: LIVE vs BACKTEST – Έλεγχος Σύγκλισης

Video embed + bullet summary (όπως ήδη):

curve fitting, αποκλίσεις <1%, risk management consistent.

CTA: “Δες τη λογική της στρατηγικής” → /el/strategy.

4.7 /[locale]/live/vs-sp500
Βγάζεις από /el/differences και το κάνεις full page:

H1: Σύγκριση ForexBot vs S&P 500 – Διαφορετικά Μέσα, Διαφορετικό Ρίσκο

Explanation ότι η σύγκριση είναι ενδεικτική (equity curves/volatility), όχι “ποιος κερδίζει”.

Chart section (equity normalized).

Risk/volatility bullets.

4.8 /[locale]/backtests
Σήμερα είναι μόνο ένα download link. Το κάνουμε κανονικό hub.

H1: Backtests ForexBot v13 – Ιστορικά Αποτελέσματα 2008–2023

Intro block (τι σημαίνει backtest, limitations).

Table ή cards ανά έκδοση:

v13.10 Core500 – link σε PDF, Excel

v13.12 Clone30 – link

v13.13 Even30 – link (αν έχεις)

Σημείωση: “Οι backtests είναι προσομοιώσεις, όχι πραγματικές επενδύσεις.”

4.9 /[locale]/versions – Εκδόσεις
Νέα consolidated σελίδα.

H1: Εκδόσεις ForexBot v13 – Επιθετικό vs Συντηρητικό Προφίλ

Σενάριο πίνακα:

Έκδοση	Όνομα	Μόχλευση	Max DD (στόχος)	Προφίλ	Εφαρμογή
v13.10	Core500	1:500	~60%	Επιθετικό	Live since 2024
v13.12	Clone30	1:30	~25%	Balanced	Backtest 2008–2023
v13.13	Even30	1:30	~15%	Συντηρητικό	Live since 2025

Σύντομο κείμενο για το ποια ταιριάζει σε ποιο risk profile (χωρίς συμβουλή).

4.10 /[locale]/strategy – Τεχνικά
Την κρατάς πάνω–κάτω όπως είναι, αλλά σε modular layout:

Sections με anchors:

#strategic-logic

#risk-management

#pairs

#patterns

#timeframes

Εσωτερικό navigation (tabs ή sticky sub-nav) όπως το υπάρχον: “Η Λογική / Διαχείριση Ρίσκου / Ισοτιμίες / Μοτίβα / Timeframes”. 
ForexBot

Repeat legal note “εκπαιδευτική παρουσίαση” σε κάθε critical block.

4.11 /[locale]/story – Η Ιστορία
Maintain existing timeline 2013–2025 ως StoryTimeline component. 
ForexBot

Κάθε χρονικό σημείο (2013 βιβλίο DiNapoli, 2018 realization, 2019 demo, 2023 live, 2025 dual versions, κλπ.) σαν card με “Περισσότερα”.

4.12 /[locale]/faqs
Χτίζεις FAQAccordion με groups:

Στρατηγική

Backtests & Live

Ρίσκο

Επιχειρηματικό μοντέλο

Συμπληρώνεις τις απαντήσεις με βάση το υπάρχον narrative (strategy, risk, transparency). 
ForexBot
+1

Προσθέτεις FAQPage JSON-LD.

4.13 /[locale]/contact – Σχετικά & Επικοινωνία
Combine current “Σχετικά” + “Επικοινωνία”:

Tabbed ή 2-column layout:

“Σχετικά” (team description, philosophy, 13 χρόνια, third-party platforms). 
ForexBot

“Επικοινωνία” (form, email, location).

Clear note: “Δεν παρέχονται επενδυτικές υπηρεσίες – επικοινωνία μόνο για ενημερωτικούς και τεχνικούς σκοπούς.”

4.14 Νομικά – /[locale]/legal/*
Μεταφέρεις όλο το υπάρχον κείμενο σε MDX:

/legal/disclaimer – Νομική Αποποίηση Ευθύνης (EL/EN όπως ήδη έχεις). 
ForexBot
+1

/legal/disclaimer-technical – Τεχνική Πολιτική Disclaimer.

/legal/terms-of-use – Όροι χρήσης & πνευματική ιδιοκτησία.

/legal/privacy-cookies – Πολιτική Απορρήτου & Cookies.

LegalDisclaimerModal.tsx

Εμφανίζεται σε πρώτη επίσκεψη: περιλαμβάνει short version + 2 buttons:

“Έχω ενημερωθεί και αποδέχομαι” / “I acknowledge and accept”.

Αποθήκευση state σε localStorage (π.χ. forexbot_disclaimer_accepted_v2025_06).

Modal accessible keyboard-only, focus trap, etc.

5. SEO Implementation
5.1 Metadata API
Σε κάθε page.tsx:

ts
Copy code
export function generateMetadata({ params: { locale } }) {
  const baseUrl = "https://forexbot.gr";
  const titles = { /* per route + locale */ };
  const descriptions = { /* per route + locale */ };

  const path = /* route-specific path, e.g. "/live/core500-v13-10" */;
  const url = `${baseUrl}/${locale}${path}`;

  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: url,
      languages: {
        el: url.replace("/en", "/el"),
        en: url.replace("/el", "/en")
      }
    },
    openGraph: { url, title: titles[locale], description: descriptions[locale], siteName: "ForexBot.gr" },
    twitter: { card: "summary_large_image", title: titles[locale], description: descriptions[locale] }
  };
}
5.2 Structured Data
Organization: ForexBot.gr (site owner).

WebSite + SearchAction (optional).

SoftwareApplication: “ForexBot v13 – Algorithmic Forex Strategy (educational overview only)”.

FAQPage for /faqs.

Article/WebPage for Story, Strategy, Live pages.

Όλα με language tags σε EL / EN.

6. Performance & Core Web Vitals
Server Components για όλα τα καθαρά κείμενα (strategy, story, legal).

Dynamic imports για Myfxbook/Darwinex widgets με ssr: false.

Lazy load για heavy embeds (video, widgets) με intersection observer.

Next Image για icons, charts screenshots, team photo.

Preload main font(s), minimal bundle.

7. Robots & Sitemaps
7.1 robots.txt
txt
Copy code
User-agent: *
Disallow: /api/
Allow: /

Sitemap: https://forexbot.gr/sitemap.xml
7.2 sitemap.ts
Entries για όλα τα locale routes.

Για κάθε σελίδα:

loc

lastModified (από MDX frontmatter date).

xhtml:link για hreflang=el & hreflang=en (όταν είναι έτοιμο το EN).

8. Implementation order
App skeleton + [locale] layout + Nav/Footer + LegalModal

Home + Live overview + Versions + Strategy

Live version pages (13.10, 13.12, 13.13) + Compare + vs S&P

Backtests + Story + FAQs + Contact

Legal pages + sitemap + robots

EN locale scaffolding με ίδια routes

Performance tuning & schema markup

Με αυτό το README, ένας dev/agent σε Next.js μπορεί:

να στήσει ολοκληρωμένο EL-first SSR site,

να έχει καθαρή IA πάνω στο περιεχόμενο που ήδη έχεις,

να είναι νομικά συνεπής και SEO-έτοιμος για την επόμενη φάση (EN rollout + περισσότερα widgets / dashboards).