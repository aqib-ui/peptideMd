"use client";
import React, { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Image from "next/image";
import {
  GoogleMap,
  useJsApiLoader,
  OverlayView,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const API_URL =
  "https://peptide-backend.mazedigital.us/provider-locator/getAllProviderLocator";

function ProviderLocator() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [currentLocation, setCurrentLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [providers, setProviders] = useState<any[]>([]);
  const [selectedProvider, setSelectedProvider] = useState<any | null>(null);
  const [showProviderDetail, setShowProviderDetail] = useState(false);

  // Load Google Maps
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY || "",
  });
  // Read lat/lng from URL
  const latParam = searchParams.get("lat");
  const lngParam = searchParams.get("lng");

  useEffect(() => {
    if (latParam && lngParam) {
      setCurrentLocation({
        lat: parseFloat(latParam),
        lng: parseFloat(lngParam),
      });
      fetchProviders(latParam, lngParam);
    } else {
      // Fallback if direct open
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = pos.coords.latitude;
          const lng = pos.coords.longitude;
          setCurrentLocation({ lat, lng });
          fetchProviders(lat.toString(), lng.toString());
        },
        () => {
          router.push("/profile");
        }
      );
    }
  }, [latParam, lngParam]);

  // Fetch providers from API
  const fetchProviders = async (lat: string, lng: string) => {
    try {
      const token = localStorage.getItem("peptide_user_token");
      const res = await fetch(`${API_URL}?latitude=${lat}&longitude=${lng}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      //   ?latitude=24.8643584&longitude=67.0826496

      if (res.ok) {
        const data = await res.json();
        setProviders(data?.data?.providerLocator || []);
      }
    } catch (err) {
      console.error("Error fetching providers", err);
    }
  };

  return (
    <div className="max-w-[1128px] mx-auto px-4 py-6 mt-10">
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <button onClick={() => router.back()} className="cursor-pointer">
          <Image
            src="/profileIcons/profileBackBtn.svg"
            alt="back"
            width={28}
            height={28}
            className="w-10 h-10"
          />
        </button>
        <h1 className="text-xl md:text-3xl font-semibold">Nearby Providers</h1>
      </div>

      {/* Search bar (UI only) */}
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Enter Location"
          className="w-full bg-[#F2F5F6] border border-gray-300 rounded-full px-4 py-2.5 text-base outline-none"
        />

        <svg
          className="absolute top-2.5 right-4"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M11.5 22.25C5.85 22.25 1.25 17.65 1.25 12C1.25 6.35 5.85 1.75 11.5 1.75C17.15 1.75 21.75 6.35 21.75 12C21.75 17.65 17.15 22.25 11.5 22.25ZM11.5 3.25C6.67 3.25 2.75 7.18 2.75 12C2.75 16.82 6.67 20.75 11.5 20.75C16.33 20.75 20.25 16.82 20.25 12C20.25 7.18 16.33 3.25 11.5 3.25Z"
            fill="#9EA9AA"
          />
          <path
            d="M22.0004 23.2514C21.8104 23.2514 21.6204 23.1814 21.4704 23.0314L19.4704 21.0314C19.1804 20.7414 19.1804 20.2614 19.4704 19.9714C19.7604 19.6814 20.2404 19.6814 20.5304 19.9714L22.5304 21.9714C22.8204 22.2614 22.8204 22.7414 22.5304 23.0314C22.3804 23.1814 22.1904 23.2514 22.0004 23.2514Z"
            fill="#9EA9AA"
          />
        </svg>
      </div>

      {/* Map */}
      {!isLoaded || !currentLocation ? (
        <p className="text-center mt-10">Loading map...</p>
      ) : (
        <div className="rounded-2xl overflow-hidden w-full h-[600px]">
          <GoogleMap
            center={currentLocation}
            zoom={14}
            mapContainerClassName="w-full h-full"
          >
            {/* Current location marker */}
            <Marker
              position={currentLocation}
              title="Your Current Location"
              icon={{
                url: "/profileIcons/current-pin.svg",
                scaledSize: new window.google.maps.Size(60, 60),
              }}
            />
            {/* Providers markers */}
            {providers.length > 0 &&
              providers.map((provider, idx) => (
                <Marker
                  key={provider.id || idx}
                  position={{
                    lat: Number(provider.latitude),
                    lng: Number(provider.longitude),
                  }}
                  onClick={() => setSelectedProvider(provider)}
                  icon={{
                    url: "/profileIcons/pinpoints.svg",
                    scaledSize: new window.google.maps.Size(70, 70),
                  }}
                />
              ))}
            {console.log("selectedProvider ===>", selectedProvider)}

            {/* Popup card */}

            {selectedProvider && (
              <OverlayView
                position={{
                  lat: parseFloat(selectedProvider.latitude),
                  lng: parseFloat(selectedProvider.longitude),
                }}
                mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
              >
                <div className="relative bg-white rounded-xl shadow-lg px-4 py-3 w-[330px]">
                  {/* Close Button (custom) */}
                  <button
                    className="absolute top-2 right-2 cursor-pointer"
                    onClick={() => setSelectedProvider(null)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M12 23.25C6.07 23.25 1.25 18.43 1.25 12.5C1.25 6.57 6.07 1.75 12 1.75C17.93 1.75 22.75 6.57 22.75 12.5C22.75 18.43 17.93 23.25 12 23.25ZM12 3.25C6.9 3.25 2.75 7.4 2.75 12.5C2.75 17.6 6.9 21.75 12 21.75C17.1 21.75 21.25 17.6 21.25 12.5C21.25 7.4 17.1 3.25 12 3.25Z"
                        fill="#25292A"
                      />
                      <path
                        d="M9.17035 16.0794C8.98035 16.0794 8.79035 16.0094 8.64035 15.8594C8.35035 15.5694 8.35035 15.0894 8.64035 14.7994L14.3004 9.13938C14.5904 8.84938 15.0704 8.84938 15.3604 9.13938C15.6504 9.42937 15.6504 9.90937 15.3604 10.1994L9.70035 15.8594C9.56035 16.0094 9.36035 16.0794 9.17035 16.0794Z"
                        fill="#25292A"
                      />
                      <path
                        d="M14.8304 16.0794C14.6404 16.0794 14.4504 16.0094 14.3004 15.8594L8.64035 10.1994C8.35035 9.90937 8.35035 9.42937 8.64035 9.13938C8.93035 8.84938 9.41035 8.84938 9.70035 9.13938L15.3604 14.7994C15.6504 15.0894 15.6504 15.5694 15.3604 15.8594C15.2104 16.0094 15.0204 16.0794 14.8304 16.0794Z"
                        fill="#25292A"
                      />
                    </svg>
                  </button>

                  {/* Icon + Text */}
                  <div className="flex items-start gap-3">
                    <div className="flex justify-center items-center bg-pink-100 rounded-full p-2">
                      <Image
                        src="/profileIcons/provider-icon.svg"
                        alt="provider"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-[#25292A]">
                        {selectedProvider.name}
                      </p>
                      <p className="text-base text-[#51595A]">
                        {selectedProvider.description}
                      </p>
                      <button
                        className="text-base text-[#224674] mt-1.5 font-semibold hover:cursor-pointer"
                        onClick={() => setShowProviderDetail(true)}
                      >
                        View Detail
                      </button>
                    </div>
                  </div>
                </div>
              </OverlayView>
            )}
          </GoogleMap>
        </div>
      )}

      {showProviderDetail && (
        <>
          {/* Dark overlay */}
          <div className="fixed inset-0 bg-black/30 bg-opacity-50 z-40"></div>

          {/* Dialog Box */}
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-2xl w-[480px] max-h-[550px] shadow-xl flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between  pb-3 ">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#25292A]">
                  Provider Detail
                </h2>
                <button
                  className="cursor-pointer"
                  onClick={() => setShowProviderDetail(false)}
                >
                  <Image
                    src="/profileIcons/cross-icon.svg"
                    alt="close"
                    width={20}
                    height={20}
                    className="w-7 h-7"
                  />
                </button>
              </div>

              {/* Provider Info */}
              <div className=" py-3 flex flex-col items-start gap-3 bg-[#F2F5F6] rounded-lg p-3 ">
                <div className="flex justify-center items-center gap-2  ">
                  <Image
                    src="/profileIcons/provider-icon.svg"
                    alt="provider"
                    width={30}
                    height={30}
                    className="w-12 h-12"
                  />
                  <div>
                    <p className="text-lg font-semibold text-[#25292A]">
                      {selectedProvider.name}
                    </p>
                    <p className="text-base text-[#51595A]">
                      {selectedProvider.description}
                    </p>
                  </div>
                </div>

                <div className="flex  gap-4 mt-1 text-xs text-gray-600">
                  <div className="flex items-center gap-1">
                    <Image
                      src="/profileIcons/call.svg"
                      alt="location"
                      width={20}
                      height={20}
                      className="w-4 h-4"
                    />
                    <span className="text-[#51595A] text-sm">
                      {selectedProvider.phone}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image
                      src="/profileIcons/sms.svg"
                      alt="location"
                      width={20}
                      height={20}
                      className="w-4 h-4"
                    />
                    <span className="text-[#51595A] text-sm">
                      {selectedProvider.email}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-lg font-semibold text-[#25292A] mb-2  mt-4">
                Peptides
              </p>
              {/* Peptides list */}
              <div className=" overflow-y-auto custom-scrollbar-profile overflow-hidden flex-1 border border-[#D8DFE0] rounded-lg">
                {[
                  { name: "AOD-9604", sub: "Fat Burning", fda: false },
                  {
                    name: "Bremelanotide (PT-141)",
                    sub: "Sexual Arousal",
                    fda: true,
                  },
                  {
                    name: "Cetrorelix",
                    sub: "Hormonal Regulation",
                    fda: false,
                  },

                  {
                    name: "Bremelanotide (PT-141)",
                    sub: "Sexual Arousal",
                    fda: true,
                  },

                  { name: "AOD-9604", sub: "Fat Burning", fda: false },
                  {
                    name: "Bremelanotide (PT-141)",
                    sub: "Sexual Arousal",
                    fda: true,
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex  items-center ${
                      idx % 2 === 0 ? "bg-[#F2F5F6]" : "bg-white"
                    }  border-b border-[#D8DFE0]  py-2 `}
                  >
                    <div className="max-w-[50px] w-full flex justify-center">
                      {/* sr number */}
                      <span className="text-sm font-medium text-[#8D9A9B]">
                        {" "}
                        {idx + 1}
                      </span>
                    </div>
                    <div className="flex gap-2 justify-between w-full ">
                      <div>
                        <p className="text-base font-semibold text-[#25292A]">
                          {item.name}
                        </p>
                        <p className="text-base text-[#51595A]">{item.sub}</p>
                      </div>

                      <span
                        className={`inline-flex items-center min-w-[100px] justify-center px-2.5 py-1.5 self-center mr-3 gap-1 rounded-full font-medium ${
                          item.fda
                            ? "bg-[#FCF3DB] text-[#A18233]"
                            : "bg-[#DBFCDF] text-[#1C8F5D]"
                        }`}
                      >
                        <Image
                          src={
                            item.fda
                              ? "/Dashboard/not-fda.svg"
                              : "/Dashboard/fda.svg"
                          }
                          alt="fda-status"
                          width={16}
                          height={16}
                          className="w-4 h-4"
                        />
                        {item.fda ? "FDA" : "Not FDA"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
// Outer Default component with Suspense boundary
export default function Page() {
  return (
    <Suspense fallback={<div>loading provider-locator</div>}>
      <ProviderLocator />
    </Suspense>
  );
}
