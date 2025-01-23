export default function Education() {
    const education = [
      {
        degree: 'Bachelor of Science in Computer Science',
        school: 'University of Technology',
        year: '2018'
      },
      {
        degree: 'Web Development Bootcamp',
        school: 'Coding Academy',
        year: '2019'
      }
    ]
  
    return (
      <section id="education" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                <p className="text-gray-600">{edu.school} | {edu.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  