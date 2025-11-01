// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   darkMode: 'class', // Enables dark mode via class
//   theme: {
//     extend: {
//       colors: {
//         // === TASTETRAIL BITESCORE PALETTE ===
//         trail: {
//           50: '#fff4e6',
//           100: '#ffe8cc',
//           200: '#ffd1a3',
//           300: '#ffb97a',
//           400: '#ffa152',
//           500: '#FF6B35',   // Primary: Trail Orange
//           600: '#e55a2b',
//           700: '#cc4a22',
//           800: '#b33a19',
//           900: '#992a11',
//         },
//         ganga: {
//           50: '#e6f7f5',
//           100: '#b3ece6',
//           200: '#80e0d7',
//           300: '#4dd4c8',
//           400: '#1ac8b9',
//           500: '#00A896',   // Secondary: Ganga Teal
//           600: '#009684',
//           700: '#008472',
//           800: '#007260',
//           900: '#00604e',
//         },
//         doon: {
//           500: '#2A9D8F',   // Doon Green (accent)
//           600: '#23897d',
//         },
//         saffron: {
//           50: '#fef8e6',
//           100: '#fdf1cc',
//           200: '#fbe59a',
//           300: '#f9d968',
//           400: '#f7cc36',
//           500: '#F4A261',   // Haridwar Saffron
//           600: '#f0923a',
//           700: '#e07f1a',
//         },
//         gold: {
//           400: '#f5d576',
//           500: '#E9C46A',   // Star Gold
//           600: '#d4b256',
//         },
//         slate: {
//           50: '#f8f9fa',
//           100: '#e9ecef',
//           200: '#dee2e6',
//           300: '#ced4da',
//           400: '#adb5bd',
//           500: '#6c757d',
//           600: '#495057',
//           700: '#343a40',
//           800: '#212529',
//           900: '#121416',
//           950: '#0d0f12',
//           night: '#264653', // Custom: Night Slate
//         },

//         // Semantic Aliases (Easy to use in components)
//         primary: '#FF6B35',     // trail-500
//         'primary-hover': '#e55a2b', // trail-600
//         secondary: '#00A896',   // ganga-500
//         accent: '#F4A261',      // saffron-500
//         success: '#2A9D8F',     // doon-500
//         warning: '#E9C46A',     // gold-500
//         muted: '#6c757d',       // slate-500
//         background: '#ffffff',
//         surface: '#f8f9fa',     // slate-50
//         'on-primary': '#ffffff',
//         'on-secondary': '#ffffff',
//       },

//       fontFamily: {
//         sans: ['Inter', 'system-ui', 'sans-serif'],
//         heading: ['Poppins', 'sans-serif'],
//         mono: ['"Space Mono"', 'monospace'],
//       },

//       borderRadius: {
//         xl: '12px',
//         '2xl': '20px',
//       },

//       boxShadow: {
//         card: '0 4px 12px rgba(0, 0, 0, 0.08)',
//         'card-hover': '0 8px 20px rgba(0, 0, 0, 0.12)',
//       },
//     },
//   },
//   plugins: [],
// };
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // === TASTETRAIL BITESCORE PALETTE ===
        trail: {
          50: '#fff4e6',
          100: '#ffe8cc',
          200: '#ffd1a3',
          300: '#ffb97a',
          400: '#ffa152',
          500: '#FF6B35',
          600: '#e55a2b',
          700: '#cc4a22',
          800: '#b33a19',
          900: '#992a11',
        },
        ganga: {
          50: '#e6f7f5',
          100: '#b3ece6',
          200: '#80e0d7',
          300: '#4dd4c8',
          400: '#1ac8b9',
          500: '#00A896',
          600: '#009684',
          700: '#008472',
          800: '#007260',
          900: '#00604e',
        },
        doon: {
          500: '#2A9D8F',
          600: '#23897d',
        },
        saffron: {
          50: '#fef8e6',
          100: '#fdf1cc',
          200: '#fbe59a',
          300: '#f9d968',
          400: '#f7cc36',
          500: '#F4A261',
          600: '#f0923a',
          700: '#e07f1a',
        },
        gold: {
          400: '#f5d576',
          500: '#E9C46A',
          600: '#d4b256',
        },
        slate: {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          500: '#6c757d',
          600: '#495057',
          700: '#343a40',
          800: '#212529',
          900: '#121416',
          950: '#0d0f12',
          night: '#264653',
        },
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },

      borderRadius: {
        xl: '12px',
        '2xl': '20px',
      },

      boxShadow: {
        card: '0 4px 12px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 8px 20px rgba(0, 0, 0, 0.12)',
      },

      // Add borderColor extension
      borderColor: {
        border: 'var(--border-color, #dee2e6)',
      },
    },
  },
  plugins: [],
}