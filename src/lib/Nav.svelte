<script>
  import logo from "$lib/assets/SpamDetectorLogo.png";
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
</script>

<Navbar class="bg-white border-gray-200 dark:bg-gray-900 border-b m-0">
  <NavBrand href="/">
    <img src={logo} class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">Flowbite</span>
  </NavBrand>
  <NavHamburger />
  <NavUl>
    <NavLi href="/about">About</NavLi>
    <NavLi href="/contact">Contact</NavLi>
  </NavUl>
</Navbar>

<!-- <nav class="bg-white border-gray-200 dark:bg-gray-900 border-b">
  <div
    class="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-4"
  >
    <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={logo} class="h-8" alt="Spam Detector Logo" />
      <span
        class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
        >SpamDetector</span
      >
    </a>
    <button
      data-collapse-toggle="navbar-default"
      type="button"
      class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      aria-controls="navbar-default"
      aria-expanded="false"
    >
      <span class="sr-only">Open main menu</span>
      <svg
        class="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul
        class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
      >
        <li>
          <a
            href="/about"
            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#ea8663] md:p-0 dark:text-white md:dark:hover:text-[#ea8663] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >About</a
          >
        </li>
        <li>
          <a
            href="/contact"
            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#ea8663] md:p-0 dark:text-white md:dark:hover:text-[#ea8663] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >Contact</a
          >
        </li>
      </ul>
    </div>
  </div>
</nav> -->


  <!-- <nav class="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 border-b">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={logo} class="h-8" alt="Spam Detector Logo" />
      <span
        class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
        >SpamDetector</span
      >
    </a>
    <button data-collapse-toggle="navbar-hamburger" type="button" class="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
      </svg>
    </button>
    <div class="hidden w-full" id="navbar-hamburger">
      <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <li>
          <a href="/" class="block py-2 px-3 text-white bg-blue-700 rounded dark:bg-blue-600" aria-current="page">About</a>
        </li>
        <li>
          <a href="/" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav> -->
