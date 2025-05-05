"use strict";
import React from 'react';
/**
 * Simplified App Component
 *
 * A minimal version of the app for initial build testing
 */
const App = function () {
  return React.createElement('div', { className: "App" },
    React.createElement('header', { className: "App-header" },
      React.createElement('h1', null, 'Recovery Office'),
      React.createElement('p', null, 
        'A holistic wellness center using sacred geometry principles for optimal healing.'
      ),
      React.createElement('div', null,
        React.createElement('button', { 
          style: { 
            backgroundColor: '#81976F', 
            color: 'white', 
            border: 'none', 
            padding: '10px 20px',
            borderRadius: '4px',
            margin: '10px',
            cursor: 'pointer'
          }
        }, 'Book a Consultation'),
        React.createElement('button', { 
          style: { 
            backgroundColor: 'transparent', 
            color: '#81976F', 
            border: '1px solid #81976F', 
            padding: '10px 20px',
            borderRadius: '4px',
            margin: '10px',
            cursor: 'pointer'
          }
        }, 'Learn More')
      )
    )
  );
};

export default App;
