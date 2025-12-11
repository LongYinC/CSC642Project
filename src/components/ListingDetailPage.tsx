import { useState } from 'react';
import { Header } from './Header';
import { MapPin, Heart, Flag, Share2 } from 'lucide-react';
import img1 from "figma:asset/9e42dfc4a042b088d4415fde72bf7e8f690009a5.png";
import img2 from "figma:asset/07da17402e3eb80f538c98ac2c6be47c5339ba85.png";
import img3 from "figma:asset/f26d23cf20ad5f9ec333234d256ea0e6801d278f.png";
import img4 from "figma:asset/10f386db802d5589a1fbebba59c0ea74665b05b0.png";

interface ListingDetailPageProps {
  onBackToHome: () => void;
  onGoToChat: () => void;
}

export function ListingDetailPage({ onBackToHome, onGoToChat }: ListingDetailPageProps) {
  const [searchInput, setSearchInput] = useState('');
  const [selectedImage, setSelectedImage] = useState(img1);
  const [customMessage, setCustomMessage] = useState('');
  const [selectedPreMessage, setSelectedPreMessage] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  const handleSearch = (query: string) => {
    setSearchInput(query);
  };

  const listingImages = [img1, img1, img1];

  const relatedListings = [
    { image: img2, title: 'Complete Wii kit', price: 64.99 },
    { image: img3, title: 'Wii Black version', price: 99.99 },
    { image: img4, title: 'Complete Wii Console - New', price: 499.99 }
  ];

  const preMessages = [
    'Is this available?',
    'Can you do $60?',
    'Where are you located?'
  ];

  const handleSendMessage = () => {
    const messageToSend = customMessage || selectedPreMessage;
    if (messageToSend) {
      setShowNotification(true);
    }
  };

  const handleGoToChat = () => {
    setShowNotification(false);
    onGoToChat();
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        searchInput={searchInput} 
        setSearchInput={setSearchInput} 
        onSearch={handleSearch}
        onLogoClick={onBackToHome}
        onChatClick={onGoToChat}
      />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-3 gap-8">
          {/* Left Column - Images */}
          <div className="col-span-2">
            <div className="flex gap-4 mb-8">
              {/* Thumbnails on the left */}
              <div className="flex flex-col gap-2">
                {listingImages.map((img, index) => (
                  <div 
                    key={index}
                    onClick={() => setSelectedImage(img)}
                    className={`w-20 h-20 bg-gray-100 rounded cursor-pointer border-2 ${selectedImage === img ? 'border-purple-600' : 'border-transparent'}`}
                  >
                    <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-contain" />
                  </div>
                ))}
              </div>
              
              {/* Main Image */}
              <div className="flex-1 bg-gray-100 rounded-lg overflow-hidden">
                <img src={selectedImage} alt="Wii console" className="w-full h-[450px] object-contain" />
              </div>
            </div>

            {/* Description */}
            <div className="border-t pt-6">
              <h3 className="mb-4">Description</h3>
              <p className="text-gray-700">
                I've had this wii for years - in excellent condition. 
                <br /><br />
                What is included:
                <br />- Nintendo Wii Console
                <br />- 1 Controller
                <br />- All necessary cables
                <br />- Original box
                <br /><br />
                Everything works perfectly. Pick up only.
              </p>
            </div>

            {/* Seller Location Map */}
            <div className="border-t pt-6 mt-8">
              <div className="flex items-center gap-2 text-gray-700 mb-4">
                <MapPin className="w-5 h-5" />
                <h3>Seller Location</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">San Francisco Bay Area</p>
              <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25235.03554951679!2d-122.41941560000001!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890&zoom=12"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
                {/* Circle overlay to show approximate location */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-purple-600 rounded-full bg-purple-200 bg-opacity-30 pointer-events-none" />
              </div>
            </div>

            {/* Related Listings */}
            <div className="border-t pt-6 mt-8">
              <h3 className="mb-4">Related Listings</h3>
              <div className="grid grid-cols-3 gap-4">
                {relatedListings.map((item, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="bg-gray-100 aspect-square">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-3">
                      <p className="text-sm text-gray-700 mb-1">{item.title}</p>
                      <p className="text-purple-800">${item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Details & Message */}
          <div>
            <div className="bg-white border rounded-lg p-6 sticky top-4">
              <h1 className="mb-2 text-3xl">Wii For Sale - complete with controller</h1>
              <div className="text-purple-800 mb-4 text-2xl">$79.99</div>

              <div className="text-sm text-gray-600 mb-6">
                <p>Posted: 2 days ago</p>
                <p>Condition: Used - Excellent</p>
              </div>

              <div className="flex gap-2 mb-6">
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                  <Heart className="w-4 h-4" />
                  Save
                </button>
                <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                  <Share2 className="w-4 h-4" />
                </button>
                <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                  <Flag className="w-4 h-4" />
                </button>
              </div>

              {/* Message Section */}
              <div className="border-t pt-4">
                <h4 className="mb-3">Message Seller</h4>
                
                <div className="mb-3">
                  {preMessages.map((message, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedPreMessage(message);
                        setCustomMessage('');
                      }}
                      className={`w-full text-left px-3 py-2 mb-2 rounded border ${
                        selectedPreMessage === message 
                          ? 'border-purple-600 bg-purple-50' 
                          : 'border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {message}
                    </button>
                  ))}
                </div>

                <textarea
                  value={customMessage}
                  onChange={(e) => {
                    setCustomMessage(e.target.value);
                    setSelectedPreMessage('');
                  }}
                  placeholder="Or type your own message..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3 resize-none"
                  rows={4}
                />

                <button 
                  onClick={handleSendMessage}
                  className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notification Modal */}
      {showNotification && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mb-2">Message Sent!</h3>
              <p className="text-gray-600">Your message has been sent to the seller. They will reply soon.</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowNotification(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Close
              </button>
              <button
                onClick={handleGoToChat}
                className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
              >
                Go to Chat
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}