import React from 'react'
import IconButton from  '../template/iconButton'

export default propos => {

    const renderRows = () => {
        const list = propos.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markeAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton hide={todo.done} style='success' icon='check' onClick={ () => propos.handleMarkAsDone(todo)}></IconButton>
                    <IconButton hide={!todo.done} style='warning' icon='undo' onClick={ () => propos.handleMarkAsPending(todo)}></IconButton>
                    <IconButton hide={!todo.done} style='danger' icon='trash-o' onClick={ () => propos.handleRemove(todo)}></IconButton>
                </td>
            </tr>
        ))
    }
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>

        </table>
    )
}