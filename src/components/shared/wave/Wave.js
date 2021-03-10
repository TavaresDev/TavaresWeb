import React from "react"
import styles from "./Wave.module.css"

const Wave = () => {
	return (
		<div className={styles.root}>
			<svg viewbox='0 0 100 25'>
				<path fill='#9EAFFD' opacity='0.5' d='M0 30 V15 Q30 3 60 15 V30z' />
				<path fill='#9EAFFD' d='M0 30 V12 Q30 17 55 12 T100 11 V30z' />
			</svg>
		</div>
	)
}

export default Wave
