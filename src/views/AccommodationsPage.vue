<template>
    <div class="accommodations">
      <h1>Popular Accommodations in Japan</h1>
      <ul>
        <li>Accommodation 1</li>
        <li>Accommodation 2</li>
        <li>Accommodation 3</li>
        <li>Accommodation 4</li>
        <li>Accommodation 5</li>
        <li>Accommodation 6</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "AccommodationsPage",
  };
  </script>
  
  <style lang="postcss" scoped>
  .accommodations {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 2rem;
    background-color: #5ad1cf;
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