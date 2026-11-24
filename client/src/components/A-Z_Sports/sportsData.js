// ==========================
// Indoor Sports
// ==========================

import chess from "../../assets/images/A-Z-Sports/inchess.jpg";
import badminton from "../../assets/images/A-Z-Sports/inbadminton.jpg";
import boxing from "../../assets/images/A-Z-Sports/boxing.jpg";
import judo from "../../assets/images/A-Z-Sports/judo.jpg";
import tableTennis from "../../assets/images/A-Z-Sports/intabletennis.png";
import carrom from "../../assets/images/A-Z-Sports/incarrom.jpg";
import yoga from "../../assets/images/A-Z-Sports/yoga.jpg";
import handball from "../../assets/images/A-Z-Sports/handball.jpg";
import squash from "../../assets/images/A-Z-Sports/squash.jpg";
import ballBadminton from "../../assets/images/A-Z-Sports/ball-badminton.jpg";
import shooting from "../../assets/images/A-Z-Sports/shooting.jpg";
import bestPhysique from "../../assets/images/A-Z-Sports/best-physique.jpg";
import fencing from "../../assets/images/A-Z-Sports/fencing.jpg";
import gymnastics from "../../assets/images/A-Z-Sports/gymnastics.jpg";
import mallakhamb from "../../assets/images/A-Z-Sports/mallakhamb.jpg";
import powerLifting from "../../assets/images/A-Z-Sports/power-lifting.jpg";
import swimming from "../../assets/images/A-Z-Sports/swimming.jpg";
import taekwondo from "../../assets/images/A-Z-Sports/taekwondo.jpg";
import waterPolo from "../../assets/images/A-Z-Sports/water-polo.jpg";
import weightLifting from "../../assets/images/A-Z-Sports/weight-lifting.jpg";
import wrestling from "../../assets/images/A-Z-Sports/wrestling.jpg";

// ==========================
// Outdoor Sports
// ==========================

import football from "../../assets/images/A-Z-Sports/outfootball.jpg";
import basketball from "../../assets/images/A-Z-Sports/outbasketball.jpg";
import khoKho from "../../assets/images/A-Z-Sports/outkhokho.jpg";
import tennis from "../../assets/images/A-Z-Sports/outtennis.webp";
import tugOfWar from "../../assets/images/A-Z-Sports/outtug.jpg";
import kabaddi from "../../assets/images/A-Z-Sports/outkabaddi.jpg";
import volleyball from "../../assets/images/A-Z-Sports/outvolleyball.webp";
import baseball from "../../assets/images/A-Z-Sports/outbaseball.jpg";
import softball from "../../assets/images/A-Z-Sports/outsoftball.jpg";
import athletics from "../../assets/images/A-Z-Sports/athletics.jpg";
import cricket from "../../assets/images/A-Z-Sports/cricket.jpg";
import crossCountry from "../../assets/images/A-Z-Sports/cross-country.jpg";
import halfMarathon from "../../assets/images/A-Z-Sports/half-marathon.jpg";
import archery from "../../assets/images/A-Z-Sports/archery.jpg";
import cycling from "../../assets/images/A-Z-Sports/cycling.jpg";
import hockey from "../../assets/images/A-Z-Sports/hockey.jpg";
import rugby from "../../assets/images/A-Z-Sports/rugby.jpg";
const sportsData = [

{
    id: "chess",
    name: "Chess",
    image: chess,
    description:
        "Chess is a strategic indoor game that develops logical thinking, concentration, patience, and problem-solving skills. It improves decision-making abilities and mental agility while encouraging healthy competition among students.",
    campus: "Indoor Sports Hall",
    type: "Individual",
},

{
    id: "badminton",
    name: "Badminton",
    image: badminton,
    description:
        "Badminton is a fast-paced racket sport that improves agility, reflexes, coordination, and stamina. It enhances concentration, quick decision-making, and teamwork, making it one of the most popular indoor sports.",
    campus: "Badminton Court",
    type: "Team",
},

{
    id: "football",
    name: "Football",
    image: football,
    description:
        "Football is an exciting team sport that develops endurance, speed, coordination, and leadership skills. It promotes discipline, teamwork, communication, and strategic thinking during competitive matches.",
    campus: "Football Ground",
    type: "Team",
},

{
    id: "basketball",
    name: "Basketball",
    image: basketball,
    description:
        "Basketball is a high-energy game that enhances agility, balance, coordination, and teamwork. It encourages quick decision-making, communication, and physical fitness while improving overall confidence.",
    campus: "Basketball Court",
    type: "Team",
},

{
    id: "kho-kho",
    name: "Kho Kho",
    image: khoKho,
    description:
        "Kho Kho is a traditional Indian sport that improves speed, reflexes, flexibility, and stamina. It teaches teamwork, planning, and quick movements while promoting physical fitness among students.",
    campus: "Kho Kho Ground",
    type: "Team",
},

{
    id: "tennis",
    name: "Tennis",
    image: tennis,
    description:
        "Tennis is a racket sport that improves balance, hand-eye coordination, agility, and concentration. It builds endurance and discipline while enhancing both physical and mental strength.",
    campus: "Tennis Court",
    type: "Individual",
},

{
    id: "tug-of-war",
    name: "Tug of War",
    image: tugOfWar,
    description:
        "Tug of War is a strength-based team sport that develops power, coordination, teamwork, and determination. It encourages unity and communication while testing the physical endurance of participants.",
    campus: "Sports Ground",
    type: "Team",
},

{
    id: "kabaddi",
    name: "Kabaddi",
    image: kabaddi,
    description:
        "Kabaddi is a traditional contact sport that builds strength, agility, stamina, and quick reflexes. It improves teamwork, strategic planning, and confidence while promoting physical fitness.",
    campus: "Kabaddi Ground",
    type: "Team",
},

{
    id: "volleyball",
    name: "Volleyball",
    image: volleyball,
    description:
        "Volleyball is a dynamic team sport that improves coordination, jumping ability, communication, and teamwork. It enhances reflexes and fitness while encouraging cooperation among players.",
    campus: "Volleyball Court",
    type: "Team",
},

{
    id: "boxing",
    name: "Boxing",
    image: boxing,
    description:
        "Boxing develops strength, endurance, discipline, and self-confidence. It improves reflexes, balance, and mental focus while teaching respect, control, and determination.",
    campus: "Mini Gymnasium",
    type: "Individual",
},

{
    id: "judo",
    name: "Judo",
    image: judo,
    description:
        "Judo is a martial art that develops strength, discipline, flexibility, and self-defense skills. It improves balance, confidence, and mental focus while encouraging respect and sportsmanship.",
    campus: "Mini Gymnasium",
    type: "Individual",
},

{
    id: "table-tennis",
    name: "Table Tennis",
    image: tableTennis,
    description:
        "Table Tennis is a fast-paced indoor sport that enhances reflexes, concentration, hand-eye coordination, and precision. It also improves strategic thinking and reaction time.",
    campus: "Table Tennis Hall",
    type: "Individual",
},

{
    id: "carrom",
    name: "Carrom",
    image: carrom,
    description:
        "Carrom is an indoor board game that improves concentration, accuracy, and patience. It develops fine motor skills, strategic thinking, and decision-making in a fun and competitive environment.",
    campus: "Indoor Sports Hall",
    type: "Individual",
},

{
    id: "yoga",
    name: "Yogasanas",
    image: yoga,
    description:
        "Yogasanas improve flexibility, balance, posture, and overall physical well-being. Regular practice enhances mental peace, concentration, and emotional stability while promoting a healthy lifestyle.",
    campus: "Yoga Hall",
    type: "Individual",
},

{
    id: "baseball",
    name: "Baseball",
    image: baseball,
    description:
        "Baseball develops coordination, teamwork, speed, and quick decision-making skills. It encourages discipline, communication, and physical fitness through competitive gameplay.",
    campus: "Baseball Ground",
    type: "Team",
},

{
    id: "handball",
    name: "Handball",
    image: handball,
    description:
        "Handball is a fast and energetic team sport that builds agility, endurance, coordination, and teamwork. It improves passing, shooting accuracy, and strategic play under pressure.",
    campus: "Handball Court",
    type: "Team",
},

{
    id: "squash",
    name: "Squash",
    image: squash,
    description:
        "Squash is a high-intensity racket sport that improves cardiovascular fitness, speed, agility, and concentration. It enhances reflexes and develops excellent hand-eye coordination.",
    campus: "Squash Court",
    type: "Individual",
},

{
    id: "softball",
    name: "Softball",
    image: softball,
    description:
        "Softball promotes teamwork, coordination, communication, and physical fitness. It develops batting, catching, and throwing skills while encouraging sportsmanship and discipline.",
    campus: "Softball Ground",
    type: "Team",
},

{
    id: "athletics",
    name: "Athletics",
    image: athletics,
    description:
        "Athletics includes running, jumping, and throwing events that improve speed, endurance, strength, and flexibility. It develops determination, discipline, and overall physical fitness.",
    campus: "Athletic Track",
    type: "Individual",
},

{
    id: "ball-badminton",
    name: "Ball Badminton",
    image: ballBadminton,
    description:
        "Ball Badminton is a traditional racket sport that improves coordination, agility, stamina, and teamwork. It develops quick reflexes and strategic thinking while promoting physical fitness.",
    campus: "Ball Badminton Court",
    type: "Team",
},

{
    id: "cricket",
    name: "Cricket",
    image: cricket,
    description:
        "Cricket is one of the most popular team sports that develops batting, bowling, and fielding skills. It improves concentration, teamwork, leadership, and strategic thinking while promoting sportsmanship.",
    campus: "Cricket Ground",
    type: "Team",
},

{
    id: "cross-country",
    name: "Cross Country",
    image: crossCountry,
    description:
        "Cross Country is a long-distance running sport that builds endurance, stamina, and mental strength. It encourages perseverance, self-discipline, and physical fitness through outdoor competition.",
    campus: "Athletic Track",
    type: "Individual",
},

{
    id: "half-marathon",
    name: "Half Marathon",
    image: halfMarathon,
    description:
        "The Half Marathon is an endurance event that develops cardiovascular fitness, determination, and mental resilience. It improves stamina, discipline, and overall health through long-distance running.",
    campus: "Athletic Track",
    type: "Individual",
},

{
    id: "shooting",
    name: "Shooting",
    image: shooting,
    description:
        "Shooting is a precision sport that enhances concentration, patience, accuracy, and mental control. It requires steady focus, discipline, and consistent practice for excellent performance.",
    campus: "Shooting Range",
    type: "Individual",
},

{
    id: "archery",
    name: "Archery",
    image: archery,
    description:
        "Archery is a precision sport that improves focus, balance, accuracy, and self-control. It develops patience, discipline, and confidence while strengthening upper body coordination.",
    campus: "Archery Range",
    type: "Individual",
},

{
    id: "best-physique",
    name: "Best Physique",
    image: bestPhysique,
    description:
        "Best Physique encourages students to maintain physical fitness, muscular strength, and overall body conditioning. It promotes discipline, dedication, healthy nutrition, and confidence through regular training.",
    campus: "Mini Gymnasium",
    type: "Individual",
},

{
    id: "cycling",
    name: "Cycling",
    image: cycling,
    description:
        "Cycling improves cardiovascular endurance, leg strength, balance, and stamina. It promotes environmental awareness, physical fitness, and determination while encouraging an active lifestyle.",
    campus: "Cycling Track",
    type: "Individual",
},

{
    id: "fencing",
    name: "Fencing",
    image: fencing,
    description:
        "Fencing is a combat sport that develops agility, coordination, quick reflexes, and tactical thinking. It enhances concentration, discipline, and confidence while improving reaction speed.",
    campus: "Indoor Sports Hall",
    type: "Individual",
},

{
    id: "gymnastics",
    name: "Gymnastics",
    image: gymnastics,
    description:
        "Gymnastics improves flexibility, balance, strength, and body coordination. It enhances confidence, discipline, and physical control while encouraging graceful movement and fitness.",
    campus: "Mini Gymnasium",
    type: "Individual",
},

{
    id: "hockey",
    name: "Hockey",
    image: hockey,
    description:
        "Hockey is a fast-paced team sport that develops speed, coordination, teamwork, and endurance. It enhances stick-handling skills, strategic thinking, and communication on the field.",
    campus: "Hockey Ground",
    type: "Team",
},

{
    id: "mallakhamb",
    name: "Mallakhamb",
    image: mallakhamb,
    description:
        "Mallakhamb is a traditional Indian sport that combines gymnastics, yoga, and strength training. It improves flexibility, balance, concentration, and body control while promoting courage and discipline.",
    campus: "Mini Gymnasium",
    type: "Individual",
},

{
    id: "power-lifting",
    name: "Power Lifting",
    image: powerLifting,
    description:
        "Power Lifting is a strength sport that focuses on building muscular power, endurance, and determination. It develops discipline, confidence, and proper lifting techniques while improving overall fitness.",
    campus: "Gymnasium",
    type: "Individual",
},

{
    id: "rugby",
    name: "Rugby",
    image: rugby,
    description:
        "Rugby is a physically demanding team sport that builds strength, speed, endurance, and teamwork. It develops leadership, communication, and strategic thinking while encouraging sportsmanship.",
    campus: "Rugby Ground",
    type: "Team",
},

{
    id: "swimming",
    name: "Swimming",
    image: swimming,
    description:
        "Swimming is a full-body sport that improves cardiovascular fitness, flexibility, and muscular strength. It enhances endurance, confidence, and overall physical well-being while teaching an essential life skill.",
    campus: "Swimming Pool",
    type: "Individual",
},

{
    id: "taekwondo",
    name: "Taekwondo",
    image: taekwondo,
    description:
        "Taekwondo is a Korean martial art that develops self-defense skills, flexibility, discipline, and confidence. It improves balance, agility, and mental focus while promoting respect and perseverance.",
    campus: "Mini Gymnasium",
    type: "Individual",
},

{
    id: "water-polo",
    name: "Water Polo",
    image: waterPolo,
    description:
        "Water Polo is a competitive aquatic team sport that improves swimming ability, endurance, teamwork, and quick decision-making. It combines physical fitness with tactical gameplay in the water.",
    campus: "Swimming Pool",
    type: "Team",
},

{
    id: "weight-lifting",
    name: "Weight Lifting",
    image: weightLifting,
    description:
        "Weight Lifting develops muscular strength, power, coordination, and discipline. It encourages proper training techniques, perseverance, and physical fitness while improving athletic performance.",
    campus: "Gymnasium",
    type: "Individual",
},

{
    id: "wrestling",
    name: "Wrestling",
    image: wrestling,
    description:
        "Wrestling is a traditional combat sport that builds strength, endurance, agility, and self-confidence. It improves balance, discipline, and mental toughness while teaching respect and determination.",
    campus: "Wrestling Arena",
    type: "Individual",
},

];

export default sportsData;