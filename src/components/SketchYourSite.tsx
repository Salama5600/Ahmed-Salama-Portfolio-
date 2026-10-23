import { useState, useId } from 'react';
import { SKETCH_DATA, PROFILE, BusinessTypeOption, FeatureOption } from '../data';
import { MessageSquare, Check, RotateCcw } from 'lucide-react';

export default function SketchYourSite() {
  const [selectedType, setSelectedType] = useState<BusinessTypeOption | null>(null);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [recentlyAddedFeature, setRecentlyAddedFeature] = useState<string | null>(null);
  const radioGroupId = useId();

  const handleTypeSelect = (type: BusinessTypeOption) => {
    setSelectedType(type);
    // If selecting restaurant or cafe, auto-include menu by default if not set
    if ((type.id === 'restaurant' || type.id === 'cafe') && !selectedFeatures.includes('menu')) {
      setSelectedFeatures((prev) => [...prev, 'menu']);
    }
  };

  const handleToggleFeature = (featureId: string) => {
    if (selectedFeatures.includes(featureId)) {
      setSelectedFeatures((prev) => prev.filter((id) => id !== featureId));
      if (recentlyAddedFeature === featureId) {
        setRecentlyAddedFeature(null);
      }
    } else {
      setSelectedFeatures((prev) => [...prev, featureId]);
      setRecentlyAddedFeature(featureId);
      setTimeout(() => {
        setRecentlyAddedFeature((current) => (current === featureId ? null : current));
      }, 1200);
    }
  };

  const handleStartOver = () => {
    setSelectedType(null);
    setSelectedFeatures([]);
    setRecentlyAddedFeature(null);
  };

  // Build WhatsApp URL with selected configuration
  const buildWhatsAppUrl = () => {
    if (!selectedType) return '#';

    const businessLabel = selectedType.label.toLowerCase();
    const activeFeatureLabels = selectedFeatures
      .map((id) => SKETCH_DATA.features.find((f) => f.id === id)?.label.toLowerCase())
      .filter(Boolean);

    let message = '';
    if (activeFeatureLabels.length > 0) {
      const featuresString = activeFeatureLabels.join(', ');
      message = `Hi Ahmed, I run a ${businessLabel}. I'd like a website with: ${featuresString}. Can we talk?`;
    } else {
      message = `Hi Ahmed, I run a ${businessLabel} and I'd like a website. Can we talk?`;
    }

    return `https://wa.me/201508502069?text=${encodeURIComponent(message)}`;
  };

  // Screen reader outline text
  const getOutlineText = () => {
    if (!selectedType) return 'No outline created yet.';
    const parts = ['Header', 'Hero', selectedType.coreSection];
    if (selectedFeatures.includes('menu') && selectedType.id !== 'restaurant' && selectedType.id !== 'cafe') {
      parts.push('Menu / Price list');
    }
    if (selectedFeatures.includes('booking')) parts.push('Booking system');
    if (selectedFeatures.includes('gallery')) parts.push('Photo gallery');
    if (selectedFeatures.includes('whatsapp')) parts.push('WhatsApp quick contact');
    if (selectedFeatures.includes('bilingual')) parts.push('Bilingual Arabic & English');
    parts.push('Footer');
    return `Outline: ${parts.join(', ')}`;
  };

  const isBilingual = selectedFeatures.includes('bilingual');
  const hasBooking = selectedFeatures.includes('booking');
  const hasGallery = selectedFeatures.includes('gallery');
  const hasMenu = selectedFeatures.includes('menu');
  const hasWhatsApp = selectedFeatures.includes('whatsapp');

  return (
    <div className="bg-[#EDE6D8] border border-[#A9BDB0] rounded-[10px] p-6 lg:p-7 shadow-[0_4px_20px_rgba(31,49,38,0.04)]">
      {/* Header */}
      <div className="mb-5">
        <h3 className="font-serif text-[22px] font-semibold text-[#1F3126] tracking-tight">
          {SKETCH_DATA.title}
        </h3>
        <p className="text-[14px] text-[#6B8874] mt-0.5">{SKETCH_DATA.subtitle}</p>
      </div>

      {/* Step 1: Business Types Radio Group */}
      <div className="mb-5">
        <label id={radioGroupId} className="block text-[13px] font-medium text-[#1F3126] mb-2">
          1. Business type
        </label>
        <div
          role="radiogroup"
          aria-labelledby={radioGroupId}
          className="flex flex-wrap gap-2"
        >
          {SKETCH_DATA.businessTypes.map((type) => {
            const isSelected = selectedType?.id === type.id;
            return (
              <button
                key={type.id}
                role="radio"
                type="button"
                aria-checked={isSelected}
                tabIndex={0}
                onClick={() => handleTypeSelect(type)}
                onKeyDown={(e) => {
                  if (e.key === ' ' || e.key === 'Enter') {
                    e.preventDefault();
                    handleTypeSelect(type);
                  }
                }}
                className={`px-3.5 py-1.5 text-[13px] font-medium rounded-full transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A46A] ${
                  isSelected
                    ? 'bg-[#3D5A47] text-[#F7F3EC] shadow-sm'
                    : 'bg-[#E3EAE5] text-[#2C4234] hover:bg-[#A9BDB0]/40'
                }`}
              >
                {type.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 2: Feature Toggles (Appears when business type is selected) */}
      <div className="mb-5 min-h-[90px]">
        <label className="block text-[13px] font-medium text-[#1F3126] mb-2">
          2. Features needed {selectedType ? '' : '(select a type first)'}
        </label>
        {selectedType ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 animate-in fade-in duration-200">
            {SKETCH_DATA.features.map((feature) => {
              const isActive = selectedFeatures.includes(feature.id);
              return (
                <button
                  key={feature.id}
                  type="button"
                  role="switch"
                  aria-checked={isActive}
                  onClick={() => handleToggleFeature(feature.id)}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg text-left text-[13px] transition-all duration-150 border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A46A] ${
                    isActive
                      ? 'bg-[#F7F3EC] border-[#3D5A47] text-[#1F3126]'
                      : 'bg-[#F7F3EC]/60 border-[#A9BDB0]/60 text-[#6B8874] hover:border-[#3D5A47]/40'
                  }`}
                >
                  <span className="font-medium text-[13px] truncate">{feature.label}</span>
                  <div
                    className={`w-4 h-4 rounded flex items-center justify-center shrink-0 ml-2 transition-colors ${
                      isActive ? 'bg-[#3D5A47] text-[#F7F3EC]' : 'border border-[#A9BDB0]'
                    }`}
                  >
                    {isActive && <Check size={12} strokeWidth={3} />}
                  </div>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="p-3 text-[13px] text-[#6B8874] italic border border-dashed border-[#A9BDB0] rounded-lg text-center bg-[#F7F3EC]/40">
            Select a business type above to configure sections.
          </div>
        )}
      </div>

      {/* Step 3: Wireframe Phone Preview Area */}
      <div className="mb-5">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[12px] font-medium text-[#6B8874]">Live wireframe preview</span>
          {selectedType && (
            <span className="text-[11px] font-mono text-[#7F6230] uppercase tracking-wider">
              {selectedType.label} Blueprint
            </span>
          )}
        </div>

        {/* Hidden screen-reader descriptive outline */}
        <div className="sr-only" aria-live="polite">
          {getOutlineText()}
        </div>

        {/* Visual Wireframe Preview Box */}
        <div
          aria-hidden="true"
          className="w-full bg-[#F7F3EC] border border-[#A9BDB0] rounded-lg p-3 min-h-[220px] max-h-[270px] overflow-y-auto flex flex-col justify-between shadow-inner transition-all duration-200"
        >
          {!selectedType ? (
            <div className="h-full min-h-[200px] flex flex-col items-center justify-center text-center p-4 border border-dashed border-[#A9BDB0] rounded">
              <span className="font-serif text-[15px] font-medium text-[#6B8874] mb-1">
                Your site will appear here.
              </span>
              <span className="text-[12px] text-[#A9BDB0]">Pick a business type to start</span>
            </div>
          ) : (
            <div className="space-y-2 text-[11px] font-sans">
              {/* Wireframe Header */}
              <div className="h-7 px-2.5 rounded bg-white border border-[#A9BDB0]/60 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#3D5A47]" />
                  <span className="font-serif font-semibold text-[#1F3126] text-[11px]">
                    {selectedType.label} Brand
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  {isBilingual && (
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-[#E3EAE5] text-[#3D5A47] border border-[#3D5A47]/40 animate-in fade-in duration-300">
                      العربية / EN
                    </span>
                  )}
                  <div className="w-4 h-1 rounded bg-[#A9BDB0]" />
                </div>
              </div>

              {/* Wireframe Hero */}
              <div className="p-2.5 rounded bg-white border border-[#A9BDB0]/60 flex flex-col gap-1.5">
                <div className="w-4/5 h-2.5 rounded bg-[#3D5A47]/70" />
                <div className="w-3/5 h-1.5 rounded bg-[#A9BDB0]" />
                <div className="flex gap-1.5 mt-1">
                  <div className="w-16 h-4 rounded-full bg-[#3D5A47] flex items-center justify-center text-[9px] text-[#F7F3EC] font-medium">
                    Reserve
                  </div>
                  <div className="w-14 h-4 rounded-full border border-[#3D5A47] text-[9px] flex items-center justify-center text-[#3D5A47]">
                    Explore
                  </div>
                </div>
              </div>

              {/* Core Section (Always present based on business type) */}
              <div className="p-2 rounded bg-white border border-[#A9BDB0]/60">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-[#1F3126] text-[10px]">
                    {selectedType.coreSection}
                  </span>
                  <span className="text-[9px] font-mono text-[#6B8874]">Featured</span>
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="h-6 rounded bg-[#F7F3EC] border border-[#A9BDB0]/40 p-1 flex items-center justify-between">
                    <span className="text-[9px] text-[#1F3126]">Item 01</span>
                    <span className="text-[9px] font-mono text-[#7F6230]">$</span>
                  </div>
                  <div className="h-6 rounded bg-[#F7F3EC] border border-[#A9BDB0]/40 p-1 flex items-center justify-between">
                    <span className="text-[9px] text-[#1F3126]">Item 02</span>
                    <span className="text-[9px] font-mono text-[#7F6230]">$</span>
                  </div>
                </div>
              </div>

              {/* Optional Section: Online Booking */}
              {hasBooking && (
                <div
                  className={`p-2 rounded bg-white border transition-all duration-300 ${
                    recentlyAddedFeature === 'booking'
                      ? 'border-[#C9A46A] ring-1 ring-[#C9A46A]'
                      : 'border-[#A9BDB0]/60'
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-semibold text-[#1F3126] text-[10px]">Online Booking</span>
                    <span className="text-[9px] text-[#3D5A47] font-medium">Date & Time</span>
                  </div>
                  <div className="h-6 rounded bg-[#E3EAE5] flex items-center justify-around px-2 text-[9px] text-[#1F3126]">
                    <span>Today</span>
                    <span>19:00</span>
                    <span className="font-semibold text-[#3D5A47]">Book Now</span>
                  </div>
                </div>
              )}

              {/* Optional Section: Extra Menu (if non-restaurant/cafe enabled it) */}
              {hasMenu && selectedType.id !== 'restaurant' && selectedType.id !== 'cafe' && (
                <div
                  className={`p-2 rounded bg-white border transition-all duration-300 ${
                    recentlyAddedFeature === 'menu'
                      ? 'border-[#C9A46A] ring-1 ring-[#C9A46A]'
                      : 'border-[#A9BDB0]/60'
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-semibold text-[#1F3126] text-[10px]">Price List</span>
                  </div>
                  <div className="h-5 rounded bg-[#F7F3EC] flex items-center justify-between px-2 text-[9px]">
                    <span>Package A</span>
                    <span className="font-mono text-[#7F6230]">$120</span>
                  </div>
                </div>
              )}

              {/* Optional Section: Photo Gallery */}
              {hasGallery && (
                <div
                  className={`p-2 rounded bg-white border transition-all duration-300 ${
                    recentlyAddedFeature === 'gallery'
                      ? 'border-[#C9A46A] ring-1 ring-[#C9A46A]'
                      : 'border-[#A9BDB0]/60'
                  }`}
                >
                  <span className="font-semibold text-[#1F3126] text-[10px] block mb-1">
                    Gallery Showcase
                  </span>
                  <div className="grid grid-cols-3 gap-1">
                    <div className="h-8 rounded bg-[#EDE6D8] border border-[#A9BDB0]/40 flex items-center justify-center text-[8px] text-[#6B8874]">
                      Photo 1
                    </div>
                    <div className="h-8 rounded bg-[#EDE6D8] border border-[#A9BDB0]/40 flex items-center justify-center text-[8px] text-[#6B8874]">
                      Photo 2
                    </div>
                    <div className="h-8 rounded bg-[#EDE6D8] border border-[#A9BDB0]/40 flex items-center justify-center text-[8px] text-[#6B8874]">
                      Photo 3
                    </div>
                  </div>
                </div>
              )}

              {/* Wireframe Footer */}
              <div className="h-6 px-2 rounded bg-[#3D5A47] text-[#F7F3EC] flex items-center justify-between text-[9px]">
                <span>© {selectedType.label}</span>
                <span className="opacity-80">Location & Hours</span>
              </div>

              {/* Floating WhatsApp indicator */}
              {hasWhatsApp && (
                <div className="flex justify-end pt-0.5 animate-in fade-in duration-200">
                  <div className="inline-flex items-center gap-1 bg-[#3D5A47] text-[#F7F3EC] px-2 py-0.5 rounded-full text-[9px] shadow-sm">
                    <MessageSquare size={10} />
                    <span>WhatsApp Chat</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Step 4: Primary Action Button */}
      <div>
        {selectedType ? (
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-[48px] inline-flex items-center justify-center gap-2 text-[15px] font-medium text-[#F7F3EC] bg-[#3D5A47] hover:bg-[#2C4234] active:translate-y-[1px] rounded-full transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A46A] focus-visible:ring-offset-2"
          >
            <MessageSquare size={17} />
            <span>Send this outline on WhatsApp</span>
          </a>
        ) : (
          <button
            type="button"
            disabled
            className="w-full h-[48px] inline-flex items-center justify-center gap-2 text-[15px] font-medium text-[#A9BDB0] bg-[#E3EAE5] rounded-full cursor-not-allowed"
          >
            Pick a business type to start
          </button>
        )}

        {/* Start over link */}
        {selectedType && (
          <div className="text-center mt-3">
            <button
              type="button"
              onClick={handleStartOver}
              className="inline-flex items-center gap-1.5 text-[13px] text-[#6B8874] hover:text-[#3D5A47] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A46A] rounded px-1"
            >
              <RotateCcw size={13} />
              <span>Start over</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
