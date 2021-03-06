import { useEffect, useState } from "react"

export const SearchPanel = () => {
  const [param, setParam] = useState({
    name: '',
    personId: ''
  })
  const [users, setUsers] = useState([])
  const [list, setList] = useState([])

  // 获取接口项目列表的数据
  useEffect(() => {
    fetch('').then(async response => {
      if (response.ok) {
        setList(await response.json())
      }
    })
  }, [param])
  return <form action="">
    <div>
      <input type="text" value={param.name} onChange={evt => setParam({
        ...param,
        name: evt.target.value
      })} />
      <select name="" value={param.personId} onChange={evt => setParam({
        ...param,
        personId: evt.target.value
      })}>
        <option value={''}>负责人</option>
        {
          users.map(user => <option value={users.id}>{users.name}</option>)
        }
      </select>
    </div>
  </form>
}