import { useState, useEffect } from 'react';
/** 
 * Use this hook to figure out if an element is visible or not within a container
 * This hook will return a new scroll distance each time a given element isn't visible anymore
 * Currently only works with vertical scrolling
*/
export const useScrollDistance = (activeElement, scrollContainer) => {
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    if (scrollContainer && activeElement) {
      const scrollContainerHeight = scrollContainer.offsetHeight;
      const scrollContainerDistance = scrollContainer ? scrollContainer.scrollTop : 0;
      const activeElementDistance = activeElement.offsetTop;
      const activeItemOutOfView = (scrollContainerHeight + scrollContainerDistance) <= activeElementDistance || activeElementDistance < scrollContainerDistance;
  
      if (activeItemOutOfView) {
        setDistance(activeElementDistance)
      }
    }
  }, [activeElement]);

  return distance;
};

/** ------------------------------------------------------------------------------ */
/** ------------------------------------------------------------------------------ */