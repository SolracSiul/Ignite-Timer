import { HistoryContainer , HistoryList, Status} from "./style";

export function History(){
  return <>
      <HistoryContainer>
        <h1>Meu Histórico</h1>
        <HistoryList>
          <table>
            <thead>
              <tr>
                <th>Tarefa</th>
                <th>Duração</th>
                <th>Início</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tarefas</td>
                <td>20 minutos</td>
                <td>há 2 meses</td>
                <td>
                  <Status sorak="yellow">Concluidos</Status>
                </td>
              </tr>
              <tr>
                <td>Tarefas</td>
                <td>20 minutos</td>
                <td>há 2 meses</td>
                <td>
                  <Status sorak="red">Concluidos</Status>
                </td>
              </tr>
              <tr>
                <td>Tarefas</td>
                <td>20 minutos</td>
                <td>há 2 meses</td>
                <td>
                  <Status sorak="red">Concluidos</Status>
                </td>
              </tr>
              <tr>
                <td>Tarefas</td>
                <td>20 minutos</td>
                <td>há 2 meses</td>
                <td>
                  <Status sorak="red">Concluidos</Status>
                </td>
              </tr>
              <tr>
                <td>Tarefas</td>
                <td>20 minutos</td>
                <td>há 2 meses</td>
                <td>
                  <Status sorak="green">Concluidos</Status>
                </td>
              </tr>
              <tr>
                <td>Tarefas</td>
                <td>20 minutos</td>
                <td>há 2 meses</td>
                <td>
                  <Status sorak="yellow">Concluidos</Status>
                </td>
              </tr>
            </tbody>
          </table>
        </HistoryList>

      </HistoryContainer>
  </>
}