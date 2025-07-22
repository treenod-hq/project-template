// 필요한 아이콘들만 포함
import sidebarMinimalisticBoldDuotone from '@iconify-icons/solar/sidebar-minimalistic-bold-duotone'
import lockBoldDuotone from '@iconify-icons/solar/lock-bold-duotone'
import homeLinear from '@iconify-icons/solar/home-linear'
import userLinear from '@iconify-icons/solar/user-linear'
import loginBoldDuotone from '@iconify-icons/solar/login-3-bold-duotone'
import exitBoldDuotone from '@iconify-icons/solar/exit-bold-duotone'
import sunBoldDuotone from '@iconify-icons/solar/sun-bold-duotone'
import moonBoldDuotone from '@iconify-icons/solar/moon-bold-duotone'
import home2BoldDuotone from '@iconify-icons/solar/home-2-bold-duotone'

// Custom SVG icon for sun-2-linear
const sun2Linear = {
  body: '<g fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="5"/><path stroke-linecap="round" d="M12 2v2m0 16v2M4 12H2m20 0h-2m-.222-7.777l-2.222 2.031M4.222 4.223l2.222 2.031m0 11.302l-2.222 2.222m15.556-.001l-2.222-2.222"/></g>',
  width: 24,
  height: 24
}

// Custom SVG icon for sun-linear
const sunLinear = {
  body: '<g fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="6"/><path stroke-linecap="round" d="M12 2v1m0 18v1m10-10h-1M3 12H2m17.07-7.07l-.392.393M5.322 18.678l-.393.393m14.141-.001l-.392-.393M5.322 5.322l-.393-.393"/></g>',
  width: 24,
  height: 24
}

// Custom SVG icon for moon-linear
const moonLinear = {
  body: '<path fill="currentColor" d="m21.067 11.857l-.642-.388zm-8.924-8.924l-.388-.642zM21.25 12A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75zM12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75zM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12zm12.75 2.25A5.75 5.75 0 0 1 9.75 8.5h-1.5a7.25 7.25 0 0 0 7.25 7.25zm4.925-2.781A5.75 5.75 0 0 1 15.5 14.25v1.5a7.25 7.25 0 0 0 6.21-3.505zM9.75 8.5a5.75 5.75 0 0 1 2.781-4.925l-.776-1.284A7.25 7.25 0 0 0 8.25 8.5zM12 2.75a.38.38 0 0 1-.268-.118a.3.3 0 0 1-.082-.155c-.004-.031-.002-.121.105-.186l.776 1.284c.503-.304.665-.861.606-1.299c-.062-.455-.42-1.026-1.137-1.026zm9.71 9.495c-.066.107-.156.109-.187.105a.3.3 0 0 1-.155-.082a.38.38 0 0 1-.118-.268h1.5c0-.717-.571-1.075-1.026-1.137c-.438-.059-.995.103-1.299.606z"/>',
  width: 24,
  height: 24
}

// Custom SVG icon for home-2-linear
const home2Linear = {
  body: '<g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 12.204c0-2.289 0-3.433.52-4.381c.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2s2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715S22 9.915 22 12.203v1.522c0 3.9 0 5.851-1.172 7.063S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212S2 17.626 2 13.725z"/><path stroke-linecap="round" d="M12 15v3"/></g>',
  width: 24,
  height: 24
}

// Custom SVG icon for folder-linear
const folderLinear = {
  body: '<g fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" d="M18 10h-5"/><path d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.119.105.224.224c.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"/></g>',
  width: 24,
  height: 24
}

// Custom SVG icon for battery-low-linear
const batteryLowLinear = {
  body: '<g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172S19.5 8.229 19.5 12s0 5.657-1.172 6.828S15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z"/><path stroke-linecap="round" d="M7 9s.5.9.5 3s-.5 3-.5 3"/><path d="M20 10c.943 0 1.414 0 1.707.293S22 11.057 22 12s0 1.414-.293 1.707S20.943 14 20 14z"/></g>',
  width: 24,
  height: 24
}

// Custom SVG icon for clapperboard-linear
const clapperboardLinear = {
  body: '<g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"/><path stroke-linecap="round" d="M21.5 8h-19m8-5.5L7 8m10-5.5L13.5 8"/></g>',
  width: 24,
  height: 24
}

export const icons = {
  'solar:sidebar-minimalistic-bold-duotone': sidebarMinimalisticBoldDuotone,
  'solar:lock-bold-duotone': lockBoldDuotone,
  'solar:home-linear': homeLinear,
  'solar:user-linear': userLinear,
  'solar:login-3-bold-duotone': loginBoldDuotone,
  'solar:exit-bold-duotone': exitBoldDuotone,
  'solar:sun-bold-duotone': sunBoldDuotone,
  'solar:moon-bold-duotone': moonBoldDuotone,
  'solar:home-2-bold-duotone': home2BoldDuotone,
  'solar:sun-2-linear': sun2Linear,
  'solar:sun-linear': sunLinear,
  'solar:moon-linear': moonLinear,
  'solar:home-2-linear': home2Linear,
  'solar:folder-linear': folderLinear,
  'solar:battery-low-linear': batteryLowLinear,
  'solar:clapperboard-linear': clapperboardLinear,
}