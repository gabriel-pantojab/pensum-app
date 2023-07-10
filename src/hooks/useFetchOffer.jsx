import { useEffect, useState } from "react";

export default function useFetchOffer({ url }) {
  const [showOffer, setShowOffer] = useState(false);
  const [offer, setOffer] = useState({});
  const getOffer = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setOffer(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    if (showOffer) {
      getOffer();
    } else {
      setOffer({});
    }
  }, [showOffer]);
  return {
    showOffer,
    offer,
    setShowOffer,
  };
}
