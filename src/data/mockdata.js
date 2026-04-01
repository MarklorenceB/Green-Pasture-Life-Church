// src/data/mockData.js

import kidsministry from "../assets/kidsministry.jpg";
import youthministry from "../assets/youthministry.jpg";
import sundayservice from "../assets/sundayservice.jpg";
import mens from "../assets/mens.jpg";
import womens from "../assets/womens.jpg";
import worshipteamMinistry from "../assets/worshipteam-ministry.jpg";
import outreach from "../assets/outreach.jpg";
import caregroup from "../assets/caregroup.jpg";
import prayergathering from "../assets/prayergathering.jpg";

export const churchInfo = {
  name: "Green Pasture Life Church",
  tagline: "The Lord is my shepherd, I lack nothing.",
  email: "rueldelmonte4@gmail.com",
  phone: "049-557-5188",
  phone2: "0927-938-4441",
  address:
    "Sitio Ilaya, Barangay Santisimo Rosario, San Pablo City, Laguna 4000, Philippines",
  officeHours: "Tuesday – Friday: 9:00 AM – 4:00 PM",
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
      "Empowering men to grow in their relationship with God, lead their families with integrity, and serve the church and community through faith, discipleship, and brotherhood.",
    image: mens,
    fullContent:
      "The Men's Ministry helps men grow in spiritual leadership, accountability, and mentorship. Our desire is to equip men to become strong pillars in their homes, church, and workplace.\n\nWe also hold fellowship gatherings, service projects, and retreats that strengthen faith, build brotherhood, and encourage men to live Christ-centered lives.",
    coordinator: "Ptr. Federico Almario",
    meetingTime: "Every Thursday (twice a month) – 6:00 PM",
  },
  {
    id: 2,
    title: "Women's Ministry",
    description:
      "A sisterhood of grace, gathering for bible study, prayer, and mutual encouragement.",
    image: womens,
    fullContent:
      "The Women of Grace meet weekly for Bible study and maintain an active prayer chain. We host an annual retreat dedicated to renewal and fellowship. Our focus is to build deep, meaningful relationships centered on Christ.",
    coordinator: "Lorelie Mission",
    meetingTime: "Friday at 5:00 PM (Weekly)",
  },
  {
    id: 3,
    title: "Youth Ministry",
    description:
      "Guiding the next generation to know Christ personally, grow spiritually, and live out their faith with confidence.",
    image: youthministry,
    fullContent:
      "We offer age-appropriate worship and activities designed to help young people grow in their relationship with Christ. Our Youth Gathering meets twice a month on Friday, creating a safe and welcoming environment for fun, fellowship, and learning biblical truth while addressing real-life questions about faith in today's world.\n\nSafety, discipleship, and strong biblical foundation are our top priorities. We welcome all new members! Our ministry is driven by passion and a desire to serve God and others.\n\nPlease contact the coordinator for details on how to get involved.",
    coordinator: "Nikka Ulan and Rachelle Faye del Monte",
    meetingTime: "Sunday (during service) & Friday at 6:30 PM",
  },
  {
    id: 4,
    title: "Worship Team",
    description:
      "Leading the congregation into a life-changing encounter with God through heartfelt worship, blending contemporary and traditional music that glorifies His name.",
    image: worshipteamMinistry,
    fullContent:
      "The Worship Team is committed to leading the church into a meaningful encounter with God through music that honors Him. Through both contemporary and traditional songs, the team helps create an atmosphere of worship that prepares hearts to receive God's Word.\n\nRehearsals focus on developing musical skills as well as spiritual preparation, unity, and sensitivity to the leading of the Holy Spirit.\n\nIf you sing or play an instrument, we warmly invite you to audition and become part of a team passionate about serving God and His people.\n\nWe welcome all new members! Our ministry is driven by passion and a desire to serve. Please contact the coordinator for details on how to get involved.",
    coordinator: "Mar Louie Hernandez",
    meetingTime: "Saturday – 2:00 PM (Rehearsal, Weekly)",
  },
  {
    id: 5,
    title: "Outreach Ministry",
    description:
      "Serving the community through acts of love — feeding programs, meeting practical needs, establishing house churches, supporting missions, and bringing the light of Christ to our local communities.",
    image: outreach,
    fullContent:
      "The Outreach Ministry is committed to demonstrating God's love through practical service and evangelism. Through feeding programs, community support, and mission activities, we reach out to those in need and share the Gospel of Jesus Christ.\n\nIn line with our mission to love and care for people so they may experience God's salvation through Jesus Christ, we aim to bring hope, compassion, and spiritual transformation in our community and beyond.\n\nOur ministry helps establish house churches, supports mission work, and organizes evangelistic gatherings and crusades to bring more people into a growing relationship with Christ.\n\nWe welcome all new members! Our ministry is driven by compassion, faith, and a desire to serve God by serving others.\n\nPlease contact the coordinator for details on how to get involved.",
    coordinator: "Ruel Del Monte / Paul John Dorado",
    meetingTime: "2nd Sunday of the Month – 11:00 AM (Planning Meeting)",
  },
  {
    id: 6,
    title: "Connect Ministry",
    description:
      "Helping people build meaningful relationships and grow together in Christ through fellowship, care, and spiritual connection.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=500",
    fullContent:
      "The Connect Ministry helps people feel welcomed, valued, and connected in the church family. We believe that spiritual growth happens best in the context of relationships. Through fellowship, follow-up, and care, we help individuals and families become part of a Christ-centered community.\n\nIn line with our mission to love and care for people so they may experience God's salvation through Jesus Christ, the Connect Ministry ensures that no one walks alone in their journey of faith.\n\nWe assist new members, encourage participation in Care Groups, and help everyone find a place where they can belong, grow, and serve.\n\nWe welcome all who desire to connect, build friendships, and grow deeper in their relationship with Christ.\n\nPlease contact the coordinator for more information.",
    coordinator: "Cyrelle Pasco",
    meetingTime: "As scheduled / During church activities (Weekly)",
  },
  {
    id: 7,
    title: "Kids Ministry",
    description:
      "Helping children know Jesus, grow in faith, and experience God's love in a fun, safe, and nurturing environment.",
    image: kidsministry,
    fullContent:
      "The Kid's Ministry is dedicated to teaching children the Word of God in a way that is engaging, age-appropriate, and Christ-centered. Through Bible stories, songs, activities, and prayer, children learn about God's love and develop a strong spiritual foundation at an early age.\n\nIn line with our mission to love and care for people so they may experience God's salvation through Jesus Christ, we aim to guide children to know Jesus personally and grow in their faith as they mature.\n\nWe are committed to providing a safe, loving, and joyful environment where every child feels welcomed and valued.\n\nWe welcome all children and families! Our ministry is driven by love, passion, and a desire to help the next generation follow Christ.\n\nPlease contact the coordinator for more information.",
    coordinator: "Lalaine Dorado",
    meetingTime: "Sunday – during Worship Celebration (Weekly)",
  },
  {
    id: 8,
    title: "Servants on Service (SOS)",
    description:
      "Serving with Christ-like compassion, supporting missions, and bringing the transforming light of Christ to our community through meaningful acts of love.",
    image:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=500",
    fullContent:
      "Servants on Service (SOS) is committed to demonstrating God's love through intentional acts of service. We reach out to the homeless, help meet practical needs, and support mission work locally and beyond. Through community outreach activities, we aim to bring hope, encouragement, and the message of salvation in Jesus Christ.\n\nIn line with our mission to love and care for people so they may experience God's salvation through Jesus Christ, SOS provides opportunities for believers to share Christ's compassion through action.\n\nWhether through feeding programs, community support, or mission partnerships, our goal is to shine the light of Christ and impact lives for His glory.\n\nWe welcome all new members! Our ministry is driven by compassion, unity, and a desire to serve God by serving others.\n\nPlease contact the coordinator for details on how to get involved.",
    coordinator: "Michelle Rivera / Russell Floyd Del Monte",
    meetingTime: "4th Sunday of the Month – 6:00 PM (Planning Meeting)",
  },
];

export const events = [
  {
    id: 1,
    title: "Sunday Worship Service",
    date: "Every Sunday – 8:30 AM",
    category: "Worship",
    image: sundayservice,
    content:
      "Join us for a Spirit-filled time of worship as we honor God through praise, prayer, and the preaching of His Word. Be encouraged and strengthened through a life-changing message that helps you grow in your relationship with Jesus Christ.\n\nKid's Church is available to help kids learn about God in a way they can understand.\n\nEveryone is welcome. Come and worship with us!",
  },
  {
    id: 2,
    title: "Prayer Gathering",
    date: "Every Wednesday – 6:00 PM",
    category: "Prayer",
    image: prayergathering,
    content:
      "Join us as we come together in unity to seek God through prayer. Our Prayer Gathering is a time to lift up personal needs, families, the church, and the community before the Lord.\n\nWe believe prayer is powerful and essential in the life of every believer. Through prayer, we experience God's guidance, strength, and peace.\n\nTogether, we pursue God's heart and align ourselves with His will.",
  },
  {
    id: 3,
    title: "Care Group Gathering",
    date: "Every Sunday – 10:00 AM",
    category: "Fellowship",
    image: caregroup,
    content:
      "Care Groups provide a place to build meaningful relationships, study God's Word, and encourage one another in the Christian life. This is a time for sharing, prayer, and spiritual growth in a smaller group setting.\n\nIn Care Groups, we support one another and grow stronger in faith as a church family.\n\nEveryone is welcome to join and be connected.",
  },
  {
    id: 4,
    title: "Youth Gathering",
    date: "Friday (Twice a Month) – 5:00 PM",
    category: "Youth",
    image:
      "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=500",
    content:
      "Our Youth Gathering is a fun and meaningful time where young people grow in their faith, build strong friendships, and learn biblical truths that apply to everyday life.\n\nActivities include worship, group discussions, games, and fellowship in a safe and welcoming environment.\n\nAll youth are welcome!",
  },
];
