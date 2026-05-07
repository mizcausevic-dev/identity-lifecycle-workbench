import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('Identity Lifecycle Workbench', () => {
  it('renders the main lifecycle title and queue section', () => {
    render(<App />);

    expect(screen.getByText(/joiners, movers, leavers/i)).toBeTruthy();
    expect(screen.getByText(/priority lifecycle workflows/i)).toBeTruthy();
    expect(screen.getByText(/backlog by workflow lane/i)).toBeTruthy();
  });
});
