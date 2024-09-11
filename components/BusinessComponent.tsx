import Image from 'next/image';

export type BusinessComponentProps = {
    place: google.maps.places.PlaceResult;
}

export default function BusinessComponent({ place }: BusinessComponentProps) {
    const photoReference = place.photos?.[0]?.getUrl({
        maxWidth: 100,
        maxHeight: 100,
    });

    return (
        <div className="flex-shrink-0 w-64 bg-white rounded-lg shadow-lg p-4">
            <div className="flex items-center mb-2">
                {photoReference ? (
                    <Image
                        src={photoReference}
                        alt={place.name || 'Place Image'}
                        width={50}
                        height={50}
                        className="rounded-full mr-4"
                    />
                ) : (
                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 flex items-center justify-center">
                        <span className="text-gray-500 text-xs text-center">No<br />Image</span>
                    </div>
                )}
                <h2 className="text-lg font-semibold truncate">{place.name}</h2>
            </div>
            <p className="text-sm text-gray-600 truncate">{place.formatted_address}</p>
        </div>
    );
}
