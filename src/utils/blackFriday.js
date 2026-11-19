import { useEffect, useState } from 'react';

// Black Friday 2026: Roads Audio Plus Lifetime at $49.99, then $99.99 from Dec 2.
// Start and end are midnight and 11:59:59 pm US Eastern, the same end time the
// in-app banner counts down to.
export const DEAL_START = Date.parse('2026-11-26T05:00:00Z');
export const DEAL_END = Date.parse('2026-12-02T05:00:00Z');
export const DEAL_PRICE = '$49.99';
export const LIFETIME_PRICE = '$99.99';

const phaseAt = (now) => {
  if (now < DEAL_START) return 'upcoming';
  if (now < DEAL_END) return 'live';
  return 'ended';
};

// The phase and time left, ticking once a minute. The server render (and the
// first client render) assume the deal is live, so the page never flashes
// "ended" text while it loads.
export function useDealPhase() {
  const [now, setNow] = useState(null);

  useEffect(() => {
    const tick = () => setNow(Date.now());
    tick();
    const timer = setInterval(tick, 60 * 1000);
    return () => clearInterval(timer);
  }, []);

  if (now === null) return { phase: 'live', timeLeft: null };
  const phase = phaseAt(now);
  return { phase, timeLeft: phase === 'live' ? timeLeftUntil(DEAL_END, now) : null };
}

const plural = (count, word) => `${count} ${word}${count === 1 ? '' : 's'}`;

// Matches the app's countdown strip: days and hours, then hours and minutes.
function timeLeftUntil(end, now) {
  const totalMinutes = Math.ceil((end - now) / 60000);
  const days = Math.floor(totalMinutes / 1440);
  const hours = Math.floor((totalMinutes % 1440) / 60);
  const minutes = totalMinutes % 60;
  if (days > 0)
    return hours > 0 ? `${plural(days, 'day')}, ${plural(hours, 'hour')}` : plural(days, 'day');
  if (hours > 0)
    return minutes > 0
      ? `${plural(hours, 'hour')}, ${plural(minutes, 'minute')}`
      : plural(hours, 'hour');
  return plural(minutes, 'minute');
}
