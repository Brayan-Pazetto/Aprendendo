import { Button, Container, ContainerInputs, Form, Input, InputLabel, Title, TopBackground } from './styles.js'


function Home() {
 
  return (

    <Container>
      <TopBackground>
        <img />
      </TopBackground>

      <Form>
        <Title> Cadastrar Usuários </Title>

        <ContainerInputs>
          <div>
            <div>
              <InputLabel>
                Nome<span> *</span>
              </InputLabel>
              <Input type='text' placeholder='Nome do usuario' />
            </div>
            <div>
              <InputLabel>
                Idade<span>*</span>
              </InputLabel>
              <Input type='text' placeholder='Idade do usuario' />
            </div>
            </div>
            </ContainerInputs>
            <div>
              <InputLabel style={{width: '100%'}}>
                Email<span>*</span>
              </InputLabel>
              <Input type='text' placeholder='Email do usuario' />
            </div>

         

        <Button>Cadastrar usuario</Button>


      </Form>

    </Container>

  )
}

export default Home