import React, { Children } from 'react';
import { Section } from './Section/Section';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 36,
        color: '#010101',
      }}
    >
      <Section title="Please leave feedback">{Children}</Section>
    </div>
  );
};
