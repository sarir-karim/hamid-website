import { useEffect, useMemo, useState } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import {
  FiBarChart2,
  FiMapPin,
  FiCalendar,
  FiImage,
  FiMessageSquare,
  FiSettings,
  FiBell,
  FiSearch,
  FiUsers,
  FiPlus,
  FiEdit3,
  FiTrash2,
  FiCompass,
  FiLayers,
  FiHome,
  FiInfo,
} from 'react-icons/fi'

const navItems = [
  { to: '/', label: 'Dashboard', icon: FiBarChart2 },
  { to: '/home', label: 'Home', icon: FiHome },
  { to: '/tours', label: 'Tours', icon: FiMapPin },
  { to: '/destinations', label: 'Destinations', icon: FiCompass },
  { to: '/programs', label: 'Programs', icon: FiLayers },
  { to: '/gallery', label: 'Gallery', icon: FiImage },
  { to: '/about', label: 'About', icon: FiInfo },
  { to: '/contact', label: 'Contact', icon: FiMessageSquare },
  { to: '/bookings', label: 'Bookings', icon: FiCalendar },
  { to: '/settings', label: 'Settings', icon: FiSettings },
]

const initialTours = [
  { id: 1, name: 'K2 Base Camp', duration: '14 Days', status: 'Published', guests: '18' },
  { id: 2, name: 'Ladakh Adventure', duration: '10 Days', status: 'Draft', guests: '8' },
  { id: 3, name: 'Spiti Escape', duration: '7 Days', status: 'Published', guests: '12' },
]

const initialDestinations = [
  { id: 1, name: 'Hunza Valley', region: 'Gilgit-Baltistan', description: 'Scenic peaks and cultural villages.', bestSeason: 'Spring', slug: 'hunza-valley', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470' },
  { id: 2, name: 'Skardu', region: 'Gilgit-Baltistan', description: 'Blue lakes and alpine adventure.', bestSeason: 'Summer', slug: 'skardu', image: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2' },
]

const initialPrograms = [
  { id: 1, title: 'Mountain Photography', category: 'Photography', duration: '5 Days', description: 'Capture the best landscapes with expert guides.' },
  { id: 2, title: 'Cultural Village Stay', category: 'Culture', duration: '7 Days', description: 'Live with local families and explore heritage trails.' },
]

const initialGallery = [
  { id: 1, title: 'Campfire at Base Camp', category: 'trekking', description: 'Evening views and storytelling under the stars.', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee' },
  { id: 2, title: 'Village Walks', category: 'culture', description: 'Immersive experiences with local hosts.', image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a' },
]

const initialAbout = {
  companyName: 'Mountain Soul Adventure',
  tagline: 'Bringing the soul back to mountain adventure',
  mission: 'Create meaningful journeys through Pakistan’s mountains.',
  vision: 'Be the most trusted partner for responsible adventure travel.',
  storyTitle: 'Our Story',
  storyContent: 'We believe authentic adventures should create lasting memories and positive impact.',
  storyImage: 'https://images.unsplash.com/photo-1500534623283-312aade485b7',
  values: [
    { id: 1, title: 'Authenticity', description: 'Real experiences rooted in local culture.', icon: '✨' },
    { id: 2, title: 'Safety', description: 'Professional guides and strong planning.', icon: '🛡️' },
  ],
}

const initialContact = {
  email: 'hello@mountainsoul.com',
  phone: '+92 300 1234567',
  address: 'Karimabad, Hunza, Pakistan',
  hours: 'Mon–Sun · 8:00 AM – 8:00 PM',
}

const bookings = [
  { client: 'Ayesha Khan', tour: 'K2 Base Camp', date: 'Jun 18, 2026', amount: '$1,850' },
  { client: 'Ravi Mehta', tour: 'Spiti Escape', date: 'Jun 20, 2026', amount: '$980' },
  { client: 'Mina Shah', tour: 'Ladakh Adventure', date: 'Jun 24, 2026', amount: '$1,240' },
]

const contacts = [
  { name: 'Nadia Noor', email: 'nadia@example.com', topic: 'Custom itinerary', time: '10 min ago' },
  { name: 'Omar Ali', email: 'omar@example.com', topic: 'Group booking', time: '1 hr ago' },
  { name: 'Sara Ben', email: 'sara@example.com', topic: 'Pricing query', time: 'Today' },
]

const loadState = (key, fallback) => {
  if (typeof window === 'undefined') return fallback
  try {
    const stored = window.localStorage.getItem(key)
    return stored ? JSON.parse(stored) : fallback
  } catch {
    return fallback
  }
}

const saveState = (key, value) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(key, JSON.stringify(value))
  }
}

function DashboardPage({ tours, destinations, programs, gallery, about, contact }) {
  const stats = useMemo(() => [
    { title: 'Tours', value: tours.length, change: 'Managed', tone: 'accent' },
    { title: 'Destinations', value: destinations.length, change: 'Live', tone: 'blue' },
    { title: 'Programs', value: programs.length, change: 'Updated', tone: 'green' },
    { title: 'Gallery Items', value: gallery.length, change: 'Ready', tone: 'accent' },
  ], [tours, destinations, programs, gallery])

  return (
    <div className="page-stack">
      <section className="hero-card">
        <div>
          <p className="eyebrow">Content management</p>
          <h1>Manage every public page from one place</h1>
          <p>Update tours, destinations, programs, gallery stories, about content, and contact details with ease.</p>
        </div>
        <button className="primary-btn">Publish updates</button>
      </section>

      <section className="stats-grid four-col">
        {stats.map((item) => (
          <article key={item.title} className={`stat-card ${item.tone}`}>
            <p>{item.title}</p>
            <h3>{item.value}</h3>
            <span>{item.change}</span>
          </article>
        ))}
      </section>

      <section className="grid-2">
        <article className="panel">
          <div className="panel-header">
            <h2>Quick overview</h2>
            <a href="/about">Edit about</a>
          </div>
          <ul className="list">
            <li className="list-item"><div><strong>{about.companyName}</strong><p>{about.tagline}</p></div><span>About page</span></li>
            <li className="list-item"><div><strong>{contact.email}</strong><p>{contact.phone}</p></div><span>Contact info</span></li>
            <li className="list-item"><div><strong>{gallery[0]?.title || 'No gallery item'}</strong><p>Latest featured gallery story</p></div><span>Gallery</span></li>
          </ul>
        </article>

        <article className="panel">
          <div className="panel-header">
            <h2>Recent inquiries</h2>
            <a href="/contact">View all</a>
          </div>
          <ul className="list">
            {contacts.map((contactItem) => (
              <li key={contactItem.email} className="list-item">
                <div><strong>{contactItem.name}</strong><p>{contactItem.topic}</p></div>
                <span>{contactItem.time}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  )
}

function ToursPage({ tours, onAddTour, onEditTour, onDeleteTour }) {
  const [form, setForm] = useState({ name: '', duration: '', status: 'Published', guests: '' })
  const [editingId, setEditingId] = useState(null)

  const resetForm = () => {
    setForm({ name: '', duration: '', status: 'Published', guests: '' })
    setEditingId(null)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.name || !form.duration) return

    if (editingId) {
      onEditTour({ id: editingId, ...form, guests: form.guests || '0' })
    } else {
      onAddTour({ id: Date.now(), ...form, guests: form.guests || '0' })
    }

    resetForm()
  }

  const handleEdit = (tour) => {
    setEditingId(tour.id)
    setForm({ name: tour.name, duration: tour.duration, status: tour.status, guests: tour.guests })
  }

  return (
    <div className="page-stack">
      <section className="panel">
        <div className="panel-header">
          <h2>Tours management</h2>
          <button className="primary-btn" onClick={resetForm}><FiPlus /> Add tour</button>
        </div>

        <form className="form-card" onSubmit={handleSubmit}>
          <div className="form-grid">
            <label><span>Tour name</span><input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Enter tour name" /></label>
            <label><span>Duration</span><input value={form.duration} onChange={(event) => setForm({ ...form, duration: event.target.value })} placeholder="e.g. 10 Days" /></label>
            <label><span>Status</span><select value={form.status} onChange={(event) => setForm({ ...form, status: event.target.value })}><option value="Published">Published</option><option value="Draft">Draft</option></select></label>
            <label><span>Guests</span><input value={form.guests} onChange={(event) => setForm({ ...form, guests: event.target.value })} placeholder="e.g. 12" /></label>
          </div>
          <div className="form-actions">
            <button className="primary-btn" type="submit">{editingId ? 'Save changes' : 'Create tour'}</button>
            {editingId ? <button className="secondary-btn" type="button" onClick={resetForm}>Cancel</button> : null}
          </div>
        </form>

        <div className="table-card">
          <table>
            <thead><tr><th>Tour</th><th>Duration</th><th>Status</th><th>Guests</th><th>Action</th></tr></thead>
            <tbody>{tours.map((tour) => <tr key={tour.id}><td>{tour.name}</td><td>{tour.duration}</td><td><span className={`badge ${tour.status === 'Published' ? 'live' : 'draft'}`}>{tour.status}</span></td><td>{tour.guests}</td><td><div className="table-actions"><button className="icon-btn" onClick={() => handleEdit(tour)}><FiEdit3 /></button><button className="icon-btn danger" onClick={() => onDeleteTour(tour.id)}><FiTrash2 /></button></div></td></tr>)}</tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

function DestinationsPage({ destinations, onAddDestination, onEditDestination, onDeleteDestination }) {
  const [form, setForm] = useState({ name: '', region: 'Gilgit-Baltistan', description: '', bestSeason: 'Spring', slug: '', image: '' })
  const [editingId, setEditingId] = useState(null)

  const resetForm = () => {
    setForm({ name: '', region: 'Gilgit-Baltistan', description: '', bestSeason: 'Spring', slug: '', image: '' })
    setEditingId(null)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.name || !form.description) return
    if (editingId) onEditDestination({ id: editingId, ...form })
    else onAddDestination({ id: Date.now(), ...form })
    resetForm()
  }

  const handleEdit = (destination) => {
    setEditingId(destination.id)
    setForm({ ...destination })
  }

  return (
    <div className="page-stack">
      <section className="panel">
        <div className="panel-header"><h2>Destinations management</h2><button className="primary-btn" onClick={resetForm}><FiPlus /> New destination</button></div>
        <form className="form-card" onSubmit={handleSubmit}>
          <div className="form-grid">
            <label><span>Name</span><input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Destination name" /></label>
            <label><span>Region</span><input value={form.region} onChange={(event) => setForm({ ...form, region: event.target.value })} placeholder="Region" /></label>
            <label><span>Slug</span><input value={form.slug} onChange={(event) => setForm({ ...form, slug: event.target.value })} placeholder="destination-slug" /></label>
            <label><span>Best season</span><input value={form.bestSeason} onChange={(event) => setForm({ ...form, bestSeason: event.target.value })} placeholder="Spring" /></label>
            <label className="full-width"><span>Description</span><textarea value={form.description} onChange={(event) => setForm({ ...form, description: event.target.value })} rows="3" placeholder="Short description" /></label>
            <label className="full-width"><span>Image URL</span><input value={form.image} onChange={(event) => setForm({ ...form, image: event.target.value })} placeholder="https://" /></label>
          </div>
          <div className="form-actions"><button className="primary-btn" type="submit">{editingId ? 'Save changes' : 'Create destination'}</button>{editingId ? <button className="secondary-btn" type="button" onClick={resetForm}>Cancel</button> : null}</div>
        </form>
        <div className="card-grid">{destinations.map((destination) => <article key={destination.id} className="mini-card-panel"><div><h3>{destination.name}</h3><p>{destination.region}</p><span>{destination.description}</span></div><div className="table-actions"><button className="icon-btn" onClick={() => handleEdit(destination)}><FiEdit3 /></button><button className="icon-btn danger" onClick={() => onDeleteDestination(destination.id)}><FiTrash2 /></button></div></article>)}</div>
      </section>
    </div>
  )
}

function ProgramsPage({ programs, onAddProgram, onEditProgram, onDeleteProgram }) {
  const [form, setForm] = useState({ title: '', category: '', duration: '', description: '' })
  const [editingId, setEditingId] = useState(null)

  const resetForm = () => { setForm({ title: '', category: '', duration: '', description: '' }); setEditingId(null) }
  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.title || !form.description) return
    if (editingId) onEditProgram({ id: editingId, ...form })
    else onAddProgram({ id: Date.now(), ...form })
    resetForm()
  }
  const handleEdit = (program) => { setEditingId(program.id); setForm({ ...program }) }

  return (
    <div className="page-stack">
      <section className="panel">
        <div className="panel-header"><h2>Programs management</h2><button className="primary-btn" onClick={resetForm}><FiPlus /> New program</button></div>
        <form className="form-card" onSubmit={handleSubmit}>
          <div className="form-grid">
            <label><span>Title</span><input value={form.title} onChange={(event) => setForm({ ...form, title: event.target.value })} /></label>
            <label><span>Category</span><input value={form.category} onChange={(event) => setForm({ ...form, category: event.target.value })} /></label>
            <label><span>Duration</span><input value={form.duration} onChange={(event) => setForm({ ...form, duration: event.target.value })} /></label>
            <label className="full-width"><span>Description</span><textarea value={form.description} onChange={(event) => setForm({ ...form, description: event.target.value })} rows="3" /></label>
          </div>
          <div className="form-actions"><button className="primary-btn" type="submit">{editingId ? 'Save changes' : 'Create program'}</button>{editingId ? <button className="secondary-btn" type="button" onClick={resetForm}>Cancel</button> : null}</div>
        </form>
        <div className="card-grid">{programs.map((program) => <article key={program.id} className="mini-card-panel"><div><h3>{program.title}</h3><p>{program.category} · {program.duration}</p><span>{program.description}</span></div><div className="table-actions"><button className="icon-btn" onClick={() => handleEdit(program)}><FiEdit3 /></button><button className="icon-btn danger" onClick={() => onDeleteProgram(program.id)}><FiTrash2 /></button></div></article>)}</div>
      </section>
    </div>
  )
}

function GalleryPage({ galleryItems, onAddItem, onEditItem, onDeleteItem }) {
  const [form, setForm] = useState({ title: '', category: 'trekking', description: '', image: '' })
  const [editingId, setEditingId] = useState(null)

  const resetForm = () => { setForm({ title: '', category: 'trekking', description: '', image: '' }); setEditingId(null) }
  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.title || !form.image) return
    if (editingId) onEditItem({ id: editingId, ...form })
    else onAddItem({ id: Date.now(), ...form })
    resetForm()
  }
  const handleEdit = (item) => { setEditingId(item.id); setForm({ ...item }) }

  return (
    <div className="page-stack">
      <section className="panel">
        <div className="panel-header"><h2>Gallery management</h2><button className="primary-btn" onClick={resetForm}><FiPlus /> Add photo</button></div>
        <form className="form-card" onSubmit={handleSubmit}>
          <div className="form-grid">
            <label><span>Title</span><input value={form.title} onChange={(event) => setForm({ ...form, title: event.target.value })} /></label>
            <label><span>Category</span><input value={form.category} onChange={(event) => setForm({ ...form, category: event.target.value })} /></label>
            <label className="full-width"><span>Description</span><textarea value={form.description} onChange={(event) => setForm({ ...form, description: event.target.value })} rows="3" /></label>
            <label className="full-width"><span>Image URL</span><input value={form.image} onChange={(event) => setForm({ ...form, image: event.target.value })} /></label>
          </div>
          <div className="form-actions"><button className="primary-btn" type="submit">{editingId ? 'Save changes' : 'Upload image'}</button>{editingId ? <button className="secondary-btn" type="button" onClick={resetForm}>Cancel</button> : null}</div>
        </form>
        <div className="card-grid">{galleryItems.map((item) => <article key={item.id} className="mini-card-panel"><div><h3>{item.title}</h3><p>{item.category}</p><span>{item.description}</span></div><div className="table-actions"><button className="icon-btn" onClick={() => handleEdit(item)}><FiEdit3 /></button><button className="icon-btn danger" onClick={() => onDeleteItem(item.id)}><FiTrash2 /></button></div></article>)}</div>
      </section>
    </div>
  )
}

function AboutPage({ about, onUpdateAbout, onAddValue, onEditValue, onDeleteValue }) {
  const [form, setForm] = useState({ companyName: about.companyName, tagline: about.tagline, mission: about.mission, vision: about.vision, storyTitle: about.storyTitle, storyContent: about.storyContent, storyImage: about.storyImage })
  const [valueForm, setValueForm] = useState({ title: '', description: '', icon: '' })
  const [editingValueId, setEditingValueId] = useState(null)

  useEffect(() => {
    setForm({ companyName: about.companyName, tagline: about.tagline, mission: about.mission, vision: about.vision, storyTitle: about.storyTitle, storyContent: about.storyContent, storyImage: about.storyImage })
  }, [about])

  const handleSubmit = (event) => {
    event.preventDefault()
    onUpdateAbout({ ...about, ...form })
  }

  const handleValueSubmit = (event) => {
    event.preventDefault()
    if (!valueForm.title || !valueForm.description) return
    if (editingValueId) onEditValue({ id: editingValueId, ...valueForm })
    else onAddValue({ id: Date.now(), ...valueForm })
    setValueForm({ title: '', description: '', icon: '' })
    setEditingValueId(null)
  }

  const handleEditValue = (value) => {
    setEditingValueId(value.id)
    setValueForm({ title: value.title, description: value.description, icon: value.icon })
  }

  return (
    <div className="page-stack">
      <section className="panel">
        <div className="panel-header"><h2>About page editor</h2><button className="primary-btn" onClick={handleSubmit}>Save about content</button></div>
        <form className="form-card" onSubmit={handleSubmit}>
          <div className="form-grid">
            <label><span>Company name</span><input value={form.companyName} onChange={(event) => setForm({ ...form, companyName: event.target.value })} /></label>
            <label><span>Tagline</span><input value={form.tagline} onChange={(event) => setForm({ ...form, tagline: event.target.value })} /></label>
            <label className="full-width"><span>Mission</span><textarea value={form.mission} onChange={(event) => setForm({ ...form, mission: event.target.value })} rows="2" /></label>
            <label className="full-width"><span>Vision</span><textarea value={form.vision} onChange={(event) => setForm({ ...form, vision: event.target.value })} rows="2" /></label>
            <label><span>Story title</span><input value={form.storyTitle} onChange={(event) => setForm({ ...form, storyTitle: event.target.value })} /></label>
            <label className="full-width"><span>Story content</span><textarea value={form.storyContent} onChange={(event) => setForm({ ...form, storyContent: event.target.value })} rows="4" /></label>
            <label className="full-width"><span>Story image URL</span><input value={form.storyImage} onChange={(event) => setForm({ ...form, storyImage: event.target.value })} /></label>
          </div>
        </form>

        <div className="panel-header"><h2>Core values</h2></div>
        <form className="form-card" onSubmit={handleValueSubmit}>
          <div className="form-grid">
            <label><span>Title</span><input value={valueForm.title} onChange={(event) => setValueForm({ ...valueForm, title: event.target.value })} /></label>
            <label><span>Icon</span><input value={valueForm.icon} onChange={(event) => setValueForm({ ...valueForm, icon: event.target.value })} /></label>
            <label className="full-width"><span>Description</span><textarea value={valueForm.description} onChange={(event) => setValueForm({ ...valueForm, description: event.target.value })} rows="2" /></label>
          </div>
          <div className="form-actions"><button className="primary-btn" type="submit">{editingValueId ? 'Save value' : 'Add value'}</button>{editingValueId ? <button className="secondary-btn" type="button" onClick={() => { setEditingValueId(null); setValueForm({ title: '', description: '', icon: '' }) }}>Cancel</button> : null}</div>
        </form>
        <div className="card-grid">{about.values.map((value) => <article key={value.id} className="mini-card-panel"><div><h3>{value.title}</h3><p>{value.icon}</p><span>{value.description}</span></div><div className="table-actions"><button className="icon-btn" onClick={() => handleEditValue(value)}><FiEdit3 /></button><button className="icon-btn danger" onClick={() => onDeleteValue(value.id)}><FiTrash2 /></button></div></article>)}</div>
      </section>
    </div>
  )
}

function ContactPage({ contact, onUpdateContact }) {
  const [form, setForm] = useState(contact)

  useEffect(() => {
    setForm(contact)
  }, [contact])

  return (
    <div className="page-stack">
      <section className="panel">
        <div className="panel-header"><h2>Contact page management</h2><button className="primary-btn" onClick={() => onUpdateContact(form)}>Save contact details</button></div>
        <form className="form-card" onSubmit={(event) => { event.preventDefault(); onUpdateContact(form) }}>
          <div className="form-grid">
            <label><span>Email</span><input value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} /></label>
            <label><span>Phone</span><input value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} /></label>
            <label><span>Address</span><input value={form.address} onChange={(event) => setForm({ ...form, address: event.target.value })} /></label>
            <label><span>Hours</span><input value={form.hours} onChange={(event) => setForm({ ...form, hours: event.target.value })} /></label>
          </div>
        </form>
      </section>
    </div>
  )
}

function HomePage({ about }) {
  return (
    <div className="page-stack">
      <section className="panel">
        <div className="panel-header"><h2>Homepage content</h2><button className="primary-btn">Update hero</button></div>
        <div className="mini-card-panel">
          <h3>{about.companyName}</h3>
          <p>{about.tagline}</p>
          <span>Use this section to manage hero text, featured tours, and homepage highlights.</span>
        </div>
      </section>
    </div>
  )
}

function BookingsPage() {
  return (
    <div className="page-stack">
      <section className="panel">
        <div className="panel-header"><h2>Upcoming bookings</h2><button className="secondary-btn">Export</button></div>
        <div className="table-card"><table><thead><tr><th>Client</th><th>Tour</th><th>Date</th><th>Amount</th></tr></thead><tbody>{bookings.map((booking) => <tr key={booking.client}><td>{booking.client}</td><td>{booking.tour}</td><td>{booking.date}</td><td>{booking.amount}</td></tr>)}</tbody></table></div>
      </section>
    </div>
  )
}

function SettingsPage() {
  return (
    <div className="page-stack">
      <section className="panel">
        <div className="panel-header"><h2>Website settings</h2><button className="primary-btn">Save changes</button></div>
        <div className="settings-grid"><div className="setting-card"><h3>Branding</h3><p>Update site title, logo, and contact details.</p></div><div className="setting-card"><h3>Notifications</h3><p>Configure booking and inquiry alerts.</p></div><div className="setting-card"><h3>Permissions</h3><p>Manage editor and admin access roles.</p></div></div>
      </section>
    </div>
  )
}

function App() {
  const [tours, setTours] = useState(() => loadState('mountain-soul-admin-tours', initialTours))
  const [destinations, setDestinations] = useState(() => loadState('mountain-soul-admin-destinations', initialDestinations))
  const [programs, setPrograms] = useState(() => loadState('mountain-soul-admin-programs', initialPrograms))
  const [galleryItems, setGalleryItems] = useState(() => loadState('mountain-soul-admin-gallery', initialGallery))
  const [about, setAbout] = useState(() => loadState('mountain-soul-admin-about', initialAbout))
  const [contact, setContact] = useState(() => loadState('mountain-soul-admin-contact', initialContact))

  useEffect(() => saveState('mountain-soul-admin-tours', tours), [tours])
  useEffect(() => saveState('mountain-soul-admin-destinations', destinations), [destinations])
  useEffect(() => saveState('mountain-soul-admin-programs', programs), [programs])
  useEffect(() => saveState('mountain-soul-admin-gallery', galleryItems), [galleryItems])
  useEffect(() => saveState('mountain-soul-admin-about', about), [about])
  useEffect(() => saveState('mountain-soul-admin-contact', contact), [contact])

  const handleAddTour = (tour) => setTours((prev) => [tour, ...prev])
  const handleEditTour = (updatedTour) => setTours((prev) => prev.map((tour) => (tour.id === updatedTour.id ? updatedTour : tour)))
  const handleDeleteTour = (id) => setTours((prev) => prev.filter((tour) => tour.id !== id))

  const handleAddDestination = (destination) => setDestinations((prev) => [destination, ...prev])
  const handleEditDestination = (updatedDestination) => setDestinations((prev) => prev.map((destination) => (destination.id === updatedDestination.id ? updatedDestination : destination)))
  const handleDeleteDestination = (id) => setDestinations((prev) => prev.filter((destination) => destination.id !== id))

  const handleAddProgram = (program) => setPrograms((prev) => [program, ...prev])
  const handleEditProgram = (updatedProgram) => setPrograms((prev) => prev.map((program) => (program.id === updatedProgram.id ? updatedProgram : program)))
  const handleDeleteProgram = (id) => setPrograms((prev) => prev.filter((program) => program.id !== id))

  const handleAddGalleryItem = (item) => setGalleryItems((prev) => [item, ...prev])
  const handleEditGalleryItem = (updatedItem) => setGalleryItems((prev) => prev.map((item) => (item.id === updatedItem.id ? updatedItem : item)))
  const handleDeleteGalleryItem = (id) => setGalleryItems((prev) => prev.filter((item) => item.id !== id))

  const handleAddValue = (value) => setAbout((prev) => ({ ...prev, values: [...prev.values, value] }))
  const handleEditValue = (updatedValue) => setAbout((prev) => ({ ...prev, values: prev.values.map((value) => (value.id === updatedValue.id ? updatedValue : value)) }))
  const handleDeleteValue = (id) => setAbout((prev) => ({ ...prev, values: prev.values.filter((value) => value.id !== id) }))

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-block"><div className="brand-mark">MS</div><div><h2>Mountain Soul</h2><p>Admin Portal</p></div></div>
        <nav className="nav-list">{navItems.map(({ to, label, icon: Icon }) => <NavLink key={to} to={to} className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}><Icon /><span>{label}</span></NavLink>)}</nav>
        <div className="sidebar-foot"><div className="mini-card"><FiUsers /><div><strong>24 staff</strong><p>Team members online</p></div></div></div>
      </aside>

      <div className="main-panel">
        <header className="topbar"><div className="search-box"><FiSearch /><input type="text" placeholder="Search tours, content, contacts" /></div><div className="topbar-actions"><button className="icon-btn"><FiBell /></button><div className="profile-pill"><div className="avatar">A</div><div><strong>Admin</strong><p>Super admin</p></div></div></div></header>
        <main className="content">
          <Routes>
            <Route path="/" element={<DashboardPage tours={tours} destinations={destinations} programs={programs} gallery={galleryItems} about={about} contact={contact} />} />
            <Route path="/home" element={<HomePage about={about} />} />
            <Route path="/tours" element={<ToursPage tours={tours} onAddTour={handleAddTour} onEditTour={handleEditTour} onDeleteTour={handleDeleteTour} />} />
            <Route path="/destinations" element={<DestinationsPage destinations={destinations} onAddDestination={handleAddDestination} onEditDestination={handleEditDestination} onDeleteDestination={handleDeleteDestination} />} />
            <Route path="/programs" element={<ProgramsPage programs={programs} onAddProgram={handleAddProgram} onEditProgram={handleEditProgram} onDeleteProgram={handleDeleteProgram} />} />
            <Route path="/gallery" element={<GalleryPage galleryItems={galleryItems} onAddItem={handleAddGalleryItem} onEditItem={handleEditGalleryItem} onDeleteItem={handleDeleteGalleryItem} />} />
            <Route path="/about" element={<AboutPage about={about} onUpdateAbout={setAbout} onAddValue={handleAddValue} onEditValue={handleEditValue} onDeleteValue={handleDeleteValue} />} />
            <Route path="/contact" element={<ContactPage contact={contact} onUpdateContact={setContact} />} />
            <Route path="/bookings" element={<BookingsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
