"use client";

const people = [
    {
      name: 'Chiara Vallone',
      github: 'chiaravallone04',
      imageUrl:
        'https://icons.veryicon.com/png/o/miscellaneous/standard/avatar-15.png',
    },
    {
      name: 'Alex Langman',
      github: 'alexlangman',
      imageUrl:
        'https://icons.veryicon.com/png/o/miscellaneous/standard/avatar-15.png',
    },
    {
      name: 'Kevin Vuylsteke',
      github: 'kevinmvuylsteke',
      imageUrl:
        'https://icons.veryicon.com/png/o/miscellaneous/standard/avatar-15.png',
    },
    {
      name: 'Martin Bouhier',
      github: 'martinbouhier',
      imageUrl:
        'https://icons.veryicon.com/png/o/miscellaneous/standard/avatar-15.png',
    },
  ]
  
  export default function Team() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-10 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Integrantes</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Autores de este proyecto
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">Github: {person.github}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  