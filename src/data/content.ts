export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  badge?: string;
  typicalEstimate: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  date: string;
  content: string;
  propertyType: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const BUSINESS_INFO = {
  name: "CLIMBEX SERVICES",
  tagline: "Shine Above The Rest",
  category: "Window cleaning service (residential, commercial, and high-rise)",
  address: "19 Bathurst St, Toronto, ON M5V 0N2, Canada",
  phone: "+1 647-510-0882",
  phoneRaw: "+16475100882",
  email: "info@climbexservices.com",
  rating: 5.0,
  reviewCount: 6,
  serviceArea: "Toronto & Greater Toronto Area (GTA)",
  insuranceCoverage: "$5,000,000 Commercial Liability & WSIB Covered",
  hours: {
    weekdays: "Monday – Saturday: 7:00 AM – 7:00 PM",
    sunday: "Sunday: 8:00 AM – 5:00 PM",
    emergency: "24/7 Emergency Storm & Post-Construction Response"
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: "residential",
    title: "Residential Window Cleaning",
    shortDesc: "Sparkling streak-free interior & exterior glass for single-family homes, estates, and townhouses.",
    fullDesc: "Complete multi-story residential window washing using pure deionized water, delicate sill wipe-downs, and screen dusting that floods your living spaces with natural light.",
    iconName: "Home",
    badge: "Popular",
    typicalEstimate: "From $189"
  },
  {
    id: "commercial",
    title: "Commercial & Storefront Cleaning",
    shortDesc: "Pristine glass for retail stores, restaurants, showrooms, and corporate low-rise offices.",
    fullDesc: "First impressions define your brand. We provide flexible weekly, bi-weekly, or monthly cleaning routines scheduled during off-peak hours so your business shines every morning.",
    iconName: "Building2",
    badge: "Flexible Contracts",
    typicalEstimate: "From $149 / visit"
  },
  {
    id: "high-rise",
    title: "High-Rise & Condo Window Cleaning",
    shortDesc: "Certified abseil rope access & swing-stage cleaning for Toronto condo towers and skyscrapers.",
    fullDesc: "IRATA & SPRAT certified technicians specialized in complex architectural angles, bosun chairs, and extreme heights. Backed by rigorous safety planning and full WSIB compliance.",
    iconName: "Maximize2",
    badge: "IRATA Certified",
    typicalEstimate: "Custom Building Quote"
  },
  {
    id: "interior-exterior",
    title: "Interior & Exterior Glass Cleaning",
    shortDesc: "Double-sided glass treatment including skylights, sunrooms, mirrors, and glass balustrades.",
    fullDesc: "We protect indoor floors with drop cloths and shoe covers while polishing interior glass, interior partitions, glass railings, and hard-to-reach conservatory ceilings.",
    iconName: "Sparkles",
    typicalEstimate: "From $220"
  },
  {
    id: "screen-track",
    title: "Screen & Track Deep Cleaning",
    shortDesc: "Ultrasonic & microfiber cleaning of jammed sliding tracks, bug screens, and frame sills.",
    fullDesc: "Eliminate years of trapped pollen, insect debris, and black street dust. We restore smooth slider gliding and restore mesh transparency for healthy airflow.",
    iconName: "Sliders",
    typicalEstimate: "Add-on from $49"
  },
  {
    id: "post-construction",
    title: "Post-Construction Window Cleaning",
    shortDesc: "Safe removal of silicone caulk, paint overspray, sticker adhesive, and masonry dust.",
    fullDesc: "Never risk scratched glass. Our specialists utilize specialized non-scratch bronze wool, chemical neutralizers, and razor techniques to prepare brand-new properties for handover.",
    iconName: "Hammer",
    badge: "Heavy Duty",
    typicalEstimate: "Custom Estimate"
  },
  {
    id: "gutter-cleaning",
    title: "Gutter & Downspout Cleaning",
    shortDesc: "Debris removal, gutter flushing, and water drainage inspection to protect your foundation.",
    fullDesc: "Prevent costly water damage and roof rot. We hand-clear leaves, moss, and roof sludge, followed by pressure-tested downspout flushes to ensure free-flowing gutters.",
    iconName: "Droplets",
    typicalEstimate: "From $160"
  },
  {
    id: "pressure-washing",
    title: "Pressure & Soft Washing",
    shortDesc: "Revitalize concrete walkways, stone patios, driveways, siding, and building facades.",
    fullDesc: "Combine window cleaning with exterior surface restoration. We eliminate algae, oil stains, and road grime using eco-friendly detergents and calibrated high-pressure power washing.",
    iconName: "Flame",
    badge: "Full Exterior",
    typicalEstimate: "From $199"
  }
];

export const TRUST_STATS = [
  { value: 5.0, suffix: "★", label: "Google Rating", sublabel: "Based on 6 Verified Reviews" },
  { value: 100, suffix: "%", label: "Streak-Free Guarantee", sublabel: "Free Touch-ups if Not 100% Satisfied" },
  { value: 10, suffix: "+", label: "Years Experience", sublabel: "Rope Access & Glass Specialists" },
  { value: 1200, suffix: "+", label: "Panes & Towers Cleaned", sublabel: "Across Toronto & the Greater GTA" }
];

export const WHY_CHOOSE_US = [
  {
    id: "insurance",
    title: "Experienced & Fully Insured",
    description: "$5,000,000 commercial general liability insurance and active WSIB coverage. Your property and peace of mind are completely safeguarded.",
    icon: "ShieldCheck"
  },
  {
    id: "safety",
    title: "Safe High-Rise Rope Access",
    description: "Certified IRATA & SPRAT technicians with dual-rope redundancy systems engineered specifically for Toronto's gusty high-rise wind corridors.",
    icon: "Award"
  },
  {
    id: "pure-water",
    title: "Pure Water Streak-Free Tech",
    description: "4-stage reverse osmosis deionized water filtration pulls dirt without sticky detergents, drying 100% spotless with zero chemical residue.",
    icon: "Sparkles"
  },
  {
    id: "reliability",
    title: "On-Time Service & Reliability",
    description: "We value your schedule. Dedicated arrival windows, real-time SMS arrival alerts, and uniformed technicians who respect your property.",
    icon: "Clock"
  },
  {
    id: "pricing",
    title: "Affordable, Transparent Pricing",
    description: "Clear, upfront written quotes with no surprise line items or post-job fees. You always know exactly what you are paying before work starts.",
    icon: "DollarSign"
  },
  {
    id: "satisfaction",
    title: "100% Satisfaction Guarantee",
    description: "Our job isn't finished until you are completely thrilled. If you spot any imperfection within 48 hours, we return and reclean it at zero cost.",
    icon: "CheckCircle2"
  }
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Request Your Free Quote",
    description: "Fill out our easy 60-second online quote form or call +1 647-510-0882. We provide detailed pricing within 1 hour."
  },
  {
    step: "02",
    title: "Pick Your Ideal Schedule",
    description: "Choose a date and time that fits your lifestyle or building access hours. We coordinate condo board approvals when required."
  },
  {
    step: "03",
    title: "Certified Masterful Cleaning",
    description: "Our uniformed team arrives on time with commercial-grade purified water equipment, safety harnesses, and drop cloths."
  },
  {
    step: "04",
    title: "Enjoy the Crystal Shine",
    description: "Perform a final walkthrough with our lead technician and enjoy pristine panoramic Toronto views backed by our streak-free promise."
  }
];

export const TESTIMONIALS: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Marcus Vance",
    role: "Property Manager",
    location: "Downtown Toronto (King West)",
    rating: 5,
    date: "2 weeks ago",
    propertyType: "Commercial & Condo Board",
    content: "CLIMBEX did an extraordinary job on our 28-storey residential tower. Their high-rise rope crew handled every safety protocol seamlessly, completed the job ahead of schedule, and the glass looks immaculate. Will definitely retain them for our annual contract."
  },
  {
    id: "rev-2",
    name: "Elena Rostova",
    role: "Homeowner",
    location: "The Beaches, Toronto",
    rating: 5,
    date: "1 month ago",
    propertyType: "3-Story Residential Home",
    content: "We have large architectural floor-to-ceiling windows that haven't been cleaned in over two years. The Climbex crew made them look brand new! They cleaned the screens and tracks thoroughly as well. Zero streaks, super polite, and very reasonably priced."
  },
  {
    id: "rev-3",
    name: "David Chen",
    role: "Retail Director",
    location: "Yorkville, Toronto",
    rating: 5,
    date: "1 month ago",
    propertyType: "Luxury Boutique Storefront",
    content: "Our storefront glass has to be spotless every morning for our luxury displays. CLIMBEX provides prompt early morning window washing with zero disruption to our retail clients. The shine and clarity are remarkable."
  },
  {
    id: "rev-4",
    name: "Sarah Jenkins",
    role: "Condo Owner",
    location: "Waterfront / Harbourfront",
    rating: 5,
    date: "2 months ago",
    propertyType: "Lakefront Penthouse",
    content: "The difference is night and day! Lake Ontario winds cause severe salt and water spotting on our balcony glass. CLIMBEX removed all the mineral buildup without a single scratch. Shine Above The Rest is truly accurate!"
  },
  {
    id: "rev-5",
    name: "Robert M.",
    role: "General Contractor",
    location: "North York, ON",
    rating: 5,
    date: "3 months ago",
    propertyType: "Post-Construction Custom Build",
    content: "We hired CLIMBEX for post-construction window cleaning on a multi-million dollar custom build. They carefully removed silicone and paint overspray from fragile low-E glass without any scratching. True professionals."
  },
  {
    id: "rev-6",
    name: "Tanya K.",
    role: "Restaurant Owner",
    location: "Queen St West, Toronto",
    rating: 5,
    date: "4 months ago",
    propertyType: "Restaurant & Patio Glass",
    content: "Outstanding customer service and fair pricing. The technicians arrived on time, wore protective booties indoors, and left our dining room and patio enclosures sparkling clean. Best window cleaning service in Toronto!"
  }
];

export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "How much does professional window cleaning cost in Toronto & GTA?",
    category: "Pricing",
    answer: "Residential exterior window cleaning generally starts from $189 for single-family homes and townhouses, depending on pane count, stories, and accessibility. Commercial storefronts start from $149 per visit. High-rise and condo buildings receive tailored quotes based on drop count, rigging architecture, and glass surface area. We provide free, transparent, no-obligation written estimates."
  },
  {
    id: "faq-2",
    question: "How often should windows be cleaned in Toronto?",
    category: "Frequency",
    answer: "For residential homes in Toronto, we recommend twice a year (spring to clear winter road salt/sand, and autumn before the frost). Commercial storefronts and restaurants typically benefit from bi-weekly or monthly washes to maintain curb appeal. High-rise residential condo towers generally schedule biannual or annual spring/fall drops."
  },
  {
    id: "faq-3",
    question: "What safety qualifications and insurance do your high-rise cleaners hold?",
    category: "Safety & Insurance",
    answer: "Every member of our high-rise team holds recognized IRATA (Industrial Rope Access Trade Association) or SPRAT certifications with working-at-heights training. CLIMBEX SERVICES maintains $5,000,000 in commercial general liability insurance and is in good standing with the Ontario Workplace Safety and Insurance Board (WSIB). Certificates of insurance are readily provided to property managers and condo boards."
  },
  {
    id: "faq-4",
    question: "What technology do you use to ensure a streak-free clean?",
    category: "Process",
    answer: "We utilize commercial 4-stage reverse osmosis and deionized pure water filtration systems paired with carbon-fiber water-fed poles. By stripping minerals and total dissolved solids (TDS < 5 ppm) from the water, the glass dries naturally without water spotting, haze, or sticky detergent films that attract dust."
  },
  {
    id: "faq-5",
    question: "What happens if it rains on my scheduled window cleaning day?",
    category: "Weather",
    answer: "Light rain actually does not dirty clean glass—it is airborne dirt and mineral dust that cause spots. However, in the event of high winds (over 40 km/h for high-rise rope work), thunderstorms, or heavy downpours that jeopardize technician safety or quality, we will notify you promptly and reschedule your appointment to the next available dry slot at no extra charge."
  },
  {
    id: "faq-6",
    question: "Do I need to be home or on-site during the cleaning appointment?",
    category: "Scheduling",
    answer: "For exterior-only window cleaning, you do not need to be home as long as exterior access gates are unlocked, pets are kept indoors, and exterior water spigots are accessible. For interior cleaning or post-construction details, someone over 18 should be present to grant entry. We provide before-and-after photographic verification upon request."
  }
];

export const SERVICE_AREAS = [
  { name: "Downtown Toronto", highlight: true },
  { name: "Yorkville & Midtown", highlight: true },
  { name: "Waterfront & Harbourfront", highlight: true },
  { name: "The Beaches & Leslieville", highlight: false },
  { name: "North York", highlight: true },
  { name: "Etobicoke", highlight: false },
  { name: "Scarborough", highlight: false },
  { name: "Mississauga", highlight: true },
  { name: "Oakville", highlight: false },
  { name: "Vaughan", highlight: true },
  { name: "Markham", highlight: false },
  { name: "Richmond Hill", highlight: false }
];
