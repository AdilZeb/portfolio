export default function Skills() {
    const skills = [
      'HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Node.js', 
      'TypeScript', 'GraphQL', 'Tailwind CSS', 'Git'
    ]
  
    return (
      <section id="skills" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <span 
                key={skill} 
                className="bg-white text-gray-800 px-4 py-2 rounded-full shadow"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  