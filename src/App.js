import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/header';
import MultiStep from 'react-multistep'
import HeaderUrl from './pages/headerUrl';
import Container from 'react-bootstrap/esm/Container';
import ColumnInfo from './pages/ColumnInfo';
import TextInformation from './pages/textInformation';
function App() {
 const prevButton = () =>{
 }
 const nextButton = () =>{
 }
  return (
  <>
  <Container>
  {/* <MultiStep activeStep={0} className="step" prevButton={prevButton} nextButton={nextButton}>
    <Header title='Step 1'/>
    <HeaderUrl title='Step 2'/>
    <ColumnInfo title='Step 3' />

</MultiStep> */}
<TextInformation/>
</Container>
 </>
  )
}
export default App;
