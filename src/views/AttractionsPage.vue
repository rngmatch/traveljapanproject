<template>
    <div class="attractions">
      <h1>Popular Attractions in Japan</h1>
      <ul>
        <li>Tokyo Skytree</li>
        <li>Mount Fuji</li>
        <li>Akihabara</li>
        <li>Fushimi Inari shrine</li>
        <li>Imperial Palace</li>
        <li>Arashiyama Bamboo Forest</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "AttractionsPage",
  };
  </script>
  
  <style lang="postcss" scoped>
  .attractions {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 2rem;
    background-color: #5ad190;
  }
  
  h1 {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 2rem;
  }
  
  li {
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  
  li:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
  </style>