# Cottonwood Canyons Weather Dashboard

A live weather dashboard for the Cottonwood Canyons (Alta, Brighton, Snowbird, Solitude), built as a Google Apps Script web app.

- `Code.gs` — Apps Script entry point, serves `index.html` via `HtmlService`.
- `index.html` — the dashboard UI. Pulls live data client-side from:
  - NWS API (`api.weather.gov`) for forecast and station observations
  - NOAA radar loop
  - UDOT Traffic API for road conditions and canyon cameras
  - Resort camera feeds (Alta, Brighton, Snowbird, Solitude)
  - CBRFC SWE (snow water equivalent) graph

## Setup

To deploy as an Apps Script web app:

1. Create a new Apps Script project and add `Code.gs` and `index.html`.
2. In `index.html`, set `UDOT_KEY` to your own UDOT Traffic API key (request one at https://www.udottraffic.utah.gov/). For a production deployment, proxy this key through a small server-side endpoint instead of shipping it in page source — UDOT throttles to 10 calls/60s per key.
3. Deploy as a web app (`doGet` is the entry point).

Some feeds (avalanche forecast, 48hr/30-day snow depth, SNOTEL SWE) are dormant off-season and populate automatically once winter observations resume.
