<template>
  <div class="featured-code-list">

    <!--===================FEATURED CODE LIST===================-->
    <h1>FEATURED OPEN SOURCE CODE</h1>

    <FeaturedCode 
      title="ITS Public Data Hub Sandbox" 
      description="This repository contains information on accessing complete data sets from the USDOT JPO data program. It is meant to propose a data folder hierarchy to structure the processed data ingested from the Connected Vehicles (CV) Pilot programs and other streaming data sources. Currently this is a beta system using a folder hierarchy for processed Basic Safety Messages (BSM) and Traveler Information Messages (TIM) from the Wyoming CV Pilot site." 
      link="https://github.com/usdot-its-jpo-data-portal/sandbox"/>

    <FeaturedCode 
      title="ITS Public Data Hub Template" 
      description="The microsite template is designed to provide users of USDOT data a new standardized entry point for them to explore USDOT ITS data and for various groups within the USDOT to create customized data home pages with the template to promote their data." 
      link="https://github.com/usdot-its-jpo-data-portal/microsite"/>

    <FeaturedCode 
      title="ITS Operational Data Environment (ODE)" 
      description="A real-time data acquisition and distribution software system that processes and routes data from connected vehicles, personal mobile devices, infrastructure sensors, and other sources as needed and distributes data to subscribers based on their needs and level of authorized access." 
      link="https://github.com/usdot-jpo-ode/jpo-ode"/>

    <FeaturedCode 
      title="Privacy Protection Module (PPM)" 
      description="Processes real-time data from vehicles and infrastructure devices, routed through the Operational Data Environment (ODE) and retains data within a pre-determined geographic boundary – a process known as geofencing – while suppressing data from outside the boundary." 
      link="https://github.com/usdot-jpo-ode/jpo-cvdp"/>

    <FeaturedCode 
      title="Privacy Protection Application (PPA)" 
      description="Prevents inferences of drivers’ identities from large collections of connected vehicle geo-location data by using road networks, map-matching, and vehicle dynamics to identify and hide potentially sensitive locations based on information theory." 
      link="https://github.com/usdot-its-jpo-data-portal/privacy-protection-application"/>

    <FeaturedCode 
      title="Additional Open Source Applications" 
      description="The Open Source Application Development Portal (OSADP) enables stakeholders to collaborate and share insights, methods, and source code on research projects sponsored by the USDOT Dynamic Mobility Applications program (DMA)" 
      link="https://www.itsforge.net/"/>

  </div>
</template>

<script>
import FeaturedCode from "./FeaturedCode.vue";

export default {
  name: "FeaturedCodeList",
  components: {
    FeaturedCode
  },
  data: () => {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  /* outline: 1px solid red; */
}
.featured-code-list {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
}
h1 {
  color: white;
  font-size: 30px;
}
</style>
