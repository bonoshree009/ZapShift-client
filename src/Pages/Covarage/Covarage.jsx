import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import { useLoaderData } from 'react-router';

const Covarage = () => {
    const position = [24.3745,88.6042]
    const areadata = useLoaderData()
    console.log(areadata)

    return (
        <div >
            <h1 className='text-4xl font-bold text-center my-6 '>We Are Available In 64 Districs</h1>
            <div></div>

            <div className='w-full h-150'>

                <MapContainer center={position} zoom={7} scrollWheelZoom={false} className='h-150'>

                  <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                 {
                    areadata.map((area ,index)=>  <Marker key ={index} position={[area.latitude,area.longitude]}>
                   <Popup> <strong>{area.district}</strong>:{area.covered_area.join(', ')}</Popup>
                  </Marker>)
                 }
               </MapContainer>
            </div>
        </div>
    );
};

export default Covarage;