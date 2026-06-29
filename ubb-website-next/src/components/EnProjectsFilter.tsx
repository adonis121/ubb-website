'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { projects } from '@/data/en/projects'
import { projectImages } from '@/data/imageMap'

const categories = [
  { key: 'all', label: 'All' },
  { key: 'sanierung', label: 'Renovation' },
  { key: 'boden', label: 'Flooring' },
  { key: 'innen', label: 'Interior' },
  { key: 'umbau', label: 'Conversion' },
]

export default function EnProjectsFilter() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all' ? projects : projects.filter((p) => p.category === active)

  return (
    <>
      <div className="filter-bar">
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={`filter-btn${active === cat.key ? ' active' : ''}`}
            onClick={() => setActive(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <div className="grid cols-3">
        {filtered.map((project) => (
          <Link key={project.slug} className="card-project" href={`/en/projects/${project.slug}`}>
            <div className="img">
              <Image
                src={projectImages[project.slug] ?? '/images/placeholder.png'}
                alt={project.title}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="body">
              <div className="meta-row">
                <span>{project.type}</span>
                <span>{project.year}</span>
              </div>
              <h3>{project.title}</h3>
              <div className="facts">
                <div><b>{project.area}</b>Area</div>
                <div><b>{project.duration}</b>Duration</div>
                <div><b>{project.trades}</b>Trades</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
