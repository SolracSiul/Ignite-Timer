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
                  <Status statusColor="yellow">em andamento</Status>
                </td>
              </tr>
              <tr>
                <td>Tarefas</td>
                <td>20 minutos</td>
                <td>há 2 meses</td>
                <td>
                  <Status statusColor="red">interrompido</Status>
                </td>
              </tr>
              <tr>
                <td>Tarefas</td>
                <td>20 minutos</td>
                <td>há 2 meses</td>
                <td>
                  <Status statusColor="red">Concluido</Status>
                </td>
              </tr>
              <tr>
                <td>Tarefas</td>
                <td>20 minutos</td>
                <td>há 2 meses</td>
                <td>
                  <Status statusColor="red">Concluido</Status>
                </td>
              </tr>
              <tr>
                <td>Tarefas</td>
                <td>20 minutos</td>
                <td>há 2 meses</td>
                <td>
                  <Status statusColor="green">Concluido</Status>
                </td>
              </tr>
              <tr>
                <td>Tarefas</td>
                <td>20 minutos</td>
                <td>há 2 meses</td>
                <td>
                  <Status statusColor="yellow">Concluido</Status>
                </td>
              </tr>
            </tbody>
          </table>
        </HistoryList>

      </HistoryContainer>
  </>
}