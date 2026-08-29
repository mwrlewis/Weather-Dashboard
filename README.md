# Mike's Weather Dashboard

A Google Apps Script web app pulling together Wasatch Front / Cottonwood Canyons weather in one page.

- `Code.gs` — Apps Script entry point, serves `index.html` via `HtmlService`.
- `index.html` — the dashboard UI:
  - **Point forecasts** for Salt Lake City, Park City, and Alta — fetched client-side from the NWS API (`api.weather.gov`), matching the current conditions shown on the corresponding [forecast.weather.gov MapClick](https://forecast.weather.gov/MapClick.php) pages for each location.
  - **Cottonwood Canyons forecast** — the NWS Salt Lake avalanche/canyon weather forecast (`weather.gov/slc/AvalancheWeather`), embedded live in an iframe.
  - **Forecast discussion** — the latest Area Forecast Discussion (AFD) text product for the SLC office, fetched via the NWS products API and rendered as plain text.
  - **Alta snowfall & wind** — live station data (hourly snowfall, SWE, and Base/Mid/Baldy wind) from [wxstns.net](https://wxstns.net/ALTA.html), embedded live in an iframe.

## Setup

To deploy as an Apps Script web app:

1. Create a new Apps Script project and add `Code.gs` and `index.html`.
2. Deploy as a web app (`doGet` is the entry point).

## Notes

- The Cottonwood Canyons forecast and Alta snowfall/wind panels are embedded via `<iframe>` pointing at their live source pages. If a source site sends `X-Frame-Options` blocking embedding, the panel will appear blank — use the "Open in a new tab" link below each panel as a fallback.
- The NWS point-forecast and forecast-discussion panels use `api.weather.gov` directly and don't require an API key.
