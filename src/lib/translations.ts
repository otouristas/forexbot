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
  // Versions page
  versions: {
    title: string
    description: string
    subtitle: string
    tableHeaders: {
      version: string
      name: string
      leverage: string
      maxDD: string
      profile: string
      application: string
    }
    versions: {
      core500: {
        version: string
        name: string
        leverage: string
        maxDD: string
        profile: string
        application: string
      }
      clone30: {
        version: string
        name: string
        leverage: string
        maxDD: string
        profile: string
        application: string
      }
      even30: {
        version: string
        name: string
        leverage: string
        maxDD: string
        profile: string
        application: string
      }
    }
    conclusion: string
    disclaimer: string
  }
  // Strategy page
  strategy: {
    title: string
    description: string
    subtitle: string
    navigation: {
      strategicLogic: string
      riskManagement: string
      pairs: string
      patterns: string
      timeframes: string
    }
    sections: {
      strategicLogic: {
        title: string
        content: string
        disclaimer: string
      }
      riskManagement: {
        title: string
        content: string
        disclaimer: string
      }
      pairs: {
        title: string
        content: string
        disclaimer: string
      }
      patterns: {
        title: string
        content: string
        disclaimer: string
      }
      timeframes: {
        title: string
        content: string
        disclaimer: string
      }
    }
  }
  // Story page
  story: {
    title: string
    description: string
    subtitle: string
    timeline: Array<{
      year: number
      event: string
      description: string
    }>
    conclusion: string
    learnMore: string
  }
  // Contact page
  contact: {
    title: string
    description: string
    about: {
      title: string
      content1: string
      content2: string
      philosophy: string
    }
    contact: {
      title: string
      intro: string
    }
    disclaimer: string
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
    versions: {
      title: 'Εκδόσεις ForexBot v13',
      description: 'Σύγκριση εκδόσεων ForexBot v13 (Core500, Clone30, Even30) με μόχλευση, drawdown και προφίλ ρίσκου.',
      subtitle: 'Επιθετικό vs Συντηρητικό Προφίλ',
      tableHeaders: {
        version: 'Έκδοση',
        name: 'Όνομα',
        leverage: 'Μόχλευση',
        maxDD: 'Max DD (στόχος)',
        profile: 'Προφίλ',
        application: 'Εφαρμογή',
      },
      versions: {
        core500: {
          version: 'v13.10',
          name: 'Core500',
          leverage: '1:500',
          maxDD: '~60%',
          profile: 'Επιθετικό',
          application: 'Live since 2024',
        },
        clone30: {
          version: 'v13.12',
          name: 'Clone30',
          leverage: '1:30',
          maxDD: '~25%',
          profile: 'Balanced',
          application: 'Backtest 2008–2023',
        },
        even30: {
          version: 'v13.13',
          name: 'Even30',
          leverage: '1:30',
          maxDD: '~15%',
          profile: 'Συντηρητικό',
          application: 'Live since 2025',
        },
      },
      conclusion: 'Κάθε έκδοση είναι σχεδιασμένη για διαφορετικά προφίλ ρίσκου. Επιλέξτε ανάλογα με τις προτιμήσεις σας. Θυμηθείτε: Όλες οι επενδύσεις ενέχουν κίνδυνο, και το ForexBot δεν είναι επενδυτική συμβουλή.',
      disclaimer: 'Εκπαιδευτική παρουσίαση – όχι επενδυτική συμβουλή.',
    },
    strategy: {
      title: 'Τεχνικά – ForexBot Στρατηγική',
      description: 'Μάθετε τη λογική, τη διαχείριση ρίσκου και τα τεχνικά στοιχεία πίσω από τη στρατηγική ForexBot v13.',
      subtitle: 'Τεχνική Ανάλυση & Αλγόριθμοι',
      navigation: {
        strategicLogic: 'Η Λογική',
        riskManagement: 'Διαχείριση Ρίσκου',
        pairs: 'Ισοτιμίες',
        patterns: 'Μοτίβα',
        timeframes: 'Timeframes',
      },
      sections: {
        strategicLogic: {
          title: 'Η Στρατηγική Λογική',
          content: 'Το ForexBot χρησιμοποιεί αλγόριθμους βασισμένους σε τεχνική ανάλυση και DiNapoli levels για την εκτέλεση συναλλαγών.',
          disclaimer: 'Εκπαιδευτική παρουσίαση – όχι επενδυτική συμβουλή.',
        },
        riskManagement: {
          title: 'Διαχείριση Ρίσκου',
          content: 'Εφαρμόζονται αυστηρά όρια ρίσκου, συμπεριλαμβανομένων stop-loss και position sizing.',
          disclaimer: 'Εκπαιδευτική παρουσίαση – όχι επενδυτική συμβουλή.',
        },
        pairs: {
          title: 'Ισοτιμίες',
          content: 'Εστιάζεται σε major pairs όπως EUR/USD, GBP/USD, κλπ.',
          disclaimer: 'Εκπαιδευτική παρουσίαση – όχι επενδυτική συμβουλή.',
        },
        patterns: {
          title: 'Μοτίβα',
          content: 'Αναγνώριση patterns όπως head and shoulders, triangles, κλπ.',
          disclaimer: 'Εκπαιδευτική παρουσίαση – όχι επενδυτική συμβουλή.',
        },
        timeframes: {
          title: 'Timeframes',
          content: 'Χρησιμοποιούνται multiple timeframes για επιβεβαίωση σήματος.',
          disclaimer: 'Εκπαιδευτική παρουσίαση – όχι επενδυτική συμβουλή.',
        },
      },
    },
    story: {
      title: 'Η Ιστορία του ForexBot',
      description: 'Ανακαλύψτε τα βασικά ορόσημα του ForexBot από το 2013 μέχρι σήμερα με έμφαση στη διαφάνεια.',
      subtitle: 'Από την Έρευνα στην Εκτέλεση',
      timeline: [
        {
          year: 2013,
          event: 'Ανακάλυψη του βιβλίου DiNapoli Levels',
          description: 'Η αρχή της έρευνας σε Fibonacci-based trading.',
        },
        {
          year: 2018,
          event: 'Πραγματοποίηση της δυνατότητας algorithmic trading',
          description: 'Αναγνώριση της σημασίας της αυτοματοποίησης.',
        },
        {
          year: 2019,
          event: 'Δημιουργία πρώτου demo λογαριασμού',
          description: 'Έναρξη δοκιμών σε πραγματικές συνθήκες.',
        },
        {
          year: 2023,
          event: 'Εκκίνηση live trading',
          description: 'Μετάβαση σε πραγματικά κεφάλαια με πλήρη διαφάνεια.',
        },
        {
          year: 2025,
          event: 'Εκτόξευση dual versions (Core500 & Even30)',
          description: 'Προσαρμογή σε διαφορετικά προφίλ ρίσκου.',
        },
      ],
      conclusion: 'Το ForexBot είναι αποτέλεσμα ετών έρευνας και ανάπτυξης, με έμφαση στη διαφάνεια και την εκπαίδευση. Δεν είναι ένα μαγικό εργαλείο, αλλά ένα εργαλείο για την κατανόηση και την εφαρμογή algorithmic trading.',
      learnMore: 'Περισσότερα',
    },
    contact: {
      title: 'Σχετικά & Επικοινωνία',
      description: 'Συστηθείτε στην ομάδα του ForexBot.gr και επικοινωνήστε για τεχνικές ή εκπαιδευτικές ερωτήσεις.',
      about: {
        title: 'Ποιοι Είμαστε',
        content1: 'Το ForexBot.gr είναι ένα εκπαιδευτικό project που παρουσιάζει μια αυτοματοποιημένη στρατηγική Forex. Ιδρύθηκε το 2013 με στόχο την έρευνα και την ανάπτυξη algorithmic trading σε διαφανείς όρους.',
        content2: 'Χρησιμοποιούμε third-party πλατφόρμες όπως Darwinex και Myfxbook για να εξασφαλίσουμε ανεξάρτητη επαλήθευση. Δεν πωλούμε προϊόντα ή υπηρεσίες – όλα τα στοιχεία είναι διαθέσιμα δωρεάν για εκπαιδευτικούς σκοπούς.',
        philosophy: 'Η φιλοσοφία μας: Διαφάνεια, εκπαίδευση, και υπεύθυνο trading.',
      },
      contact: {
        title: 'Επικοινωνήστε Μαζί Μας',
        intro: 'Για ερωτήσεις σχετικά με την εκπαίδευση ή τα τεχνικά στοιχεία. Δεν παρέχουμε επενδυτικές συμβουλές.',
      },
      disclaimer: 'ForexBot.gr δεν παρέχει επενδυτικές υπηρεσίες – επικοινωνία μόνο για ενημερωτικούς και τεχνικούς σκοπούς.',
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
    versions: {
      title: 'ForexBot v13 Versions',
      description: 'Compare ForexBot v13 versions (Core500, Clone30, Even30) with leverage, drawdown and risk profiles.',
      subtitle: 'Aggressive vs Conservative Profiles',
      tableHeaders: {
        version: 'Version',
        name: 'Name',
        leverage: 'Leverage',
        maxDD: 'Max DD (target)',
        profile: 'Profile',
        application: 'Application',
      },
      versions: {
        core500: {
          version: 'v13.10',
          name: 'Core500',
          leverage: '1:500',
          maxDD: '~60%',
          profile: 'Aggressive',
          application: 'Live since 2024',
        },
        clone30: {
          version: 'v13.12',
          name: 'Clone30',
          leverage: '1:30',
          maxDD: '~25%',
          profile: 'Balanced',
          application: 'Backtest 2008–2023',
        },
        even30: {
          version: 'v13.13',
          name: 'Even30',
          leverage: '1:30',
          maxDD: '~15%',
          profile: 'Conservative',
          application: 'Live since 2025',
        },
      },
      conclusion: 'Each version is designed for different risk profiles. Choose according to your preferences. Remember: All investments involve risk, and ForexBot is not investment advice.',
      disclaimer: 'Educational presentation – not investment advice.',
    },
    strategy: {
      title: 'Technical – ForexBot Strategy',
      description: 'Learn the logic, risk management and technical elements behind the ForexBot v13 strategy.',
      subtitle: 'Technical Analysis & Algorithms',
      navigation: {
        strategicLogic: 'The Logic',
        riskManagement: 'Risk Management',
        pairs: 'Pairs',
        patterns: 'Patterns',
        timeframes: 'Timeframes',
      },
      sections: {
        strategicLogic: {
          title: 'The Strategic Logic',
          content: 'ForexBot uses algorithms based on technical analysis and DiNapoli levels for executing trades.',
          disclaimer: 'Educational presentation – not investment advice.',
        },
        riskManagement: {
          title: 'Risk Management',
          content: 'Strict risk limits are applied, including stop-loss and position sizing.',
          disclaimer: 'Educational presentation – not investment advice.',
        },
        pairs: {
          title: 'Pairs',
          content: 'Focuses on major pairs such as EUR/USD, GBP/USD, etc.',
          disclaimer: 'Educational presentation – not investment advice.',
        },
        patterns: {
          title: 'Patterns',
          content: 'Recognition of patterns such as head and shoulders, triangles, etc.',
          disclaimer: 'Educational presentation – not investment advice.',
        },
        timeframes: {
          title: 'Timeframes',
          content: 'Multiple timeframes are used for signal confirmation.',
          disclaimer: 'Educational presentation – not investment advice.',
        },
      },
    },
    story: {
      title: 'The ForexBot Story',
      description: 'Discover the key milestones of ForexBot from 2013 to today with emphasis on transparency.',
      subtitle: 'From Research to Execution',
      timeline: [
        {
          year: 2013,
          event: 'Discovery of the DiNapoli Levels book',
          description: 'The beginning of research in Fibonacci-based trading.',
        },
        {
          year: 2018,
          event: 'Realization of algorithmic trading capability',
          description: 'Recognition of the importance of automation.',
        },
        {
          year: 2019,
          event: 'Creation of first demo account',
          description: 'Starting tests in real conditions.',
        },
        {
          year: 2023,
          event: 'Launch of live trading',
          description: 'Transition to real capital with full transparency.',
        },
        {
          year: 2025,
          event: 'Launch of dual versions (Core500 & Even30)',
          description: 'Adaptation to different risk profiles.',
        },
      ],
      conclusion: 'ForexBot is the result of years of research and development, with emphasis on transparency and education. It is not a magical tool, but a tool for understanding and applying algorithmic trading.',
      learnMore: 'Learn More',
    },
    contact: {
      title: 'About & Contact',
      description: 'Meet the ForexBot.gr team and contact us for technical or educational questions.',
      about: {
        title: 'Who We Are',
        content1: 'ForexBot.gr is an educational project that presents an automated Forex strategy. Founded in 2013 with the goal of researching and developing algorithmic trading in transparent terms.',
        content2: 'We use third-party platforms like Darwinex and Myfxbook to ensure independent verification. We do not sell products or services – all information is available free of charge for educational purposes.',
        philosophy: 'Our philosophy: Transparency, education, and responsible trading.',
      },
      contact: {
        title: 'Contact Us',
        intro: 'For questions about education or technical elements. We do not provide investment advice.',
      },
      disclaimer: 'ForexBot.gr does not provide investment services – communication only for informational and technical purposes.',
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

