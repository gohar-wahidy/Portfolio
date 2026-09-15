import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/Gohar_Wahidy_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url).toString();

const ARROW_PATHS = {
  left: "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.4l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6L353.9 512l364-281.1c3.8-3 6.1-7.7 6.1-12.6z",
  right: "M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z",
};

function ResumeNavArrow({ direction }) {
  const maskId = `resume-arrow-mask-${direction}`;

  return (
    <svg viewBox="0 0 48 48" width="48" height="48" aria-hidden="true">
      <defs>
        <mask id={maskId}>
          <rect width="48" height="48" fill="#fff" />
          <g transform="translate(12 12) scale(0.0234375)">
            <path d={ARROW_PATHS[direction]} fill="#000" />
          </g>
        </mask>
      </defs>
      <circle cx="24" cy="24" r="24" mask={`url(#${maskId})`} />
    </svg>
  );
}

function ResumeNew() {
  const containerRef = useRef(null);
  const pendingScrollRef = useRef(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageWidth, setPageWidth] = useState(800);
  const [viewerHeight, setViewerHeight] = useState(null);

  const updatePageWidth = useCallback(() => {
    if (!containerRef.current) return;
    const nextWidth = Math.floor(containerRef.current.clientWidth);
    if (nextWidth > 0) {
      setPageWidth(nextWidth);
    }
  }, []);

  useEffect(() => {
    updatePageWidth();
    const observer = new ResizeObserver(updatePageWidth);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    window.addEventListener("resize", updatePageWidth);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updatePageWidth);
    };
  }, [updatePageWidth]);

  const changePage = useCallback((nextPage) => {
    setPageNumber((current) => {
      if (nextPage === current) return current;
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
      pendingScrollRef.current = window.scrollY;
      return nextPage;
    });
  }, []);

  useLayoutEffect(() => {
    if (pendingScrollRef.current == null) return;
    window.scrollTo(0, pendingScrollRef.current);
  }, [pageNumber]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight" && numPages) {
        changePage(Math.min(pageNumber + 1, numPages));
      }
      if (event.key === "ArrowLeft") {
        changePage(Math.max(pageNumber - 1, 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [changePage, numPages, pageNumber]);

  const onDocumentLoadSuccess = ({ numPages: nextNumPages }) => {
    setNumPages(nextNumPages);
  };

  const onPageRenderSuccess = () => {
    const canvas = containerRef.current?.querySelector("canvas");
    const nextHeight = canvas?.clientHeight || containerRef.current?.getBoundingClientRect().height;
    if (nextHeight) {
      const applyHeight = () => setViewerHeight(nextHeight);
      if (window.scrollY > 8) {
        const onScroll = () => {
          if (window.scrollY <= 8) {
            applyHeight();
            window.removeEventListener("scroll", onScroll);
          }
        };
        window.addEventListener("scroll", onScroll);
        window.setTimeout(() => {
          applyHeight();
          window.removeEventListener("scroll", onScroll);
        }, 900);
      } else {
        applyHeight();
      }
    }
    if (pendingScrollRef.current != null) {
      window.scrollTo(0, pendingScrollRef.current);
      pendingScrollRef.current = null;
    }
  };

  const canGoPrev = pageNumber > 1;
  const canGoNext = Boolean(numPages) && pageNumber < numPages;

  return (
    <div>
      <Container fluid className="resume-section">
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download
          </Button>
        </Row>

        <div className="resume-viewer">
          <button
            type="button"
            className={`resume-nav resume-nav-prev ${canGoPrev ? "" : "is-hidden"}`}
            onClick={(event) => {
              event.preventDefault();
              event.currentTarget.blur();
              changePage(Math.max(pageNumber - 1, 1));
            }}
            aria-label="Previous page"
            disabled={!canGoPrev}
          >
            <ResumeNavArrow direction="left" />
          </button>

          <div
            className="resume-page-wrap"
            ref={containerRef}
            style={viewerHeight ? { minHeight: viewerHeight } : undefined}
          >
            <Document
              file={pdf}
              onLoadSuccess={onDocumentLoadSuccess}
              loading={<div className="resume-status">Loading resume…</div>}
              error={
                <div className="resume-status">
                  Unable to preview this resume. Please download it instead.
                </div>
              }
            >
              <Page
                pageNumber={pageNumber}
                width={pageWidth}
                onRenderSuccess={onPageRenderSuccess}
                renderAnnotationLayer
                renderTextLayer
              />
            </Document>
          </div>

          <button
            type="button"
            className={`resume-nav resume-nav-next ${canGoNext ? "" : "is-hidden"}`}
            onClick={(event) => {
              event.preventDefault();
              event.currentTarget.blur();
              changePage(numPages ? Math.min(pageNumber + 1, numPages) : pageNumber);
            }}
            aria-label="Next page"
            disabled={!canGoNext}
          >
            <ResumeNavArrow direction="right" />
          </button>
        </div>

        {numPages ? (
          <p className="resume-page-indicator">
            Page {pageNumber} of {numPages}
          </p>
        ) : null}

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
