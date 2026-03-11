import { useParams, Link } from 'react-router-dom'
import imgeMuseAbove from './media/above.png'
import imgeabo from './media/kit/abpvecut.png'
import SaudiRiyalIcon from './SaudiRiyalIcon'

const products = {
  'scyrox-v8': {
    type: 'PRE-BUILTS',
    name: 'Scyrox V8 Kit 22g',
    badge: 'إصدار جديد',
    price: '410 ',
    originalPrice: '500 ',
    status: 'متوفر',
    soldOut: false,
    description: 'أحدث ابتكاراتنا — مُركب بالكامل وجاهز للاستخدام مباشرة..',
    specs: [
      { label: 'Internal',      value: 'Scyrox V8' },
      { label: 'Weight',        value: '22g' },
      { label: 'Polling Rate',  value: 'Up to 8000Hz' },
      { label: 'Connection',    value: 'USB-C / Wireless' },
      { label: '3D Printing',   value: 'Fully 3D-printed / Maximum Grip' },
      { label: 'Grip Style',    value: 'Fingertip' },
    ],
    images: [imgeMuseAbove],
  },
  'scyrox-v8-kit': {
    type: 'MOD-KITS',
    name: 'Scyrox V8 Kit',
    badge: 'الأكثر مبيعًا',
    price: '130 ',
    originalPrice: '200 ',
    status: 'متوفر',
    soldOut: false,
    description: 'يأتي بدون القطع الداخلية (يلزم ان يكون لديك الماوس الفعلي Scyrox V8)',
    specs: [
      { label: 'Internal',      value: 'Scyrox V8' },
      { label: 'Weight',        value: '22g' },
      { label: 'Polling Rate',  value: 'Up to 8000Hz' },
      { label: 'Connection',    value: 'USB-C / Wireless' },
      { label: '3D Printing',   value: 'Fully 3D-printed / Maximum Grip' },
      { label: 'Grip Style',    value: 'Fingertip' },
    ],
    images: [imgeabo],
  },
}

export default function ProductPage() {
  const { slug } = useParams()
  const product = products[slug]

  if (!product) {
    return (
      <div style={{ padding: '6rem 2rem', textAlign: 'center' }}>
        <p style={{ color: '#999', fontSize: '1rem' }}>المنتج غير موجود</p>
        <Link to="/" style={{ color: '#000', fontSize: '0.85rem', textDecoration: 'underline' }}>
          العودة للرئيسية
        </Link>
      </div>
    )
  }

  const whatsappNumber = '966502280255'
  const message = encodeURIComponent(`مرحبا، أريد الطلب:\n\nالمنتج: ${product.name}\nالسعر: ${product.price}`)
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '80vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 2rem' }}>

        {/* Back link */}
        <Link
          to="/"
          style={{ color: '#999', fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '2.5rem' }}
          onMouseEnter={e => e.target.style.color = '#000'}
          onMouseLeave={e => e.target.style.color = '#999'}
        >
          ← Back
        </Link>

        {/* Main grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem', alignItems: 'start' }}>

          {/* صورة المنتج */}
          <div style={{ overflow: 'hidden', borderRadius: '12px', backgroundColor: '#f7f7f7' }}>
            <img
              src={product.images[0]}
              alt={product.name}
              style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.5s ease' }}
              onMouseEnter={e => e.target.style.transform = 'scale(1.03)'}
              onMouseLeave={e => e.target.style.transform = 'scale(1)'}
            />
          </div>

          {/* معلومات المنتج */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {/* Badge */}
            <span style={{ fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#999', fontWeight: '600' }}>
              {product.badge}
            </span>

            {/* Type */}
            <h1 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#000', margin: 0 }}>
              {product.type}
            </h1>

            {/* اسم المنتج */}
            <h2 style={{ fontSize: '2.4rem', fontWeight: '800', color: '#000', margin: 0, lineHeight: '1.1' }}>
              {product.name}
            </h2>

{/* السعر */}
<div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
  <p style={{ fontSize: '1.5rem', fontWeight: '700', color: '#000', margin: 0, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
    {product.price} <SaudiRiyalIcon size={20} color="#000" />
  </p>
  {product.originalPrice && (
    <p style={{ fontSize: '1.1rem', color: '#bbb', margin: 0, textDecoration: 'line-through', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
      {product.originalPrice} <SaudiRiyalIcon size={17} color="#bbb" />
    </p>
  )}
</div>

            {/* الوصف */}
            <p style={{ color: '#666', lineHeight: '1.8', fontSize: '0.95rem', margin: 0 }}>
              {product.description}
            </p>

            {/* المواصفات */}
            <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {product.specs.map((spec) => (
                <div key={spec.label} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem' }}>
                  <span style={{ color: '#999' }}>{spec.label}</span>
                  <span style={{ color: '#000', fontWeight: '600' }}>{spec.value}</span>
                </div>
              ))}
            </div>

            {/* زر واتساب */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', backgroundColor: '#000', color: '#fff', padding: '1rem 2rem', fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: '700', borderRadius: '4px', textDecoration: 'none', width: '100%', boxSizing: 'border-box', transition: 'opacity 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.75'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.857L.057 23.428a.75.75 0 00.906.919l5.688-1.442A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.705 9.705 0 01-4.95-1.355l-.355-.211-3.676.932.978-3.573-.231-.368A9.718 9.718 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
                </svg>
                للطلب يرجى التواصل
              </a>
            </div>

            {/* ملاحظة */}


          </div>
        </div>
      </div>
    </div>
  )
}