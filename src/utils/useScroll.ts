import { useState, useEffect } from 'react';

export const Easing = {
  // no easing, no acceleration
  linear: (t: any) => t,
  // accelerating from zero velocity
  easeInQuad: (t: number) => t * t,
  // decelerating to zero velocity
  easeOutQuad: (t: number) => t * (2 - t),
  // acceleration until halfway, then deceleration
  easeInOutQuad: (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
  // accelerating from zero velocity
  easeInCubic: (t: number) => t * t * t,
  // decelerating to zero velocity
  easeOutCubic: (t: number) => --t * t * t + 1,
  // acceleration until halfway, then deceleration
  easeInOutCubic: (t: number) => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1),
  // accelerating from zero velocity
  easeInQuart: (t: number) => t * t * t * t,
  // decelerating to zero velocity
  easeOutQuart: (t: number) => 1 - --t * t * t * t,
  // acceleration until halfway, then deceleration
  easeInOutQuart: (t: number) => (t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t),
  // accelerating from zero velocity
  easeInQuint: (t: number) => t * t * t * t * t,
  // decelerating to zero velocity
  easeOutQuint: (t: number) => 1 + --t * t * t * t * t,
  // acceleration until halfway, then deceleration
  easeInOutQuint: (t: number) => (t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t),
};

const computeAbsoluteValue = (value: string | number, container: HTMLElement) => {
  if (typeof value === 'number') {
    return value;
  }
  if (typeof value === 'string') {
    const num = parseFloat(value);
    const unit = value.match(/[a-z]+$/i);
    if (unit) {
      switch (unit[0]) {
        case 'vh':
          return (num / 100) * window.innerHeight;
        case '%':
          // return (num / 100) * container.innerHeight;
          return (num / 100) * container.clientHeight;
      }
    }
  }
  return NaN;
};

interface UseScrollProps {
  container?: HTMLElement;
  start?: string | number;
  end?: string | number;
  ease?: (t: number) => number;
}

const useScroll = ({
  container = document.documentElement,
  start = 0,
  end = container.scrollHeight - window.innerHeight,
  ease = Easing.linear,
}: UseScrollProps = {}) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let raf: number;
    let prevScroll = window.scrollY;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (window.scrollY !== prevScroll) {
        prevScroll = window.scrollY;
        // action.
        const startAbs = computeAbsoluteValue(start, container);
        const endAbs = computeAbsoluteValue(end, container);
        // const totalHeight = container.scrollHeight;
        // const viewHeight = window.innerHeight;
        // const progressAbs = container.scrollTop / (totalHeight - viewHeight);
        const progress = (container.scrollTop - startAbs) / (endAbs - startAbs);
        // console.log(progressAbs, progress);
        setProgress(ease(Math.min(1, Math.max(0, progress))));
      }
    };
    tick();
    return () => cancelAnimationFrame(raf);
  });
  return progress;
};

export default useScroll;
