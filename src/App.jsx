import React from "react";
import { Routes, Route, Link } from 'react-router-dom'
import Logo from './media/Screenshot_34.png';
import imgeMuseAbove from './media/above.png';
import imgeabo from './media/kit/abpvecut.png'
import ProductPage from './ProductPage'
import SaudiRiyalIcon from './SaudiRiyalIcon'

// Header
function Header() {
  return (
    <header style={{ backgroundColor: '#fff', borderBottom: '1px solid #e5e5e5', position: 'sticky', top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1.1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/">
          <img src={Logo} alt="Shapeless"  className="h-6 w-auto md:h-[38px]" />
        </Link>

        <nav style={{ display: 'flex', gap: '2.5rem' }}>
          {[{ label: 'Home', to: '/' }, { label: 'Products', to: '/' }, { label: 'About', to: '/' }].map(item => (
            <Link
              key={item.label}
              to={item.to}
              style={{ color: '#999', fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', transition: 'color 0.15s' }}
              onMouseEnter={e => e.target.style.color = '#000'}
              onMouseLeave={e => e.target.style.color = '#999'}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

// Hero
function HeroVideo() {
  return (
    <section style={{ backgroundColor: '#fff', width: '100%' }}>
      <video
        className="mt-5"
        style={{ width: '100%', display: 'block', maxHeight: '650px', objectFit: 'cover' }}
        muted
        autoPlay
        loop
        playsInline
      >
        <source src="https://res.cloudinary.com/dw8xhyvog/video/upload/M8908_qkr4iv.mp4" type="video/mp4" />
      </video>
    </section>
  );
}

// Divider
function Divider() {
  return <div style={{ height: '1px', backgroundColor: '#e5e5e5' }} />;
}

// Product Row
function ProductRow({ badge, label, title, body, tagline, originalPrice, href, imgSrc, imgRight }) {
  const textBlock = (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1rem' }}>

      <span style={{ fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#999', fontWeight: '600' }}>
        {badge}
      </span>

      {label && (
        <span style={{ color: '#000', fontSize: '1.35rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: '700' }}>
          {label}
        </span>
      )}

      <h2 style={{ fontSize: '2.2rem', fontWeight: '800', lineHeight: '1.2', color: '#000', margin: 0 }}>
        {title}
      </h2>

      <p style={{ color: '#666', lineHeight: '1.8', fontSize: '0.95rem', margin: 0 }}>
        {body}
      </p>

{/* السعر */}
<div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
  <p style={{ fontSize: '1.3rem', fontWeight: '700', color: '#000', margin: 0, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
    {tagline} <SaudiRiyalIcon size={18} color="#000" />
  </p>
  {originalPrice && (
    <p style={{ fontSize: '0.95rem', color: '#bbb', margin: 0, textDecoration: 'line-through', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
      {originalPrice} <SaudiRiyalIcon size={15} color="#bbb" />
    </p>
  )}
</div>

      <div>
        <Link
          to={href}
          style={{ display: 'inline-block', backgroundColor: '#000', color: '#fff', padding: '0.75rem 2rem', fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: '700', borderRadius: '4px', textDecoration: 'none', transition: 'opacity 0.15s' }}
          onMouseEnter={e => e.target.style.opacity = '0.75'}
          onMouseLeave={e => e.target.style.opacity = '1'}
        >
          Shop Now
        </Link>
      </div>
    </div>
  );

  const imgBlock = (
    <div style={{ overflow: 'hidden', borderRadius: '12px', backgroundColor: '#f7f7f7' }}>
      <img
        src={imgSrc}
        alt={title}
        style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.5s ease' }}
        onMouseEnter={e => e.target.style.transform = 'scale(1.04)'}
        onMouseLeave={e => e.target.style.transform = 'scale(1)'}
      />
    </div>
  );

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '6rem 2rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem', alignItems: 'center' }}>
        {imgRight ? <>{textBlock}{imgBlock}</> : <>{imgBlock}{textBlock}</>}
      </div>
    </div>
  );
}

// Product Section
function ProductSection() {
  const scyroxFull = {
    label: "PRE-BUILT",
    badge: "إصدار جديد",
    title: "Scyrox V8 Kit",
    body: <>أحدث ابتكاراتنا — <strong style={{ color: '#000' }}>Scyrox V8 Kit</strong>. وزن 22 جرام فقط، مُركب بالكامل وجاهز للاستخدام مباشرة.</>,
    tagline: "410",
    originalPrice: "500 ",
    href: "/products/scyrox-v8",
    imgSrc: imgeMuseAbove,
    imgRight: false,
  };

  const scyroxKit = {
    label: "MOD-KIT",
    badge: "الأكثر مبيعًا",
    title: "Scyrox V8 Kit",
    body: <>يأتي بدون القطع الداخلية (يلزم ان يكون لديك الماوس الفعلي Scyrox V8)<strong style={{ color: '#000' }}>Scyrox V8 Kit</strong> بدون الماذربورد، يشمل جميع القطع الأخرى.</>,
    tagline: "130 ",
    originalPrice: "200 ",
    href: "/products/scyrox-v8-kit",
    imgSrc: imgeabo,
    imgRight: true,
  };

  return (
    <div style={{ backgroundColor: '#fff' }}>
      <Divider />
      <ProductRow {...scyroxFull} />
      <Divider />
      <ProductRow {...scyroxKit} />
      <Divider />
    </div>
  );
}

// Newsletter
function Newsletter() {
  return (
    <section style={{ backgroundColor: '#fff', padding: '6rem 2rem' }}>
      <div style={{ maxWidth: '480px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#999', marginBottom: '1rem' }}>
          Newsletter
        </p>
        <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#000', marginBottom: '0.6rem' }}>
          First to know.
        </h2>
        <p style={{ color: '#999', fontSize: '0.92rem', marginBottom: '2rem', lineHeight: '1.7' }}>
          New drops and restocks — straight to your inbox.
        </p>
        <form style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
          <input
            type="email"
            placeholder="your@email.com"
            style={{ flex: 1, minWidth: '200px', padding: '0.75rem 1rem', border: '1px solid #e5e5e5', borderRadius: '4px', fontSize: '0.9rem', outline: 'none', color: '#000', backgroundColor: '#fff', transition: 'border-color 0.15s' }}
            onFocus={e => e.target.style.borderColor = '#000'}
            onBlur={e => e.target.style.borderColor = '#e5e5e5'}
          />
          <button
            type="submit"
            style={{ backgroundColor: '#000', color: '#fff', padding: '0.75rem 1.5rem', fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: '700', borderRadius: '4px', border: 'none', cursor: 'pointer', transition: 'opacity 0.15s', whiteSpace: 'nowrap' }}
            onMouseEnter={e => e.target.style.opacity = '0.75'}
            onMouseLeave={e => e.target.style.opacity = '1'}
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #e5e5e5', padding: '2rem', textAlign: 'center' }}>
      <p style={{ color: '#bbb', fontSize: '0.75rem', letterSpacing: '0.08em' }}>
        © 2026 SHAPELESS — All rights reserved
      </p>
    </footer>
  );
}

// Home Page
function HomePage() {
  return (
    <main>
      <HeroVideo />
      <ProductSection />
      <Newsletter />
    </main>
  )
}

// App
export default function App() {
  return (
    <div style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", backgroundColor: '#fff' }}>
      <Header /><script data-goatcounter="https://sam009.goatcounter.com/count"
        async src="//gc.zgo.at/count.js"></script>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:slug" element={<ProductPage />} />
      </Routes>
      <Footer />
    </div>
  );
}