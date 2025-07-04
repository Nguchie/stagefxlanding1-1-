"use client"

import type React from "react"
import { useState } from "react"
import { MessageCircle, Phone, Mail, MapPin, Clock, Users, Award, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+1",
    phoneNumber: "",
    companyName: "",
    serviceType: "",
    projectDescription: "",
    budget: "",
    timeline: "",
    state: ""
  })

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate phone number
    if (!formData.phoneNumber || formData.phoneNumber.length < 5) {
      setStatus("error")
      setStatusMessage("Please enter a valid phone number (minimum 5 digits)")
      return
    }

    setStatus("sending")
    setStatusMessage("Sending...")

    try {
      // Prepare data for submission - combine country code and phone number
      const submissionData = {
        ...formData,
        phoneNumber: `+${formData.countryCode.replace(/\D/g, '')}${formData.phoneNumber.replace(/\D/g, '')}`
      }

      // Send to Django backend API endpoint
      const response = await fetch("https://web-production-91a45.up.railway.app/api/send-email/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      })

      if (response.ok) {
        setStatus("success")
        setStatusMessage("Message sent successfully! We'll get back to you soon.")

        // Reset form on success
        setFormData({
          fullName: "",
          email: "",
          countryCode: "+1",
          phoneNumber: "",
          companyName: "",
          serviceType: "",
          projectDescription: "",
          budget: "",
          timeline: "",
          state: ""
        })

        // Clear success message after 5 seconds
        setTimeout(() => {
          setStatus("idle")
          setStatusMessage("")
        }, 5000)
      } else {
        const errorData = await response.json().catch(() => ({}))
        setStatus("error")
        setStatusMessage(errorData.message || "Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error("Error sending message:", error)
      setStatus("error")
      setStatusMessage("Network error. Please check your connection and try again.")
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#9baed9]/10 via-white to-[#9baed9]/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                Get In <span className="text-[#9baed9]">Touch</span>
              </h1>
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                Ready to transform your digital presence? Let's discuss how we can help your business grow with our SEO
                and web development expertise.
              </p>

              {/* Quick Stats */}
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#9baed9]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-[#9baed9]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">24h</h3>
                  <p className="text-gray-600">Response Time</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#9baed9]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-[#9baed9]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">200+</h3>
                  <p className="text-gray-600">Interactions</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#9baed9]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-[#9baed9]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">9+</h3>
                  <p className="text-gray-600">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16">
                {/* Contact Information */}
                <div>
                  <h2 className="text-3xl font-bold mb-8 text-gray-900">Let's Start a Conversation</h2>
                  <p className="text-lg text-gray-700 mb-12 leading-relaxed">
                    Whether you need SEO optimization, a new website, or both, we're here to help your business thrive
                    in the digital landscape. Our team of experts is ready to create a custom solution that fits your
                    goals and budget.
                  </p>

                  <div className="space-y-8">
                    <Card className="border-l-4 border-l-[#9baed9] shadow-lg hover:shadow-xl transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-[#9baed9]/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <Phone className="w-6 h-6 text-[#9baed9]" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                            <p className="text-gray-700 mb-1">+1 857 392 5255</p>
                            <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM EST</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-l-4 border-l-[#9baed9] shadow-lg hover:shadow-xl transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-[#9baed9]/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <MapPin className="w-6 h-6 text-[#9baed9]" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-2">Head Office</h3>
                            <p className="text-gray-700">258 Harrison Ave</p>
                            <p className="text-gray-700">Boston, MA 02111</p>
                            <p className="text-gray-700">United States</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-gradient-to-br from-[#f8faff] to-white p-8 rounded-2xl shadow-xl border border-gray-100">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">Start Your Project</h2>

                  {/* Status Message */}
                  {statusMessage && (
                    <div
                      className={`mb-6 p-4 rounded-lg ${
                        status === "success"
                          ? "bg-green-50 text-green-800 border border-green-200"
                          : status === "error"
                            ? "bg-red-50 text-red-800 border border-red-200"
                            : "bg-blue-50 text-blue-800 border border-blue-200"
                      }`}
                    >
                      {statusMessage}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Full Name */}
                    <div>
                      <Label htmlFor="fullName" className="text-sm font-medium text-gray-700 mb-2 block">
                        Full Name *
                      </Label>
                      <Input
                        id="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        className="w-full border-gray-200 focus:border-[#9baed9] focus:ring-[#9baed9]"
                        placeholder="Enter your full name"
                        disabled={status === "sending"}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="w-full border-gray-200 focus:border-[#9baed9] focus:ring-[#9baed9]"
                        placeholder="Enter your email address"
                        disabled={status === "sending"}
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <Label htmlFor="phoneNumber" className="text-sm font-medium text-gray-700 mb-2 block">
                        Phone Number *
                      </Label>
                      <div className="flex gap-2 items-center">
                        <div className="relative flex items-center">
                          <span className="absolute left-3 text-gray-700">+</span>
                          <Input
                            id="countryCode"
                            type="text"
                            required
                            value={formData.countryCode.replace('+', '')} // Remove + for display
                            onChange={(e) => {
                              // Only allow digits, max 4 characters
                              const value = e.target.value.replace(/\D/g, '').slice(0, 4);
                              handleInputChange("countryCode", value);
                            }}
                            className="w-20 pl-6 border-gray-200 focus:border-[#9baed9] focus:ring-[#9baed9]"
                            placeholder="1"
                            disabled={status === "sending"}
                          />
                        </div>
                        <Input
                          id="phoneNumber"
                          type="tel"
                          required
                          value={formData.phoneNumber}
                          onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, '');
                            if (value === '' || value.length <= 15) {
                              handleInputChange("phoneNumber", value);
                            }
                          }}
                          className="flex-1 border-gray-200 focus:border-[#9baed9] focus:ring-[#9baed9]"
                          placeholder="Enter phone number"
                          disabled={status === "sending"}
                        />
                      </div>
                      {formData.phoneNumber && formData.phoneNumber.length < 5 && (
                        <p className="text-sm text-red-500 mt-1">Phone number too short (min 5 digits)</p>
                      )}
                    </div>

                    {/* Company Name */}
                    <div>
                      <Label htmlFor="companyName" className="text-sm font-medium text-gray-700 mb-2 block">
                        Company Name
                      </Label>
                      <Input
                        id="companyName"
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => handleInputChange("companyName", e.target.value)}
                        className="w-full border-gray-200 focus:border-[#9baed9] focus:ring-[#9baed9]"
                        placeholder="Enter your company name"
                        disabled={status === "sending"}
                      />
                    </div>

                    {/* State */}
                    <div>
                      <Label htmlFor="state" className="text-sm font-medium text-gray-700 mb-2 block">
                        State
                      </Label>
                      <Input
                        id="state"
                        type="text"
                        value={formData.state}
                        onChange={(e) => handleInputChange("state", e.target.value)}
                        className="w-full border-gray-200 focus:border-[#9baed9] focus:ring-[#9baed9]"
                        placeholder="Enter your state"
                        disabled={status === "sending"}
                      />
                    </div>

                    {/* Service Type */}
                    <div>
                      <Label htmlFor="serviceType" className="text-sm font-medium text-gray-700 mb-2 block">
                        Type of Service Interested In *
                      </Label>
                      <Select
                        value={formData.serviceType}
                        onValueChange={(value) => handleInputChange("serviceType", value)}
                        disabled={status === "sending"}
                        required
                      >
                        <SelectTrigger className="border-gray-200 focus:border-[#9baed9] focus:ring-[#9baed9]">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="seo">SEO</SelectItem>
                          <SelectItem value="web-development">Web Development</SelectItem>
                          <SelectItem value="both">Both SEO & Web Development</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Project Description */}
                    <div>
                      <Label htmlFor="projectDescription" className="text-sm font-medium text-gray-700 mb-2 block">
                        Project Description *
                      </Label>
                      <Textarea
                        id="projectDescription"
                        required
                        value={formData.projectDescription}
                        onChange={(e) => handleInputChange("projectDescription", e.target.value)}
                        className="w-full min-h-[120px] border-gray-200 focus:border-[#9baed9] focus:ring-[#9baed9]"
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                        disabled={status === "sending"}
                      />
                    </div>

                    {/* Budget */}
                    <div>
                      <Label htmlFor="budget" className="text-sm font-medium text-gray-700 mb-2 block">
                        Estimated Budget *
                      </Label>
                      <Select
                        value={formData.budget}
                        onValueChange={(value) => handleInputChange("budget", value)}
                        disabled={status === "sending"}
                        required
                      >
                        <SelectTrigger className="border-gray-200 focus:border-[#9baed9] focus:ring-[#9baed9]">
                          <SelectValue placeholder="Select your budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-1000">Under $1,000</SelectItem>
                          <SelectItem value="1000-5000">$1,000 – $5,000</SelectItem>
                          <SelectItem value="5000-10000">$5,000 – $10,000</SelectItem>
                          <SelectItem value="10000-20000">$10,000 – $20,000</SelectItem>
                          <SelectItem value="20000-plus">$20,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Timeline */}
                    <div>
                      <Label htmlFor="timeline" className="text-sm font-medium text-gray-700 mb-2 block">
                        Project Timeline
                      </Label>
                      <Select
                        value={formData.timeline}
                        onValueChange={(value) => handleInputChange("timeline", value)}
                        disabled={status === "sending"}
                      >
                        <SelectTrigger className="border-gray-200 focus:border-[#9baed9] focus:ring-[#9baed9]">
                          <SelectValue placeholder="Select your preferred timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">ASAP</SelectItem>
                          <SelectItem value="1-3-months">1-3 months</SelectItem>
                          <SelectItem value="3-6-months">3-6 months</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full bg-[#9baed9] text-white hover:bg-[#8a9dc8] py-3 text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === "sending" ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <MessageCircle className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-[#9baed9] to-[#8a9dc8]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Prefer to Talk First?</h2>
              <p className="text-xl text-white/90 mb-8">
                Schedule a free 30-minute consultation to discuss your project and see if we're a good fit.
              </p>
              <Button
                size="lg"
                className="bg-white text-[#9baed9] hover:bg-gray-100 text-lg px-8 shadow-lg hover:shadow-xl transition-all"
              >
                <a href="tel:+18573925255">
                  Request a Consultation
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}