import React from "react";

interface RheumaFestProps {
  src?: string;
}

const DEFAULT_IFRAME_SRC =
  "https://public.eventaccumen.devligence.com/?event_id=33422706-77d0-4970-b9e7-d0594f362e80";

const RheumaFest: React.FC<RheumaFestProps> = ({ src }) => {
  return (
    <div className="fixed inset-0 w-full h-full bg-gray-50 z-10">
      <iframe
        src={src || DEFAULT_IFRAME_SRC}
        title="Rheuma Fest"
        className="w-full h-full border-0"
        allowFullScreen
        style={{
          width: "100vw",
          height: "100vh",
          minHeight: "100vh",
          minWidth: "100vw",
        }}
      />
    </div>
  );
};

export default RheumaFest;
