"use client"

import { useState } from "react"
import { ErrorBoundary } from "@/components/ErrorBoundary"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function AIAgentRequest() {
  interface FormData {
    name: string;
    email: string;
    company: string;
    serviceType: string;
    description: string;
  }

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    serviceType: "",
    description: "",
  })

  const [status, setStatus] = useState<{
    isSubmitting: boolean;
    isSubmitted: boolean;
    error: string | null;
  }>({
    isSubmitting: false,
    isSubmitted: false,
    error: null,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ ...status, isSubmitting: true, error: null })

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      
      setStatus({
        isSubmitting: false,
        isSubmitted: true,
        error: null,
      })
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        serviceType: "",
        description: "",
      })
    } catch (error) {
      setStatus({
        isSubmitting: false,
        isSubmitted: false,
        error: "An error occurred while submitting your request. Please try again.",
      })
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, serviceType: value }))
  }

  return (
    <ErrorBoundary>
      <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6">
            AI Agent Workflow Request
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Let our AI analyze your requirements and create a customized workflow solution
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto p-8">
            {status.isSubmitted ? (
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-green-600 mb-4">
                  Request Submitted Successfully!
                </h2>
                <p className="text-gray-600 mb-6">
                  Our team will analyze your requirements and get back to you shortly.
                </p>
                <Button
                  onClick={() => setStatus({ ...status, isSubmitted: false })}
                  className="bg-black text-white hover:bg-gray-800"
                >
                  Submit Another Request
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {status.error && (
                  <Alert variant="destructive">
                    <AlertDescription>{status.error}</AlertDescription>
                  </Alert>
                )}

                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Company Name</label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    placeholder="Enter your company name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Service Type</label>
                  <Select
                    value={formData.serviceType || ""}
                    onValueChange={handleSelectChange}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cloud">Cloud Infrastructure Management</SelectItem>
                      <SelectItem value="security">Network Security & Compliance</SelectItem>
                      <SelectItem value="analytics">Data Analytics & BI</SelectItem>
                      <SelectItem value="infrastructure">IT Infrastructure Optimization</SelectItem>
                      <SelectItem value="custom">Custom Solution</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Project Description</label>
                  <Textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    placeholder="Describe your project requirements and goals"
                    rows={5}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-black text-white hover:bg-gray-800"
                  disabled={status.isSubmitting}
                >
                  {status.isSubmitting ? "Submitting..." : "Submit Request"}
                </Button>
              </form>
            )}
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Submit Request",
                description: "Fill out our comprehensive form with your project details and requirements.",
              },
              {
                title: "AI Analysis",
                description: "Our AI agent analyzes your requirements and creates a tailored solution proposal.",
              },
              {
                title: "Expert Review",
                description: "Our team reviews the AI-generated proposal and refines it for optimal results.",
              },
            ].map((step, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="text-2xl font-bold text-gray-400 mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      </div>
    </ErrorBoundary>
  )
}
