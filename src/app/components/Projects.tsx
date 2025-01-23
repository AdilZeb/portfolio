import Image from 'next/image'

export default function Projects() {
  const projects = [
    { 
      title: 'Project 1', 
      description: 'A brief description of Project 1', 
      image: '/placeholder.svg' 
    },
    { 
      title: 'Project 2', 
      description: 'A brief description of Project 2', 
      image: '/placeholder.svg' 
    },
    { 
      title: 'Project 3', 
      description: 'A brief description of Project 3', 
      image: '/placeholder.svg' 
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <Image 
                src={project.image} 
                alt={project.title} 
                width={400} 
                height={200} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

