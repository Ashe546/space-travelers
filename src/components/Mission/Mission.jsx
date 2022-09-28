import React from 'react';
import styles from './Mission.module.css'

export default function Mission() {
  return (
<table className={styles.container}>
  <tr>
    <th>Mission</th>
    <th>Discription</th>
    <th>stutus</th>
    <td></td>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
    <td><button>HELLO</button></td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
    <td><button>HELLO</button></td>
  </tr>
</table>
  )
}
