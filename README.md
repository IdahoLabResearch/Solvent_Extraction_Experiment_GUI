# Chemical Solvent Extraction Dashboard

## Overview
This project provides a Graphical User Interface (GUI) and Mixed Reality (MR) integration for the monitoring and diagnostics of the chemical solvent extraction process at Idaho National Laboratory. The dashboard displays real-time data and safeguards to ensure that the system operates within optimal operational bounds.

## Table of Contents
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Alternate App Commands](#alternate-app-commands)
- [App Breakdown](#app-breakdown)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the repository:**
```sh
git clone https://github.inl.gov/Digital-Engineering/BCTC-Beartooth-GUI.git
```

2. **Navigate to directory**
```sh
cd /path-to-directory/BCTC-Beartooth-GUI
```

3. **Install dependencies:**
```sh
npm install
```

## Running the App

1. **Start the development server:**
Local web server with HMR for development
```sh
npm run dev
```

2. **Start the mock database server:**
Local mock database for serving up data
```sh
npm run dev:server
```

3. **Run the app in a browser:**
Open your browser and navigate to [http://localhost:5173/](http://localhost:5173/ "BCTC/LBL Beartooth GUI")

## Alternate App commands

**Compiles and minifies for production:**
Build the project, and output to the folder ./dist
```sh
npm run build
```

**Create a Vite Preview:**
Start a local web server that serves the built solution from ./dist for previewing
```sh
npm run preview
```

**Lint and fix files**
Lint scripts: Search files for code that does not match styles defined by ESLint and fix them
```sh
npm run lint:scripts
```
Lint styles: Search files for code that does not match styles defined by Stylelint and fix them
```sh
npm run lint:styles
```

## App Breakdown
### 1: System Overview
The System Overview provides high-level insights into the chemical solvent extraction process. It includes a flowsheet overview that represents the real-world aqueous separation system components, including stages, sections, material and solution input and output points, flow direction, placements of sensors, and their readings. The overall system status is categorized into four sections: Fresh Organic, Organic Recycle, Aqueous Feed, and Strip Product. The dashboard shows real-time data on key parameters like neodymium and nickel concentrations. Users can easily identify which sections are operating within optimal conditions and which may require attention.

### 2: Selected Section Information
The Section Readings view displays detailed data for each section of the flowsheet. Users can click on individual sections to view specific data points.

#### 2.1: Chemical Readings
This is the main overview of each section. It provides the key data such as:
- Flow characteristics: Flowrate for aqueous and organic components, O/A ratio, and density.
- Organic phase concentration: Molar concentration of neodymium and nickel for the inlet, outlet (measured), and outlet (predicted).
- Aqueous phase concentration: Similar to organic phase concentration, providing molar values for neodymium and nickel.

This view helps users understand the performance of each section and identify any deviations from expected values.

#### 2.2: Timeseries Data
This view displays the data over time, allowing users to monitor trends and changes throughout the experiment. Timeseries data includes:
- Concentration Over Time: Tracking the concentration levels of neodymium and nickel in both organic and aqueous phases.
- Wavelength Over Time: Monitoring changes in wavelength readings to analyze the chemical interactions and separations.
- UV/Vis Over Time: Observing the ultraviolet-visible spectroscopy data to understand the absorption and transmission properties of the solutions.

This view helps users understand the data over time, allowing them to monitor the process and make informed decisions. It is worth noting that this view has been cleared of any sensitive data and is therefore not as functional as it would be in a real-world experiment.

#### 2.3: Safeguards Assessment
This view provides detailed information about the safeguards status for the selected section, including anomaly details, locations of interest, anomaly strength, concentration levels, and recommended responses.

### 3: Selected Stage Information
The Stage Information view provides information on the status of individual stages within each section. This includes metrics such as:
- Motor revolutions per minute (RPM)
- Temperature
- 3D model of the stage equipment

Users can interact with the stages to get a deeper understanding of the system's health. For example, if the RPM or temperature is outside the optimal range, it may indicate a malfunction or need for maintenance.

### 4: Safeguards and Alerts
The Safeguards and Alerts section displays notifications about any issues within the system. Alerts are shown in three places:
- Top-right corner of the application: An indicator notifies the operator of an issue when the menu is collapsed and there is no selected section. This indicator is a red exclamation point symbol to draw attention.
- Menu sidebar: Displays system information and alerts when expanded. Users can choose to keep it open permanently or collapse it.
- Safeguards assessment tab of a selected section: Provides detailed information about the safeguards status for the selected section, including anomaly details, locations of interest, anomaly strength, concentration levels, and recommended responses.

These safeguards notifications allow users to stay on top of potential issues and take corrective actions promptly.

### 5: System Components Status
The System Components sidebar section displays the status of the Data Historian, ML Adapter, and Chemical Adapter. If there is an issue with any component, a user is alerted so that they can investigate.

## Technologies Used
- **React:** A JavaScript library for building user interfaces.
- **React Router:** For handling routing within the application.
- **React Redux:** For connecting Redux with React to manage the global state of the application.
- **Redux Toolkit:** Simplifies Redux setup and provides tools like createSlice and configureStore.
- **Redux Toolkit Query:** For making API calls efficiently and managing remote data.
- **Material-UI:** A popular React UI framework for designing components.
- **Plotly.js:** A JavaScript graphing library for creating interactive charts.
- **React-Plotly.js:** React wrapper for Plotly.js.
- **Luxon:** A library for working with dates and times.
- **Sass:** A CSS preprocessor that allows you to use variables, nested rules, and more.
- **Json-Server:** A full fake REST API with zero coding.
- **Three.js:** A JavaScript library for 3D graphics.
- **Unity:** Used for generating the 3D model integrated into the application.

## Contributing
This is an private and archived project. Contributing is not currently allowed. Please download the project code to build upon this code.

## License
MIT License. Copyright (c) 2025 Idaho National Laboratory Research Projects