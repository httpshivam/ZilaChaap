import React from 'react';

/**
 * Authentic Live Tandoor & Steamer Steam & Smoke (भाप और धुआँ) Overlay
 * Soft volumetric billowing smoke clouds, steaming vapor puffs, and glowing embers.
 * NO lines or wire-like strokes — pure organic rolling clouds and misty heat.
 */
export function SteamSmokeOverlay() {
  return (
    <div className="site-smoke-overlay" aria-hidden="true">
      {/* Warm Ambient Tandoor Heat Glow at bottom */}
      <div className="tandoor-ambient-heat" />

      {/* BILLOWING CHARCOAL SMOKE PLUMES (Soft, volumetric clouds) */}
      <div
        className="smoke-plume-charcoal"
        style={{
          width: '280px',
          height: '280px',
          left: '5%',
          bottom: '2%',
          animation: 'smoke-float-1 8.5s ease-out 0s infinite',
        }}
      />
      <div
        className="smoke-plume-charcoal"
        style={{
          width: '340px',
          height: '340px',
          left: '38%',
          bottom: '5%',
          animation: 'smoke-float-2 10s ease-out 1.5s infinite',
        }}
      />
      <div
        className="smoke-plume-charcoal"
        style={{
          width: '300px',
          height: '300px',
          left: '72%',
          bottom: '3%',
          animation: 'smoke-float-3 9.2s ease-out 3s infinite',
        }}
      />

      {/* BILLOWING STEAM VAPOR CLOUDS (Dense misty steam from momo steamers) */}
      <div
        className="steam-plume-hot"
        style={{
          width: '240px',
          height: '240px',
          left: '18%',
          bottom: '8%',
          animation: 'smoke-float-3 7.8s ease-out 2s infinite',
        }}
      />
      <div
        className="steam-plume-hot"
        style={{
          width: '310px',
          height: '310px',
          left: '52%',
          bottom: '6%',
          animation: 'smoke-float-1 9.5s ease-out 4s infinite',
        }}
      />
      <div
        className="steam-plume-hot"
        style={{
          width: '260px',
          height: '260px',
          left: '84%',
          bottom: '10%',
          animation: 'smoke-float-2 8.5s ease-out 0.8s infinite',
        }}
      />
      <div
        className="steam-plume-hot"
        style={{
          width: '220px',
          height: '220px',
          left: '32%',
          bottom: '12%',
          animation: 'smoke-float-2 8s ease-out 5s infinite',
        }}
      />

      {/* GLOWING CHARCOAL EMBERS / SPARKS (चिंगारी) */}
      <div
        className="glowing-ember"
        style={{
          left: '15%',
          bottom: '10%',
          animation: 'ember-rise 6.5s ease-out 0.2s infinite',
        }}
      />
      <div
        className="glowing-ember"
        style={{
          left: '36%',
          bottom: '14%',
          animation: 'ember-rise 7.8s ease-out 2.4s infinite',
        }}
      />
      <div
        className="glowing-ember"
        style={{
          left: '50%',
          bottom: '8%',
          width: '6px',
          height: '6px',
          animation: 'ember-rise 8.2s ease-out 1.1s infinite',
        }}
      />
      <div
        className="glowing-ember"
        style={{
          left: '68%',
          bottom: '12%',
          animation: 'ember-rise 6.8s ease-out 3.6s infinite',
        }}
      />
      <div
        className="glowing-ember"
        style={{
          left: '88%',
          bottom: '9%',
          animation: 'ember-rise 7.2s ease-out 1.8s infinite',
        }}
      />
    </div>
  );
}
