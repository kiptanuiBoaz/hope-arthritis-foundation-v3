/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        // Custom colors
        primary: {
          DEFAULT: '#f97316', // orange-500
          dark: '#ea580c',    // orange-600
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: '#273338', // dark blue from the site
          foreground: "hsl(var(--secondary-foreground))",
        },
        tertiary: {
          DEFAULT: '#59924b', // main brand green
          50: '#f3f9f4',
          100: '#e0f5e6',
          200: '#b8e1c2',
          300: '#8dcb9c',
          400: '#65b47a',
          500: '#59924b', // main brand color
          600: '#4b7c3f', // dark shade
          700: '#38602e',
          800: '#25441e',
          900: '#14290f',
          light: '#e0f5e6',
          dark: '#4b7c3f',
        },
        background: {
          light: '#f6f9f8',  // Light background color
          DEFAULT: "hsl(var(--background))",
        },
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        brandgreen: {
          50: '#f3f9f4',
          100: '#e0f5e6',
          200: '#b8e1c2',
          300: '#8dcb9c',
          400: '#65b47a',
          500: '#59924b', // main brand color
          600: '#4b7c3f', // dark shade
          700: '#38602e',
          800: '#25441e',
          900: '#14290f',
          DEFAULT: '#59924b',
          light: '#e0f5e6',
          dark: '#4b7c3f',
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animate')
  ],
};