import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api.js'


import { Container, ContainerInputs, Form, Input, InputLabel, Title } from './styles.js'

import Button from '../../components/Button'

import  TopBackground  from '../../components/TopBackground'

function Home() {

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  const navigate = useNavigate()

  async function registerNewUser(){
    const data = await api.post('/usuarios',{
      email: inputEmail.current.value, 
      age: parseInt(inputAge.current.value),
      name: inputName.current.value
    })

    console.log(data)
}



  return (

    <Container>
      
<TopBackground/>
      <Form>
        <Title> Cadastrar Usuários </Title>

        <ContainerInputs>
          <div>
            <div>
              <InputLabel>
                Nome<span> *</span>
              </InputLabel>
              <Input type='text' placeholder='Nome do usuario' ref={inputName} />
            </div>
            <div>
              <InputLabel>
                Idade<span>*</span>
              </InputLabel>
              <Input type='text' placeholder='Idade do usuario' ref={inputAge} />
            </div>
          </div>
        </ContainerInputs>
        <div>
          <InputLabel style={{ width: '100%' }}>
            Email<span>*</span>
          </InputLabel>
          <Input type='text' placeholder='Email do usuario' ref={inputEmail} />
        </div>



        <Button type='button' onClick={registerNewUser} theme='primary'>Cadastrar usuario</Button>


      </Form>

      <Button type='button' onClick={() => navigate('/lista-de-usuarios')}>Ver lista de usuarios</Button>

    </Container>

  )
}

export default Home