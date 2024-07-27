    const form = document.querySelector('.block-form');
    const checkIn = document.getElementById('check-in');
    const checkOut = document.getElementById('check-out');
    const muchRooms = document.getElementById('much_rooms');

    function setError(formField, message) {
        const formControl = formField.parentElement;
        formControl.className = 'form-control error';
        formControl.querySelector('small').innerText = message;
    }

    function setSuccess(formField) {
        const formControl = formField.parentElement;
        formControl.className = 'form-control success';
    }

    function validateForm() {
        let isValid = true;

        [checkIn, checkOut, muchRooms].forEach(field => {
            if (field.value.trim() === '') {
                setError(field, 'Это поле обязательно для заполнения');
                isValid = false;
            } else {
                setSuccess(field);
            }
        });

        if (checkIn.value && checkOut.value) {
            const checkInDate = new Date(checkIn.value);
            const checkOutDate = new Date(checkOut.value);
            if (checkOutDate <= checkInDate) {
                setError(checkOut, 'Дата выезда должна быть позже даты заезда');
                isValid = false;
            } else {
                setSuccess(checkOut);
            }
        }

        const rooms = parseInt(muchRooms.value, 10);
        if (isNaN(rooms) || rooms < 1 || rooms > 5) {
            setError(muchRooms, 'Количество комнат должно быть от 1 до 5');
            isValid = false;
        } else {
            setSuccess(muchRooms);
        }

        return isValid;
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            form.submit();
        }
    });
