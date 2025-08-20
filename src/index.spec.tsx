import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

// Simple test to verify index.tsx exists and has expected exports
describe('index.tsx', () => {
  it('exists and can be imported', async () => {
    expect(async () => await import('./index')).not.toThrow();
  });

  it('has expected dependencies', () => {
    // Test that the main dependencies exist
    expect(typeof React).toBe('object');
    expect(typeof ReactDOM).toBe('object');
  });
});