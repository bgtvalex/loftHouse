import IMask from 'imask';

function phone() {
	let phoneInput1 = document.querySelector("[data-tel-1]");
	let phoneInput2 = document.querySelector("[data-tel-2]");
	let btn1 = document.querySelector(".cta__btn");
	let btn2 = document.querySelector(".feedback__btn");

	const phoneMask1 = new IMask(phoneInput1, {
		mask: "+{7}(000)000-00-00",
	});
	const phoneMask2 = new IMask(phoneInput2, {
		mask: "+{7}(000)000-00-00",
	});

	phoneInput1.addEventListener("input", phoneInputHandler1);
	phoneInput2.addEventListener("input", phoneInputHandler2);

	btn1.addEventListener("click", btnHandler1);
	btn2.addEventListener("click", btnHandler2);

	function phoneInputHandler1() {
		if (phoneMask1.masked.isComplete) {
			btn1.classList.add("btn--active");
		} else {
			btn1.classList.remove("btn--active");
		}
	}
	function phoneInputHandler2() {
		if (phoneMask2.masked.isComplete) {
			btn2.classList.add("btn--active");
		} else {
			btn2.classList.remove("btn--active");
		}
	}

	async function btnHandler1(e) {
		e.preventDefault();
		return await fetch("send_msg.php", {
			method: "POST",
			body: phoneMask1.unmaskedValue,
		});
	}
	async function btnHandler2(e) {
		e.preventDefault();
		return await fetch("send_msg.php", {
			method: "POST",
			body: phoneMask2.unmaskedValue,
		});
	}
}

export default phone