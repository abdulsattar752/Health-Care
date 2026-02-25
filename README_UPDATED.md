# Health Care - AI-Powered Health Assistant

A modern, responsive web application for health management with AI-powered features including symptom checking, diet planning, and 24/7 medical guidance.

## 🎨 Design & UI/UX Features

### Modern Color Scheme

- **Primary Color**: #0066ff (Modern Blue)
- **Secondary Color**: #00d4ff (Cyan)
- **Accent Colors**: Red (#ff6b6b), Green (#10b981), Orange (#f59e0b)
- **Professional gradients** throughout the interface

### Responsive Design

- ✅ **Mobile-First Approach**: Optimized for all screen sizes
- ✅ **Desktop**: Full-featured layout with sidebar navigation
- ✅ **Tablet**: Optimized grid layouts
- ✅ **Mobile**: Touch-friendly components with collapsible menus

### UI Components

- Beautiful gradient navigation bar with mobile menu toggle
- Responsive sidebar with collapsible navigation
- Card-based layout system with hover effects
- Modern form components with validation
- Interactive health metrics cards
- Chat interface with real-time messaging
- Animated transitions and smooth interactions
- Dark mode support throughout the app

## 🚀 Features

### Core Features

1. **AI Symptom Checker** 🔍
   - Describe symptoms and get AI analysis
   - Probability-based diagnostic suggestions
   - Risk assessment and recommendations

2. **Personalized Diet Planner** 🍎
   - Customized meal plans based on health goals
   - Nutritional information and tracking
   - Daily calorie and macro calculations

3. **AI Chat Doctor** 💬
   - 24/7 AI-powered health guidance
   - Quick question templates
   - Real-time chat interface

4. **Health Dashboard** 📊
   - Real-time health metrics display
   - Risk assessment overview
   - Recent reports and activity tracking
   - Quick action buttons

5. **User Profile Management** 👤
   - Personal health information
   - Medical history tracking
   - Account settings and preferences
   - Privacy controls

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx           # Responsive navigation with mobile menu
│   ├── Sidebar.jsx          # Dashboard sidebar navigation
│   ├── HealthCard.jsx       # Health score display component
│   ├── RiskBadge.jsx        # Risk level indicator
│   ├── ProtectedRoute.jsx   # Route protection for authenticated users
│   └── ChatBox.jsx          # Chat component
│
├── pages/
│   ├── Home.jsx             # Landing page with features
│   ├── Login.jsx            # User login page
│   ├── Register.jsx         # User registration with multi-step form
│   ├── Dashboard.jsx        # Main health dashboard
│   ├── SymptomChecker.jsx   # Symptom analysis page
│   ├── ChatDoctor.jsx       # AI chat interface
│   ├── DietPlanner.jsx      # Diet planning page
│   └── Profile.jsx          # User profile management
│
├── context/
│   └── AuthContext.jsx      # Authentication state management
│
├── services/
│   └── api.js               # API integration (placeholder)
│
├── styles/
│   ├── index.css            # Global styles and variables
│   ├── App.css              # App-level styles
│   ├── Navbar.css           # Navbar responsive styles
│   ├── Sidebar.css          # Sidebar responsive styles
│   ├── Home.css             # Home page styles
│   ├── AuthPages.css        # Login/Register styles
│   ├── Dashboard.css        # Dashboard styles
│   ├── Components.css       # Component-specific styles
│   └── Features.css         # Feature pages styles
│
├── App.jsx                  # Main App component
└── main.jsx                 # Entry point
```

## 🎯 Color Palette

### Light Theme

- Background: #f8fafc
- Card Background: #ffffff
- Text Primary: #1f2937
- Text Secondary: #6b7280
- Borders: #e5e7eb

### Dark Theme

- Background: #0f172a
- Card Background: #1e293b
- Text Primary: #e2e8f0
- Text Secondary: #cbd5e1
- Borders: #334155

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (Small phones to tablets)
- **Tablet**: 768px - 1023px (Large tablets)
- **Desktop**: ≥ 1024px (Desktops and large screens)

## ✨ CSS Features

### Global Utilities

- Consistent spacing system
- Responsive grid and flex layouts
- Shadow utilities for depth
- Border radius system
- Smooth transitions and animations
- Dark mode media queries

### Component Styles

- Buttons: Primary, Secondary, Danger variants with hover states
- Forms: Validated inputs with error states
- Cards: Elevated cards with animation
- Badges: Status indicators with color variations
- Tables: Responsive data tables
- Charts & Metrics: Visual health data display

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## 🔐 Authentication

- Local authentication with context API
- Protected routes for authenticated users
- JWT token storage in localStorage
- Dark mode preference persistence

## 📊 User Journey

1. **Landing Page**: Learn about features
2. **Registration**: Multi-step signup process
3. **Dashboard**: Access all health tools
4. **Features**: Use symptom checker, diet planner, AI chat
5. **Profile**: Manage personal health data

## 🎨 Design Principles

- **Clean & Minimal**: Uncluttered interface focusing on health data
- **Accessible**: Proper contrast ratios, readable fonts
- **Consistent**: Unified component design system
- **Intuitive**: Clear navigation and user flows
- **Modern**: Contemporary design patterns and animations

## 🔧 Technology Stack

- **React 19**: UI library
- **React Router**: Navigation
- **React Hook Form**: Form management
- **Vite**: Build tool
- **CSS3**: Styling with variables and gradients

## 📝 Future Enhancements

- Integration with real health APIs
- Real-time notifications
- Data visualization charts
- Export health reports as PDF
- Integration with wearable devices
- Community features
- Multi-language support

## 📄 License

MIT License - Feel free to use this project for personal or commercial purposes.

## 👨‍💻 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For support, please contact: support@healthcare.app

---

**Version**: 1.0.0  
**Last Updated**: February 2026
