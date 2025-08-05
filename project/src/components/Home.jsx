import React from 'react'
import { Button, Card, Row, Col } from 'antd'

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">
            Frosty McHeaterson
          </h1>
          <h2 className="text-2xl text-blue-600 mb-6">
            HVAC Services That Won't Leave You Cold (Or Hot)
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            When the weather outside is frightful, but your indoor climate is... also frightful, 
            we're here to rescue you from the tyranny of uncomfortable temperatures!
          </p>
          <Button 
            type="primary" 
            size="large" 
            className="bg-blue-600 hover:bg-blue-700 px-8 py-6 text-lg h-auto"
          >
            Chill Out With Us Today
          </Button>
        </div>

        {/* Features Section */}
        <Row gutter={[32, 32]} className="mb-16">
          <Col xs={24} md={8}>
            <Card className="h-full text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">❄️</div>
              <h3 className="text-xl font-semibold mb-3">Cool As Ice</h3>
              <p className="text-gray-600">
                Our air conditioning services are so good, you'll forget what sweating feels like. 
                Perfect for those who enjoy being comfortable year-round (weird, we know).
              </p>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card className="h-full text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🔥</div>
              <h3 className="text-xl font-semibold mb-3">Hot Stuff</h3>
              <p className="text-gray-600">
                When winter hits and your heater decides to take an unscheduled vacation, 
                we'll get things toasty faster than you can say "polar vortex."
              </p>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card className="h-full text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
              <p className="text-gray-600">
                Emergency service so fast, we'll be there before you finish complaining about 
                the temperature on social media. That's a promise!
              </p>
            </Card>
          </Col>
        </Row>

        {/* Call to Action */}
        <div className="bg-blue-600 text-white rounded-lg p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Achieve Temperature Nirvana?
          </h3>
          <p className="text-xl mb-6">
            Don't suffer in silence while your HVAC system plots against your comfort. 
            Let Frosty McHeaterson restore peace to your indoor kingdom!
          </p>
          <Button 
            type="default" 
            size="large" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg h-auto font-semibold"
          >
            Get Your Free Quote
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Home