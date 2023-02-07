import {Play} from 'phosphor-react'
import { FormContainer, HomeContainer, Contador, Separador, BotaoHome, TaskInput, MinuteInput} from './styles'
import { useState } from 'react'
import {useForm} from 'react-hook-form';
export function Home(){

  const {register, handleSubmit, watch} = useForm()

  function handleCreateNewCycle(data: any){
    console.log(data)
  }
  const taskIsEmpty = watch('task')
  return (
    <HomeContainer>
      <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="task">Minha Atividade: </label>
          <TaskInput id="task" list="task-sugestions" placeholder='informe o nome da atividade'
          {...register('task')}
          />

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
           {...register('qtdMinutos')}
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
      <BotaoHome  disabled={!taskIsEmpty} type="submit">
        <Play size={24}/>
        Começar
      </BotaoHome>
      </form>
    </HomeContainer>
)
}