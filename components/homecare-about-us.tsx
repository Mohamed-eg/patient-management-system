import React from 'react';
import { Heart, Clock, Users, Shield } from 'lucide-react';
import Image from 'next/image';
const AboutUs = () => {
  const teamMembers = [
    { name: "Ahmed Saad", role: "Team Member" },
    { name: "Belal Ismail", role: "Team Member" },
    { name: "Mohamed Al-shayeb", role: "Team Member" },
    { name: "Mohamed Arafat", role: "Team Member" }
  ];

  const features = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Compassionate Care",
      description: "We prioritize caring, personalized attention for every patient in the comfort of their home."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Availability",
      description: "Our services are available round the clock to ensure continuous support for those in need."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Our dedicated team brings together diverse skills to provide comprehensive home care solutions."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Trusted Service",
      description: "We maintain the highest standards of professionalism and reliability in home healthcare."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">Welcome to HomeCare</h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Bringing professional healthcare services to the comfort of your home. We&apos;re committed to 
            providing exceptional care with compassion, expertise, and dedication.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Mission */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                Our mission is to revolutionize home healthcare by leveraging technology 
                to provide accessible, high-quality care services. We believe that everyone 
                deserves exceptional healthcare in the comfort of their own home.
              </p>
              <p className="text-gray-600">
                Through our innovative platform, we connect qualified healthcare providers 
                with patients, ensuring seamless, reliable, and professional care delivery.
              </p>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg">
              <Image 
               width={1000}
               height={1000}
               src="/assets/doctors/1.jpg"
                alt="Healthcare professional with patient"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full overflow-hidden">
                  <Image 
                   width={1000}
                   height={1000}
                   src={`/assets/team/${index+1}.png`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="py-16 bg-blue-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Better Home Care?</h2>
          <p className="text-gray-600 mb-8">
            We&apos;re here to provide the care you or your loved ones need, right at home.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
