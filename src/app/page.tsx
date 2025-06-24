"use client"

import React, { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Home() {
  const featuresRef = useRef<HTMLElement>(null)

  // Scroll to features section smoothly
  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  // Intersection Observer for fade-in animation
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-in-section")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    sections.forEach((section) => {
      section.classList.add("opacity-0", "translate-y-10", "transition-all", "duration-700", "ease-out")
      observer.observe(section)
    })
    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  const services = [
    {
      title: "Cloud Management",
      description: "Optimize and manage your cloud infrastructure with our expert solutions.",
      icon: "🌐",
    },
    {
      title: "Network Security",
      description: "Protect your business with advanced security monitoring and threat management.",
      icon: "🔒",
    },
    {
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with AI-powered analytics.",
      icon: "📊",
    },
  ]

  const features = [
    {
      title: "Expert Team",
      description: "Certified professionals with years of industry experience",
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and monitoring",
    },
    {
      title: "AI-Powered",
      description: "Advanced AI solutions for workflow optimization",
    },
    {
      title: "Scalable Solutions",
      description: "Flexible services that grow with your business",
    },
  ]

  return (
    <div className="w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-800 opacity-60 dark:opacity-80" />
        <img
          src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
          alt="IT Consulting"
          className="absolute inset-0 w-full h-full object-cover brightness-75 dark:brightness-50"
        />
        <div className="relative z-10 text-center max-w-4xl">
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">
            Transform Your Business with Modern IT Solutions
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Leverage our expertise in managed services and AI-driven workflows to accelerate your digital transformation
          </p>
          <Button
            onClick={scrollToFeatures}
            size="lg"
            className="bg-black text-white hover:bg-gray-800 px-10 py-5 rounded-md shadow-lg transition"
          >
            Start
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-gray-800 fade-in-section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-white dark:bg-gray-700">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{service.description}</p>
                <Link href="/managed-services">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-20 fade-in-section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our AI-powered workflow system analyze and enhance your IT operations
          </p>
          <Link href="/ai-agent-request">
            <Button className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg rounded-md shadow-lg transition">
              Request AI Analysis
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 bg-white dark:bg-gray-800 fade-in-section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
