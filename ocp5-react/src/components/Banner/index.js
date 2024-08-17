function Banner({ title, src, classname}) {
	return  <>
		<div className="accueil">
		<img className={classname} src={src} alt={title}></img>
		<h1 className='titreAccueil'>{title}</h1>
		</div>
		
		</>	
}

export default Banner