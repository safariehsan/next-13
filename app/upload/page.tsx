"use client";
import { CldUploadWidget, CldImage } from "next-cloudinary";
import { useState } from "react";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");
  return (
    <div>
      {publicId && (
        <CldImage src={publicId} width={270} height={180} alt="shoe" />
      )}
      <CldUploadWidget
        uploadPreset="z0ldd2ca"
        options={{
          sources: ["local", "url", "camera"],
          multiple: false,
          maxFiles: 2,
          maxFileSize: 1000,
          styles: {
            palette: {
              window: "#464040",
              sourceBg: "#292222",
              windowBorder: "#c7a49f",
              tabIcon: "#cc6600",
              inactiveTabIcon: "#E8D5BB",
              menuIcons: "#ebe5db",
              link: "#ffb107",
              action: "#ffcc00",
              inProgress: "#99cccc",
              complete: "#78b3b4",
              error: "#ff6666",
              textDark: "#4C2F1A",
              textLight: "#D8CFCF",
            },
          },
        }}
        onUpload={(result, widget) => {
          if (result.event !== "success") return;
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => (
          <button className="btn btn-success" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </div>
  );
};

export default UploadPage;
