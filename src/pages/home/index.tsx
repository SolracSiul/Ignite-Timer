import {Play} from 'phosphor-react'
import { FormContainer, HomeContainer, Contador, Separador, BotaoHome, TaskInput, MinuteInput} from './styles'
import {useForm} from 'react-hook-form';
import { zodResolver} from '@hookform/resolvers/zod'
import * as zod from 'zod'

const newCycleValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'),
    qtdMinutos: zod.number().min(5).max(60, 'ciclo de no máximo 60 minutos'),
})

interface newCycleFormat {
  task: string
  qtdMinutos: number

}
export function Home(){

  const {register, handleSubmit, watch} = useForm<newCycleFormat>({
    resolver : zodResolver(newCycleValidationSchema),
    defaultValues: {
      task: '',
      qtdMinutos: 0,
    }
  })

  function handleCreateNewCycle(data: newCycleFormat){
    console.log('oi')
  }
  const taskIsEmpty = watch('task')
  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
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