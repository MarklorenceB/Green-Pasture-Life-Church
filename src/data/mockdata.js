// src/data/mockData.js

export const churchInfo = {
  name: "Green Pasture Life Church",
  tagline: "Loving God, Loving People, Serving the World.",
  email: "sample@gmail.com",
  phone: "(555) 123-4567",
  address: "Bgry, Santisimo Rosario, City of San Pablo, Laguna Philippines",
  socials: {
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
    instagram: "https://instagram.com",
  },
};

export const ministries = [
  {
    id: 1,
    title: "Men's Ministry",
    description:
      "Empowering men to lead their families and serve the community through faith and brotherhood.",
    image:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&q=80&w=500",
    // ⬇️ REQUIRED FIELDS FOR DYNAMIC PAGE ⬇️
    fullContent:
      "The Men's Ministry hosts monthly breakfast meetings focusing on spiritual leadership, accountability, and mentorship. Our goal is to equip men to be strong pillars in their homes, church, and marketplace. We also organize annual service projects and retreats.",
    coordinator: "Pastor Ruel",
    meetingTime: "Every 3rd Saturday at 8:00 AM",
  },
  {
    id: 2,
    title: "Women's Ministry",
    description:
      "A sisterhood of grace, gathering for bible study, prayer, and mutual encouragement.",
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=500",
    // ⬇️ REQUIRED FIELDS FOR DYNAMIC PAGE ⬇️
    fullContent:
      "The Women of Grace meet weekly for Bible study and maintain an active prayer chain. We host an annual retreat dedicated to renewal and fellowship. Our focus is to build deep, meaningful relationships centered on Christ.",
    coordinator: "Sister Jane Smith",
    meetingTime: "Tuesday evenings at 7:00 PM",
  },
  {
    id: 3,
    title: "Youth",
    description:
      "Raising the next generation with fun, engaging, and biblical teaching for all ages.",
    image:
      "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=500",
    // ⬇️ REQUIRED FIELDS FOR DYNAMIC PAGE ⬇️
    fullContent:
      "We offer age-appropriate worship and activities every Sunday. Our Youth Group meets weekly for fun, fellowship, and tackling tough questions about faith in the modern world. Safety and biblical truth are our top priorities.",
    coordinator: "Mark & Sarah Wilson",
    meetingTime: "Sunday (during service) & Friday at 6:30 PM",
  },
  {
    id: 4,
    title: "Worship Team",
    description:
      "Leading the congregation into the presence of God through contemporary and traditional music.",
    image:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80&w=500",
    // ⬇️ REQUIRED FIELDS FOR DYNAMIC PAGE ⬇️
    fullContent:
      "Our Worship team provides music for all services, striving for excellence and reverence. If you play an instrument or sing, we invite you to audition. Rehearsals focus on musical skill and spiritual preparation.",
    coordinator: "David Chung",
    meetingTime: "Thursday rehearsals at 7:30 PM",
  },
  {
    id: 5,
    title: "Outreach",
    description:
      "Serving the homeless, supporting missions, and bringing light to our local community.",
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=500",
    // ⬇️ REQUIRED FIELDS FOR DYNAMIC PAGE ⬇️
    fullContent:
      "The Outreach Ministry coordinates efforts both locally and globally. We run a weekly food bank, participate in city clean-up days, and support missionaries overseas. Join us as we demonstrate God's love through practical action.",
    coordinator: "The Outreach Team",
    meetingTime: "Monthly planning meeting, 1st Tuesday at 6:00 PM",
  },

  {
    id: 6,
    title: "Kids",
    description:
      "Serving the homeless, supporting missions, and bringing light to our local community.",
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=500",
    // ⬇️ REQUIRED FIELDS FOR DYNAMIC PAGE ⬇️
    fullContent:
      "The Outreach Ministry coordinates efforts both locally and globally. We run a weekly food bank, participate in city clean-up days, and support missionaries overseas. Join us as we demonstrate God's love through practical action.",
    coordinator: "The Outreach Team",
    meetingTime: "Monthly planning meeting, 1st Tuesday at 6:00 PM",
  },
  {
    id: 7,
    title: "Servants on Service (SOS)",
    description:
      "Serving the homeless, supporting missions, and bringing light to our local community.",
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=500",
    // ⬇️ REQUIRED FIELDS FOR DYNAMIC PAGE ⬇️
    fullContent:
      "The Outreach Ministry coordinates efforts both locally and globally. We run a weekly food bank, participate in city clean-up days, and support missionaries overseas. Join us as we demonstrate God's love through practical action.",
    coordinator: "The Outreach Team",
    meetingTime: "Monthly planning meeting, 1st Tuesday at 6:00 PM",
  },
];

export const events = [
  {
    id: 1,
    title: "Sunday Worship Service",
    date: "Every Sunday, 10:00 AM",
    category: "Worship",
    image:
      "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=800",
    content:
      "Join us for a powerful time of worship and a life-changing message from Pastor Ruel. Children's church is provided.",
  },
  {
    id: 2,
    title: "Youth Service",
    date: "October 15, 2023",
    category: "Community",
    image:
      "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=500",
    content:
      "A fun day at the park for the whole family! Free food, games for kids, and great fellowship. Bring a lawn chair.",
  },
  {
    id: 3,
    title: "Night of Prayer",
    date: "November 1, 2023",
    category: "Spiritual Growth",
    image:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80&w=500",
    content:
      "Come aside for an evening of deep prayer and intercession for our city and families.",
  },
];
