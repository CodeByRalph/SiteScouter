'use client'

import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { GoogleMap, LoadScript, Circle } from '@react-google-maps/api';
import BusinessComponent from './BusinessComponent';
import debounce from 'lodash/debounce'; // Make sure to install lodash
import { UserButton } from "@clerk/nextjs";

const containerStyle = {
  width: '100%',
  height: '100vh',
};

const defaultCenter = {
  lat: 40.7128,
  lng: -74.0060,
};

export default function GoogleMapsBackground() {
  const [center, setCenter] = useState(defaultCenter);
  const [circleCenter, setCircleCenter] = useState<google.maps.LatLngLiteral | null>(null);
  const [radius, setRadius] = useState(1000); // Default 1km
  const [places, setPlaces] = useState<google.maps.places.PlaceResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPlaceDetails = useCallback((placeId: string, service: google.maps.places.PlacesService) => {
    return new Promise<google.maps.places.PlaceResult>((resolve, reject) => {
      service.getDetails({ placeId }, (place, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && place) {
          resolve(place);
        } else {
          reject(status);
        }
      });
    });
  }, []);

  const fetchPlacesInRadius = useCallback(async (center: google.maps.LatLngLiteral, radius: number) => {
    const service = new google.maps.places.PlacesService(document.createElement('div'));
    const request = {
      location: new google.maps.LatLng(center.lat, center.lng),
      radius: radius,
      type: 'business'
    };

    return new Promise<google.maps.places.PlaceResult[]>((resolve) => {
      service.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && results) {
          resolve(results);
        } else {
          resolve([]);
        }
      });
    });
  }, []);

  const handleMapClick = useCallback(async (event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      setIsLoading(true);
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      setCircleCenter({ lat, lng });

      try {
        const results = await fetchPlacesInRadius({ lat, lng }, radius);
        const service = new google.maps.places.PlacesService(document.createElement('div'));

        const detailedPlaces = await Promise.all(
          results.slice(0, Math.min(20, results.length)).map((place) => fetchPlaceDetails(place.place_id as string, service))
        );

        const filteredPlaces = detailedPlaces.filter((place) => !place.website);
        setPlaces(filteredPlaces);
      } finally {
        setIsLoading(false);
      }
    }
  }, [radius, fetchPlacesInRadius, fetchPlaceDetails]);

  const [inputRadius, setInputRadius] = useState(radius.toString());

  const debouncedHandleRadiusChange = useMemo(
    () => debounce((newRadius: number) => {
      setRadius(newRadius);
      if (circleCenter) {
        handleMapClick({ latLng: new google.maps.LatLng(circleCenter.lat, circleCenter.lng) } as google.maps.MapMouseEvent);
      }
    }, 500),
    [handleMapClick, circleCenter]
  );

  const handleRadiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputRadius(newValue);
    
    const newRadius = Number(newValue);
    if (!isNaN(newRadius) && newRadius > 0) {
      debouncedHandleRadiusChange(newRadius);
    }
  };

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0));
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCenter({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => {
          console.warn('Geolocation permission denied or not supported.');
        }
      );
    }
  }, []);

  return (
    <>
      <div className="absolute top-0 left-0 right-0 bg-white py-1 px-2 flex justify-between items-center shadow-md z-10">
        <h1 className="text-lg font-bold text-blue-600">SiteScout</h1>
        <UserButton />
      </div>
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string} libraries={['places']}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          options={{
            disableDefaultUI: true,
            zoomControl: false,
            streetViewControl: false,
            fullscreenControl: false,
          }}
          onClick={handleMapClick}
        >
          {circleCenter && (
            <Circle
              center={circleCenter}
              radius={radius}
              options={{
                fillColor: "blue",
                fillOpacity: 0.2,
                strokeColor: "blue",
                strokeOpacity: 0.7,
                strokeWeight: 2,
              }}
            />
          )}
        </GoogleMap>
      </LoadScript>
      <div className="absolute bottom-4 left-4 right-4">
        <div className="bg-white p-2 rounded-lg shadow-lg mb-2 flex items-center space-x-2 md:mx-20">
          <label htmlFor="radius" className="text-sm font-medium text-gray-700 whitespace-nowrap">
            Radius (m):
          </label>
          <input
            type="text"
            id="radius"
            value={inputRadius}
            onChange={handleRadiusChange}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-sm"
          />
        </div>
        {isLoading ? (
          <div className="flex justify-center items-center p-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto no-scrollbar md:mx-20 cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            <div className="flex space-x-4 min-w-max">
              {places.map((place) => (
                <BusinessComponent key={place.place_id} place={place} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
