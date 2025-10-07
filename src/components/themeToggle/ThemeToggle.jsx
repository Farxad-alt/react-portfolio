import {FaSun, FaMoon} from 'react-icons/fa';
import {useState} from 'react';
import "./ThemeToggle.css"
const ThemeToggle = () => {
const [theme, setTheme] = useState('light');
 useState(() => {
   const saveTheme = localStorage.getItem('saved-theme');
   if (saveTheme) {
     setTheme(saveTheme);
     document.body.classList.toggle('dark-theme', saveTheme === 'dark');
   }
 },[]);
 const toggleTheme = () => {
   const newTheme = theme === 'light' ? 'dark' : 'light';
   setTheme(newTheme);
   document.body.classList.toggle('dark-theme', newTheme === 'dark');
   localStorage.setItem('saved-theme', newTheme);
 }
    return (
      <div className="theme-toggle" onClick={toggleTheme}>
        {theme === 'light' ? <FaSun onClick={toggleTheme} /> : <FaMoon onClick={toggleTheme} />}
      </div>
    );
}
  export default ThemeToggle;
