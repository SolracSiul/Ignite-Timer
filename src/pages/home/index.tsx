import {Play} from 'phosphor-react'
import { FormContainer, HomeContainer, Contador, Separador, BotaoHome, TaskInput, MinuteInput} from './styles'
export function Home(){
  return <>
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Minha Atividade: </label>
          <TaskInput id="task" list="task-sugestions" placeholder='informe o nome da atividade'/>

          <datalist id='task-sugestions'>
            <option value="Projeto 1"></option>
            <option value="Projeto 2"></option>
            <option value="Projeto 3"></option>
            <option value="Projeto 4"></option>
          </datalist>
          <label htmlFor="qtdMinutos">durante</label>
          <MinuteInput 
            type="number"
           id="qtdMinutos"
           placeholder='60'
           step={5}
           min={5}
           max={60}
           />

          <span>minutos</span>
         </FormContainer>
      
      <Contador>
        <span>0</span>
        <span>0</span>
        <Separador>:</Separador>
        <span>0</span>
        <span>0</span>
      </Contador>
      <BotaoHome  disabled type="submit">
        <Play size={24}/>
        Começar
      </BotaoHome>
      </form>
    </HomeContainer>
  </>
}