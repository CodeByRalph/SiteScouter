import Image from 'next/image';
import { useState } from 'react';

export type BusinessComponentProps = {
    place: google.maps.places.PlaceResult;
}

export default function BusinessComponent({ place }: BusinessComponentProps) {
    const [isSaved, setIsSaved] = useState(false);

    const photoReference = place.photos?.[0]?.getUrl({
        maxWidth: 100,
        maxHeight: 100,
    });

    const handleSave = () => {
        // TODO: Implement actual saving logic
        setIsSaved(true);
    };

    return (
        <div className="flex-shrink-0 w-64 bg-white rounded-lg shadow-lg p-4">
            <div className="flex items-center mb-2">
                <div className="w-12 h-12 mr-4 overflow-hidden rounded-full flex-shrink-0">
                    {photoReference ? (
                        <Image
                            src={photoReference}
                            alt={place.name || 'Place Image'}
                            width={50}
                            height={50}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                            <span className="text-gray-500 text-xs text-center">No<br />Image</span>
                        </div>
                    )}
                </div>
                <h2 className="text-lg font-semibold truncate flex-grow">{place.name}</h2>
            </div>
            <p className="text-sm text-gray-600 truncate mb-2">{place.formatted_address}</p>
            <button
                onClick={handleSave}
                className={`w-full py-2 px-4 rounded-md transition-colors ${
                    isSaved
                        ? 'bg-green-500 text-white'
                        : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
            >
                {isSaved ? 'Saved' : 'Save Business'}
            </button>
        </div>
    );
}
