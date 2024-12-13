import {
  MessageSquare,
  Zap,
  Shield,
  Clock,
  Users,
  Sparkles,
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className=" rounded-lg p-6 shadow-sm">
    <div className="flex items-center justify-center w-12 h-12 mb-4 bg-[#E6EEFF] rounded-full">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-[#1E2B3A]">{title}</h3>
    <p className="text-[#1E2B3A] text-sm">{description}</p>
  </div>
);

export default function FeaturesSection() {
  const features = [
    {
      icon: <MessageSquare className="w-6 h-6 text-[#1E2B3A]" />,
      title: "AI-Powered Chat",
      description:
        "Create your resume through natural conversation with our AI assistant",
    },
    {
      icon: <Zap className="w-6 h-6 text-[#1E2B3A]" />,
      title: "Instant Generation",
      description:
        "Get your professional resume generated in minutes, not hours",
    },
    {
      icon: <Shield className="w-6 h-6 text-[#1E2B3A]" />,
      title: "ATS-Friendly",
      description:
        "Ensure your resume passes Applicant Tracking Systems every time",
    },
    {
      icon: <Clock className="w-6 h-6 text-[#1E2B3A]" />,
      title: "Real-Time Updates",
      description:
        "Edit and update your resume in real-time with instant previews",
    },
    {
      icon: <Users className="w-6 h-6 text-[#1E2B3A]" />,
      title: "Industry Tailored",
      description: "Customized formats and content for your specific industry",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#1E2B3A]" />,
      title: "Professional Templates",
      description: "Choose from a variety of professionally designed templates",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b to-white from-[#D2DCFF]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">Features</h2>
          <p className="section-description mt-5">
            Everything you need to create the perfect resume
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
