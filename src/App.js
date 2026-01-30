
import Input from "./components/Input"
import Button from "./components/Button"

import { Container, Content, Row } from './styles'
import { useState } from "react"

const App = () => {

  const rows = [
    ['×', '÷', 'c','Del'],
    ['9','8','7','-'],
    ['6','5','4','+'],
    ['3','2','1', '=']
  ];

  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleButtonPress = (press) => {

    switch(press){

      case 'c':
        setCurrentNumber('0')
        setFirstNumber('0')
        setOperation('')
        break;

      case 'Del':
        if(currentNumber.length === 1) {
          setCurrentNumber('0')
        }
        else {
          setCurrentNumber((prev) => `${prev === '0' ? '' : prev.slice(0, -1)}`)
        }
        break;

      case '+':
        if(firstNumber === '0') { 
           setFirstNumber(currentNumber)
           setCurrentNumber('0')
           setOperation('+')
          }
        else {  
           const sum = Number(firstNumber) + Number(currentNumber)
           setCurrentNumber(String(sum))
           setFirstNumber('0')
        }
        break;

        case '-':
        if(firstNumber === '0') { 
           setFirstNumber(currentNumber)
           setCurrentNumber('0')
           setOperation('-')
          }
        else {  
           const sub = Number(firstNumber) - Number(currentNumber)
           setCurrentNumber(String(sub))
           setFirstNumber('0')
        }
        break;

        case '÷':
        if(firstNumber === '0') { 
           setFirstNumber(currentNumber)
           setCurrentNumber('0')
           setOperation('÷')
          }
        else {  
           const sub = Number(firstNumber) / Number(currentNumber)
           setCurrentNumber(String(sub))
           setFirstNumber('0')
        }
        break;

        case '×':
        if(firstNumber === '0') { 
           setFirstNumber(currentNumber)
           setCurrentNumber('0')
           setOperation('×')
          }
        else {  
           const sub = Number(firstNumber) * Number(currentNumber)
           setCurrentNumber(String(sub))
           setFirstNumber('0')
        }
        break;

      case '=':
        if(firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
          switch(operation){
            case '+':
              const sum = Number(firstNumber) + Number(currentNumber)
              setCurrentNumber(String(sum))
              setFirstNumber('0')
              break;

            case '-':
              const sub = Number(firstNumber) - Number(currentNumber)
              setCurrentNumber(String(sub))
              setFirstNumber('0')
              break;

            case '÷':
              const div = Number(firstNumber) / Number(currentNumber)
              setCurrentNumber(String(div))
              setFirstNumber('0')
              break;

            case '×':
              const mul = Number(firstNumber) * Number(currentNumber)
              setCurrentNumber(String(mul))
              setFirstNumber('0')
              break;

             default:
                break;  
          }

        }
        break;


        default:
          break;
    }

    if(!isNaN(press)) {
      setCurrentNumber(prev => `${prev === '0' ? '' : prev}${press}`)
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
          {rows.map((row, index) => (
            <Row key={index}>
              {row.map(valor => (
                <Button key={valor} label={valor} onCLick={() => handleButtonPress(`${valor}`)}  />
              ))}
            </Row>
          ))}
      </Content>
    </Container>
  );
}

export default App;
