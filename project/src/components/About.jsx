import React from 'react'
import { Card, Row, Col, Timeline } from 'antd'

function About() {
  const teamMembers = [
    {
      name: "Frosty McHeaterson III",
      title: "Founder & Chief Temperature Officer",
      bio: "Third-generation HVAC wizard with a passion for perfect indoor climates and terrible puns.",
      years: "25+ years"
    },
    {
      name: "Chilly Williams", 
      title: "Senior Cooling Specialist",
      bio: "Can diagnose AC problems just by listening. Also makes excellent ice sculptures in her spare time.",
      years: "15+ years"
    },
    {
      name: "Blaze Thompson",
      title: "Heating Systems Expert", 
      bio: "Once fixed a furnace during a blizzard while wearing shorts. Legend has it he's still warm.",
      years: "12+ years"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            About Frosty McHeaterson
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three generations of keeping people comfortable, one perfectly calibrated thermostat at a time.
          </p>
        </div>

        <div className="bg-white rounded-lg p-8 mb-12 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              It all started in 1952 when Frosty McHeaterson Sr. got tired of his neighbors complaining about 
              their broken heaters. Armed with nothing but a toolbox and an unhealthy obsession with indoor 
              comfort, he founded what would become the region's most trusted HVAC company.
            </p>
            
            <p className="text-lg leading-relaxed">
              Today, we're still family-owned and operated, though we've upgraded from Frosty Sr.'s rusty pickup 
              truck to a fleet of modern service vehicles. What hasn't changed is our commitment to treating every 
              home like our own and every customer like family (the kind you actually like).
            </p>
            
            <p className="text-lg leading-relaxed">
              We've survived disco, mullets, and even the great thermostat wars of '87. Through it all, we've 
              maintained our reputation for quality work, fair pricing, and the occasional dad joke during service calls.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Meet Our Team</h2>
          <Row gutter={[32, 32]}>
            {teamMembers.map((member, index) => (
              <Col xs={24} md={8} key={index}>
                <Card className="h-full text-center shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-6xl mb-4">
                    {index === 0 ? '👨‍💼' : index === 1 ? '👩‍🔧' : '👨‍🔧'}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <h4 className="text-blue-600 font-medium mb-3">{member.title}</h4>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="bg-blue-50 p-2 rounded">
                    <span className="text-blue-800 font-semibold">{member.years} Experience</span>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        <div className="bg-white rounded-lg p-8 mb-12 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <div className="bg-blue-50 p-6 rounded-lg">
            <p className="text-lg text-gray-700 leading-relaxed">
              To provide reliable, efficient HVAC services that keep our customers comfortable year-round, 
              while maintaining the highest standards of professionalism (and the lowest standards of pun quality). 
              We believe everyone deserves to live in perfect temperature harmony, regardless of what Mother Nature 
              throws at us.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Company Timeline</h2>
          <Timeline
            items={[
              {
                children: <div><strong>1952:</strong> Frosty Sr. starts the company with a handshake and a promise to "make things comfy"</div>
              },
              {
                children: <div><strong>1978:</strong> Frosty Jr. joins the business, introduces the revolutionary concept of "showing up on time"</div>
              },
              {
                children: <div><strong>1995:</strong> First computer system installed (mostly to play Solitaire during lunch breaks)</div>
              },
              {
                children: <div><strong>2010:</strong> Frosty III takes over, modernizes operations while keeping the family traditions alive</div>
              },
              {
                children: <div><strong>2020:</strong> Celebrates 68 years of keeping people comfortable through heat waves, cold snaps, and global pandemics</div>
              },
              {
                children: <div><strong>Today:</strong> Still family-owned, still making terrible jokes, still the best HVAC service in town</div>
              }
            ]}
          />
        </div>
      </div>
    </div>
  )
}

export default About