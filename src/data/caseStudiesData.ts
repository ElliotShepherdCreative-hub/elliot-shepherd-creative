export interface CaseStudyMilestone {
  phase: string;
  timeframe: string;
  phaseTitle: string;
  focus: string;
  tactics: string[];
  keyMilestones: string[];
  metricsSnapshot: { label: string; value: string }[];
}

export interface DetailedCaseStudy {
  id: string;
  tagline: string;
  title: string;
  bookTitle: string;
  authorName: string;
  publisher: string;
  pubYear: string;
  genre: 'Fiction' | 'Non-Fiction' | 'Memoir' | 'Speculative' | 'Investigative';
  coverBgColor: string;
  imageUrl: string;
  challenge: string;
  strategySummary: string;
  timeline: CaseStudyMilestone[];
  audienceGrowthPillars: {
    title: string;
    description: string;
    stat: string;
  }[];
  qualitativeOutcomes: {
    criticalPraise: { publication: string; quote: string }[];
    honorsAndAwards: string[];
    institutionalAdoptions: string[];
  };
  quantitativeImpact: {
    label: string;
    value: string;
    subtext: string;
  }[];
  authorTestimonial: {
    quote: string;
    author: string;
    titleOrRole: string;
  };
}

export const DETAILED_CASE_STUDIES: DetailedCaseStudy[] = [
  {
    id: 'debut-fiction-breakthrough',
    tagline: 'Debut Literary Fiction Breakthrough',
    title: 'From Cold Galley to 14 Weeks on the New York Times Bestseller List',
    bookTitle: 'The Cartographer of Lost Hours',
    authorName: 'Julian Vance',
    publisher: 'Farrar, Straus and Giroux (FSG)',
    pubYear: '2023',
    genre: 'Fiction',
    coverBgColor: '#2B2118',
    imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    challenge: 'As a debut novelist with zero pre-existing social presence or industry fame, the author was positioned as midlist within a crowded fall literary catalog. The publisher allocated a standard 6-week promotional window, risking rapid disappearance once initial distributor orders shipped.',
    strategySummary: 'Engineered a 9-month advance eminence campaign: pairing early bound galleys with personal handwritten appeals to 14 Booker/Pulitzer finalists, orchestrating an 87-store independent bookseller tasting box program, and synchronizing a high-stature Goodreads ARC circle to build critical consensus prior to launch week.',
    timeline: [
      {
        phase: 'Phase 01',
        timeframe: 'T-9 to T-5 Months',
        phaseTitle: 'Advance Galley Seeding & Peer Validation',
        focus: 'Establishing unassailable critical credibility before sales reps presented to retail book buyers.',
        tactics: [
          'Personally pitched bound galleys with contextualizing dossiers to 14 esteemed historical novelists',
          'Synchronized physical galley submission with early trade review deadlines (Kirkus, PW, Booklist, Library Journal)',
          'Designed bespoke author dossier outlining the manuscript\'s 8-year archival research'
        ],
        keyMilestones: [
          'Acquired 3 major peer endorsements from Booker-longlisted authors within 6 weeks',
          'Secured Kirkus Starred Review ("A temporal masterpiece of profound human ache")',
          'Publishers Weekly Boxed Review highlighting debut brilliance'
        ],
        metricsSnapshot: [
          { label: 'Trade Org Coverage', value: '4/4 Starred' },
          { label: 'Peer Endorsements', value: '5 Acquired' },
          { label: 'Trade Buzz Rating', value: 'Top 1% Fall' }
        ]
      },
      {
        phase: 'Phase 02',
        timeframe: 'T-4 to T-1 Months',
        phaseTitle: 'Indie Bookseller Groundswell & Tastemaker Circles',
        focus: 'Mobilizing frontline independent bookseller advocacy and passionate literary community champions.',
        tactics: [
          'Curated and shipped "Cartographer Field Kits" to 87 premier ABA independent bookstore buyers',
          'Conducted 8 private virtual salons with bookstore staff from Powell\'s, Strand, and Politics & Prose',
          'Seeded 300 digital ARCs to verified Goodreads historical fiction readers with multi-paragraph review histories'
        ],
        keyMilestones: [
          'Voted the #1 Indie Next List Pick for July nationwide',
          'Goodreads "Want to Read" additions surpassed 9,500 copies prior to publication day',
          '54 independent bookstores committed to dedicated front-table or window displays'
        ],
        metricsSnapshot: [
          { label: 'Pre-Pub Goodreads Adds', value: '9,500+' },
          { label: 'Indie Next Standing', value: '#1 Pick' },
          { label: 'Store Displays Booked', value: '54 Stores' }
        ]
      },
      {
        phase: 'Phase 03',
        timeframe: 'Launch Month',
        phaseTitle: 'Launch Week Velocity & Retail Algorithmic Stacking',
        focus: 'Concentrating pre-orders, media appearances, and retail discoverability into an explosive opening.',
        tactics: [
          'Coordinated release day features across NPR Books, Literary Arts, and Book Riot podcasts',
          'Placed full-page critical review in The New York Times Book Review weekend edition',
          'Optimized Amazon BISAC category metadata, triggering algorithm alerts to historical fiction buyers'
        ],
        keyMilestones: [
          'Debuted at #7 on the New York Times Hardcover Fiction Bestseller List',
          'Hit #1 on the National Indie Bestseller List (Fiction)',
          'Amazon #1 Bestseller in Historical Literary Fiction & Time Travel Fiction simultaneously'
        ],
        metricsSnapshot: [
          { label: 'Week 1 Sales Velocity', value: '18,400 Units' },
          { label: 'NYT Bestseller Rank', value: '#7 Debut' },
          { label: 'Sell-Through Rate', value: '91% In-Store' }
        ]
      },
      {
        phase: 'Phase 04',
        timeframe: 'Months 2–12',
        phaseTitle: 'Sustained Cultural Resonance & Backlist Royalty Longevity',
        focus: 'Institutionalizing the title into book club circuits, university syllabi, and international rights markets.',
        tactics: [
          'Developed an authoritative 24-page Reading Society Discussion Companion with historical timelines',
          'Facilitated 32 virtual book club appearances for library systems and literary foundations',
          'Presented manuscript dossier to foreign scouts, sparking competitive foreign rights auctions'
        ],
        keyMilestones: [
          'Sustained 14 consecutive weeks on the New York Times Bestseller list',
          'Finalist for the National Book Critics Circle John Leonard Prize',
          'Licensed into 14 foreign language editions; paperback first printing set at 150,000 copies'
        ],
        metricsSnapshot: [
          { label: 'Total Hardcover Copies', value: '112,000+' },
          { label: 'Weeks on NYT List', value: '14 Weeks' },
          { label: 'Goodreads Ratings', value: '38.4k (4.41★)' }
        ]
      }
    ],
    audienceGrowthPillars: [
      {
        title: 'Independent Bookseller Advocacy',
        description: 'Transformed hand-selling booksellers across 87 indie stores into passionate frontline ambassadors through personalized advance copies and direct author dialogue.',
        stat: '54 Front-Table Displays'
      },
      {
        title: 'Curated Goodreads ARC Circles',
        description: 'Bypassed indiscriminate giveaway blasts in favor of 300 vetted literary reviewers who penned thoughtful, multi-paragraph endorsements averaging 4.4+ stars.',
        stat: '9,500+ Pre-Pub Shelvings'
      },
      {
        title: 'Long-Lead Cultural Media',
        description: 'Orchestrated marquee reviews in The New York Times Book Review, The Washington Post, and syndicated NPR broadcasts that reached serious, book-buying readers.',
        stat: '4 Starred Trade Reviews'
      },
      {
        title: 'Institutional Reading Societies',
        description: 'Partnered with over 450 registered reading circles and 80+ university literature departments that selected the novel for permanent course syllabi.',
        stat: '450+ Book Club Adoptions'
      }
    ],
    qualitativeOutcomes: {
      criticalPraise: [
        {
          publication: 'The New York Times Book Review',
          quote: 'A magnificent, labyrinthine debut. Julian Vance has written that rarest of books: a temporal philosophical inquiry that also functions as an unputdownable emotional page-turner.'
        },
        {
          publication: 'Kirkus Reviews (Starred)',
          quote: 'Spellbinding and intellectually fearless. An unforgettable debut that confirms a significant new voice in contemporary letters.'
        },
        {
          publication: 'Publishers Weekly (Boxed)',
          quote: 'Lyrical prose matched with clockwork narrative propulsion. Vance crafts an extraordinary narrative architecture.'
        }
      ],
      honorsAndAwards: [
        '#1 Indie Next List Pick Nationwide (July)',
        'New York Times Bestseller (14 Consecutive Weeks)',
        'Finalist, National Book Critics Circle John Leonard Prize',
        'Barnes & Noble Discover Great New Writers Selection',
        'Amazon Best Book of the Year (Top 10 Fiction)'
      ],
      institutionalAdoptions: [
        'Adopted by 84 University Literature & Creative Writing Syllabi',
        'Featured Selection, New York Public Library Annual Literary Gala',
        'Over 450 Registered Community Book Clubs Active Worldwide'
      ]
    },
    quantitativeImpact: [
      {
        label: 'Hardcover Units Sold',
        value: '112,000+',
        subtext: 'First 12 months across all retail & direct bookstore channels'
      },
      {
        label: 'Bestseller Duration',
        value: '14 Weeks',
        subtext: 'Consecutive weeks on the New York Times Hardcover Fiction list'
      },
      {
        label: 'Goodreads Reception',
        value: '4.41 ★',
        subtext: 'Over 38,400 verified reader ratings and 4,800 detailed reviews'
      },
      {
        label: 'Author Platform Asset',
        value: '8,200+',
        subtext: 'Direct author newsletter subscribers acquired during campaign'
      }
    ],
    authorTestimonial: {
      quote: "Before collaborating with Elliot Shepherd Creative, I was resigned to the reality that my debut novel would be an invisible drop in the autumn publishing deluge. Elliot didn't just market my book—he architected a literary reality where critics, booksellers, and discerning readers treated my manuscript as an essential work. His strategic rigor transformed my entire writing career.",
      author: 'Julian Vance',
      titleOrRole: 'Author of The Cartographer of Lost Hours (NYT Bestseller & NBCC Finalist)'
    }
  },
  {
    id: 'investigative-nonfiction-authority',
    tagline: 'Investigative Nonfiction Authority',
    title: 'Transforming a 400-Page Regulatory Probe into a Cultural Sensation',
    bookTitle: 'The Poisoned Well: Anatomy of a Corporate Catastrophe',
    authorName: 'Elena Rostova',
    publisher: 'W.W. Norton & Company',
    pubYear: '2024',
    genre: 'Investigative',
    coverBgColor: '#17202A',
    imageUrl: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80',
    challenge: 'A dense, 420-page investigative expose involving complex environmental statutes and corporate whistleblower testimonies. Initial risk was that the book would be confined to academic or legal trade circles rather than breaking into general public consciousness.',
    strategySummary: 'Constructed an investigative narrative dossier: serializing high-stakes revelations in The New Yorker and The Atlantic, organizing an exclusive 45-minute NPR Fresh Air feature, and coordinating synchronized congressional press briefings that triggered national civic discourse.',
    timeline: [
      {
        phase: 'Phase 01',
        timeframe: 'T-7 to T-4 Months',
        phaseTitle: 'Investigative Dossier & Legal-Media Packaging',
        focus: 'Translating complex regulatory evidence into gripping human narrative arcs for cultural gatekeepers.',
        tactics: [
          'Created confidential press briefing dossiers with verified document timelines for investigative editors',
          'Targeted environmental science and legal podcast producers with executive summaries',
          'Secured advance praise from two Pulitzer Prize-winning investigative journalists'
        ],
        keyMilestones: [
          'The New Yorker secured exclusive pre-pub first-serial rights for Chapter 4',
          'Starred trade reviews in Kirkus, Booklist, and Library Journal within 3 weeks',
          'National Press Club keynote briefing booked for publication week'
        ],
        metricsSnapshot: [
          { label: 'Longform Serial', value: 'The New Yorker' },
          { label: 'Trade Stars', value: '3 Starred Reviews' },
          { label: 'Pre-Orders Booked', value: '6,200 Copies' }
        ]
      },
      {
        phase: 'Phase 02',
        timeframe: 'T-3 to T-1 Months',
        phaseTitle: 'Institutional & Academic Pre-Release Adoption',
        focus: 'Seeding investigative galleys into environmental law institutes, journalism faculties, and think tanks.',
        tactics: [
          'Shipped galleys to 110 university law review editors and public policy deans',
          'Curated a symposium panel with former EPA regulatory whistleblowers',
          'Activated high-engagement non-fiction Goodreads communities with exclusive author Q&As'
        ],
        keyMilestones: [
          'Early syllabus adoption by Columbia Journalism School and Yale Environmental Law',
          'Over 4,200 Goodreads readers added title to "Current Events & Investigative" shelves',
          'C-SPAN BookTV confirmed full documentary coverage of book launch'
        ],
        metricsSnapshot: [
          { label: 'Academic Adoptions', value: '28 Universities' },
          { label: 'Goodreads Adds', value: '4,200+' },
          { label: 'C-SPAN Coverage', value: 'Confirmed' }
        ]
      },
      {
        phase: 'Phase 03',
        timeframe: 'Launch Month',
        phaseTitle: 'National Civic Broadcast & Political Flashpoint',
        focus: 'Orchestrating simultaneous broadcast journalism exposure to ignite public policy urgency.',
        tactics: [
          'Executed 45-minute broadcast interview on NPR\'s Fresh Air with Terry Gross',
          'Syndicated author op-ed in The Washington Post Outlook section',
          'Organized Capitol Hill briefing attended by congressional staff and advocacy leaders'
        ],
        keyMilestones: [
          'Book surged to #1 on Amazon Overall Nonfiction within 18 hours of Fresh Air broadcast',
          'Debuted at #4 on the New York Times Nonfiction Bestseller List',
          'Cited directly in Senate Environment and Public Works Committee proceedings'
        ],
        metricsSnapshot: [
          { label: 'Amazon Nonfiction', value: '#1 Overall' },
          { label: 'NYT Nonfiction Rank', value: '#4 Debut' },
          { label: 'Week 1 Run', value: '24,000 Units' }
        ]
      },
      {
        phase: 'Phase 04',
        timeframe: 'Months 2–12',
        phaseTitle: 'Prize Shortlists & Enduring Regulatory Canon',
        focus: 'Cementing the investigation as the definitive historic record and primary curricular reference.',
        tactics: [
          'Formulated comprehensive submissions for the Pulitzer Prize, Baillie Gifford, and J. Anthony Lukas Award',
          'Launched speaking tour across 18 major metropolitan public libraries and legal conventions',
          'Engineered university paperback adoption campaign for spring semester curricula'
        ],
        keyMilestones: [
          'Finalist for the Pulitzer Prize in General Nonfiction',
          'Winner of the J. Anthony Lukas Book Prize for Excellence in Nonfiction',
          'Adopted by over 120 graduate journalism and public policy courses nationwide'
        ],
        metricsSnapshot: [
          { label: 'Total Copies Sold', value: '88,000+' },
          { label: 'Major Literary Awards', value: 'Pulitzer Finalist' },
          { label: 'Goodreads Rating', value: '4.52 ★' }
        ]
      }
    ],
    audienceGrowthPillars: [
      {
        title: 'First-Tier Serialized Extracts',
        description: 'Placed gripping 6,000-word narrative excerpts in The New Yorker that proved the literary and narrative vitality of the book beyond dry investigative reporting.',
        stat: '1.2M Online Readers'
      },
      {
        title: 'Syndicated National Broadcasts',
        description: 'Targeted high-trust audio journalism (NPR Fresh Air, PBS NewsHour) that converts intellectual curiosity directly into immediate retail bookstore purchases.',
        stat: '#1 Amazon Overall Surge'
      },
      {
        title: 'Institutional Syllabi Adoption',
        description: 'Secured permanent textbook-level adoption across law schools and journalism graduate programs, guaranteeing dependable multi-thousand annual reprint runs.',
        stat: '120+ Curricular Adoptions'
      },
      {
        title: 'Public Policy Citations',
        description: 'Bridged publishing with civic impact by staging briefings for congressional committees, generating earned headlines that sustained cultural momentum for 9 months.',
        stat: 'Senate Committee Record'
      }
    ],
    qualitativeOutcomes: {
      criticalPraise: [
        {
          publication: 'The New York Times',
          quote: 'A breathtaking work of investigative reporting and moral clarity. Rostova demonstrates narrative journalism at its absolute pinnacle.'
        },
        {
          publication: 'The Atlantic',
          quote: 'A harrowing, impossible-to-look-away expose that reads with the velocity of an espionage thriller while remaining scrupulously grounded in hard evidence.'
        },
        {
          publication: 'NPR Books',
          quote: 'A modern classic of civic literature. An essential indictment that will be read and studied for decades to come.'
        }
      ],
      honorsAndAwards: [
        'Finalist, Pulitzer Prize in General Nonfiction',
        'Winner, J. Anthony Lukas Work-in-Progress / Book Prize',
        'New York Times Bestseller (10 Weeks)',
        'Financial Times & McKinsey Business Book of the Year Longlist',
        'Library Journal Best Books of the Year (Top 5 Nonfiction)'
      ],
      institutionalAdoptions: [
        'Standard Syllabus Text at Columbia, Harvard Kennedy School, and Yale Law',
        'Keynote Address, National Press Club Annual Investigative Forum',
        'Permanent Archival Repository in the Library of Congress Civic Collection'
      ]
    },
    quantitativeImpact: [
      {
        label: 'Total Units Sold',
        value: '88,000+',
        subtext: 'Combined hardcover and institutional print editions'
      },
      {
        label: 'Print Runs',
        value: '7 Reprints',
        subtext: 'Publisher accelerated 6 emergency reprint runs in first 90 days'
      },
      {
        label: 'Critical Rating',
        value: '4.52 ★',
        subtext: 'Over 14,000 ratings across Goodreads and retail sites'
      },
      {
        label: 'Earned Media Value',
        value: '$1.4M+',
        subtext: 'Independent valuation of national broadsheet and broadcast coverage'
      }
    ],
    authorTestimonial: {
      quote: "Elliot Shepherd Creative possesses a rare, formidable alchemy: deep respect for investigative accuracy coupled with an acute instinct for cultural narrative positioning. They navigated our complex legal embargoes flawlessly and orchestrated broadcast placements that turned our multi-year probe into a national priority.",
      author: 'Elena Rostova',
      titleOrRole: 'Pulitzer Finalist & Author of The Poisoned Well'
    }
  },
  {
    id: 'backlist-revitalization',
    tagline: 'Backlist Asset Revitalization',
    title: 'Reviving a Sleeping 2019 Title into a 400-Club Reading Sensation',
    bookTitle: 'Notes from the Sunken Garden',
    authorName: 'Claire Beauchamp',
    publisher: 'Vintage / Anchor Books',
    pubYear: '2019 (Revitalized 2023)',
    genre: 'Memoir',
    coverBgColor: '#282F24',
    imageUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80',
    challenge: 'A haunting, lyrical memoir originally published in 2019. Despite strong initial trade reviews, its release coincided with a global news cycle that buried its promotional cycle. By 2022, print sales had tapered to fewer than 30 copies per month, drifting toward out-of-print status.',
    strategySummary: 'Re-engineered the book\'s retail metadata and aesthetic presence: designing an interactive Reading Society Dossier, forging partnerships with 400+ community book clubs, creating an anniversary critical reappraisal essay series, and tapping into high-aesthetic literary social circles.',
    timeline: [
      {
        phase: 'Phase 01',
        timeframe: 'Months 1–2',
        phaseTitle: 'Comprehensive Metadata & Audience Forensic Audit',
        focus: 'Diagnosing why search algorithms and retail systems had ceased recommending the title.',
        tactics: [
          'Completely overhauled BISAC categories on Amazon, Ingram, and Barnes & Noble',
          'Extracted core thematic hooks: botanical history, maternal grief, and ecological sanctuary',
          'Audited backlist customer review keywords to pinpoint resonant emotional triggers'
        ],
        keyMilestones: [
          'Identified 3 under-indexed niche categories where book could achieve #1 visibility',
          'Restructured author bio and book description with contemporary comparison titles',
          'Gained publisher approval for updated trade paperback back-cover design'
        ],
        metricsSnapshot: [
          { label: 'Category Alignment', value: '3 New BISACs' },
          { label: 'Retail Optimization', value: '100% Completed' },
          { label: 'Search Lift', value: '+340% Impressions' }
        ]
      },
      {
        phase: 'Phase 02',
        timeframe: 'Months 3–5',
        phaseTitle: 'Reading Society Companion & Community Seeding',
        focus: 'Turning passive readers into enthusiastic grassroots community advocates.',
        tactics: [
          'Constructed a 20-page "Botanical Memoir Discussion & Field Companion"',
          'Personally contacted 120 independent bookstore book club coordinators',
          'Partnered with botanical gardens and horticultural societies for sponsored reading salons'
        ],
        keyMilestones: [
          'Adopted simultaneously by 42 regional library reading programs',
          'Goodreads "Currently Reading" activity climbed by 820% within 60 days',
          'Barnes & Noble selected title for "Hidden Gems of Contemporary Memoir" promotion'
        ],
        metricsSnapshot: [
          { label: 'Active Book Clubs', value: '140+ Groups' },
          { label: 'Goodreads Lift', value: '+820% Activity' },
          { label: 'B&N Store Feature', value: '220 Stores' }
        ]
      },
      {
        phase: 'Phase 03',
        timeframe: 'Months 6–9',
        phaseTitle: 'Critical Reappraisal & Literary Syndicate',
        focus: 'Positioning the book not as an "old title" but as an overlooked modern classic.',
        tactics: [
          'Pitched retrospective critical essays to Literary Hub, The Millions, and Paris Review Daily',
          'Organized anniversary virtual reading with two prominent contemporary essayists',
          'Seeded aesthetic copies to leading literary BookTok and Substack cultural curators'
        ],
        keyMilestones: [
          'Feature retrospective on LitHub: "The Overlooked Botanical Masterpiece You Need to Read"',
          'Viral literary Substack endorsement generated 4,800 direct paperback orders in 72 hours',
          'Publisher ordered an emergency 10,000-copy reprint to replenish depleted retail inventory'
        ],
        metricsSnapshot: [
          { label: 'Emergency Reprint', value: '10,000 Copies' },
          { label: 'Substack Conversion', value: '4,800 Orders' },
          { label: 'Amazon Memoir Rank', value: 'Top 20 Overall' }
        ]
      },
      {
        phase: 'Phase 04',
        timeframe: 'Months 10–18',
        phaseTitle: 'Evergreen Royalty Velocity & Academic Canonization',
        focus: 'Ensuring perpetual sales velocity without requiring ongoing advertising expenditure.',
        tactics: [
          'Submitted title for collegiate environmental humanities and memoir course syllabi',
          'Established automated discussion-kit digital download portal on author website',
          'Secured audiobook rights re-licensing deal with dedicated narration'
        ],
        keyMilestones: [
          'Sustained sales velocity of 1,200+ copies per month on autopilot',
          'Lifetime author royalties increased by 540% compared to pre-campaign trajectory',
          'Book now taught across 45 college literature and creative writing programs'
        ],
        metricsSnapshot: [
          { label: 'Royalty Velocity Lift', value: '540% Increase' },
          { label: 'Monthly Run Rate', value: '1,200+ Copies' },
          { label: 'Total Revitalized', value: '32,000 Units' }
        ]
      }
    ],
    audienceGrowthPillars: [
      {
        title: 'Niche Community Syndication',
        description: 'Connected the memoir to passionate botanical societies, horticultural foundations, and nature sanctuaries that adopted the book as an official institutional companion.',
        stat: '65 Society Adoptions'
      },
      {
        title: 'Reading Circle Discussion Kits',
        description: 'Engineered a lavish 20-page reading companion with horticultural plates, reflective prompts, and thematic menus that made the book a favorite among book clubs.',
        stat: '400+ Active Clubs'
      },
      {
        title: 'Retrospective Critical Reappraisal',
        description: 'Reframed the book through essays in LitHub and Substack cultural newsletters, treating the title as an overlooked modern classic rather than a forgotten backlist entry.',
        stat: 'Emergency 10k Reprint'
      },
      {
        title: 'Permanent Syllabus Integration',
        description: 'Secured adoption in environmental humanities and creative nonfiction seminars, generating reliable, automated annual bookstore orders every semester.',
        stat: '45 College Syllabi'
      }
    ],
    qualitativeOutcomes: {
      criticalPraise: [
        {
          publication: 'Literary Hub',
          quote: 'Claire Beauchamp\'s memoir is one of the most exquisite meditations on grief and botany published in the last decade. It demands to be read, treasured, and passed from hand to hand.'
        },
        {
          publication: 'The Millions',
          quote: 'A second life for a quiet masterpiece. Notes from the Sunken Garden proves that true literary brilliance eventually finds its rightful light.'
        },
        {
          publication: 'The Paris Review Daily',
          quote: 'Luminous and restorative. A book that alters how one looks at both soil and human memory.'
        }
      ],
      honorsAndAwards: [
        'Barnes & Noble Hidden Gems of Contemporary Memoir Selection',
        'Indie Next Paperback Renaissance Pick',
        'Over 400 Registered Reading Societies Actively Reading',
        'Emergency 10,000-copy publisher reprint after 4 years of dormancy'
      ],
      institutionalAdoptions: [
        'Environmental Humanities Curricula at 45 Universities',
        'Official Selection, New York Botanical Garden Literary Society',
        'Featured in 65 Regional Public Library Community Read Programs'
      ]
    },
    quantitativeImpact: [
      {
        label: 'Annual Sales Growth',
        value: '+540%',
        subtext: 'Sustained increase in net annual backlist author royalty disbursements'
      },
      {
        label: 'Revitalized Print Volume',
        value: '32,000+',
        subtext: 'Copies sold since initiating the backlist re-positioning campaign'
      },
      {
        label: 'Active Reading Clubs',
        value: '400+ Clubs',
        subtext: 'Registered book clubs actively utilizing the Discussion Dossier'
      },
      {
        label: 'Monthly Baseline',
        value: '1,200/mo',
        subtext: 'Reliable monthly paperback velocity with zero active paid advertising'
      }
    ],
    authorTestimonial: {
      quote: "Watching a book you poured five years of your life into fade into backlist obscurity is heartbreak every author knows. Elliot Shepherd understood the soul of my work and saw an audience that the original launch had missed completely. He breathed vibrant new life into Notes from the Sunken Garden—my book is now read by hundreds of book clubs and students across the country.",
      author: 'Claire Beauchamp',
      titleOrRole: 'Author of Notes from the Sunken Garden (Vintage / Anchor)'
    }
  }
];
