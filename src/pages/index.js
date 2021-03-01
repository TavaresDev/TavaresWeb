import React from "react"
import Hero from "../components/Hero"
import AboutInfo from "../components/AboutInfo"
import Color from "../components/Color"
import AboutServices from "../components/about/AboutServices"
import Contact from "../components/contact/Contact"

import ComplexGrid from "../components/ComplexGrid"

export default function Index() {

	// const heroTitle= {<span > Tavares </span> Web Solutions }


	return (
		<>
			<Hero heroTitle={'web solutions'} subTitle={'Worry about your business, we make your'} />
			{/* <ComplexGrid/> */}

			{/* <Color/> */}
	
			<AboutServices/>
			<AboutInfo
				order={2}
				text1='here is some text about me company'
				text2='here is some text about me company'
				/>
			<AboutInfo
				bg='bgPrimary'
				text1='here is some text about me company'
				text2='here is some text about me company'
				/>
				<Contact/>
	
	
			{/* <Box my={4}>
				<Typography variant='h4' component='h1' gutterBottom>
					Next.js example Home Page
				</Typography>
			</Box> */}
		</>
	)
}
