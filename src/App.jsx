import Landing from './pages/Landing/Landing'

function App() {

  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS.load('particles-js', '/particles/particlesjs-config.json', function() {
    console.log('callback - particles-js config loaded');
  });

  return (
    <>
      <Landing /> 
      <script src="particles.js"></script>
    </>
  )
}

export default App
