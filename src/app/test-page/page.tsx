export default function TestPage() {
  return (
    <div style={{
      padding: '40px',
      background: 'linear-gradient(to bottom, #4b3b00, #030311, #04042e)',
      minHeight: '100vh',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>
        Test Page
      </h1>
      <p style={{ fontSize: '1.5rem', maxWidth: '600px', marginBottom: '30px' }}>
        This is a simple test page to diagnose rendering issues.
        If you can see this content, basic rendering is working.
      </p>
      <div style={{
        padding: '20px',
        background: 'rgba(0,0,0,0.3)',
        borderRadius: '10px',
        width: '100%',
        maxWidth: '600px'
      }}>
        <h2 style={{ marginBottom: '10px', color: '#FFD700' }}>Diagnostic Information</h2>
        <p>Current time: {new Date().toLocaleTimeString()}</p>
        <p>Page rendered correctly</p>
      </div>
    </div>
  );
}
