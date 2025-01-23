export default function Experience() {
    const experiences = [
      {
        title: 'Senior Web Developer',
        company: 'Tech Co.',
        period: '2020 - Present',
        description: 'Led development of multiple web applications using React and Node.js.'
      },
      {
        title: 'Web Developer',
        company: 'Digital Agency',
        period: '2018 - 2020',
        description: 'Developed responsive websites for various clients using modern web technologies.'
      },
    ]
  
    return (
      <section id="experience" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                <p className="text-gray-600 mb-2">{exp.company} | {exp.period}</p>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  