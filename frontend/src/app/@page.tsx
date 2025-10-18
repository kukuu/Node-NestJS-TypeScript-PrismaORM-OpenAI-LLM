"use client";

import { Character } from "@/types";
import { CharacterCard } from "@/components/CharacterCard";
import { useEffect, useState } from "react";
import { CreateDialog } from "@/components/CreateDialog";

export default function Home() {
  const [characters, setCharacters] = useState<
    (Character & { isLiked: boolean })[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCharacters = async () => {
    try {
      setLoading(true);
      setError(null);
      console.log("🔄 Starting fetch...");
      
      const response = await fetch("http://localhost:3002/characters");
      
      console.log("📡 Response status:", response.status);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("✅ Received data:", data);

      if (!Array.isArray(data)) {
        throw new Error("Expected array but got: " + typeof data);
      }

      setCharacters(data);
      
    } catch (error) {
      console.error("❌ Fetch failed:", error);
      setError(`Failed to load characters: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  const handleRetry = () => {
    console.log("🔄 Retry button clicked");
    fetchCharacters();
  };

  const handleLike = async (characterId: number) => {
    try {
      await fetch(`http://localhost:3002/characters/${characterId}/like`, {
        method: "POST",
      });
    } catch (error) {
      console.error("Failed to like character:", error);
    }
  };

  // Test if backend is reachable
  const testBackendConnection = async () => {
    try {
      console.log("🔍 Testing backend connection...");
      const test = await fetch("http://localhost:3002/characters");
      console.log("Backend test result:", test.status, test.statusText);
      return test.ok;
    } catch (err) {
      console.error("Backend connection test failed:", err);
      return false;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
        <span className="ml-2 mt-2">Loading characters...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col p-4">
        <div className="text-red-600 text-center max-w-md">
          <div className="text-xl font-bold mb-2">Error Loading Characters</div>
          <div className="mb-4">{error}</div>
          <div className="text-sm text-gray-600 mb-4">
            Make sure your backend is running on http://localhost:3002
          </div>
          <button 
            onClick={handleRetry}
            className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Retrying..." : "Retry"}
          </button>
          <button 
            onClick={testBackendConnection}
            className="ml-4 px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
          >
            Test Connection
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 sm:p-20">
      <main className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Characters ({characters.length})</h1>
          <CreateDialog />
        </div>
        {characters.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            No characters available
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {characters.map((character) => (
              <CharacterCard
                key={character.id}
                character={character}
                isLiked={true}
                onLike={handleLike}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}