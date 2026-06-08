"use client";

import { useEffect, useRef, useState } from "react";

export default function PDFThumbnail({ fileUrl, alt, className, issuer }) {
  const canvasRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getFallbackImage = (issuerName) => {
    const name = issuerName?.toLowerCase() || "";
    if (name.includes("google")) return "/images/google skills.png";
    if (name.includes("microsoft")) return "/images/microsoft learn.png";
    if (name.includes("simplilearn")) return "/images/simplilearn.png";
    return "/images/google skills.png"; // Default fallback
  };

  useEffect(() => {
    let isMounted = true;
    let renderTask = null;

    const renderPDF = async () => {
      try {
        // Dynamically import pdfjs-dist only on the client
        const pdfjs = await import("pdfjs-dist");
        
        // Use a stable CDN for the worker to avoid local configuration issues in Next.js
        pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

        const loadingTask = pdfjs.getDocument({ url: fileUrl });
        const pdf = await loadingTask.promise;
        
        if (!isMounted) return;

        const page = await pdf.getPage(1);
        
        if (!isMounted) return;

        const viewport = page.getViewport({ scale: 1.0 });
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext("2d");
        
        // Calculate scale to fit the container while maintaining aspect ratio
        const containerWidth = canvas.parentElement?.clientWidth || 600;
        const scale = containerWidth / viewport.width;
        const scaledViewport = page.getViewport({ scale: scale * 1.5 }); // Use slightly higher scale for better quality

        canvas.height = scaledViewport.height;
        canvas.width = scaledViewport.width;

        const renderContext = {
          canvasContext: context,
          viewport: scaledViewport,
        };
        
        renderTask = page.render(renderContext);
        await renderTask.promise;
        
        if (isMounted) {
          setLoading(false);
        }
      } catch (err) {
        console.error("Error rendering PDF thumbnail:", err);
        if (isMounted) {
          setError(true);
          setLoading(false);
        }
      }
    };

    renderPDF();

    return () => {
      isMounted = false;
      if (renderTask) {
        renderTask.cancel();
      }
    };
  }, [fileUrl]);

  if (error) {
    return (
      <img 
        src={getFallbackImage(issuer)} 
        alt={alt} 
        className={className} 
      />
    );
  }

  return (
    <div className="pdf-thumbnail-container" style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
      {loading && (
        <div className="pdf-loading" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#1a1a1a',
          color: '#888',
          fontSize: '0.8rem'
        }}>
          Loading Preview...
        </div>
      )}
      <canvas 
        ref={canvasRef} 
        className={className} 
        style={{ 
          display: loading ? 'none' : 'block',
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }} 
      />
    </div>
  );
}
