import './styles/global.css';
import { Route, Routes } from 'react-router-dom'
import { AboutPage } from './pages/AboutPage';
import { HomePage } from './pages/HomePage';
import Header from './components/global/Header';
import { JournalPage } from './pages/JournalPage';
import { ContactPage } from './pages/ContactPage';
import Footer from './components/global/Footer';
import { StudentsPage } from './components/local/Students';
import StudentsTwo from './components/local/StudentsTwo';
import AboutHeaTech from './components/local/AboutHeaTech';
import StudentsThree from './components/local/StudentThrees';
import StudentsFour from './components/local/StoudetsFour';
import StudentsFive from './components/local/StudentsFive';
import StudentsSix from './components/local/StudentsSix';
import StudentsSeven from './components/local/StudentsSeven';
import StudentsEight from './components/local/StudentsEight';
import StudentsNine from './components/local/StudentsNine';
import StudentsTen from './components/local/StudentsTen';
import StudentsElevn from './components/local/StudentsElevn';
import { TeacherPage } from './pages/TeacherPage';
import { Others } from './pages/Others';

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <HomePage />
      break;
    case "/about":
      component = <AboutPage />
      break;
    case "/journal":
      component = <JournalPage />
      break;
    case "/contact":
      component = <ContactPage />
      break
    case "/students":
      component = <StudentsPage />
      break

    case "/students-2":
      component = <StudentsTwo />
      break

    case "/aboutHeaTech":
      component = <AboutHeaTech />
      break

    case "/students-3":
      component = <StudentsThree />
      break
    case "/students-4":
      component = <StudentsFour />
      break
    case "/students-5":
      component = <StudentsFive />
      break
    case "/students-6":
      component = <StudentsSix />
      break
    case "/students-7":
      component = <StudentsSeven />
      break

    case "/students-8":
      component = <StudentsEight />
      break

    case "/students-9":
      component = <StudentsNine />
      break

    case "/students-10":
      component = <StudentsTen />
      break

    case "/students-11":
      component = <StudentsElevn />
      break
    case "/teacher":
      component = <TeacherPage />
      break
    case "/other":
      component = <Others />
      break
  }

  return (
    <div>
      <Header />
      {component}

      <div style={{ marginTop: 80 }}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
