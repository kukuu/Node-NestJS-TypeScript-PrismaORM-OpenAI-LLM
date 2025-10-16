"use client";

import { useState } from "react";
import { Dialog } from "./Dialog";
import Image from "next/image";
import { useForm } from "@tanstack/react-form";

interface Character {
  id?: string;
  name: string;
  height: string;
  mass: string;
  hairColour: string;
  skinColour: string;
  eyeColour: string;
  gender: string;
}

export function CreateDialog({ onCharacterCreated }: { onCharacterCreated?: (character: Character) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    defaultValues: {
      name: "",
      height: "",
      mass: "",
      hairColour: "",
      skinColour: "",
      eyeColour: "",
      gender: "",
    },
    onSubmit: async ({ value }) => {
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:3002/characters', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            //'X-API-KEY': 'API_KEY' // Replace with actual API key
            // 'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY || 'your-actual-key-here'
          },
          body: JSON.stringify(value),
        });

        if (!response.ok) {
          throw new Error('Failed to create character');
        }

        const newCharacter = await response.json();
        
        if (onCharacterCreated) {
          onCharacterCreated(newCharacter);
        }

        setIsOpen(false);
        form.reset();
        
      } catch (error) {
        console.error('Error creating character:', error);
        alert('Failed to create character. Please try again.');
      } finally {
        setIsLoading(false);
      }
    },
  });

  const handleClose = () => {
    setIsOpen(false);
    form.reset();
  };

  return (
    <>
      <button
        className="flex items-center gap-2 p-2 rounded-full bg-pink-100 hover:bg-pink-200 dark:bg-pink-900 dark:hover:bg-pink-800 transition-colors disabled:opacity-50"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src="/plus.svg"
          alt="Create"
          width={16}
          height={16}
          className="text-pink-600"
        />
      </button>
      <Dialog title="Create Character" isOpen={isOpen} onClose={handleClose}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <div className="space-y-4">
            {/* Name Field */}
            <form.Field
              name="name"
              children={(field) => (
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    required
                  />
                </div>
              )}
            />

            {/* Height Field */}
            <form.Field
              name="height"
              children={(field) => (
                <div>
                  <label htmlFor="height" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Height
                  </label>
                  <input
                    id="height"
                    name="height"
                    type="text"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
              )}
            />

            {/* Mass Field */}
            <form.Field
              name="mass"
              children={(field) => (
                <div>
                  <label htmlFor="mass" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Mass
                  </label>
                  <input
                    id="mass"
                    name="mass"
                    type="text"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
              )}
            />

            {/* Hair Colour Field */}
            <form.Field
              name="hairColour"
              children={(field) => (
                <div>
                  <label htmlFor="hairColour" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Hair Colour
                  </label>
                  <input
                    id="hairColour"
                    name="hairColour"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
              )}
            />

            {/* Skin Colour Field */}
            <form.Field
              name="skinColour"
              children={(field) => (
                <div>
                  <label htmlFor="skinColour" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Skin Colour
                  </label>
                  <input
                    id="skinColour"
                    name="skinColour"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
              )}
            />

            {/* Eye Colour Field */}
            <form.Field
              name="eyeColour"
              children={(field) => (
                <div>
                  <label htmlFor="eyeColour" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Eye Colour
                  </label>
                  <input
                    id="eyeColour"
                    name="eyeColour"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
              )}
            />

            {/* Gender Field */}
            <form.Field
              name="gender"
              children={(field) => (
                <div>
                  <label htmlFor="gender" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Gender
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="n/a">N/A</option>
                  </select>
                </div>
              )}
            />

            {/* Form Actions */}
            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={handleClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 dark:bg-gray-600 dark:text-gray-200 dark:border-gray-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="px-4 py-2 text-sm font-medium text-white bg-pink-600 border border-transparent rounded-md shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 disabled:opacity-50"
              >
                {isLoading ? 'Creating...' : 'Create Character'}
              </button>
            </div>
          </div>
        </form>
      </Dialog>
    </>
  );
}