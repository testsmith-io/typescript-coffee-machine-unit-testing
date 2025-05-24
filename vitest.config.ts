import { defineConfig } from 'vitest/config';

export default defineConfig( {
    test: {
        globals: true,         // Enable global APIs like describe, it, expect
        environment: 'node',   // Simulate Node.js environment
        include: ['tests/**/*.test.ts'], // Pattern to locate test files
        coverage: {
            reporter: ['text', 'html'],
            reportsDirectory: 'coverage',
        },
    },
} );
