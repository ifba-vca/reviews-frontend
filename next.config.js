/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => [
    {
      source: "/docente",
      destination: "/pages/teacher",
    },
    {
      source: "/docente/:semestre",
      destination: "/pages/teacher/[semester]",
    },
    {
      source: "/docente/:semestre/:disciplina",
      destination: "/pages/teacher/[semester]/[discipline]",
    },
    {
      source: "/secretaria",
      destination: "/pages/secretary",
    },
    {
      source: "/secretaria/docentes",
      destination: "/pages/secretary/teachers",
    },
    {
      source: "/secretaria/discentes",
      destination: "/pages/secretary/students",
    },
    {
      source: "/secretaria/disciplinas",
      destination: "/pages/secretary/disciplines",
    },
    {
      source: "/secretaria/semestres",
      destination: "/pages/secretary/semesters",
    },
  ],
};

module.exports = nextConfig;
