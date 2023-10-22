import { useCurrentLocation } from "./useCurrentLocation";

export function CurrentLocation() {
    const { findMyPosition, latitude, longitude, positionLink } = useCurrentLocation();

    return (
        <div>
            {latitude && (
                <div>
                    <a href={positionLink}>Open Map</a>
                    <p>Latitudine: {latitude}</p>
                    <p>Longitudine: {longitude}</p>
                </div>
            )}

            <button onClick={findMyPosition}>Search my position!</button>
        </div>
    );
};