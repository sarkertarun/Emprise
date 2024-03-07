import keepPreset from "keep-react/preset";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      // Color start
      colors: {
       'primaryColor': "#1D293F",
       'btnColor': "#28B0A6",
       'secondaryColor': "#212529",
       'yellowColor':"#F5A623",
       'grayColor':"#99A3AD",
       'paraColor': "#546179",
       'badgeBgColor' : "#FEF2DE",
       'redBaseColor' : "#F9C7D2",
       'redBadge': "#EE5879",
       'bottomBorder' : "#E9ECEF",
       'supCardBgColor':"#1D293F",
       'starColor':"#DCE5EB",
       'heardBg': '#FBFBFB',  
       'subColor':"#6C757D", 
       'wishListColor': "#04d6c8",
       'searchColor': '#28B0A6',
       'heardColor': '#546179',
       'wishListBgColor': '#F5F5F3', 
       'borderColor':"#F8F9FA",   
       
      },
      // Color end

       // Box Shadow Start
       boxShadow: {
        'locationShadow': '0px 43px 66px rgba(0,0,0,0.07)',
        'category': '0px 2px 4px rgba(14,86,124,0.16)',
        'trendingCard': '0px 2px 4px rgba(14,86,124,0.16)',
        'heartShadow': ' 0px 4px 8px rgba(44,44,44,0.1)',
      },
      // Box Shadow End
      
      // Background Image start
      backgroundImage: {

       },
     // Background Image end

      // Font Family start
      fontFamily: {
        'Poppins': ['Poppins'],
        'Inter': ["Inter"],
        
      },
      // Font Family end


       // Spacing Start
       spacing: {
        's300': '300px !important',
        's48': '48px !important',
        's136': '136px',
        's350': '350px',
        's1328': '1328px',
        's72': '72px',
        's112': '112px',
        's376': '376px',
        's293': '293px',
        's10': '10px',
        's6': '6px',
        's512': '512px',
        's360': '360px',
      },
      // Spacing End

      // Container width start
      maxWidth: {
        "container": "1600px",
      },
     // Container width end

      // Border Radius Start
      borderRadius: {
        'r28': '28px',
        'r20': '20px',
      },
      // Border Redius Start

      // Font Size Start
      fontSize: {
        t128: '128px',
        t40: '40px',
      },
      // Font Size End

      // Box Shadow Start
      boxShadow: {
        'locationShadow': '0px 43px 66px rgba(0,0,0,0.07)',
        'category': '0px 2px 4px rgba(14,86,124,0.16)',
        'trendingCard': '0px 2px 4px rgba(14,86,124,0.16)',
        'heartShadow': ' 0px 4px 8px rgba(44,44,44,0.1)',
      },
      // Box Shadow End

    },
  },
  plugins: [],
  presets: [keepPreset],
}

