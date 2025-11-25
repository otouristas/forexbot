export type Locale = 'el' | 'en'

export interface Translations {
  // Navigation
  nav: {
    home: string
    live: string
    backtests: string
    versions: string
    strategy: string
    story: string
    faqs: string
    contact: string
  }
  // Home page
  home: {
    hero: {
      title: string
      description: string
      ctaLive: string
      ctaStrategy: string
      disclaimer: string
    }
    versions: {
      title: string
      core500: {
        name: string
        cagr: string
        maxDD: string
        leverage: string
        stopOut: string
        application: string
      }
      clone30: {
        name: string
        cagr: string
        maxDD: string
        leverage: string
        stopOut: string
        application: string
      }
      even30: {
        name: string
        cagr: string
        maxDD: string
        leverage: string
        stopOut: string
        application: string
      }
      seeDetails: string
    }
    liveSnapshot: {
      title: string
      accountOverview: string
      started: string
      balance: string
      equity: string
      margin: string
      usable: string
      pnl: string
      noOpenPositions: string
      seeChart: string
      lastUpdate: string
    }
    whatIs: {
      title1: string
      content1: string
      title2: string
      content2: string
      title3: string
      content3: string
      title4: string
      content4: string
      learnMore: string
    }
    intro: {
      paragraph: string
    }
    backtestVideo: {
      disclaimer: string
      videoLabel: string
      fallbackText: string
      downloadLink: string
      or: string
    }
    faq: {
      title: string
      items: Array<{ title: string; content: string }>
      seeAll: string
    }
  }
  // Live pages
  live: {
    kpi: {
      title: string
    }
  }
  // Footer
  footer: {
    copyright: string
    disclaimer: string
    terms: string
    privacy: string
  }
  // Common
  common: {
    loading: string
    error: string
    learnMore: string
  }
}

const translations: Record<Locale, Translations> = {
  el: {
    nav: {
      home: 'Αρχική',
      live: 'Live',
      backtests: 'Backtests',
      versions: 'Εκδόσεις',
      strategy: 'Τεχνικά',
      story: 'Ιστορία',
      faqs: 'Ερωτήσεις',
      contact: 'Σχετικά & Επικοινωνία',
    },
    home: {
      hero: {
        title: 'ForexBot MT5 – Αλγοριθμική στρατηγική Forex με live δεδομένα & επαλήθευση',
        description:
          'Γνωρίστε το ForexBot, μια αυτοματοποιημένη στρατηγική Forex με backtests 2008–2023 και live παρακολούθηση μέσω Darwinex & Myfxbook. Ενημερωτικό περιεχόμενο, όχι επενδυτική συμβουλή.',
        ctaLive: 'Δες τη ζωντανή απόδοση',
        ctaStrategy: 'Δες πώς λειτουργεί',
        disclaimer: 'Δεν παρέχονται επενδυτικές υπηρεσίες – ενημερωτικό περιεχόμενο.',
      },
      versions: {
        title: 'Εκδόσεις ForexBot',
        core500: {
          name: 'v13.10 Core500',
          cagr: 'Απόδοση: +80% CAGR',
          maxDD: 'Max Drawdown: 60%',
          leverage: 'Μόχλευση: 1:500',
          stopOut: 'Custom Stop-Out: 20%',
          application: 'Εφαρμογή: Live since 2024',
        },
        clone30: {
          name: 'v13.12 Clone30',
          cagr: 'Απόδοση: +25% CAGR',
          maxDD: 'Max Drawdown: 25%',
          leverage: 'Μόχλευση: 1:30',
          stopOut: 'Custom Stop-Out: 60%',
          application: 'Εφαρμογή: Backtest 2008–2023',
        },
        even30: {
          name: 'v13.13 Even30',
          cagr: 'Απόδοση: +15% CAGR',
          maxDD: 'Max Drawdown: 15%',
          leverage: 'Μόχλευση: 1:30',
          stopOut: 'Custom Stop-Out: 80%',
          application: 'Εφαρμογή: Live since 2025',
        },
        seeDetails: 'Δες λεπτομέρειες',
      },
      liveSnapshot: {
        title: 'Live Account Snapshot',
        accountOverview: 'Επισκόπηση Λογαριασμού',
        started: 'Started €',
        balance: 'Balance €',
        equity: 'Equity €',
        margin: 'Margin €',
        usable: 'Usable %',
        pnl: 'PnL €',
        noOpenPositions: 'Καμία Ανοιχτή Θέση',
        seeChart: 'Δες το διάγραμμα απο το 2023 ➔',
        lastUpdate: '🕒 Τελευταία ενημέρωση',
      },
      whatIs: {
        title1: 'Τι είναι το ForexBot;',
        content1: 'Μια αυτοματοποιημένη στρατηγική Forex βασισμένη σε αλγοριθμική ανάλυση.',
        title2: 'Πώς λειτουργεί στην πράξη;',
        content2: 'Χρησιμοποιεί τεχνική ανάλυση και risk management για αυτόματες συναλλαγές.',
        title3: 'Γιατί σχεδιάστηκε;',
        content3: 'Για να παρέχει διαφανή και επαληθεύσιμη απόδοση στο Forex trading.',
        title4: 'Ποιοι βρίσκονται πίσω από αυτό;',
        content4: 'Μια ομάδα ειδικών με εμπειρία στο algorithmic trading και DiNapoli levels.',
        learnMore: 'Μάθε περισσότερα →',
      },
      intro: {
        paragraph:
          'Το ForexBot.gr είναι η ψηφιακή παρουσία ενός διαφανούς, τεχνολογικά ώριμου συστήματος Forex trading, σχεδιασμένου για να αποδίδει με συνέπεια, για ανθρώπους που ήδη γνωρίζουν και που εκτιμούν τη μεθοδικότητα, τη διαχείριση κινδύνου και την τεκμηριωμένη στρατηγική.',
      },
      backtestVideo: {
        disclaimer:
          'Στο βίντεο, θα δείτε την ιστορική προσομοίωση από το 2008 έως το 2023, συμπεριλαμβανομένων περιόδων αυξημένης αστάθειας. Η απόδοση της στρατηγικής αποτυπώνεται με συνέπεια και ελεγχόμενη διακύμανση, χωρίς να αποτελεί ένδειξη ή εγγύηση μελλοντικών αποτελεσμάτων.',
        videoLabel: 'Ενσωματωμένο βίντεο παρουσίασης ForexBot',
        fallbackText: 'Ο περιηγητής σας δεν υποστηρίζει βίντεο HTML5. Παρακαλώ',
        downloadLink: 'κατεβάστε το βίντεο εδώ',
        or: 'ή δείτε το στο',
      },
      faq: {
        title: 'Συχνές Ερωτήσεις',
        items: [
          {
            title: 'Τι είναι το ForexBot;',
            content:
              'Το ForexBot είναι μια αυτοματοποιημένη στρατηγική Forex που χρησιμοποιεί αλγόριθμους για συναλλαγές.',
          },
          {
            title: 'Πώς μπορώ να δω τα live αποτελέσματα;',
            content:
              'Μπορείτε να δείτε τα live αποτελέσματα μέσω των σελίδων Live, όπου παρουσιάζονται δεδομένα από Myfxbook και Darwinex.',
          },
          {
            title: 'Υπάρχει κίνδυνος απώλειας κεφαλαίου;',
            content:
              'Όλες οι επενδύσεις στο Forex ενέχουν κίνδυνο. Το ForexBot δεν εγγυάται κέρδη και δεν είναι επενδυτική συμβουλή.',
          },
          {
            title: 'Πού μπορώ να βρω περισσότερες πληροφορίες;',
            content:
              'Επισκεφθείτε τις σελίδες Strategy, Story, και FAQs για περισσότερες λεπτομέρειες.',
          },
        ],
        seeAll: 'Δες όλες τις ερωτήσεις →',
      },
    },
    live: {
      kpi: {
        title: 'Πραγματικά Στατιστικά Επίδοσης',
      },
    },
    footer: {
      copyright: '© 2025 ForexBot.gr. Όλα τα δικαιώματα διατηρούνται.',
      disclaimer: 'Νομική Αποποίηση',
      terms: 'Όροι Χρήσης',
      privacy: 'Πολιτική Απορρήτου',
    },
    common: {
      loading: 'Φόρτωση...',
      error: 'Σφάλμα',
      learnMore: 'Μάθε περισσότερα',
    },
  },
  en: {
    nav: {
      home: 'Home',
      live: 'Live',
      backtests: 'Backtests',
      versions: 'Versions',
      strategy: 'Strategy',
      story: 'Story',
      faqs: 'FAQs',
      contact: 'About & Contact',
    },
    home: {
      hero: {
        title: 'ForexBot MT5 – Algorithmic Forex Strategy with Live Data & Verification',
        description:
          'Discover ForexBot, an automated Forex strategy with backtests 2008–2023 and live monitoring via Darwinex & Myfxbook. Educational content, not investment advice.',
        ctaLive: 'View Live Performance',
        ctaStrategy: 'See How It Works',
        disclaimer: 'No investment services provided – educational content only.',
      },
      versions: {
        title: 'ForexBot Versions',
        core500: {
          name: 'v13.10 Core500',
          cagr: 'Performance: +80% CAGR',
          maxDD: 'Max Drawdown: 60%',
          leverage: 'Leverage: 1:500',
          stopOut: 'Custom Stop-Out: 20%',
          application: 'Application: Live since 2024',
        },
        clone30: {
          name: 'v13.12 Clone30',
          cagr: 'Performance: +25% CAGR',
          maxDD: 'Max Drawdown: 25%',
          leverage: 'Leverage: 1:30',
          stopOut: 'Custom Stop-Out: 60%',
          application: 'Application: Backtest 2008–2023',
        },
        even30: {
          name: 'v13.13 Even30',
          cagr: 'Performance: +15% CAGR',
          maxDD: 'Max Drawdown: 15%',
          leverage: 'Leverage: 1:30',
          stopOut: 'Custom Stop-Out: 80%',
          application: 'Application: Live since 2025',
        },
        seeDetails: 'See Details',
      },
      liveSnapshot: {
        title: 'Live Account Snapshot',
        accountOverview: 'Account Overview',
        started: 'Started €',
        balance: 'Balance €',
        equity: 'Equity €',
        margin: 'Margin €',
        usable: 'Usable %',
        pnl: 'PnL €',
        noOpenPositions: 'No Open Positions',
        seeChart: 'View chart from 2023 ➔',
        lastUpdate: '🕒 Last update',
      },
      whatIs: {
        title1: 'What is ForexBot?',
        content1: 'An automated Forex strategy based on algorithmic analysis.',
        title2: 'How does it work in practice?',
        content2: 'Uses technical analysis and risk management for automated trading.',
        title3: 'Why was it designed?',
        content3: 'To provide transparent and verifiable performance in Forex trading.',
        title4: 'Who is behind it?',
        content4: 'A team of experts with experience in algorithmic trading and DiNapoli levels.',
        learnMore: 'Learn more →',
      },
      intro: {
        paragraph:
          'ForexBot.gr is the digital presence of a transparent, technologically mature Forex trading system, designed to perform consistently, for people who already know and appreciate methodology, risk management, and evidence-based strategy.',
      },
      backtestVideo: {
        disclaimer:
          'In the video, you will see the historical simulation from 2008 to 2023, including periods of increased volatility. The strategy performance is reflected with consistency and controlled variance, without constituting an indication or guarantee of future results.',
        videoLabel: 'Embedded ForexBot presentation video',
        fallbackText: 'Your browser does not support HTML5 video. Please',
        downloadLink: 'download the video here',
        or: 'or watch it on',
      },
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          {
            title: 'What is ForexBot?',
            content:
              'ForexBot is an automated Forex strategy that uses algorithms for trading.',
          },
          {
            title: 'How can I view live results?',
            content:
              'You can view live results through the Live pages, where data from Myfxbook and Darwinex is presented.',
          },
          {
            title: 'Is there a risk of capital loss?',
            content:
              'All Forex investments involve risk. ForexBot does not guarantee profits and is not investment advice.',
          },
          {
            title: 'Where can I find more information?',
            content:
              'Visit the Strategy, Story, and FAQs pages for more details.',
          },
        ],
        seeAll: 'See all questions →',
      },
    },
    live: {
      kpi: {
        title: 'Real Performance Statistics',
      },
    },
    footer: {
      copyright: '© 2025 ForexBot.gr. All rights reserved.',
      disclaimer: 'Legal Disclaimer',
      terms: 'Terms of Use',
      privacy: 'Privacy Policy',
    },
    common: {
      loading: 'Loading...',
      error: 'Error',
      learnMore: 'Learn more',
    },
  },
}

export function getTranslations(locale: Locale): Translations {
  return translations[locale] || translations.en
}

export function t(locale: Locale): Translations {
  return getTranslations(locale)
}

