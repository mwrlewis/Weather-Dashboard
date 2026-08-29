# Mike's Weather Dashboard

A Google Apps Script web app pulling together Wasatch Front / Cottonwood Canyons weather in one page.

- `Code.gs` — Apps Script entry point, serves `index.html` via `HtmlService`.
- `index.html` — the dashboard UI:
  - **Point forecasts** for Salt Lake City, Park City, and Alta — fetched client-side from the NWS API (`api.weather.gov`), matching the current conditions shown on the corresponding [forecast.weather.gov MapClick](https://forecast.weather.gov/MapClick.php) pages for each location.
  - **Cottonwood Canyons forecast** — the NWS Salt Lake avalanche/canyon weather forecast (`weather.gov/slc/AvalancheWeather`), embedded live in an iframe.
  - **Forecast discussion** — the latest Area Forecast Discussion (AFD) text product for the SLC office, fetched via the NWS products API and rendered as plain text.
  - **Alta snowfall & wind** — live station observations (temp, wind, snow depth) within 3 miles of Alta, from the [Synoptic Data](https://synopticdata.com/) (MesoWest) API.

## Setup

To deploy as an Apps Script web app:

1. Create a new Apps Script project and add `Code.gs` and `index.html`.
2. In `index.html`, set `SYNOPTIC_TOKEN` to your own free Synoptic Data API token:
   - Sign up at [customer.synopticdata.com](https://customer.synopticdata.com/) (free tier).
   - Grab your token from the account's API tokens page.
   - For a production deployment, proxy this token through a small server-side endpoint instead of shipping it in page source, same as any API key.
3. Deploy as a web app (`doGet` is the entry point).

## Notes

- The Cottonwood Canyons forecast panel is embedded via `<iframe>` pointing at its live source page. If that site sends `X-Frame-Options` blocking embedding, the panel will appear blank — use the "Open in a new tab" link below it as a fallback.
- The NWS point-forecast and forecast-discussion panels use `api.weather.gov` directly and don't require an API key.
- Without a `SYNOPTIC_TOKEN` set, the Alta snowfall/wind panel shows a prompt to add one instead of attempting a doomed fetch.
