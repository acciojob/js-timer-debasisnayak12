// write js code here if required
const timer = document.getElementById("timer");

setInterval(()=>{
	const instance = new Date();
	const date = `${instance.getDate()}/${instance.getMonth()}/${instance.getFullYear()}`;
	const time = `${instance.getHours()}:${instance.getMinutes()}:${instance.getSeconds()}`;
	timer.textContent = `${date}, ${time}`;
});
