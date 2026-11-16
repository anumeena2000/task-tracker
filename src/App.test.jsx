import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('Task Tracker App', () => {
  it('renders initial tasks', () => {
    render(<App />);
    expect(screen.getByText('Setup Git repository')).toBeDefined();
    expect(screen.getByText('Configure CI/CD pipeline')).toBeDefined();
  });

  it('adds a new task', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Add a new task...');
    const addButton = screen.getByText('Add');

    fireEvent.change(input, { target: { value: 'Deploy to Azure' } });
    fireEvent.click(addButton);

    expect(screen.getByText('Deploy to Azure')).toBeDefined();
  });

  it('deletes a task', () => {
    render(<App />);
    const deleteButtons = screen.getAllByText('Delete');
    fireEvent.click(deleteButtons[0]);

    expect(screen.queryByText('Setup Git repository')).toBeNull();
  });
});