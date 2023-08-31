(function applyDarkTheme() {

  const link = document.createElement('link');

  link.rel = 'stylesheet';

  link.href = 'https://axvghtygw97m.objectstorage.us-sanjose-1.oci.customer-oci.com/n/axvghtygw97m/b/YnVja2V0-20230811-2051/o/RWxpeGlyRGFya1RoZW1l.css';

  document.head.appendChild(link);
  
  document.getElementsByTagName('small')[0].setAttribute('style', 'color: powderblue'); 
  
  applyColorToClassElements('widget-title', 'powderblue');
  applyColorToClassElements('p', 'lightslategrey');
  applyColorToClassElements('k', 'aqua');
  applyColorToClassElements('mb', '#099');
  applyColorToClassElements('no', 'darkkhaki');
  applyColorToClassElements('gp', 'lavender');
  applyColorWithDifferentiator('n', 'orange', 'iex');
  applyColorWithDifferentiator('o', 'antiquewhite', 'o');

})();

function applyColorToClassElements(theClassName, theColor) {

  const theElements = document.getElementsByClassName(theClassName);
  Array.from(theElements).forEach(elem => elem.setAttribute('style', `color: ${theColor}`));
}

function applyColorWithDifferentiator(theClassName, theColor, differentiator) {

	const theElements = document.getElementsByClassName(theClassName);

	Array.from(theElements).forEach(elem => {
		if (elem.innerText === differentiator) {
			elem.setAttribute('style', 'color: #006600');
		} else {
			elem.setAttribute('style', `color: ${theColor}`);
		}
	});
}