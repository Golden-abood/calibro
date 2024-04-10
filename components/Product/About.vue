<template>
  <div class="container pt-44 pb-36">
    <h3 class="text-white text-center text-5xl md:text-7xl font-semibold pb-40">
      Problems <br class="md:hidden" />
      <span>vs</span> <br class="md:hidden" />
      Solutions
    </h3>

    <div
      class="grid md:grid-cols-2 items-baseline wrapper-cards gap-x-8 px-4 md:px-11 pt-11 pb-24 border-primary border-solid border-[1px] rounded-2xl relative gradient"
    >
      <ProductCard
        v-for="(card, index) in cards"
        :key="index"
        :card="card"
        :type="card.type"
        :index="index"
        class="mb-3 md:hidden"
      />

      <div class="hidden md:block relative !z-50">
        <ProductCard
          v-for="(card, index) in problemCards"
          :key="index"
          :card="card"
          type="problem"
          :index="index"
          class="mb-3"
        />
      </div>

      <div class="hidden md:block">
        <ProductCard
          v-for="(card, index) in solutionCards"
          :key="index"
          :card="card"
          type="solution"
          :index="index"
          class="mb-3"
        />
      </div>
    </div>
  </div>
  <ProductFeatures />
</template>

<script setup lang="ts">
const problemCards = ref([
  {
    title: 'Problem 1:',
    description: 'Complex Deployment Process',
    text: 'Deploying machine learning models from development notebooks to production systems is challenging and requires advanced system engineering to configure and scale resources for fluctuating user demand.',
    type: 'problem',
    photo: '/images/bridge-1.png'
  },
  {
    title: 'Problem 2:',
    description: 'Disruptions During Feature Integration',
    text: 'Integrating new features into software can sometimes cause disruptions and interruptions in user experience. Users may experience stops or delays in the software as new features are incorporated.',
    active: false,
    photo: '/images/bridge-1.png'
  },
  {
    title: 'Problem 3:',
    description: 'Tracking Model Performance in Production',
    text: 'Monitoring and tracking the performance of machine learning models once they are deployed in production can be challenging. It is crucial to monitor in real-time insights on model performance, detect anomalies, and track user satisfaction and insights.',
    active: false,
    photo: '/images/bridge-1.png'
  },
  {
    title: 'Problem 4:',
    description: 'Security Risks in Production Environments',
    text: 'Deploying machine learning models in production environments can expose vulnerabilities and security risks. Ensuring the confidentiality, integrity, and availability of the models and associated data is paramount to prevent unauthorized access or misuse.',
    active: false,
    photo: '/images/bridge-1.png'
  },
  {
    title: 'Problem 5:',
    description: 'User-Friendly Interface for Model Usage',
    text: 'Interacting with machine learning models can be daunting for non-technical users. Providing a user-friendly interface that simplifies the usage of the model, allows users to input their data easily and interpret the results is essential.',
    active: false,
    photo: '/images/bridge-1.png'
  }
])
const solutionCards = ref([
  {
    title: 'Solution 1:',
    description: 'Streamlined Deployment with Automatic Scaling',
    text: 'Streamlined deployment workflows with automatic scaling allow developers to focus on model development and refinement where the system handles resource scaling to meet fluctuating user demand.',
    photo: '/images/bridge-1.png'
  },
  {
    title: 'Solution 2:',
    description: 'Zero down-time Feature Integration',
    text: 'Using advanced software system design and engineering techniques enables zero-downtime feature integration, minimizing disruptions for a smooth user experience.',
    photo: '/images/bridge-1.png'
  },
  {
    title: 'Solution 3:',
    description: 'Comprehensive Performance Monitoring',
    text: "To effectively track model performance in production, a solution involves implementing comprehensive performance monitoring systems. Real-time performance metrics, such as user satisfaction, provide insights to assess the model's effectiveness.",
    photo: '/images/bridge-1.png'
  },
  {
    title: 'Solution 4:',
    description: 'Robust Security Measures',
    text: 'Implementing robust security measures like authentication, authorization, and encryption mitigates risks in production environments. Regular audits and updates strengthen resilience against evolving threats.',
    photo: '/images/bridge-1.png'
  },
  {
    title: 'Solution 5:',
    description: 'Intuitive and User-Freindly UI Design',
    text: 'Incorporating an intuitive, visually appealing UI with clear instructions and comprehensible results improves user experience and accessibility, even for non-technical users.',
    photo: '/images/bridge-1.png'
  }
])
const cards = ref([
  {
    title: 'Problem 1:',
    description: 'Complex Deployment Process',
    text: 'Deploying machine learning models from development notebooks to production systems is challenging and requires advanced system engineering to configure and scale resources for fluctuating user demand.',
    type: 'problem',
    photo: '/images/bridge-1.png'
  },
  {
    title: 'Solution 1:',
    description: 'Streamlined Deployment with Automatic Scaling',
    text: 'Streamlined deployment workflows with automatic scaling allow developers to focus on model development and refinement where the system handles resource scaling to meet fluctuating user demand.',
    type: 'solution',
    photo: '/images/bridge-1.png'
  },
  {
    title: 'Problem 2:',
    description: 'Disruptions During Feature Integration',
    text: 'Integrating new features into software can sometimes cause disruptions and interruptions in user experience. Users may experience stops or delays in the software as new features are incorporated.',
    type: 'problem',
    photo: '/images/bridge-1.png'
  },
  {
    title: 'Solution 2:',
    description: 'Zero down-time Feature Integration',
    text: 'Using advanced software system design and engineering techniques enables zero-downtime feature integration, minimizing disruptions for a smooth user experience.',
    type: 'solution',
    photo: '/images/bridge-1.png'
  },
  {
    title: 'Problem 3:',
    description: 'Tracking Model Performance in Production',
    text: 'Monitoring and tracking the performance of machine learning models once they are deployed in production can be challenging. It is crucial to monitor in real-time insights on model performance, detect anomalies, and track user satisfaction and insights.',
    type: 'problem',
    photo: '/images/bridge-1.png'
  },
  {
    title: 'Solution 3:',
    description: 'Comprehensive Performance Monitoring',
    text: "To effectively track model performance in production, a solution involves implementing comprehensive performance monitoring systems. Real-time performance metrics, such as user satisfaction, provide insights to assess the model's effectiveness.",
    type: 'solution',
    photo: '/images/bridge-1.png'
  },
  {
    title: 'Problem 4:',
    description: 'Security Risks in Production Environments',
    text: 'Deploying machine learning models in production environments can expose vulnerabilities and security risks. Ensuring the confidentiality, integrity, and availability of the models and associated data is paramount to prevent unauthorized access or misuse.',
    type: 'problem',
    photo: '/images/bridge-1.png'
  },
  {
    title: 'Solution 4:',
    description: 'Robust Security Measures',
    text: 'Implementing robust security measures like authentication, authorization, and encryption mitigates risks in production environments. Regular audits and updates strengthen resilience against evolving threats.',
    type: 'solution',
    photo: '/images/bridge-1.png'
  },
  {
    title: 'Problem 5:',
    description: 'User-Friendly Interface for Model Usage',
    text: 'Interacting with machine learning models can be daunting for non-technical users. Providing a user-friendly interface that simplifies the usage of the model, allows users to input their data easily and interpret the results is essential.',
    type: 'problem',
    photo: '/images/bridge-1.png'
  },
  {
    title: 'Solution 5:',
    description: 'Intuitive and User-Freindly UI Design',
    text: 'Incorporating an intuitive, visually appealing UI with clear instructions and comprehensible results improves user experience and accessibility, even for non-technical users.',
    type: 'solution',
    photo: '/images/bridge-1.png'
  }
])
</script>

<style scoped>
span {
  background: linear-gradient(#ec912a 50%, #ad73001f);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -2.34px;
}
.wrapper-cards {
  background: rgba(217, 217, 217, 0.03);

  box-shadow: 18.69919px 28.04878px 93.49593px 0px #000;
}
.gradient::before {
  content: '';
  left: -30%;
  top: 10%;
  position: absolute;
  width: 475px;
  height: 175px;
  transform: rotate(-176.456deg) scale3d(1, 1, 1);
  background: radial-gradient(#ec912b 27.55%, #ec201b);
  filter: blur(270px);
  border-radius: 675px;
}
@media (max-width: 1200px) {
  .gradient::before {
    filter: blur(350px);
  }
}
.gradient::after {
  content: '';
  right: -10%;
  bottom: 0%;
  position: absolute;
  width: 475px;
  height: 175px;
  transform: rotate(-176.456deg) scale3d(1, 1, 1);
  background: radial-gradient(#ec912b 27.55%, #ec201b);
  filter: blur(270px);
  border-radius: 675px;
}
@media (max-width: 1200px) {
  .gradient::before {
    filter: blur(350px);
  }
}
</style>
