export default function SimplePage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #050505, #09090f, #080818)',
      color: 'white',
      fontFamily: 'system-ui, sans-serif',
      padding: '20px'
    }}>
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '16px 20px',
        background: 'rgba(0,0,0,0.7)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 100
      }}>
        <div style={{ fontWeight: 'bold', fontSize: '24px' }}>
          <span style={{ color: 'gold' }}>Wild</span>
          <span>World</span>
          <span style={{ color: 'crimson' }}>Wanderers</span>
        </div>
        <nav>
          <ul style={{
            display: 'flex',
            gap: '20px',
            listStyle: 'none',
            margin: 0,
            padding: 0
          }}>
            <li><a href="#" style={{ color: 'gold', textDecoration: 'none' }}>Home</a></li>
            <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>About</a></li>
            <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Itinerary</a></li>
            <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contact</a></li>
          </ul>
        </nav>
      </header>

      <main style={{ paddingTop: '80px' }}>
        <section style={{
          minHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '20px'
        }}>
          <h1 style={{
            fontSize: '3rem',
            marginBottom: '20px'
          }}>
            <span>Discover Your </span>
            <span style={{ color: 'crimson' }}>Wild Within</span>
          </h1>
          <p style={{
            maxWidth: '600px',
            marginBottom: '30px',
            fontSize: '1.2rem',
            lineHeight: 1.6
          }}>
            In a world of WWW (World Wide Web), we aim to find the WWW (Wild World Wanderers)
            in you. Transformative journeys in the breathtaking beauty of Kashmir.
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <button style={{
              background: 'linear-gradient(to right, gold, orange)',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '30px',
              color: 'black',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}>
              Begin Your Journey
            </button>
            <button style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.3)',
              padding: '12px 24px',
              borderRadius: '30px',
              color: 'white',
              cursor: 'pointer'
            }}>
              Our Vision
            </button>
          </div>
        </section>

        <section style={{
          padding: '60px 20px',
          background: 'rgba(0,0,0,0.3)'
        }}>
          <h2 style={{
            textAlign: 'center',
            marginBottom: '40px',
            fontSize: '2.5rem'
          }}>
            <span>Your </span>
            <span style={{ color: 'gold' }}>Itinerary</span>
          </h2>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}>
            <div style={{
              background: 'rgba(0,0,0,0.5)',
              padding: '30px',
              borderRadius: '10px',
              border: '1px solid rgba(255,215,0,0.2)'
            }}>
              <h3 style={{ color: 'gold', marginBottom: '16px' }}>Day 1 - Arrival</h3>
              <ul style={{
                paddingLeft: '20px',
                lineHeight: 1.6
              }}>
                <li>Transfer from Airport to Resort in Srinagar</li>
                <li>Traditional welcome with Herbal Tea</li>
                <li>Lunch at Resort</li>
                <li>Pilgrim Induction</li>
                <li>Dinner at Resort</li>
              </ul>
            </div>

            <div style={{
              background: 'rgba(0,0,0,0.5)',
              padding: '30px',
              borderRadius: '10px',
              border: '1px solid rgba(255,215,0,0.2)'
            }}>
              <h3 style={{ color: 'gold', marginBottom: '16px' }}>Day 2 - Sacred Pilgrimage</h3>
              <ul style={{
                paddingLeft: '20px',
                lineHeight: 1.6
              }}>
                <li>Breakfast at Resort</li>
                <li>Transfer to Fakir Gujri</li>
                <li>The Hike to Samkaropala</li>
                <li>Packed Lunch on the Peak</li>
                <li>Overnight in shared camps</li>
              </ul>
            </div>

            <div style={{
              background: 'rgba(0,0,0,0.5)',
              padding: '30px',
              borderRadius: '10px',
              border: '1px solid rgba(255,215,0,0.2)'
            }}>
              <h3 style={{ color: 'gold', marginBottom: '16px' }}>Day 3 - Spiritual Practice</h3>
              <ul style={{
                paddingLeft: '20px',
                lineHeight: 1.6
              }}>
                <li>Breakfast with Herbal Tea</li>
                <li>Meditation and Satsang</li>
                <li>Lunch at Base Camp</li>
                <li>Return to Resort</li>
                <li>Dinner at Resort</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer style={{
        padding: '40px 20px',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        textAlign: 'center'
      }}>
        <p>&copy; 2025 Wild World Wanderers. All rights reserved.</p>
      </footer>
    </div>
  );
}
