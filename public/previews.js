// Public previews only. Learning materials are served by /api/materials after server verification.
export const resources = [];
export const courses = [
  {
    "id": "safe-care",
    "title": "The foundations of safe dental care",
    "level": "Beginner",
    "category": "Infection prevention",
    "art": "shield",
    "duration": "2 videos",
    "publisher": "CDC · Curated learning collection",
    "ready": true,
    "tags": [
      "ppe",
      "safety",
      "beginner",
      "start",
      "new",
      "infection",
      "sterilization",
      "gloves",
      "assisting",
      "hygiene"
    ],
    "description": "Begin with two CDC demonstrations of personal protective equipment. Use the source guidance alongside the videos, then reflect on how the material relates to your supervised training.",
    "outcomes": [
      "Locate the CDC guidance for personal protective equipment.",
      "Review the published demonstrations of putting on and removing PPE.",
      "Identify questions to discuss with your instructor."
    ],
    "lessons": [
      {
        "title": "Putting on personal protective equipment",
        "type": "video"
      },
      {
        "title": "Removing personal protective equipment",
        "type": "video"
      },
      {
        "title": "Reflect & check your understanding",
        "type": "quiz"
      }
    ]
  },
  {
    "id": "oral-health",
    "title": "A wider perspective on oral health",
    "level": "Intermediate",
    "category": "Dental public health",
    "art": "teeth",
    "duration": "1 video",
    "publisher": "CDC · Curated learning collection",
    "ready": true,
    "tags": [
      "intermediate",
      "public",
      "health",
      "community",
      "patient",
      "prevention",
      "population"
    ],
    "description": "Explore the wider context of dental public health through the introduction to CDC’s Dental Public Health Lecture Series. Continue with the original lecture collection for more depth.",
    "outcomes": [
      "Explore the purpose of dental public health.",
      "Find the original CDC lecture series.",
      "Keep a personal reflection on the role of community-level learning."
    ],
    "lessons": [
      {
        "title": "Introduction to dental public health",
        "type": "video"
      },
      {
        "title": "Reflect & plan your next step",
        "type": "quiz"
      }
    ]
  },
  {
    "id": "dental-ai",
    "title": "Through the AI lens: dentistry & beyond",
    "level": "Advanced",
    "category": "Digital dentistry",
    "art": "scan",
    "duration": "1 lecture",
    "publisher": "CDC · Lecture by Dr. Teresa Dolan",
    "ready": true,
    "tags": [
      "advanced",
      "digital",
      "ai",
      "artificial",
      "technology",
      "future",
      "research",
      "data"
    ],
    "description": "Watch Dr. Teresa Dolan’s CDC lecture on artificial intelligence, augmented intelligence, and their role in dentistry and dental public health. The original lecture was published in 2024.",
    "outcomes": [
      "Explore the lecture’s introduction to AI and augmented intelligence.",
      "Reflect on the role of new technology in dental learning.",
      "Create a list of follow-up questions for further study."
    ],
    "lessons": [
      {
        "title": "AI, dentistry, and dental public health",
        "type": "video"
      },
      {
        "title": "Reflect on the lecture",
        "type": "quiz"
      }
    ]
  },
  {
    "id": "dental-anatomy",
    "title": "Dental anatomy, one tooth at a time",
    "level": "Beginner",
    "category": "Dental fundamentals",
    "art": "anatomy",
    "duration": "Course outline",
    "publisher": "Seo Dental Academy · Planned course",
    "ready": false,
    "tags": [
      "anatomy",
      "tooth",
      "teeth",
      "beginner",
      "naming",
      "numbering",
      "fundamentals"
    ],
    "description": "A proposed foundation course for your original teaching videos. The outline covers tooth terminology, identifying structures, and finding reliable references.",
    "outcomes": [
      "Tooth terminology and orientation",
      "Recognizing dental structures",
      "Review and terminology practice"
    ],
    "lessons": [
      {
        "title": "Welcome to dental anatomy",
        "type": "planned"
      },
      {
        "title": "Names, surfaces, and structures",
        "type": "planned"
      },
      {
        "title": "Review with your instructor",
        "type": "planned"
      }
    ]
  },
  {
    "id": "chairside",
    "title": "Build your confidence at the chair",
    "level": "Intermediate",
    "category": "Chairside assisting",
    "art": "tools",
    "duration": "Course outline",
    "publisher": "Seo Dental Academy · Planned course",
    "ready": false,
    "tags": [
      "intermediate",
      "assistant",
      "assisting",
      "chairside",
      "instruments",
      "workflow",
      "filling",
      "restorative"
    ],
    "description": "A proposed course for instructor-led chairside workflows. Your approved videos will turn this outline into a complete learning experience.",
    "outcomes": [
      "Preparing for supervised chairside learning",
      "Understanding instrument vocabulary",
      "Reflecting on team communication"
    ],
    "lessons": [
      {
        "title": "An introduction to the operatory",
        "type": "planned"
      },
      {
        "title": "Meet the instrument tray",
        "type": "planned"
      },
      {
        "title": "Working as a clinical team",
        "type": "planned"
      }
    ]
  },
  {
    "id": "digital-workflow",
    "title": "Discover the digital dental workflow",
    "level": "Advanced",
    "category": "Digital dentistry",
    "art": "implant",
    "duration": "Course outline",
    "publisher": "Seo Dental Academy · Planned course",
    "ready": false,
    "tags": [
      "advanced",
      "digital",
      "scan",
      "cad",
      "cam",
      "3d",
      "printing",
      "design",
      "implant",
      "surgery"
    ],
    "description": "A proposed advanced learning pathway covering the vocabulary of scanning, digital design, and production. Clinical demonstrations will require your approved lessons and instructor review.",
    "outcomes": [
      "An overview of scanning and digital records",
      "Introduction to design terminology",
      "Understanding the steps in a digital workflow"
    ],
    "lessons": [
      {
        "title": "From physical to digital",
        "type": "planned"
      },
      {
        "title": "Inside a digital design workflow",
        "type": "planned"
      },
      {
        "title": "A guided case walkthrough",
        "type": "planned"
      }
    ]
  }
];
export const levels=['Beginner','Intermediate','Advanced'];
export function filterCourses({level='All levels',query='',sort='recommended',onlyIds=null}={}){
 const q=query.trim().toLowerCase();let result=courses.filter(c=>(level==='All levels'||c.level===level)&&(!onlyIds||onlyIds.includes(c.id))&&(!q||[c.title,c.category,c.level,...c.tags].join(' ').toLowerCase().includes(q)));
 if(sort==='title')result.sort((a,b)=>a.title.localeCompare(b.title));if(sort==='level')result.sort((a,b)=>levels.indexOf(a.level)-levels.indexOf(b.level));if(sort==='available')result.sort((a,b)=>Number(b.ready)-Number(a.ready));return result;
}
export function recommend(query){
 const words=query.toLowerCase().match(/[a-z]+/g)||[];
 const matches=courses.map(c=>({course:c,score:words.reduce((n,w)=>n+(c.tags.includes(w)?3:0)+(w.length>3&&c.title.toLowerCase().includes(w)?1:0),0)})).filter(x=>x.score>0).sort((a,b)=>b.score-a.score||Number(b.course.ready)-Number(a.course.ready));
 if(!matches.length)return {message:'I couldn’t find a close match in this small catalog. Try “infection prevention,” “dental anatomy,” “chairside assisting,” or “AI in dentistry.” You can also browse all three levels.',ids:[]};
 const picks=matches.slice(0,3).map(x=>x.course);
 return {message:`Here ${picks.length===1?'is a useful starting point':'are a few starting points'} for your interest. ${picks[0].ready?'Start with the first video collection, sign in to access the videos and original sources.':'The first course is a planned outline. Sign in to explore the linked learning resources.'}\n\nThese suggestions come from catalog matching; live AI is not connected.`,ids:picks.map(c=>c.id)};
}
export function courseProgress(course,completed=[]){const actual=course.lessons.map((l,i)=>`${course.id}:${i}`).filter(id=>completed.includes(id));return course.ready?Math.round(actual.length/course.lessons.length*100):0;}
