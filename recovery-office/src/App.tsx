import * as React from 'react';

/**
 * Simplified App Component
 * 
 * A minimal version of the app for initial build testing
 */
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Recovery Office</h1>
        <p>
          A holistic wellness center using sacred geometry principles for optimal healing.
        </p>
        <div>
          <button 
            style={{ 
              backgroundColor: '#81976F', 
              color: 'white', 
              border: 'none', 
              padding: '10px 20px',
              borderRadius: '4px',
              margin: '10px',
              cursor: 'pointer'
            }}
          >
            Book a Consultation
          </button>
          <button
            style={{ 
              backgroundColor: 'transparent', 
              color: '#81976F', 
              border: '1px solid #81976F', 
              padding: '10px 20px',
              borderRadius: '4px',
              margin: '10px',
              cursor: 'pointer'
            }}
          >
            Learn More
          </button>
        </div>
      </header>
    </div>
  );
};

export default App; 





