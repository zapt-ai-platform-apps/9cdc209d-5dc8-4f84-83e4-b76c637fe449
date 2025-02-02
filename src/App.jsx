import React, { useState } from 'react';
import * as Sentry from '@sentry/browser';

export default function App() {
  const [loading, setLoading] = useState(false);

  const handleGenerateQRCode = async () => {
    console.log("Generate QR Code button clicked");
    setLoading(true);
    try {
      // Simulate API call for QR code generation with a loading state.
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("QR Code generated successfully");
    } catch (error) {
      console.error("Error generating QR Code:", error);
      Sentry.captureException(error);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="h-full flex flex-col justify-center items-center px-4">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4">QuickQR Bio</h1>
          <p className="text-lg">
            Easily create personal or business QR codes with custom mini websites.
            Showcase your contacts, social networks, and more with ease.
          </p>
        </header>
        <main className="w-full max-w-md">
          <button
            onClick={handleGenerateQRCode}
            disabled={loading}
            className="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 cursor-pointer"
          >
            {loading ? 'Generating...' : 'Generate QR Code'}
          </button>
        </main>
        <footer className="absolute bottom-4">
          <a
            href="https://www.zapt.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 cursor-pointer"
          >
            Made on ZAPT
          </a>
        </footer>
      </div>
    </div>
  );
}