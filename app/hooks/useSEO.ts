import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}

const BASE_URL = "https://octavesmartcare.co.uk";
const DEFAULT_OG_IMAGE = `${BASE_URL}/assets/og-image.svg`;

function setMeta(selector: string, attr: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr.split("=")[0], attr.split("=")[1]);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function useSEO({ title, description, canonical, ogImage }: SEOProps) {
  useEffect(() => {
    const fullTitle = title.includes("Octave Smartcare")
      ? title
      : `${title} | Octave Smartcare`;
    const url = canonical ? `${BASE_URL}${canonical}` : BASE_URL;
    const image = ogImage ?? DEFAULT_OG_IMAGE;

    document.title = fullTitle;

    setMeta('meta[name="description"]', 'name=description', description);

    setMeta('meta[property="og:title"]', 'property=og:title', fullTitle);
    setMeta('meta[property="og:description"]', 'property=og:description', description);
    setMeta('meta[property="og:url"]', 'property=og:url', url);
    setMeta('meta[property="og:image"]', 'property=og:image', image);

    setMeta('meta[name="twitter:title"]', 'name=twitter:title', fullTitle);
    setMeta('meta[name="twitter:description"]', 'name=twitter:description', description);
    setMeta('meta[name="twitter:image"]', 'name=twitter:image', image);

    let canonical_link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical_link) {
      canonical_link = document.createElement("link");
      canonical_link.setAttribute("rel", "canonical");
      document.head.appendChild(canonical_link);
    }
    canonical_link.setAttribute("href", url);
  }, [title, description, canonical, ogImage]);
}
