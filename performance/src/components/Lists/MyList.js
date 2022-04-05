import {isEqual} from 'lodash'
import { memo } from 'react'

// const Li = memo(
//   ({ fullname }) => {
//     console.log(`renderizando ${fullname}`)
//     return (
//       <li>
//         {fullname}
//       </li>
//     )
//   }

// )

// const MyList = ({ data }) => {
//   console.log('renderizando lista')
//   return (
//     <ul>
//       {data.map(x =>
//         <Li
//           key={x.name + x.lastname}
//           fullname={`${x.name} ${x.lastname}`}
//         />
//       )}
//     </ul>
//   )
// }

const Li = memo(
  ({ children }) => {
    console.log(`renderizando ${children}`)
    return (
      <li>
        {children}
      </li>
    )
  }, isEqual) //Compara las propiedades anteriores y nuevas y ver si el contenido son iguales

const MyList = ({ data }) => {
  console.log('La renderizacion está lista')
  return (
    <ul>
      {data.map(x =>
        <Li
          key={x.name + x.lastname}>
            {x.name} {x.lastname}
          </Li>
      )}
    </ul>
  )
}

export default memo(MyList)
