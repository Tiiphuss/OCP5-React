function Banner({ title, src, classname}) {
	return  <>
		<div>
		<img className={classname} src={src} alt={title}></img>
		</div>
		<h1 className='titreAccueil'>{title}</h1>
		</>	
}

export default Banner