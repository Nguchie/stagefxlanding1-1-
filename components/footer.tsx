"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Calendar } from "@/components/ui/calendar"
import { addMonths, format, isWeekend, isBefore, startOfDay, isToday, isSameMonth } from "date-fns"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const [showCalendar, setShowCalendar] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectedTime, setSelectedTime] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [countryCode, setCountryCode] = useState("+1")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date())
  const [availableMonths, setAvailableMonths] = useState<Date[]>([])
  const [showSuccess, setShowSuccess] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  
  // Set to Eastern Time (ET) - America/New_York
  const timeZone = "America/New_York"

  // Initialize available months (current month + next 2 months)
  useEffect(() => {
    const months = []
    const today = new Date()
    for (let i = 0; i < 3; i++) {
      months.push(addMonths(today, i))
    }
    setAvailableMonths(months)
  }, [])

  // Update available months when we reach the end of the current range
  useEffect(() => {
    const checkMonth = () => {
      const now = new Date()
      const lastAvailableMonth = availableMonths[availableMonths.length - 1]
      
      // If current month is within 1 month of the last available month, add more months
      if (isSameMonth(addMonths(now, 1), lastAvailableMonth)) {
        setAvailableMonths(prev => [
          ...prev,
          addMonths(lastAvailableMonth, 1)
        ])
      }
    }

    const interval = setInterval(checkMonth, 86400000) // Check daily
    return () => clearInterval(interval)
  }, [availableMonths])

  const isDateDisabled = (date: Date) => {
    return isWeekend(date) || isBefore(date, startOfDay(new Date()))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!selectedDate || !selectedTime || !name || !email) {
      alert("Please fill all required fields and select a date and time")
      return
    }

    setIsSubmitting(true)
    
    try {
      const response = await fetch('https://web-production-91a45.up.railway.app/api/schedule-call/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone: `${countryCode} ${phoneNumber}`,
          date: format(selectedDate, 'yyyy-MM-dd'),
          time: selectedTime,
          timezone: timeZone, // Using our defined ET timezone
          service: 'Web Development & SEO Consultation'
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSuccessMessage(data.message || "Your meeting has been scheduled! We'll send a confirmation email shortly.")
        setShowSuccess(true)
        
        // Reset form
        setName("")
        setEmail("")
        setPhoneNumber("")
        setSelectedTime("")
        setSelectedDate(undefined)
        setShowCalendar(false)
      } else {
        throw new Error(data.message || 'Failed to submit form')
      }
    } catch (error) {
      console.error('Error:', error)
      setSuccessMessage(`There was an error scheduling your call: ${error instanceof Error ? error.message : 'Unknown error'}`)
      setShowSuccess(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const getTimeSlots = () => {
    return [
      '9:00 AM', '10:00 AM', '11:00 AM',
      '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
    ]
  }

  const handleMonthChange = (month: Date) => {
    setCurrentMonth(month)
  }

  // Format timezone display name for ET
  const formatTimeZoneDisplay = () => {
    try {
      const options = {
        timeZone: timeZone,
        timeZoneName: 'short' as const
      }
      return new Intl.DateTimeFormat('en-US', options)
        .formatToParts(new Date())
        .find(part => part.type === 'timeZoneName')?.value || 'ET'
    } catch {
      return 'ET'
    }
  }


  return (
    <footer className="bg-[#f8faff] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Left section - Company info */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-6">
              <span className="text-[#9baed9]">STAGE</span>
              <span>FX</span>
            </h3>
            <div className="space-y-2 text-gray-600">
              <p>Head Office: 258 Harrison Ave,</p>
              <p>Boston, MA 02111</p>
              <p>United States</p>
              <p className="mt-4">Phone: +1 857 392 5255</p>
            
            </div>
          </div>

          {/* Center section - CTA */}
          <div className="md:col-span-2 flex flex-col items-center justify-center">
            <div className="text-center w-full">
              <Button
                onClick={() => setShowCalendar(true)}
                className="bg-[#9baed9] hover:bg-[#8a9dc8] text-white py-6 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold text-lg mx-auto mb-8"
              >
                Schedule a Call
              </Button>
              <p className="text-gray-600 max-w-md mx-auto">
                Ready to discuss your Web Development and SEO needs? Book a 15 minutes call and one of our experts will touchbase with you.
              </p>
            </div>
          </div>

          {/* Right section - Navigation links */}
          <div className="md:col-span-1 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">FIND US</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/seo-services" className="text-gray-600 hover:text-[#9baed9] transition-colors">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className="text-gray-600 hover:text-[#9baed9] transition-colors">
                    Stories
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-[#9baed9] transition-colors">
                    Get In Touch
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">SERVICES</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/seo-services" className="text-gray-600 hover:text-[#9baed9] transition-colors">
                    SEO Services
                  </Link>
                </li>
                <li>
                  <Link href="/web-development" className="text-gray-600 hover:text-[#9baed9] transition-colors">
                    Web Dev
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="text-gray-600 hover:text-[#9baed9] transition-colors">
                    Case Studies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section - Copyright */}
        <div className="border-t border-gray-200 pt-8 text-center text-gray-500">
          <p>© StageFX Digital Agency. All rights reserved.</p>
          <p className="text-sm mt-1">Registered in the United States. Company No. X9B43W5Z.</p>
        </div>
      </div>

      {/* Calendar Modal */}
      {showCalendar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-4">
                  <Image 
                    src="/images/stagelogo.png" 
                    alt="StageFX Logo" 
                    width={120} 
                    height={100} 
                    className="rounded"
                  />
                  <h3 className="text-2xl font-bold text-gray-800">Schedule a Call today</h3>
                </div>
                <button 
                  onClick={() => {
                    setShowCalendar(false)
                    setSelectedDate(undefined)
                    setSelectedTime("")
                  }}
                  className="text-gray-500 hover:text-gray-700 transition-colors p-1 rounded-full hover:bg-gray-100"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="border-t border-b border-gray-200 py-6 mb-6">
                <h4 className="font-semibold text-xl mb-2 text-[#9baed9]">Web Development & SEO Consultation</h4>
                <p className="text-gray-600 mb-1"><strong>15 Minutes</strong></p>
                <p className="text-gray-600">Discuss your digital strategy with our experts</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Date Selection - Enhanced Calendar */}
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-semibold text-lg">Select Date</h4>
                      <div className="flex items-center space-x-2">
                        <button
                          type="button"
                          onClick={() => setCurrentMonth(addMonths(currentMonth, -1))}
                          disabled={isSameMonth(currentMonth, new Date())}
                          className="p-1 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </button>
                        <span className="font-medium text-gray-700">
                          {format(currentMonth, 'MMMM yyyy')}
                        </span>
                        <button
                          type="button"
                          onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                          disabled={!availableMonths.some(month => isSameMonth(addMonths(currentMonth, 1), month))}
                          className="p-1 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <ChevronRight className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                    
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      month={currentMonth}
                      onMonthChange={handleMonthChange}
                      disabled={isDateDisabled}
                      fromMonth={new Date()}
                      toDate={availableMonths[availableMonths.length - 1]}
                      className="rounded-md border p-2 w-full"
                      classNames={{
                        head_cell: "text-gray-500 font-normal text-sm w-10 h-10",
                        cell: "relative p-0 text-center text-sm focus-within:relative",
                        day: "h-10 w-10 p-0 font-normal aria-selected:opacity-100 rounded-full hover:bg-gray-100",
                        day_selected:
                          "bg-[#9baed9] text-white hover:bg-[#8a9dc8] hover:text-white focus:bg-[#9baed9] focus:text-white",
                        day_today: "border border-[#9baed9]",
                        day_disabled: "text-gray-400 hover:bg-transparent cursor-not-allowed",
                        day_outside: "text-gray-400 opacity-50",
                        day_range_middle: "aria-selected:bg-gray-100 aria-selected:text-gray-900",
                        nav_button_previous: "absolute left-1",
                        nav_button_next: "absolute right-1",
                      }}
                      components={{
                        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
                        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
                      }}
                      modifiers={{
                        today: isToday,
                        selected: selectedDate ? [selectedDate] : [],
                      }}
                      modifiersStyles={{
                        selected: {
                          backgroundColor: '#9baed9',
                          color: 'white',
                        },
                        today: {
                          borderColor: '#9baed9',
                        },
                      }}
                    />
                    
                    <div className="mt-4 flex items-center">
                      <div className="w-3 h-3 rounded-full bg-[#9baed9] mr-2"></div>
                      <p className="text-sm text-gray-600">
                        {selectedDate ? (
                          <span>Selected: <span className="font-medium">{format(selectedDate, 'EEEE, MMMM do, yyyy')}</span></span>
                        ) : (
                          <span>Please select a date</span>
                        )}
                      </p>
                    </div>
                  </div>

                  {/* Time Selection */}
                  <div>
                    <h4 className="font-semibold mb-4 text-lg">Available Times</h4>
                    {selectedDate ? (
                      <>
                        <div className="grid grid-cols-2 gap-3">
                          {getTimeSlots().map((time, index) => (
                            <button
                              key={index}
                              type="button"
                              onClick={() => setSelectedTime(time)}
                              className={`p-3 rounded-lg border text-center transition-all ${
                                selectedTime === time
                                  ? 'border-[#9baed9] bg-[#9baed9] text-white font-medium shadow-sm'
                                  : 'border-gray-200 hover:border-[#9baed9] hover:text-[#9baed9]'
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                        
                        {selectedTime && (
                          <div className="mt-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
                            <p className="text-sm text-gray-600">
                              Selected time: <span className="font-medium text-gray-800">{selectedTime}</span>
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              Timezone: {formatTimeZoneDisplay()} (Eastern Time)
                            </p>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 text-center">
                        <p className="text-gray-500">Please select a date first</p>
                      </div>
                    )}
                  </div>
                </div>

                      {/* Form Fields */}
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Your Name*
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#9baed9] focus:border-[#9baed9] transition-colors"
              required
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Your Email*
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#9baed9] focus:border-[#9baed9] transition-colors"
              required
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="countryCode" className="block text-sm font-medium text-gray-700 mb-2">
              Country Code
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-gray-500">+</span>
              <input
                type="text"
                id="countryCode"
                value={countryCode.replace('+', '')}
                onChange={(e) => {
                  // Only allow numbers and limit length
                  const val = e.target.value.replace(/\D/g, '').slice(0, 3)
                  setCountryCode(`+${val}`)
                }}
                className="w-full pl-8 p-3 border border-gray-300 rounded-md focus:ring-[#9baed9] focus:border-[#9baed9] transition-colors"
                placeholder="1"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => {
                // Basic phone number validation
                const val = e.target.value.replace(/\D/g, '')
                setPhoneNumber(val)
              }}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#9baed9] focus:border-[#9baed9] transition-colors"
              placeholder="Enter your phone number"
            />
          </div>
        </div>
        </div>
                <Button
                  type="submit"
                  disabled={!selectedDate || !selectedTime || !name || !email || isSubmitting}
                  className="w-full bg-[#9baed9] hover:bg-[#8a9dc8] text-white py-4 px-6 rounded-md text-lg font-medium transition-colors shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Scheduling...
                    </span>
                  ) : (
                    'Schedule Call'
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-8 text-center">
            <div className="flex justify-center mb-6">
              <Image 
                src="/images/stagelogo.png" 
                alt="StageFX Logo" 
                width={80} 
                height={80} 
                className="rounded"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Thank You!</h3>
            <p className="text-gray-600 mb-6 whitespace-pre-line">{successMessage}</p>
            <Button
              onClick={() => setShowSuccess(false)}
              className="bg-[#9baed9] hover:bg-[#8a9dc8] text-white py-3 px-6 rounded-md font-medium"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </footer>
  )
}