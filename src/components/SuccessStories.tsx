const stories = [
  { name: "Abdul", degree: "Master in Data Science", university: "University of London", review: "Joined the Data Engineering course and got placed at Amazon with fantastic support throughout.", rating: 4.8 },
  { name: "Adithyan", degree: "Master in Cloud Computing", university: "King's College London", review: "Extremely supportive team helped me secure a position at Microsoft in Cloud Computing.", rating: 4.7 },
  { name: "Arjun Kumar", degree: "Master in AI & ML", university: "Imperial College London", review: "Hands-on training and placement assistance helped me land a Machine Learning role at Google.", rating: 4.9 },
  { name: "Priya Sharma", degree: "MSc in Data Analytics", university: "University of Edinburgh", review: "Comprehensive program prepared me fully, and I got placed at Facebook successfully.", rating: 4.8 },
  { name: "Rohan Verma", degree: "Master in AI", university: "University of Oxford", review: "Amazing instructors ensured a seamless learning experience, resulting in a role at Apple.", rating: 4.9 },
  { name: "Sophia Turner", degree: "MSc in Cloud Computing", university: "University of Cambridge", review: "The practical learning and support system were outstanding, helping me get placed at IBM.", rating: 4.8 },
  { name: "Vikram Singh", degree: "Master in Data Engineering", university: "King's College London", review: "Excellent mentorship and practical assignments helped me get placed at Tesla.", rating: 4.8 },
  { name: "Ananya Roy", degree: "MSc in Machine Learning", university: "Imperial College London", review: "Supportive environment and detailed feedback enabled my job at Netflix.", rating: 4.9 },
  { name: "Karan Mehta", degree: "Master in AI & Data Science", university: "University of London", review: "Career guidance gave me confidence to get placed at Amazon successfully.", rating: 4.8 },
  { name: "Olivia Bennett", degree: "MSc in Cyber Security", university: "King's College London", review: "Strong hands-on sessions and mentoring helped me land a role at Microsoft.", rating: 4.7 },
  { name: "Rahul Desai", degree: "MSc in AI & ML", university: "Imperial College London", review: "Hands-on projects and guidance helped me get placed at Google efficiently.", rating: 4.9 },
  { name: "Neha Kapoor", degree: "Master in Data Analytics", university: "University of Edinburgh", review: "Great learning experience & placement support led to my role at Facebook.", rating: 4.8 },
  { name: "James Miller", degree: "MSc in Computer Vision", university: "University of Manchester", review: "The program’s practical modules and mentorship helped me land my dream job at Adobe.", rating: 4.8 },
  { name: "Meera Joshi", degree: "Master in Business Analytics", university: "London Business School", review: "Fantastic journey and team support helped me bag a position at Deloitte.", rating: 4.8 },
  { name: "Sidharth Reddy", degree: "Master in Information Security", university: "University of Glasgow", review: "Expert instructors and practical labs made interviews easy; placed at Cisco.", rating: 4.7 },
  { name: "Ayesha Khan", degree: "MSc in Robotics", university: "University of London", review: "Robotics specialization was unique and led me to Boston Dynamics.", rating: 4.9 },
  { name: "Ethan Clark", degree: "Master in Software Engineering", university: "University of Birmingham", review: "In-depth modules and mock interviews prepared me well for IBM.", rating: 4.7 },
  { name: "Tanvi Jain", degree: "MSc in Big Data", university: "University of Warwick", review: "Focus on projects helped me land a job at Oracle.", rating: 4.8 },
  { name: "Rehan Malik", degree: "Master in Cloud Security", university: "Cardiff University", review: "Supportive environment and motivation helped me secure my position at SAP.", rating: 4.8 },
  { name: "Emma Wilson", degree: "MSc in Analytics", university: "University of Liverpool", review: "The instructors’ expertise and clear guidance helped me get placed at Accenture.", rating: 4.9 },
];

// Define the Story type
interface Story {
  name: string;
  degree: string;
  university: string;
  review: string;
  rating: number;
}

// Define the props for StoryCard component
interface StoryCardProps {
  story: Story;
}

function SuccessStories() {
  const DURATION = 20; 
  const firstRow = stories.slice(0, 10);
  const secondRow = stories.slice(10, 20);

  const StoryCard: React.FC<StoryCardProps> = ({ story }) => (
    <div className="min-w-[280px] max-w-xs mx-3 mb-4 bg-blue-50 rounded-xl shadow-lg p-4 flex flex-col justify-between">
      <div>
        <h3 className="font-semibold text-lg text-blue-700 mb-1">{story.name}</h3>
        <p className="text-gray-500 text-sm mb-1">{story.degree}</p>
        <p className="text-gray-400 text-xs mb-2">{story.university}</p>
        <p className="text-gray-700 text-sm italic">"{story.review}"</p>
      </div>
      <div className="mt-3 flex items-center">
        <span className="font-medium text-blue-700 text-sm mr-2">Rating: {story.rating}</span>
        <div className="w-16 bg-gray-200 rounded-full h-2 ml-1">
          <div
            className="bg-blue-500 h-2 rounded-full"
            style={{ width: `${(story.rating / 5) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="success" className="w-full py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-2">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">
          Inspiring Success Stories
        </h2>
        <p className="text-lg text-center text-blue-700 mb-10">
          Our students have achieved remarkable milestones here are some of their journeys!
        </p>

        {/* Row 1: left-to-right scroll */}
        <div className="relative w-full overflow-x-hidden mb-6">
          <div
            className="flex items-center space-x-4 animate-scroll-ltr"
            style={{
              animation: `scroll-ltr ${DURATION}s linear infinite`,
              width: "200%",
            }}
          >
            {[...firstRow, ...firstRow].map((story, idx) => (
              <StoryCard key={`row1-${idx}`} story={story} />
            ))}
          </div>
        </div>

        {/* Row 2: right-to-left scroll */}
        <div className="relative w-full overflow-x-hidden">
          <div
            className="flex items-center space-x-4 animate-scroll-rtl"
            style={{
              animation: `scroll-rtl ${DURATION}s linear infinite`,
              width: "200%",
            }}
          >
            {[...secondRow, ...secondRow].map((story, idx) => (
              <StoryCard key={`row2-${idx}`} story={story} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-ltr {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%);}
        }
        @keyframes scroll-rtl {
          0% { transform: translateX(0%);}
          100% { transform: translateX(-50%);}
        }
        .animate-scroll-ltr {
          width: 200%; /* for seamless infinite scroll */
        }
        .animate-scroll-rtl {
          width: 200%;
        }
      `}</style>
    </section>
  );
}

export default SuccessStories;