# CSC642Project
# Craigslist-Inspired Marketplace Prototype

A modern web application prototype inspired by Craigslist, featuring a purple color scheme, product listings, search functionality, messaging system, and category browsing.

## 🚀 Features

### Implemented Features

#### 1. **Home Page**
- Large centered Craigslist logo
- Search bar integration
- Category buttons (Clothing, Community, Services, Housing, Jobs, Forums)
- Click "Clothing" to navigate to the shopping category page

#### 2. **Search Results Page**
- Grid layout displaying 8 Wii console listings
- Filter options (Item: Best Match, Condition, Price)
- Listing cards with:
  - Product images
  - Titles
  - Prices
  - Favorite/heart button functionality
- Click any listing to view details

#### 3. **Listing Detail Page**
- Image gallery with thumbnails (positioned on the left side)
- Main product image display
- Product information (title, price, condition, posting date)
- Detailed product description
- Seller location section with interactive map showing San Francisco Bay Area
- Radius circle overlay on map indicating approximate seller location
- Related listings carousel
- Quick message options for contacting seller
- Custom message input

#### 4. **Chat/Messaging System**
- Conversation sidebar showing active chats
- Full messaging interface
- Pre-populated conversation with seller response
- Real-time message sending (user can send messages)
- Clickable listing images to navigate back to listing page
- Message timestamps

#### 5. **Shopping/Clothing Category Page**
- Large "Shopping" heading
- Interactive carousel showing 3 clothing items at a time (5 total)
- Left/right navigation arrows to browse through listings
- Listing cards matching search page style with favorite buttons
- 4x4 grid of clothing subcategories
- Search functionality integrated

#### 6. **Header Navigation (Global)**
- Clickable Craigslist logo (returns to home)
- Browse Categories dropdown
- Search bar with category filter dropdown
- "Sell" button
- "Chat" button to access messaging
- Saved listings (heart icon)
- Notifications bell
- User profile icon

## 🛠 Tech Stack

### Core Technologies
- **React** (v18+) - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** (v4.0) - Utility-first CSS framework
- **Vite** - Build tool and development server

### Dependencies
- **lucide-react** - Icon library for UI elements (Search, Heart, Bell, User, ChevronDown, ChevronLeft, ChevronRight, MapPin, Flag, Share2, MessageCircle, Send, ArrowLeft)

### Assets
- Product images imported using Figma asset system
- Unsplash integration for clothing category images

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone or download the project**
   ```bash
   # If using git
   git clone <repository-url>
   cd craigslist-prototype
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173` (or the port shown in terminal)
   - The application should load with the home page

## 📁 Project Structure

```
/
├── src/
│   ├── App.tsx                      # Main app component with routing
│   ├── components/
│   │   ├── Header.tsx               # Global header navigation
│   │   ├── HomePage.tsx             # Landing page
│   │   ├── SearchResultsPage.tsx   # Search results grid
│   │   ├── ListingDetailPage.tsx   # Individual listing view
│   │   ├── ListingCard.tsx          # Reusable listing card component
│   │   ├── ChatPage.tsx             # Messaging interface
│   │   ├── ClothingPage.tsx         # Shopping category page
│   │   └── figma/
│   │       └── ImageWithFallback.tsx # Protected image component
│   ├── styles/
│   │   └── globals.css              # Global styles and Tailwind config
│   └── imports/                     # Figma imported assets
├── README.md                        # This file
└── package.json                     # Project dependencies
```

## 🎯 Usage Guide

### Navigation Flow

1. **Start at Home Page**
   - Use search bar to search for items (navigates to search results)
   - Click "Clothing" category to browse shopping items

2. **Search for Items**
   - Enter "wii" or any search term
   - Browse 8 Wii console listings
   - Click any listing card to view details

3. **View Listing Details**
   - Browse product images using left-side thumbnails
   - Scroll to see description, seller location map, and related items
   - Send a message to seller using quick options or custom message
   - Click "Chat" button in header to view conversation

4. **Messaging**
   - View conversation in chat page
   - Send messages to seller
   - Click listing image to return to product page

5. **Browse Categories**
   - Click "Clothing" on home page
   - Use carousel arrows to browse 5 clothing items (3 visible at a time)
   - Add items to favorites using heart button
   - Click subcategories to filter (prototype UI only)

## ⚠️ Limitations

### Prototype Constraints

1. **No Backend/Database**
   - All data is hardcoded (no real persistence)
   - Favorite buttons work within session only
   - No actual user accounts or authentication

2. **Limited Interactivity**
   - Seller responses in chat are pre-scripted (only one automated response)
   - Filter buttons (Condition, Price) are UI only - no actual filtering
   - Subcategory buttons on clothing page don't navigate
   - "Sell", "Notifications", and "User Profile" buttons are non-functional
   - Browse Categories dropdown items don't navigate

3. **Single User Flow**
   - Only one predefined listing conversation available
   - All listings show the same seller
   - No multi-user scenarios

4. **Static Content**
   - Only 8 Wii console listings in search results
   - Only 5 clothing items in shopping carousel
   - Only 3 related listings shown on detail page
   - Maps use embedded iframe (requires internet connection)

5. **No Real Search**
   - Search functionality navigates to predefined search results page
   - Doesn't actually filter or search through listings
   - All searches show the same Wii console results

6. **Design Specific**
   - Optimized for desktop viewing
   - Limited mobile responsiveness
   - Fixed layout sizes

## 🎨 Design System

### Color Scheme
- **Primary Purple**: `#6B46C1` (purple-800, purple-900)
- **Accent Purple**: `#7C3AED` (purple-600, purple-700)
- **Background**: White
- **Text**: Gray scale (gray-600, gray-700, gray-900)

### Typography
- System defaults from Tailwind CSS
- Custom sizes for headings (80px for category pages, 32px for logo)

## 🔧 Development Notes

### Adding New Features
- Component-based architecture makes it easy to add new pages
- Update `App.tsx` to add new routes
- Update `Header.tsx` for global navigation changes

### Styling
- Uses Tailwind CSS v4.0 (no config file needed)
- Typography system in `/styles/globals.css`
- Avoid adding font-size, font-weight, or line-height classes unless necessary

### State Management
- Uses React hooks (useState) for local state
- Props drilling for navigation between pages
- No global state management (Redux, Context, etc.)

## 📝 Future Enhancements (Not Implemented)

- Real backend API integration
- User authentication system
- Actual search and filter functionality
- Database for listings and messages
- Real-time chat with WebSocket
- Payment integration
- User profiles and rating system
- Advanced listing creation form
- Image upload functionality
- Location-based search
- Email notifications
- Mobile app version

## 📄 License

This is a prototype project for demonstration purposes.

## 🤝 Support

For issues or questions about running this prototype locally, please check:
1. Node.js version compatibility (v16+)
2. All dependencies are installed
3. Development server is running on correct port
4. Browser console for any error messages

---

**Note**: This is a frontend prototype without backend functionality. All data is hardcoded and serves as a demonstration of UI/UX design and user flows.
