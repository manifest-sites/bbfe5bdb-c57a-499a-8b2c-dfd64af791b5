import React from 'react'
import { Card, Row, Col, List, Button } from 'antd'

function Services() {
  const services = [
    {
      title: "Air Conditioning Installation & Repair",
      icon: "❄️",
      description: "We'll install your AC faster than ice cream melts in summer.",
      features: [
        "Energy-efficient units that won't break the bank",
        "24/7 emergency repair (because heat waves don't keep business hours)",
        "Maintenance plans to keep things cool",
        "Free estimates (the only thing that's free these days)"
      ]
    },
    {
      title: "Heating System Services", 
      icon: "🔥",
      description: "Keeping you warmer than a group hug, but less awkward.",
      features: [
        "Furnace installation and replacement",
        "Boiler repair and maintenance",
        "Heat pump services",
        "Ductwork inspection (yes, we'll crawl around in there)"
      ]
    },
    {
      title: "Indoor Air Quality",
      icon: "🌬️", 
      description: "Because breathing shouldn't be optional.",
      features: [
        "Air purification systems",
        "Humidity control (no more static shock surprises)",
        "Duct cleaning services",
        "Filter replacement programs"
      ]
    },
    {
      title: "Smart Home Integration",
      icon: "🏠",
      description: "Technology so smart, it makes your thermostat feel inadequate.",
      features: [
        "Smart thermostat installation",
        "Zone control systems",
        "Remote monitoring",
        "Energy usage optimization (your wallet will thank you)"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From arctic blasts to tropical heat waves, we've got the skills to make your home 
            the perfect temperature oasis. No cape required, but we do have matching uniforms.
          </p>
        </div>

        {/* Services Grid */}
        <Row gutter={[32, 32]} className="mb-16">
          {services.map((service, index) => (
            <Col xs={24} lg={12} key={index}>
              <Card className="h-full shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{service.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <List
                      size="small"
                      dataSource={service.features}
                      renderItem={item => (
                        <List.Item className="py-1">
                          <span className="text-blue-600 mr-2">✓</span>
                          {item}
                        </List.Item>
                      )}
                    />
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Emergency Services */}
        <div className="bg-red-600 text-white rounded-lg p-8 mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">🚨 Emergency Services 🚨</h2>
            <p className="text-xl mb-4">
              When your HVAC system decides to throw a tantrum at 2 AM, we're ready to negotiate a peace treaty.
            </p>
            <p className="text-lg mb-6">
              Available 24/7 because mechanical failures don't respect your sleep schedule.
            </p>
            <Button 
              type="default" 
              size="large" 
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-6 text-lg h-auto font-semibold"
            >
              Call Emergency Line: (555) TOO-COLD
            </Button>
          </div>
        </div>

        {/* Pricing Philosophy */}
        <div className="bg-white rounded-lg p-8 shadow-lg text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Pricing Philosophy
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            We believe in fair, transparent pricing. No hidden fees, no surprise charges, 
            and definitely no "oh, by the way" moments at the end of the job.
          </p>
          <Row gutter={[32, 16]}>
            <Col xs={24} md={8}>
              <div className="text-2xl mb-2">💰</div>
              <h4 className="font-semibold">Upfront Pricing</h4>
              <p className="text-gray-600">You'll know the cost before we start</p>
            </Col>
            <Col xs={24} md={8}>
              <div className="text-2xl mb-2">🛡️</div>
              <h4 className="font-semibold">Work Guarantee</h4>
              <p className="text-gray-600">We stand behind our work 100%</p>
            </Col>
            <Col xs={24} md={8}>
              <div className="text-2xl mb-2">💳</div>
              <h4 className="font-semibold">Flexible Payment</h4>
              <p className="text-gray-600">Multiple payment options available</p>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default Services