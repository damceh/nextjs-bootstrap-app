import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function ManagedServices() {
  const services = [
    {
      title: "Cloud Infrastructure Management",
      description: "Comprehensive cloud solutions including migration, optimization, and ongoing management of your infrastructure across major cloud platforms.",
      features: [
        "Cloud Migration Strategy",
        "Performance Optimization",
        "Cost Management",
        "24/7 Monitoring",
      ],
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
    },
    {
      title: "Network Security & Compliance",
      description: "Enterprise-grade security solutions to protect your business assets and ensure regulatory compliance.",
      features: [
        "Threat Detection & Response",
        "Compliance Management",
        "Security Audits",
        "Employee Training",
      ],
      image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg",
    },
    {
      title: "Data Analytics & Business Intelligence",
      description: "Transform your raw data into actionable insights with our advanced analytics solutions.",
      features: [
        "Data Visualization",
        "Predictive Analytics",
        "Custom Reporting",
        "Real-time Analytics",
      ],
      image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",
    },
    {
      title: "IT Infrastructure Optimization",
      description: "Streamline and modernize your IT infrastructure for maximum efficiency and reliability.",
      features: [
        "Infrastructure Assessment",
        "Performance Tuning",
        "Capacity Planning",
        "Disaster Recovery",
      ],
      image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg",
    },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6">
            Managed IT Services
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Comprehensive IT solutions tailored to your business needs, powered by cutting-edge technology and expert support
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="h-48 relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <span className="mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href="/ai-agent-request">
                    <Button className="w-full bg-black text-white hover:bg-gray-800">
                      Request Service
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let our AI agent analyze your requirements and propose a tailored solution for your business
          </p>
          <Link href="/ai-agent-request">
            <Button className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg">
              Start Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
